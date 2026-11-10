/* RailBase – Fotos einsenden */
'use strict';

/* =====================================================================
   FOTOS EINSENDEN
   Besucher wählen ihre Fotos direkt hier aus (auch ohne Konto). Sie gehen in
   den privaten Speicher «fotos-eingang» bei Supabase; die Angaben dazu
   (Name, E-Mail, Erlaubnis mit Wortlaut) in die Tabelle foto_eingang
   (werkzeuge/datenbank-webseite.sql). Ansehen und löschen kann sie nur der
   Admin (Admin-Fenster, «Eingesandte Fotos»). Zusätzlich geht wie bei
   «Fehler melden» ein Hinweis über Web3Forms ans Postfach, ohne die Fotos.
   Vor dem Hochladen entfernt der Browser den Standort (GPS) und XMP-Daten,
   ohne das Bild neu zu rechnen (Qualität bleibt gleich).
   Spam-Schutz: verstecktes Feld, Mindestzeit, Limit; in der Datenbank
   Grenzen für Grösse, Anzahl und Fotos pro Stunde.
   ===================================================================== */
const FOTO_EINGANG = { ordner: 'fotos-eingang', max: 5, maxBytes: 25 * 1024 * 1024 };

/* Standort und XMP aus den Fotodaten entfernen. Gibt ein Blob zurück, das Bild selbst bleibt unverändert.
   JPG: GPS-Angaben im EXIF werden mit Nullen überschrieben, XMP-Blöcke geleert.
   PNG und WebP: EXIF- und XMP-Blöcke werden ganz weggelassen. */
async function fotoOhneStandort(datei) {
  const buf = await datei.arrayBuffer();
  const b = new Uint8Array(buf), v = new DataView(buf);
  const text = (o, n) => String.fromCharCode(...b.subarray(o, o + n));
  // TIFF-Daten (EXIF) ab Position start: GPS-Verzeichnis leeren
  const gpsWeg = (start, ende) => {
    if (start + 8 > ende) return;
    const le = b[start] === 0x49;
    const u16 = o => v.getUint16(o, le), u32 = o => v.getUint32(o, le);
    if (u16(start + 2) !== 42) return;
    const ifd0 = start + u32(start + 4);
    if (ifd0 + 2 > ende) return;
    const GROESSE = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8];
    for (let i = 0, n = u16(ifd0); i < n; i++) {
      const e = ifd0 + 2 + i * 12;
      if (e + 12 > ende) return;
      if (u16(e) !== 0x8825) continue;
      const gps = start + u32(e + 8);
      if (gps + 2 > ende) return;
      const m = u16(gps);
      for (let k = 0; k < m; k++) {
        const g = gps + 2 + k * 12;
        if (g + 12 > ende) break;
        const len = (GROESSE[u16(g + 2)] || 1) * u32(g + 4);
        if (len > 4) { const d = start + u32(g + 8); if (d >= start && d + len <= ende) b.fill(0, d, d + len); }
        b.fill(0, g, g + 12);
      }
      v.setUint16(gps, 0, le); // leeres GPS-Verzeichnis
    }
  };
  const typ = datei.type;
  if (typ === 'image/jpeg' && b[0] === 0xFF && b[1] === 0xD8) {
    let o = 2;
    while (o + 4 <= b.length && b[o] === 0xFF) {
      const mk = b[o + 1];
      if (mk === 0xFF) { o++; continue; }
      if (mk === 0x01 || (mk >= 0xD0 && mk <= 0xD7)) { o += 2; continue; }
      if (mk === 0xDA || mk === 0xD9) break; // ab hier Bilddaten
      const len = v.getUint16(o + 2), d = o + 4, ende = Math.min(b.length, o + 2 + len);
      if (mk === 0xE1) {
        if (text(d, 6) === 'Exif\0\0') gpsWeg(d + 6, ende);
        else b.fill(0x20, d, ende); // XMP: leeren
      }
      o += 2 + len;
    }
    return new Blob([b], { type: typ });
  }
  if (typ === 'image/png' && text(1, 3) === 'PNG') {
    const teile = [b.subarray(0, 8)];
    for (let o = 8; o + 12 <= b.length;) {
      const len = v.getUint32(o), art = text(o + 4, 4), ende = o + 12 + len;
      if (!['eXIf', 'iTXt', 'tEXt', 'zTXt'].includes(art)) teile.push(b.subarray(o, Math.min(ende, b.length)));
      o = ende;
    }
    return new Blob(teile, { type: typ });
  }
  if (typ === 'image/webp' && text(0, 4) === 'RIFF' && text(8, 4) === 'WEBP') {
    const teile = [];
    let summe = 4;
    for (let o = 12; o + 8 <= b.length;) {
      const art = text(o, 4), len = v.getUint32(o + 4, true), ende = o + 8 + len + (len & 1);
      if (art !== 'EXIF' && art !== 'XMP ') {
        const stueck = b.slice(o, Math.min(ende, b.length));
        if (art === 'VP8X' && stueck.length > 8) stueck[8] &= ~0x0C; // Merker «hat EXIF/XMP» löschen
        teile.push(stueck); summe += stueck.length;
      }
      o = ende;
    }
    const kopf = new Uint8Array(12);
    kopf.set(b.subarray(0, 12));
    new DataView(kopf.buffer).setUint32(4, summe, true);
    return new Blob([kopf, ...teile], { type: typ });
  }
  return datei;
}

