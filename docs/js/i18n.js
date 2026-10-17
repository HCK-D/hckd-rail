/* HCKD RAIL – Sprachen (Deutsch, Französisch, Italienisch, Englisch) */
'use strict';

/* =====================================================================
   SPRACHEN
   Deutsch ist der Grundtext: so steht es in index.html und im Code.
   Die Übersetzungen stehen in js/sprachen/fr.js, it.js und en.js, mit dem
   deutschen Text als Schlüssel. Fehlt eine Übersetzung, erscheint Deutsch.
   Diese Dateien werden aus dem Ordner sprachen/ zusammengesetzt
   (werkzeuge\sprachen-bauen.ps1, läuft auch beim Bauen der Website mit).
   Gewählt wird die Sprache oben rechts; die Wahl bleibt im Browser.
   Auf der fertigen Website hat jede Sprache eigene Seiten:
   re-460.html (Deutsch), re-460.fr.html, re-460.it.html, re-460.en.html
   ===================================================================== */
const SPRACHEN = { de: 'Deutsch', fr: 'Français', it: 'Italiano', en: 'English' };
const LOCALES = { de: 'de-CH', fr: 'fr-CH', it: 'it-CH', en: 'en-GB' };
const LANG_KEY = 'hckd-lang';
// address of a page in another language (built website); id '' = start page
function spracheUrl(l, id) {
  if (id == null) id = window.HCKD_START || '';
  const suf = l === 'de' ? '' : '.' + l;
  return id ? id + suf + '.html' : l === 'de' ? './' : 'index' + suf + '.html';
}
const LANG = (() => {
  const gilt = l => (l && Object.prototype.hasOwnProperty.call(SPRACHEN, l)) ? l : '';
  let gespeichert = '';
  try { gespeichert = gilt(localStorage.getItem(LANG_KEY)); } catch (e) { /* private window */ }
  if (window.HCKD_SEITEN) {
    // a built page has its own language; whoever chose another one gets that page
    const l = gilt(window.HCKD_LANG) || 'de';
    if (gespeichert && gespeichert !== l) location.replace(spracheUrl(gespeichert) + location.hash);
    return l;
  }
  let param = '';
  try { param = gilt(new URLSearchParams(location.search).get('lang')); } catch (e) { /* old browser */ }
  return param || gespeichert || 'de';
})();
const LOCALE = LOCALES[LANG];
document.documentElement.lang = LOCALE;

/* ---------- translations, filled by js/sprachen/xx.js ---------- */
const UEB = {};          // texts: German -> chosen language
const UEB_Z = {};        // vehicles by id: typ, beiname, text, kennzahlen, daten, specNote, abschnitte, bilder
const UEB_QUIZ = {};     // quiz questions per level, same order as js/daten/quiz.js
const UEB_EINSATZ = {};  // text under the map «Wo fährt er?» by id
function uebDict(o) { Object.assign(UEB, o); }
function uebZug(id, o) { UEB_Z[id] = o; }
function uebQuiz(level, list) { UEB_QUIZ[level] = list; }
function uebEinsatz(o) { Object.assign(UEB_EINSATZ, o); }
if (LANG !== 'de') document.write('<script src="js/sprachen/' + LANG + '.js"><\/script>');

// tr('Text') or tr('{n} Fahrzeuge', { n: 5 })
function tr(s, v) {
  let r = LANG !== 'de' && UEB[s] != null ? UEB[s] : s;
  if (v) r = String(r).replace(/\{(\w+)\}/g, (m, k) => (v[k] != null ? v[k] : m));
  return r;
}
// vehicle texts in the chosen language. The German data stays unchanged:
// search, sorting, comparison and the numbers keep working with it.
const zt = (z, f) => { const o = UEB_Z[z.id]; return o && o[f] != null ? o[f] : z[f]; };
const zd = (z, key) => {
  const v = z.daten[key];
  if (v == null || v === '') return v;
  const o = UEB_Z[z.id], r = o && o.daten && o.daten[key] != null ? o.daten[key] : tr(v);
  // English: decimal point instead of comma (18,5 m -> 18.5 m)
  return LANG === 'en' ? String(r).replace(/(\d),(\d)/g, '$1.$2') : r;
};
const zb = (z, i) => {
  const o = UEB_Z[z.id], b = (z.bilder || [])[i];
  return o && o.bilder && o.bilder[i] ? o.bilder[i] : (b && b.titel) || z.name;
};
// numbers like 26,4 (German and French with a decimal comma, as everywhere on the site)
const zahlText = (n, opt) => { const s = Number(n).toLocaleString(LOCALE, opt); return LANG === 'de' ? s.replace('.', ',') : s; };

/* ---------- fixed texts in index.html ----------
   Text pieces are replaced one by one; paragraphs with links or bold words as a
   whole (key = their HTML). Attributes: aria-label, placeholder, title, alt. */
function uebersetzeSeite() {
  if (LANG === 'de') return;
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const ATTR = ['aria-label', 'placeholder', 'title', 'alt', 'aria-roledescription'];
  const SVG = 'http://www.w3.org/2000/svg';
  const walk = el => {
    for (const a of ATTR) {
      const v = el.getAttribute(a);
      if (v) { const k = norm(v); if (UEB[k] != null) el.setAttribute(a, UEB[k]); }
    }
    // option texts are sent with a report: keep the German text as the value
    if (el.tagName === 'OPTION' && !el.hasAttribute('value')) el.setAttribute('value', el.textContent);
    if (el.namespaceURI === SVG && el.tagName !== 'svg') return;
    if (el.children.length && !el.querySelector('svg')) {
      const k = norm(el.innerHTML);
      if (UEB[k] != null) { el.innerHTML = UEB[k]; return; }
    }
    for (const n of Array.from(el.childNodes)) {
      if (n.nodeType === 3) {
        const k = norm(n.nodeValue);
        if (k && UEB[k] != null) { const m = n.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/); n.nodeValue = m[1] + UEB[k] + m[2]; }
      } else if (n.nodeType === 1 && n.tagName !== 'SCRIPT' && n.tagName !== 'STYLE') walk(n);
    }
  };
  walk(document.body);
}

/* ---------- language menu in the header ---------- */
(() => {
  const sel = document.getElementById('lang-sel');
  if (!sel) return;
  sel.value = LANG;
  sel.addEventListener('change', () => {
    const l = sel.value;
    let gemerkt = true;
    try { localStorage.setItem(LANG_KEY, l); } catch (e) { gemerkt = false; }
    if (window.HCKD_SEITEN) { location.href = spracheUrl(l) + location.hash; return; }
    const u = new URL(location.href);
    if (gemerkt && !u.searchParams.has('lang')) { location.reload(); return; }
    u.searchParams.set('lang', l);
    location.href = u.href;
  });
})();
