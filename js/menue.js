/* HCKD RAIL – Hauptmenü oben (Fahrzeuge · Entdecken · Vergleich · Über HCKD) */
'use strict';

/* =====================================================================
   MENÜ: Auf breiten Bildschirmen steht es neben dem Logo, «Entdecken»
   klappt eine Liste auf. Auf schmalen Bildschirmen öffnet der Knopf mit
   den drei Strichen das ganze Menü unter dem Kopf.
   ===================================================================== */
(() => {
  const nav = $('#topnav'), btn = $('#menu-btn'), dd = $('.nav-dd', nav);
  const schmal = () => getComputedStyle(btn).display !== 'none';
  function zu() {
    nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false');
    dd.open = false;
  }
  btn.addEventListener('click', () => {
    const auf = !nav.classList.contains('open');
    nav.classList.toggle('open', auf);
    btn.setAttribute('aria-expanded', String(auf));
    dd.open = auf; // on small screens the list under «Entdecken» is shown right away
  });
  // a link was chosen, a click outside or Escape: close everything
  nav.addEventListener('click', e => { if (e.target.closest('a')) zu(); });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) { if (schmal()) zu(); else dd.open = false; }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && (dd.open || nav.classList.contains('open'))) { zu(); btn.focus(); } });
  addEventListener('hashchange', zu);
  addEventListener('resize', () => { if (!schmal() && nav.classList.contains('open')) zu(); });
})();
