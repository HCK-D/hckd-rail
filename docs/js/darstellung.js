/* RailBase – Hell/Dunkel-Schalter */
'use strict';

/* =====================================================================
   DARSTELLUNG: der Knopf wechselt nur zwischen hell und dunkel.
   Die Wahl bleibt im Browser (localStorage). Ein kleines Skript im <head>
   setzt sie schon beim Laden, damit die Seite nicht kurz hell aufblitzt;
   beim ersten Besuch übernimmt es einmal die Einstellung des Geräts.
   ===================================================================== */
(() => {
  const KEY = 'hckd-theme', btn = $('#theme-btn');
  const NAMEN = { light: tr('hell'), dark: tr('dunkel') };
  const NEXT = { light: 'dark', dark: 'light' };
  const aktuell = () => root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  function setze(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(KEY, t); } catch (e) { /* private window */ }
    zeige();
  }
  function zeige() {
    const t = aktuell(), label = tr('Darstellung: {jetzt} (wechseln zu {neu})', { jetzt: NAMEN[t], neu: NAMEN[NEXT[t]] });
    btn.dataset.mode = t;
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }
  btn.addEventListener('click', () => setze(NEXT[aktuell()]));
  zeige();
})();
