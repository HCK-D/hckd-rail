/* HCKD RAIL – Fotos einsenden */
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
  let ziel = { id: 'allgemein', name: 'HCKD RAIL allgemein' }, zurueck = null, offenSeit = 0;
  const say = (t, kind) => { msg.textContent = t; msg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };

  function oeffnen(btn) {
    // name: German, for the mail; anzeige: in the chosen language, for the dialog
    ziel = btn.dataset.fotos === 'zug' && curZug ? { id: curZug.id, name: fullNameDe(curZug), anzeige: fullName(curZug) }
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
            subject: 'HCKD RAIL – Fotos eingesendet: ' + ziel.name,
            from_name: 'HCKD RAIL', replyto: mail,
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
