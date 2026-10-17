/* HCKD RAIL – Besucherzähler (GoatCounter) */
'use strict';

/* =====================================================================
   BESUCHERZÄHLER
   GoatCounter zählt Seitenaufrufe ohne Cookies. Die Zahlen sieht nur,
   wer sich bei goatcounter.com mit deinem Konto anmeldet.
   Code hier eintragen: bei https://hckd-rail.goatcounter.com ist es 'hckd-rail'.
   Leer lassen = kein Zähler.
   Eigene Besuche nicht zählen: deine Website einmal mit #toggle-goatcounter am Ende öffnen
   (z. B. https://name.github.io/hckd-rail/#toggle-goatcounter), siehe ANLEITUNG-GITHUB.md
   ===================================================================== */
const STATISTIK = {
  goatcounter: ''
};

(() => {
  const code = STATISTIK.goatcounter.trim();
  // only on the real website: not on claude.ai, not on localhost, not from a file
  if (!/^[a-z0-9-]+$/i.test(code) || !/^https:$/.test(location.protocol) || /(^|\.)claude\.ai$|claudeusercontent|^localhost$|^127\./.test(location.hostname)) return;
  window.goatcounter = { no_onload: true };
  // one path per page: /re-460, /cargo, /impressum …; sections of the start page count as /start
  const pfad = () => {
    const id = decodeURIComponent(location.hash.slice(1)) || window.HCKD_START || 'start';
    return '/' + (istSeite(id) ? id : 'start');
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
})();
