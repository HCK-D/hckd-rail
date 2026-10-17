/* HCKD RAIL – Fehler melden */
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
let rpCtx = { id: 'allgemein', name: 'HCKD RAIL allgemein' }, rpReturn = null;
const rpSay = (t, kind) => { rpMsg.textContent = t; rpMsg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };
function rpOpen(from) {
  const kind = from.dataset.report;
  rpCtx = kind === 'zug' && curZug ? { id: curZug.id, name: fullName(curZug) }
    : kind === 'kat' && curKat ? { id: curKat.id, name: curKat.name }
    : { id: 'allgemein', name: 'HCKD RAIL allgemein' };
  $('#rp-target').textContent = rpCtx.name;
  rpSay(''); rpSend.disabled = false; rpSend.textContent = 'Meldung senden';
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
    subject: 'HCKD RAIL – Fehlermeldung: ' + r.zielName,
    from_name: 'HCKD RAIL',
    Fahrzeug_oder_Seite: r.zielName,
    Art: r.art,
    Beschreibung: r.text,
    Kontakt: contact || '(keine Angabe)',
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
  if (text.length < 5) { rpSay('Bitte beschreibe kurz, was nicht stimmt.', 'err'); rpText.focus(); return; }
  if (rpLinks(text) + rpLinks(rpContact.value) > 1) { rpSay('Bitte höchstens einen Link angeben.', 'err'); rpText.focus(); return; }
  if (rpRecent().length >= RP_MAX) { rpSay('Du hast in kurzer Zeit schon mehrere Meldungen geschickt. Bitte warte ein paar Minuten. Danke!', 'err'); return; }
  // bots: hidden field filled in or sent right after opening. They see "sent", but nothing goes out
  const bot = rpTrap.checked || Date.now() - rpOpenedAt < RP_MIN_MS;
  rpSend.disabled = true; rpSend.textContent = 'Wird gesendet …'; rpSay('');
  const r = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7), at: new Date().toISOString(),
    ziel: rpCtx.id, zielName: rpCtx.name, art: rpKind.value, text: text.slice(0, 2000),
    kontakt: rpContact.value.trim().slice(0, 200), erledigt: false
  };
  const ok = bot || await sendMail(r) || await saveInStore(r);
  if (ok) {
    if (!bot) rpRemember();
    rpText.value = ''; rpContact.value = '';
    rpSend.textContent = 'Gesendet';
    rpSay('Danke! Deine Meldung ist angekommen und wird geprüft.', 'ok');
    setTimeout(() => { if (!rp.hidden) rpClose(); }, 1800);
  } else {
    rpSend.disabled = false; rpSend.textContent = 'Meldung senden';
    rpSay('Senden hat nicht geklappt. Bitte versuche es in einem Moment nochmals. Dein Text bleibt erhalten.', 'err');
  }
});
