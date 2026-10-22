/* RailBase – Spenden */
'use strict';

/* =====================================================================
   SPENDEN
   Angaben hier eintragen, z. B. twint: '079 123 45 67' (TWINT-Nummer) und/oder iban: 'CH12 …'.
   Solange beide leer sind, ist der Spenden-Knopf auf der ganzen Seite ausgeblendet.
   SPENDEN_AN: false blendet alles zum Spenden aus (Knöpfe und Abschnitt in der
   Datenschutzerklärung), die Angaben bleiben erhalten. Wieder einschalten: true.
   ===================================================================== */
const SPENDEN_AN = false;
// empfaenger: genau der Name, auf den das Konto lautet (Banken vergleichen Name und IBAN).
// Er steht hier verschlüsselt (Base64), damit Suchmaschinen und Sammelprogramme ihn nicht einfach im Quelltext finden,
// und erscheint im Spenden-Fenster erst nach einem Klick auf «Namen anzeigen». Neuer Name: btoa('Vorname Nachname') im Browser.
const SPENDE = { empfaengerB64: 'S2V2aW4gS291YXNtaQ==', iban: 'CH34 0618 6560 0743 8090 2', twint: '' };
SPENDE.empfaenger = (() => { try { return decodeURIComponent(escape(atob(SPENDE.empfaengerB64))); } catch (e) { return ''; } })();
let dnNameSichtbar = false;
if (!SPENDEN_AN || (!SPENDE.iban && !SPENDE.twint)) {
  $$('[data-spenden-info]').forEach(el => { el.hidden = true; });
  $$('[data-donate]').forEach(b => {
    // also remove the « · » in front of the button in the footer
    const vor = b.previousSibling;
    if (vor && vor.nodeType === 3 && vor.textContent.trim() === '·') vor.remove();
    b.hidden = true;
  });
}
const dn = $('#donate'), dnAmounts = $('#dn-amounts'), dnBank = $('#dn-bank');
// suggested amounts plus a field for any amount; without an amount the reference is just «Spende RailBase»
let dnAmt = 20, dnReturn = null;
dnAmounts.innerHTML = [5, 10, 20, 50].map(a => `<button class="amt" type="button" role="radio" aria-checked="${a === dnAmt}" data-a="${a}">CHF ${a}</button>`).join('')
  + `<label class="amt-eigen"><span>${esc(tr('Eigener Betrag'))}</span><span class="amt-feld"><b>CHF</b><input id="dn-eigen" type="text" inputmode="decimal" autocomplete="off" maxlength="8" placeholder="${esc(tr('z. B. 15'))}"></span></label>`;
const dnEigen = $('#dn-eigen');
const chf = n => Number.isInteger(n) ? String(n) : n.toFixed(2);
const dnRef = () => 'Spende RailBase' + (dnAmt ? ' · CHF ' + chf(dnAmt) : '');
dnEigen.addEventListener('input', () => {
  const n = parseFloat(dnEigen.value.replace(',', '.').replace(/[^\d.]/g, ''));
  dnAmt = n > 0 && n < 100000 ? Math.round(n * 100) / 100 : 0;
  dnRender();
});
function dnRender() {
  const eigen = dnEigen.value.trim() !== '';
  $$('.amt', dnAmounts).forEach(b => b.setAttribute('aria-checked', !eigen && +b.dataset.a === dnAmt ? 'true' : 'false'));
  const ref = dnRef();
  const row = (lbl, val, key) => `<div class="bank-row"><div><small>${esc(tr(lbl))}</small><b class="${val ? '' : 'tbd'}">${val ? esc(val) : esc(tr('wird ergänzt'))}</b></div><button class="copy" type="button" data-copy="${key}" ${val ? '' : 'disabled'}>${esc(tr('Kopieren'))}</button></div>`;
  // the name only appears after a click on «Namen anzeigen»
  const name = dnNameSichtbar ? row('Empfänger', SPENDE.empfaenger, 'empfaenger')
    : `<div class="bank-row"><div><small>${esc(tr('Empfänger'))}</small><button class="name-zeigen" type="button" data-name-zeigen>${esc(tr('Namen anzeigen'))}</button></div><button class="copy" type="button" disabled>${esc(tr('Kopieren'))}</button></div>`;
  dnBank.innerHTML = name +(SPENDE.twint ? row('TWINT', SPENDE.twint, 'twint') : '') + (SPENDE.iban ? row('IBAN', SPENDE.iban, 'iban') : '') + row('Mitteilung', ref, 'ref');
  $('#dn-note').textContent = tr('Bitte gib die Mitteilung bei der Zahlung an. Vielen Dank!');
}
function dnOpen(from) { dnReturn = from; dnRender(); dn.hidden = false; $('.dlg-x', dn).focus(); }
function dnClose() { dn.hidden = true; dnNameSichtbar = false; if (dnReturn) dnReturn.focus(); }
$$('[data-donate]').forEach(b => b.addEventListener('click', () => dnOpen(b)));
dn.addEventListener('click', e => {
  if (e.target === dn || e.target.closest('[data-close]')) return dnClose();
  const a = e.target.closest('.amt'); if (a) { dnAmt = +a.dataset.a; dnEigen.value = ''; dnRender(); return; }
  if (e.target.closest('[data-name-zeigen]')) { dnNameSichtbar = true; dnRender(); const c = $('[data-copy="empfaenger"]', dnBank); if (c) c.focus(); return; }
  const cp = e.target.closest('[data-copy]');
  if (cp) {
    // the IBAN is copied without spaces, so every banking app accepts it
    const k = cp.dataset.copy, val = k === 'ref' ? dnRef() :k === 'iban' ? SPENDE.iban.replace(/\s/g, '') : SPENDE[k];
    const done = () => { cp.textContent = tr('Kopiert'); setTimeout(() => { cp.textContent = tr('Kopieren'); }, 1400); };
    const sel = () => { const r = document.createRange(); r.selectNodeContents(cp.previousElementSibling.querySelector('b')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    try { navigator.clipboard.writeText(val).then(done, sel); } catch (err) { sel(); }
  }
});
document.addEventListener('keydown', e => { if (!dn.hidden && e.key === 'Escape') dnClose(); });
