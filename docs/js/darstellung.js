/* RailBase – Darstellung hell oder dunkel */
'use strict';

/* =====================================================================
   DARSTELLUNG: Auswahl auf der Seite «Mein Konto» (#konto, Karte «Darstellung»):
   Hell, Dunkel oder wie das Gerät. Die Wahl bleibt im Browser (localStorage,
   hckd-theme; «wie das Gerät» = kein Eintrag). Ein kleines Skript im <head>
   setzt sie schon beim Laden, damit die Seite nicht kurz hell aufblitzt.
   ===================================================================== */
(() => {
  const KEY = 'hckd-theme', wahl = $('#kt-darst');
  if (!wahl) return;
  const geraet = matchMedia('(prefers-color-scheme: dark)');
  const gewaehlt = () => { try { const t = localStorage.getItem(KEY); return t === 'light' || t === 'dark' ? t : 'auto'; } catch (e) { return 'auto'; } };
  function setze(t) {
    try { if (t === 'auto') localStorage.removeItem(KEY); else localStorage.setItem(KEY, t); } catch (e) { /* private window */ }
    anwenden();
  }
  function anwenden() {
    const t = gewaehlt();
    root.setAttribute('data-theme', t === 'auto' ? (geraet.matches ? 'dark' : 'light') : t);
    $$('[data-darst]', wahl).forEach(b => b.setAttribute('aria-checked', String(b.dataset.darst === t)));
  }
  wahl.addEventListener('click', e => { const b = e.target.closest('[data-darst]'); if (b) setze(b.dataset.darst); });
  // «wie das Gerät»: folgt dem Gerät, auch wenn es abends auf dunkel wechselt
  geraet.addEventListener('change', () => { if (gewaehlt() === 'auto') anwenden(); });
  anwenden();
})();
