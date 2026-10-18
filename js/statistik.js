/* RailBase – Besucherzähler (GoatCounter) */
'use strict';

/* =====================================================================
   BESUCHERZÄHLER
   GoatCounter zählt Seitenaufrufe ohne Cookies. Die Zahlen sieht nur,
   wer sich bei goatcounter.com mit deinem Konto anmeldet.
   Statistik ansehen: https://hckd-rail.goatcounter.com (mit dem GoatCounter-Login).
   Leer lassen = kein Zähler.
   Eigene Besuche nicht zählen: auf jedem eigenen Gerät einmal
   https://railbase.ch/#toggle-goatcounter öffnen.
   Die Sprachen erscheinen getrennt: /re-460 (Deutsch), /fr/re-460, /it/re-460, /en/re-460.
   ===================================================================== */
const STATISTIK = {
  goatcounter: 'hckd-rail'
};

(() => {
  const code = STATISTIK.goatcounter.trim();
  // only on the real website: not on claude.ai, not on localhost, not from a file
  if (!/^[a-z0-9-]+$/i.test(code) || !/^https:$/.test(location.protocol) || /(^|\.)claude\.ai$|claudeusercontent|^localhost$|^127\./.test(location.hostname)) return;
  window.goatcounter = { no_onload: true };
  // one path per page: /re-460, /cargo, /impressum …; sections of the start page count as /start
  const pfad = () => {
    const id = decodeURIComponent(location.hash.slice(1)) || window.HCKD_START || 'start';
    return (LANG === 'de' ? '' : '/' + LANG) + '/' + (istSeite(id) ? id : 'start');
  };
  let last = '';
  const zaehle = () => {
    const p = pfad();
    if (p === last || !window.goatcounter || typeof window.goatcounter.count !== 'function') return;
    last = p;
    window.goatcounter.count({ path: p, title: document.title });
  };
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = 'https://' + code + '.goatcounter.com/count';
  s.addEventListener('load', () => setTimeout(zaehle, 0));
  document.head.appendChild(s);
  addEventListener('hashchange', () => setTimeout(zaehle, 0));

  // public total in the footer: needs «Allow adding visitor counts on your website» in the GoatCounter settings.
  // GoatCounter caches the number for up to 4 hours; if the setting is off, nothing is shown.
  const feld = $('#besuche');
  if (!feld) return;
  fetch('https://' + code + '.goatcounter.com/counter/TOTAL.json', { mode: 'cors' })
    .then(r => r.ok ? r.json() : null)
    .then(d => {
      const n = d && parseInt(String(d.count).replace(/\D/g, ''), 10);
      if (!n) return;
      feld.textContent = tr('{n} Besuche', { n: n.toLocaleString(LOCALE) });
      feld.hidden = false;
    })
    .catch(() => { /* no number, no display */ });
})();
