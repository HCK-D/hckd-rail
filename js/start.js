/* RailBase – Start */
'use strict';

/* =====================================================================
   SANFTES EINBLENDEN: Überschriften, Kategorien und Kästen der Startseite
   gleiten beim Scrollen leicht herein (css/basis.css, .reveal). Ohne
   IntersectionObserver oder mit «Bewegung reduzieren» bleibt alles sofort
   sichtbar.
   ===================================================================== */
(() => {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const teile = $$('#v-home .sec-head, #v-home .kat-grid > li, #v-home .neu-box, #v-home .heute, #v-home .album');
  const io = new IntersectionObserver(eintraege => eintraege.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('sichtbar'); io.unobserve(e.target);
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('#v-home .kat-grid > li').forEach((li, i) => li.style.setProperty('--i', i));
  teile.forEach(el => { el.classList.add('reveal'); io.observe(el); });
  root.classList.add('anim');
})();

// start
route();

// built website: every page is its own file, so the hidden parts here (start page, other pages) never
// show. Their photos are removed: they do not load, and Google does not file them under this page
// (otherwise e.g. the Cargo category photo appeared in Google Images as «BCFe 4/6 Blauer Pfeil»).
if (window.HCKD_SEITEN) $$('.view[hidden] img, .view [data-seite][hidden] img').forEach(img => img.remove());
