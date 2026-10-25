/* RailBase – Hauptmenü oben (Fahrzeuge · Entdecken · Extras · Über RailBase) */
'use strict';

/* =====================================================================
   MENÜ: Auf breiten Bildschirmen steht es neben dem Logo, «Entdecken» und
   «Extras» klappen je eine Liste auf (immer nur eine offen). Auf schmalen
   Bildschirmen öffnet der Knopf mit den drei Strichen das ganze Menü unter
   dem Kopf, mit beiden Listen schon offen.
   ===================================================================== */
(() => {
  const nav = $('#topnav'), btn = $('#menu-btn'), dds = $$('.nav-dd', nav);
  const schmal = () => getComputedStyle(btn).display !== 'none';
  // position of each entry for the small opening animation (css/basis.css)
  dds.forEach(dd => $$('li', dd).forEach((li, i) => li.style.setProperty('--i', i)));
  const alleZu = () => dds.forEach(dd => { dd.open = false; });
  // while the phone menu is open the page behind does not scroll (Safari otherwise scrolls both and lags)
  const sperre = auf => document.documentElement.classList.toggle('menu-offen', auf);
  function zu() {
    nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false');
    alleZu(); sperre(false);
  }
  btn.addEventListener('click', () => {
    const auf = !nav.classList.contains('open');
    nav.classList.toggle('open', auf);
    btn.setAttribute('aria-expanded', String(auf));
    dds.forEach(dd => { dd.open = auf; }); // on small screens the lists are shown right away
    sperre(auf);
  });
  // wide screens: opening one list closes the other
  dds.forEach(dd => dd.addEventListener('toggle', () => {
    if (dd.open && !schmal()) dds.forEach(d => { if (d !== dd) d.open = false; });
  }));
  // a link was chosen, a click outside or Escape: close everything
  nav.addEventListener('click', e => { if (e.target.closest('a, [data-donate]')) zu(); });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) { if (schmal()) zu(); else alleZu(); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && (dds.some(d => d.open) || nav.classList.contains('open'))) { zu(); btn.focus(); } });
  addEventListener('hashchange', zu);
  addEventListener('resize', () => { if (!schmal() && nav.classList.contains('open')) zu(); });
})();