(() => {
  const dlg = $('#fotos'), form = $('#ft-form'), send = $('#ft-send'), msg = $('#ft-msg');
  const f = { dateien: $('#ft-dateien'), auswahl: $('#ft-auswahl'), name: $('#ft-name'), mail: $('#ft-mail'), text: $('#ft-text'), ok: $('#ft-erlaubt'), personen: $('#ft-personen'), legends: $('#ft-legends'), social: $('#ft-social'), trap: $('#ft-botcheck') };
  const ENDUNG = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
  const mb = n => n < 1024 * 1024 ? Math.max(1, Math.round(n / 1024)) + ' KB' : (n / 1024 / 1024).toLocaleString(LOCALE, { maximumFractionDigits: 1 }) + ' MB';
  let vorschau = [];
  // gewählte Fotos mit kleinem Vorschaubild anzeigen
  function zeigeAuswahl() {
    vorschau.forEach(u => URL.revokeObjectURL(u)); vorschau = [];
    const liste = [...f.dateien.files];
    f.auswahl.hidden = !liste.length;
    f.auswahl.innerHTML = liste.map((d, i) => {
      const ok = ENDUNG[d.type] && d.size <= FOTO_EINGANG.maxBytes && i < FOTO_EINGANG.max;
      const url = ENDUNG[d.type] ? URL.createObjectURL(d) : '';
      if (url) vorschau.push(url);
      return `<li${ok ? '' : ' class="zu-gross"'}>${url ? `<img src="${url}" alt="">` : ''}<span>${esc(d.name)} · ${esc(mb(d.size))}${ok ? '' : ' – ' + esc(tr('wird nicht gesendet'))}</span></li>`;
    }).join('');
  }
  f.dateien.addEventListener('change', zeigeAuswahl);
  // Erlaubnis nachvollziehbar festhalten: Version und genauer Wortlaut (immer der deutsche Text) gehen mit dem Mail mit.
  // Wird der Text geändert, die Version erhöhen. Ältere Erlaubnisse gelten nur im damaligen Umfang.
  const ERLAUBNIS_VERSION = 'Fotoerlaubnis Version 2 vom 10.11.2026';
  const ERLAUBNIS = {
    website: 'Ich habe die Fotos selbst gemacht. Ich erlaube RailBase, sie mit meinem Namen auf railbase.ch zu zeigen: auf den Fahrzeugseiten, in den PDF-Steckbriefen und in den Vorschaubildern beim Teilen eines Links, dafür auch verkleinert oder zugeschnitten.',
    personen: 'Auf den Fotos sind keine Personen erkennbar, oder sie sind mit der Veröffentlichung einverstanden.',
    legends: 'Die Fotos dürfen auch auf Sammelkarten im Spiel RailBase Legends verwendet werden, mit meinem Namen.',
    social: 'Die Fotos dürfen auch in Beiträgen von RailBase auf Instagram und in Werbung für RailBase verwendet werden, mit meinem Namen.'
  };
  let ziel = { id: 'allgemein', name: 'RailBase allgemein' }, zurueck = null, offenSeit = 0;
  const say = (t, kind) => { msg.textContent = t; msg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };

  function oeffnen(btn) {
    // name: German, for the mail; anzeige: in the chosen language, for the dialog
    // data-fotos="zug": the vehicle of this page; a vehicle id (page «Fotos gesucht»): that vehicle
    const z = btn.dataset.fotos === 'zug' ? curZug : zugOf(btn.dataset.fotos);
    ziel = z ? { id: z.id, name: fullNameDe(z), anzeige: fullName(z) }
      : { id: 'allgemein', name: 'beliebiges Fahrzeug (bitte unten angeben)', anzeige: tr('beliebiges Fahrzeug (bitte unten angeben)') };
    $('#ft-target').textContent = ziel.anzeige;
    say(''); send.disabled = false; send.textContent = tr('Fotos senden');
    zurueck = btn; dlg.hidden = false; f.dateien.focus();
    offenSeit = Date.now();
  }
  function schliessen() { dlg.hidden = true; if (zurueck) zurueck.focus(); }
  document.addEventListener('click', e => { const b = e.target.closest('[data-fotos]'); if (b) oeffnen(b); });
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) schliessen(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dlg.hidden) schliessen(); });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name = f.name.value.trim(), mail = f.mail.value.trim(), text = f.text.value.trim();
    const alle = [...f.dateien.files];
    if (!alle.length) { say(tr('Bitte wähle mindestens ein Foto aus.'), 'err'); f.dateien.focus(); return; }
    if (alle.length > FOTO_EINGANG.max) { say(tr('Bitte wähle höchstens 5 Fotos aus.'), 'err'); f.dateien.focus(); return; }
    if (alle.some(d => !ENDUNG[d.type])) { say(tr('Bitte nur Fotos im Format JPG, PNG oder WebP auswählen.'), 'err'); f.dateien.focus(); return; }
    if (alle.some(d => d.size > FOTO_EINGANG.maxBytes)) { say(tr('Ein Foto ist grösser als 25 MB. Bitte wähle eine kleinere Version.'), 'err'); f.dateien.focus(); return; }
    if (name.length < 2) { say(tr('Bitte gib den Namen an, der unter dem Foto stehen soll.'), 'err'); f.name.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { say(tr('Bitte gib eine E-Mail-Adresse für Rückfragen an.'), 'err'); f.mail.focus(); return; }
    if (!f.ok.checked) { say(tr('Bitte bestätige, dass du die Fotos selbst gemacht hast und sie gezeigt werden dürfen.'), 'err'); f.ok.focus(); return; }
    if (!f.personen.checked) { say(tr('Bitte bestätige, dass keine Personen erkennbar sind oder sie einverstanden sind.'), 'err'); f.personen.focus(); return; }
    if (rpLinks(text) > 1) { say(tr('Bitte im Textfeld höchstens einen Link angeben.'), 'err'); f.text.focus(); return; }
    if (rpRecent().length >= RP_MAX) { say(tr('Du hast in kurzer Zeit schon mehrere Nachrichten geschickt. Bitte warte ein paar Minuten. Danke!'), 'err'); return; }
    const bot = f.trap.checked || Date.now() - offenSeit < RP_MIN_MS;
    send.disabled = true; send.textContent = tr('Wird gesendet …'); say('');
    const zeitpunkt = new Date().toISOString();
    const erlaubnis = {
      version: ERLAUBNIS_VERSION, zeitpunkt,
      website: 'Ja – ' + ERLAUBNIS.website,
      personen: 'Ja – ' + ERLAUBNIS.personen,
      legends: (f.legends.checked ? 'Ja – ' : 'Nein (nicht angekreuzt) – ') + ERLAUBNIS.legends,
      social: (f.social.checked ? 'Ja – ' : 'Nein (nicht angekreuzt) – ') + ERLAUBNIS.social
    };
    let ok = bot, fehler = '';
    if (!bot) {
      try {
        const db = await window.kontoVerbindung();
        const id = crypto.randomUUID ? crypto.randomUUID() : '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        const dateien = [];
        for (let i = 0; i < alle.length; i++) {
          say(tr('Foto {n} von {m} wird hochgeladen …', { n: i + 1, m: alle.length }));
          const pfad = id + '/' + (i + 1) + '.' + ENDUNG[alle[i].type];
          const { error } = await db.storage.from(FOTO_EINGANG.ordner).upload(pfad, await fotoOhneStandort(alle[i]), { contentType: alle[i].type, upsert: false });
          if (error) throw error;
          dateien.push(pfad);
        }
        const { error } = await db.from('foto_eingang').insert({
          id, fahrzeug_id: ziel.id, fahrzeug: ziel.name, fotograf: name, email: mail, ort_datum: text,
          dateien, erlaubnis, legends: f.legends.checked, social: f.social.checked, sprache: LANG
        });
        if (error) throw error;
        ok = true;
        // Hinweis ans Postfach (ohne Fotos); klappt das nicht, sind die Fotos trotzdem angekommen
        if (MELDEN.web3formsKey) {
          fetch('https://api.web3forms.com/submit', {
            method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: MELDEN.web3formsKey,
              subject: 'RailBase – Fotos eingesendet: ' + ziel.name,
              from_name: 'RailBase', replyto: mail,
              Fahrzeug: ziel.name,
              Fotos: dateien.length + ' Foto(s), im Admin-Fenster unter «Eingesandte Fotos» (Eingang ' + id.slice(0, 8) + ')',
              Fotograf: name, Kontakt: mail,
              Aufnahmeort_und_Datum: text || '(keine Angabe)',
              Erlaubnis_Version: ERLAUBNIS_VERSION,
              Erlaubnis_Zeitpunkt: zeitpunkt,
              Erlaubnis_Website: erlaubnis.website,
              Erlaubnis_Personen: erlaubnis.personen,
              Erlaubnis_Legends: erlaubnis.legends,
              Erlaubnis_Instagram_Werbung: erlaubnis.social,
              Sprache: SPRACHEN[LANG],
              Seite: location.href.split('?')[0], botcheck: false
            })
          }).catch(() => { /* Fotos sind gespeichert */ });
        }
      } catch (err) {
        ok = false;
        // Grenze erreicht (Speicher voll oder zu viele Fotos in der letzten Stunde): Die Datenbank lehnt ab
        fehler = /row-level security|violates|Unauthorized|403/i.test(String(err && (err.message || err.statusCode))) ? 'voll' : '';
      }
    }
    if (ok) {
      if (!bot) rpRemember();
      form.reset(); zeigeAuswahl(); send.textContent = tr('Gesendet');
      say(tr('Danke! Wir schauen uns deine Fotos an und melden uns bei Fragen.'), 'ok');
      setTimeout(() => { if (!dlg.hidden) schliessen(); }, 2200);
    } else {
      send.disabled = false; send.textContent = tr('Fotos senden');
      say(fehler === 'voll'
        ? tr('Gerade können keine Fotos angenommen werden. Bitte versuche es später nochmals oder schreib uns über das Kontaktformular.')
        : tr('Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals.'), 'err');
    }
  });
})();

