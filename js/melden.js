/* RailBase – Fehler melden */
'use strict';

/* =====================================================================
   FEHLER MELDEN
   Auf der eigenen Webseite (z. B. GitHub Pages) geht jede Meldung per Mail über
   Web3Forms an die Adresse, die beim Schlüssel hinterlegt ist. Die Adresse
   selbst steht nirgends im Code, nur der Zugangsschlüssel.
   Auf claude.ai sind Verbindungen nach aussen gesperrt; dort wird die Meldung
   stattdessen im Speicher der Seite abgelegt (meldungen/<person>).
   ===================================================================== */
const MELDEN = {
  // Zugangsschlüssel von web3forms.com hier eintragen, z. B. 'a1b2c3d4-…'
  web3formsKey: '8774c243-5e5d-4daf-ba50-6706f1cd4b94'
};

const capUse = name => {
  try { return window.claude && typeof window.claude.use === 'function' ? Promise.resolve(window.claude.use(name)).catch(() => null) : Promise.resolve(null); }
  catch (e) { return Promise.resolve(null); }
};
const rp = $('#report'), rpForm = $('#rp-form'), rpText = $('#rp-text'), rpKind = $('#rp-kind'), rpContact = $('#rp-contact'), rpMsg = $('#rp-msg'), rpSend = $('#rp-send'), rpTrap = $('#rp-botcheck');
let rpCtx = { id: 'allgemein', name: 'RailBase allgemein' }, rpReturn = null;
const rpSay = (t, kind) => { rpMsg.textContent = t; rpMsg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };
function rpOpen(from) {
  const kind = from.dataset.report;
  // name: German, for the mail; anzeige: in the chosen language, for the dialog
  rpCtx = kind === 'zug' && curZug ? { id: curZug.id, name: fullNameDe(curZug), anzeige: fullName(curZug) }
    : kind === 'kat' && curKat ? { id: curKat.id, name: curKat.name, anzeige: tr(curKat.name) }
    : { id: 'allgemein', name: 'RailBase allgemein', anzeige: tr('RailBase allgemein') };
  $('#rp-target').textContent = rpCtx.anzeige;
  rpSay(''); rpSend.disabled = false; rpSend.textContent = tr('Meldung senden');
  rpReturn = from; rp.hidden = false; rpText.focus();
  rpOpenedAt = Date.now();
}

/* ---------- spam protection ----------
   1. hidden field (rp-botcheck): only bots fill it in
   2. minimum time: nobody writes a report in under 3 seconds
   3. at most 3 reports per browser in 10 minutes
   4. at most one link per report: spam nearly always carries several */
let rpOpenedAt = 0;
const RP_MIN_MS = 3000, RP_MAX = 3, RP_WINDOW = 10 * 60 * 1000, RP_KEY = 'hckd-meldungen';
const rpRecent = () => {
  try { const a = JSON.parse(localStorage.getItem(RP_KEY) || '[]'); return Array.isArray(a) ? a.filter(t => Date.now() - t < RP_WINDOW) : []; }
  catch (e) { return []; }
};
const rpRemember = () => { try { localStorage.setItem(RP_KEY, JSON.stringify(rpRecent().concat(Date.now()))); } catch (e) { /* private window */ } };
const rpLinks = s => (String(s).match(/https?:\/\/|www\./gi) || []).length;
function rpClose() { rp.hidden = true; if (rpReturn) rpReturn.focus(); }
$$('[data-report]').forEach(b => b.addEventListener('click', () => rpOpen(b)));
rp.addEventListener('click', e => { if (e.target === rp || e.target.closest('[data-close]')) rpClose(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !rp.hidden) rpClose(); });

// 1) e-mail through Web3Forms (works on the own website)
async function sendMail(r) {
  if (!MELDEN.web3formsKey) return false;
  const contact = r.kontakt;
  const body = {
    access_key: MELDEN.web3formsKey,
    subject: 'RailBase – Fehlermeldung: ' + r.zielName,
    from_name: 'RailBase',
    Fahrzeug_oder_Seite: r.zielName,
    Art: r.art,
    Beschreibung: r.text,
    Kontakt: contact || '(keine Angabe)',
    Sprache: SPRACHEN[LANG],
    Seite: location.href.split('?')[0],
    botcheck: rpTrap.checked
  };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) body.replyto = contact;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body)
    });
    const out = await res.json().catch(() => ({}));
    return !!(res.ok && out.success);
  } catch (err) { return false; }
}
// 2) fallback on claude.ai: the page's own storage
async function saveInStore(r) {
  const [db, user] = await Promise.all([capUse('db'), capUse('user')]);
  const uid = user ? await user.id() : null;
  if (!db || !uid) return false;
  try {
    const ref = db.doc('meldungen/' + uid);
    const snap = await ref.get();
    const old = snap.exists && Array.isArray((snap.data() || {}).items) ? snap.data().items : [];
    await ref.set({ items: old.slice(-49).concat([r]), aktualisiert: new Date().toISOString() });
    return true;
  } catch (err) { return false; }
}

