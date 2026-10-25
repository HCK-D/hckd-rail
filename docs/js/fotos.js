/* RailBase – Fotos einsenden */
'use strict';

/* =====================================================================
   FOTOS EINSENDEN
   Besucher laden ihre Fotos bei einem Dienst wie SwissTransfer hoch und
   schicken hier den Link. Die Nachricht geht wie «Fehler melden» über
   Web3Forms an die hinterlegte Adresse (Schlüssel in js/melden.js).
   Gleicher Spam-Schutz: verstecktes Feld, Mindestzeit, Limit, Link-Filter.
   ===================================================================== */
(() => {
  const dlg = $('#fotos'), form = $('#ft-form'), send = $('#ft-send'), msg = $('#ft-msg');
  const f = { link: $('#ft-link'), name: $('#ft-name'), mail: $('#ft-mail'), text: $('#ft-text'), ok: $('#ft-erlaubt'), trap: $('#ft-botcheck') };
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
    zurueck = btn; dlg.hidden = false; f.link.focus();
    offenSeit = Date.now();
  }
  function schliessen() { dlg.hidden = true; if (zurueck) zurueck.focus(); }
  document.addEventListener('click', e => { const b = e.target.closest('[data-fotos]'); if (b) oeffnen(b); });
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) schliessen(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dlg.hidden) schliessen(); });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const link = f.link.value.trim(), name = f.name.value.trim(), mail = f.mail.value.trim(), text = f.text.value.trim();
    if (!/^https?:\/\/\S+\.\S+/.test(link)) { say(tr('Bitte füge den Link zu deinen Fotos ein (beginnt mit https://).'), 'err'); f.link.focus(); return; }
    if (name.length < 2) { say(tr('Bitte gib den Namen an, der unter dem Foto stehen soll.'), 'err'); f.name.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { say(tr('Bitte gib eine E-Mail-Adresse für Rückfragen an.'), 'err'); f.mail.focus(); return; }
    if (!f.ok.checked) { say(tr('Bitte bestätige, dass du die Fotos selbst gemacht hast und sie gezeigt werden dürfen.'), 'err'); f.ok.focus(); return; }
    if (rpLinks(text) > 1) { say(tr('Bitte im Textfeld höchstens einen Link angeben.'), 'err'); f.text.focus(); return; }
    if (rpRecent().length >= RP_MAX) { say(tr('Du hast in kurzer Zeit schon mehrere Nachrichten geschickt. Bitte warte ein paar Minuten. Danke!'), 'err'); return; }
    const bot = f.trap.checked || Date.now() - offenSeit < RP_MIN_MS;
    send.disabled = true; send.textContent = tr('Wird gesendet …'); say('');
    let ok = bot;
    if (!ok && MELDEN.web3formsKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: MELDEN.web3formsKey,
            subject: 'RailBase – Fotos eingesendet: ' + ziel.name,
            from_name: 'RailBase', replyto: mail,
            Fahrzeug: ziel.name, Link_zu_den_Fotos: link, Fotograf: name, Kontakt: mail,
            Aufnahmeort_und_Datum: text || '(keine Angabe)',
            Erlaubnis: 'Ja: selbst fotografiert, Anzeige mit Namen erlaubt',
            Sprache: SPRACHEN[LANG],
            Seite: location.href.split('?')[0], botcheck: f.trap.checked
          })
        });
        const out = await res.json().catch(() => ({}));
        ok = !!(res.ok && out.success);
      } catch (err) { ok = false; }
    }
    if (!ok && !bot) ok = await saveInStore({ id: Date.now().toString(36), at: new Date().toISOString(), ziel: ziel.id, zielName: ziel.name, art: 'Fotos eingesendet', text: link + (text ? ' – ' + text : ''), kontakt: name + ' <' + mail + '>', erledigt: false });
    if (ok) {
      if (!bot) rpRemember();
      form.reset(); send.textContent = tr('Gesendet');
      say(tr('Danke! Wir schauen uns deine Fotos an und melden uns bei Fragen.'), 'ok');
      setTimeout(() => { if (!dlg.hidden) schliessen(); }, 2200);
    } else {
      send.disabled = false; send.textContent = tr('Fotos senden');
      say(tr('Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals.'), 'err');
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
