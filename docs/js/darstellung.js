/* HCKD RAIL – Hell/Dunkel-Schalter */
'use strict';

/* =====================================================================
   DARSTELLUNG: automatisch (wie das Gerät) → hell → dunkel → automatisch
   Die Wahl bleibt im Browser (localStorage). Ein kleines Skript im <head>
   setzt sie schon beim Laden, damit die Seite nicht kurz hell aufblitzt.
   ===================================================================== */
(() => {
  const KEY = 'hckd-theme', btn = $('#theme-btn');
  const NAMEN = { auto: 'automatisch', light: 'hell', dark: 'dunkel' };
  const NEXT = { auto: 'light', light: 'dark', dark: 'auto' };
  const aktuell = () => root.getAttribute('data-theme') || 'auto';
  function setze(t) {
    if (t === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
    try { if (t === 'auto') localStorage.removeItem(KEY); else localStorage.setItem(KEY, t); } catch (e) { /* private window */ }
    zeige();
  }
  function zeige() {
    const t = aktuell(), label = 'Darstellung: ' + NAMEN[t] + ' (wechseln zu ' + NAMEN[NEXT[t]] + ')';
    btn.dataset.mode = t;
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }
  btn.addEventListener('click', () => setze(NEXT[aktuell()]));
  zeige();
})();
