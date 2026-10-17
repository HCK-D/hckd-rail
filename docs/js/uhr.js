/* HCKD RAIL – Bahnhofsuhr in der Kopfzeile */
'use strict';

/* =====================================================================
   UHR (wie HCKD Gleisbau)
   ===================================================================== */
(() => {
  let t = '';
  // small header clock: twelve bold hour bars, readable at 38 px
  for (let i = 0; i < 12; i++) t += `<rect x="95" y="14" width="10" height="${i % 3 ? 18 : 24}" fill="#202326" transform="rotate(${i * 30} 100 100)"/>`;
  $('#clock-ticks').innerHTML = t;
})();
const hHour = $('#h-hour'), hMin = $('#h-min'), hSec = $('#h-sec'), clockSvg = $('#clock');
const clockTime = $('#clock-time'), clockDate = $('#clock-date');
let zOff = null, zOffAt = 0, lastSecShown = -1, lastMinShown = -1, clockRaf = 0, clockVisible = true;
function calcOffset() {
  const now = new Date();
  try {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Zurich', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).formatToParts(now);
    const g = k => +parts.find(p => p.type === k).value;
    const wall = Date.UTC(g('year'), g('month') - 1, g('day'), g('hour') % 24, g('minute'), g('second'));
    zOff = wall - (now.getTime() - now.getMilliseconds());
  } catch (e) { zOff = -now.getTimezoneOffset() * 60000; }
  zOffAt = now.getTime();
}
const ZETA = 0.45, OMEGA = 16, WD = OMEGA * Math.sqrt(1 - ZETA * ZETA);
const springE = u => 1 - Math.exp(-ZETA * OMEGA * u) * (Math.cos(WD * u) + (ZETA * OMEGA / WD) * Math.sin(WD * u));
function clockDateText() {
  try { return new Intl.DateTimeFormat('de-CH', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Europe/Zurich' }).format(new Date()); }
  catch (e) { return new Date().toLocaleDateString(); }
}
function clockFrame() {
  clockRaf = 0;
  const nowMs = Date.now();
  if (zOff === null || nowMs - zOffAt > 60000) calcOffset();
  const d = new Date(nowMs + zOff);
  const h = d.getUTCHours(), m = d.getUTCMinutes(), s = d.getUTCSeconds(), ms = d.getUTCMilliseconds();
  const e = reduce ? 1 : springE(Math.min(1, ms / 420));
  hSec.setAttribute('transform', 'rotate(' + ((s - 1 + e) * 6).toFixed(2) + ' 100 100)');
  hMin.setAttribute('transform', 'rotate(' + ((m + s / 60 + ms / 60000) * 6).toFixed(2) + ' 100 100)');
  hHour.setAttribute('transform', 'rotate(' + (((h % 12) + m / 60 + s / 3600) * 30).toFixed(2) + ' 100 100)');
  if (s !== lastSecShown) {
    lastSecShown = s;
    const p2 = n => String(n).padStart(2, '0');
    clockTime.textContent = p2(h) + ':' + p2(m) + ':' + p2(s);
    if (m !== lastMinShown) {
      lastMinShown = m;
      clockSvg.setAttribute('aria-label', 'Schweizer Zeit ' + p2(h) + ':' + p2(m));
      clockDate.textContent = clockDateText();
    }
  }
  if (reduce) { setTimeout(() => { if (!clockRaf) clockRaf = requestAnimationFrame(clockFrame); }, 1000 - ms + 5); return; }
  if (clockVisible && !document.hidden) clockRaf = requestAnimationFrame(clockFrame);
}
function kickClock() { if (!clockRaf) clockRaf = requestAnimationFrame(clockFrame); }
if ('IntersectionObserver' in window) new IntersectionObserver(en => { clockVisible = en[0].isIntersecting; if (clockVisible) kickClock(); }).observe(clockSvg);
document.addEventListener('visibilitychange', () => { if (!document.hidden) kickClock(); });