/* =====================================================================
   FOTOS GESUCHT (Seite unter «Extras»): alle Fahrzeuge und Wagen ohne Foto,
   nach Bahn und Kategorie, je mit Knopf «Foto einsenden» für genau dieses
   Fahrzeug. Die Liste entsteht aus den Daten und bleibt so immer aktuell.
   ===================================================================== */
(() => {
  const box = $('#fg-liste');
  if (!box) return;
  const ohne = ZUEGE.filter(z => !(z.bilder && z.bilder.length));
  $('#fg-anzahl').textContent = tr(ohne.length === 1 ? 'Noch {n} Fahrzeug ohne Foto' : 'Noch {n} Fahrzeuge ohne Foto', { n: ohne.length });
  box.innerHTML = BAHNEN.flatMap(b => KATS.map(k => {
    const zz = ohne.filter(z => bahnOf(z) === b.id && z.kat === k.id).sort(SORT.name);
    return zz.length ? `<section class="fg-gruppe"><h2>${esc(tr(b.name))} · ${esc(tr(k.name))} <small>${zz.length}</small></h2><ul>${zz.map(z => `<li>
      <a class="fg-pic" href="#${z.id}" tabindex="-1" aria-hidden="true">${art(z)}</a>
      <span class="fg-txt"><a href="#${z.id}"><b>${esc(zn(z))}</b>${zt(z, 'beiname') ? ` <small>«${esc(zt(z, 'beiname'))}»</small>` : ''}</a><span>${esc(zt(z, 'typ'))}</span></span>
      <button class="report-btn" type="button" data-fotos="${z.id}" aria-haspopup="dialog">${esc(tr('Foto einsenden'))}</button></li>`).join('')}</ul></section>` : '';
  })).join('') || `<p class="sam-hint">${esc(tr('Alle Fahrzeuge haben Fotos. Danke allen Fotografinnen und Fotografen!'))}</p>`;
})();
