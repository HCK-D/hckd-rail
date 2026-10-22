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

/* ---------- Mitmachen zählen: einmal pro Browser ----------
   Wer das Quiz beendet oder die Sammlung beginnt, wird einmal als eigene
   «Seite» gezählt (/quiz-person, /sammlung-person …). Es geht nur die Tatsache
   an GoatCounter, keine Ergebnisse, Fahrzeuge oder Notizen. Welche Schritte
   schon gezählt sind, merkt sich der Browser unter hckd-gezaehlt.
   Die Zahlen zeigt das Admin-Fenster (admin.js, MITMACHEN). */
const ZAEHLER = { aktiv: false, bereit: false, offen: [] };
function zaehleEinmal(name, titel) {
  if (!ZAEHLER.aktiv) return;
  let fertig;
  // without storage we cannot tell whether this browser was counted already: then not at all
  try { fertig = JSON.parse(localStorage.getItem('hckd-gezaehlt') || '[]'); } catch (e) { return; }
  if (!Array.isArray(fertig) || fertig.includes(name)) return;
  if (!ZAEHLER.bereit) { if (!ZAEHLER.offen.some(o => o[0] === name)) ZAEHLER.offen.push([name, titel]); return; }
  window.goatcounter.count({ path: '/' + name, title: titel });
  try { localStorage.setItem('hckd-gezaehlt', JSON.stringify(fertig.concat(name))); } catch (e) { /* counted, but may count again */ }
}

(() => {
  const code = STATISTIK.goatcounter.trim();
  // only on the real website: not on claude.ai, not on localhost, not from a file
  if (!/^[a-z0-9-]+$/i.test(code) || !/^https:$/.test(location.protocol) || /(^|\.)claude\.ai$|claudeusercontent|^localhost$|^127\./.test(location.hostname)) return;
  ZAEHLER.aktiv = true;
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
  s.addEventListener('load', () => setTimeout(() => {
    zaehle();
    ZAEHLER.bereit = !!(window.goatcounter && typeof window.goatcounter.count === 'function');
    ZAEHLER.offen.splice(0).forEach(([n, t]) => zaehleEinmal(n, t));
  }, 0));
  document.head.appendChild(s);
  addEventListener('hashchange', () => setTimeout(zaehle, 0));
  // people who took part before this counter existed are counted on their next visit
  if (seenIds.length || sichtAnzahl()) zaehleEinmal('sammlung-person', 'Sammlung begonnen');
  if (sichtAnzahl()) zaehleEinmal('sichtung-person', 'Sichtung eingetragen');
  try { if (Object.keys(JSON.parse(localStorage.getItem('hckd-quiz-best') || '{}') || {}).length) zaehleEinmal('quiz-person', 'Quiz beendet'); } catch (e) { /* no storage */ }
  // the total number of visits is shown only in the admin window (admin.js), not in the footer
})();