rpForm.addEventListener('submit', async e => {
  e.preventDefault();
  const text = rpText.value.trim();
  if (text.length < 5) { rpSay(tr('Bitte beschreibe kurz, was nicht stimmt.'), 'err'); rpText.focus(); return; }
  if (rpLinks(text) + rpLinks(rpContact.value) > 1) { rpSay(tr('Bitte höchstens einen Link angeben.'), 'err'); rpText.focus(); return; }
  if (rpRecent().length >= RP_MAX) { rpSay(tr('Du hast in kurzer Zeit schon mehrere Meldungen geschickt. Bitte warte ein paar Minuten. Danke!'), 'err'); return; }
  // bots: hidden field filled in or sent right after opening. They see "sent", but nothing goes out
  const bot = rpTrap.checked || Date.now() - rpOpenedAt < RP_MIN_MS;
  rpSend.disabled = true; rpSend.textContent = tr('Wird gesendet …'); rpSay('');
  const r = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7), at: new Date().toISOString(),
    ziel: rpCtx.id, zielName: rpCtx.name, art: rpKind.value, text: text.slice(0, 2000),
    kontakt: rpContact.value.trim().slice(0, 200), erledigt: false
  };
  const ok = bot || await sendMail(r) || await saveInStore(r);
  if (ok) {
    if (!bot) rpRemember();
    rpText.value = ''; rpContact.value = '';
    rpSend.textContent = tr('Gesendet');
    rpSay(tr('Danke! Deine Meldung ist angekommen und wird geprüft.'), 'ok');
    setTimeout(() => { if (!rp.hidden) rpClose(); }, 1800);
  } else {
    rpSend.disabled = false; rpSend.textContent = tr('Meldung senden');
    rpSay(tr('Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals. Dein Text bleibt erhalten.'), 'err');
  }
});

/* ---------- contact form (page #kontakt) ----------
   Same mailbox and spam protection as the reports; first name, name and e-mail
   address are required so we can answer. The timer starts when someone first types in the form. */
(() => {
  const form = $('#kt-form');
  if (!form) return;
  const vorname = $('#kt-vorname'), name = $('#kt-name'), mail = $('#kt-mail'), thema = $('#kt-thema'), text = $('#kt-text'), send = $('#kt-send'), msg = $('#kt-msg'), trap = $('#kt-botcheck');
  const say = (t, kind) => { msg.textContent = t; msg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };
  // buttons «Problem oder Bug melden» and «Idee oder Vorschlag»: choose that topic (a second click goes back);
  // for a bug a hint says what helps us to find the error
  const knoepfe = $$('.kt-bug[data-thema]', form), bugHinweis = $('#kt-bug-hinweis');
  const bugZeigen = () => {
    bugHinweis.hidden = thema.value !== 'Problem oder Bug';
    knoepfe.forEach(b => b.setAttribute('aria-pressed', String(thema.value === b.dataset.thema)));
  };
  thema.addEventListener('change', bugZeigen);
  form.addEventListener('reset', () => setTimeout(bugZeigen, 0));
  knoepfe.forEach(b => b.addEventListener('click', () => {
    thema.value = thema.value === b.dataset.thema ? thema.options[0].value : b.dataset.thema;
    bugZeigen();
    if (thema.value === b.dataset.thema) text.focus();
  }));
  let begonnen = 0;
  form.addEventListener('input', () => { if (!begonnen) begonnen = Date.now(); });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const vn = vorname.value.trim(), nn = name.value.trim(), adresse = mail.value.trim(), t = text.value.trim();
    [vorname, name, mail, text].forEach(f => f.removeAttribute('aria-invalid'));
    if (vn.length < 2) { say(tr('Bitte gib deinen Vornamen an.'), 'err'); vorname.setAttribute('aria-invalid', 'true'); vorname.focus(); return; }
    if (nn.length < 2) { say(tr('Bitte gib deinen Nachnamen an.'), 'err'); name.setAttribute('aria-invalid', 'true'); name.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(adresse)) { say(tr('Bitte gib deine E-Mail-Adresse an, damit wir dir antworten können.'), 'err'); mail.setAttribute('aria-invalid', 'true'); mail.focus(); return; }
    if (t.length < 10) { say(tr('Bitte schreib uns eine kurze Nachricht.'), 'err'); text.setAttribute('aria-invalid', 'true'); text.focus(); return; }
    if (rpLinks(t) + rpLinks(vn + ' ' + nn) > 1) { say(tr('Bitte höchstens einen Link angeben.'), 'err'); text.focus(); return; }
    if (rpRecent().length >= RP_MAX) { say(tr('Du hast in kurzer Zeit schon mehrere Meldungen geschickt. Bitte warte ein paar Minuten. Danke!'), 'err'); return; }
    // bots: hidden field filled in or sent right after the first keystroke. They see "sent", but nothing goes out
    const bot = trap.checked || !begonnen || Date.now() - begonnen < RP_MIN_MS;
    send.disabled = true; send.textContent = tr('Wird gesendet …'); say('');
    let ok = bot;
    if (!bot && MELDEN.web3formsKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: MELDEN.web3formsKey,
            subject: 'RailBase – Kontakt: ' + thema.value,
            from_name: (vn + ' ' + nn).slice(0, 120) + ' (RailBase Kontakt)',
            Vorname: vn.slice(0, 60),
            Nachname: nn.slice(0, 60),
            E_Mail: adresse.slice(0, 200),
            Thema: thema.value,
            Nachricht: t.slice(0, 3000),
            Sprache: SPRACHEN[LANG],
            replyto: adresse,
            botcheck: trap.checked
          })
        });
        const out = await res.json().catch(() => ({}));
        ok = !!(res.ok && out.success);
      } catch (err) { ok = false; }
    }
    if (ok) {
      if (!bot) rpRemember();
      form.reset(); begonnen = 0;
      send.textContent = tr('Gesendet');
      say(tr('Danke! Deine Nachricht ist angekommen. Wir melden uns per E-Mail.'), 'ok');
      setTimeout(() => { send.disabled = false; send.textContent = tr('Nachricht senden'); }, 4000);
    } else {
      send.disabled = false; send.textContent = tr('Nachricht senden');
      say(tr('Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals. Dein Text bleibt erhalten.'), 'err');
    }
  });
})();
