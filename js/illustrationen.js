/* HCKD RAIL – gezeichnete Seitenansichten der Fahrzeuge */
'use strict';

/* =====================================================================
   ILLUSTRATIONEN (Seitenansicht, bis die Fotos aus dem PDF da sind)
   ===================================================================== */
const R = 136, DK = '#2B3036';
const wheel = (cx, r) => `<circle cx="${cx}" cy="${R - r}" r="${r}" fill="#20252A"/><circle cx="${cx}" cy="${R - r}" r="${(r * .42).toFixed(1)}" fill="#5B636B"/>`;
const bogie = (cx, sp = 30, r = 12) => `<rect x="${cx - sp - r - 3}" y="${R - r - 13}" width="${2 * sp + 2 * r + 6}" height="9" rx="3" fill="${DK}"/>` + wheel(cx - sp, r) + wheel(cx + sp, r);
const panto = (cx, top, s = 1) => `<g fill="none" stroke="${DK}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M${cx - 20 * s} ${top - 1}h${30 * s}"/><path d="M${cx - 12 * s} ${top - 2}L${cx + 7 * s} ${top - 16}L${cx - 7 * s} ${top - 30}"/><path d="M${cx - 20 * s} ${top - 30}h${26 * s}"/></g>`;
const buffers = (x0, x1, y) => `<rect x="${x0 - 9}" y="${y}" width="11" height="6" rx="1" fill="${DK}"/><rect x="${x1 - 2}" y="${y}" width="11" height="6" rx="1" fill="${DK}"/>`;
const grille = (xa, xb, y, h) => { let s = ''; for (let x = xa; x < xb; x += 9) s += `<rect x="${x}" y="${y}" width="4.5" height="${h}" rx="1" fill="rgba(0,0,0,.16)"/>`; return s; };

function artLok(a) {
  const top = 50, bot = 112, x0 = a.kurz ? 110 : 66, x1 = a.kurz ? 530 : 574, w = a.fenster || '#27313B';
  let s = `<rect x="${x0 + 14}" y="${bot}" width="${x1 - x0 - 28}" height="8" fill="${DK}"/>` + buffers(x0, x1, bot + 2);
  const body = a.form === 'rund'
    ? `M${x0 + 18} ${bot}H${x1 - 18}Q${x1 + 4} ${bot} ${x1 + 2} ${bot - 18}L${x1 - 4} ${top + 22}Q${x1 - 9} ${top} ${x1 - 32} ${top}H${x0 + 32}Q${x0 + 9} ${top} ${x0 + 4} ${top + 22}L${x0 - 2} ${bot - 18}Q${x0 - 4} ${bot} ${x0 + 18} ${bot}Z`
    : `M${x0} ${bot}H${x1}V${top + 10}Q${x1} ${top} ${x1 - 10} ${top}H${x0 + 10}Q${x0} ${top} ${x0} ${top + 10}Z`;
  s += `<rect x="${x0 + 40}" y="${top - 6}" width="${x1 - x0 - 80}" height="7" rx="2" fill="#5B636B"/>`;
  s += `<path d="${body}" fill="${a.farbe}"/>`;
  if (a.akzent) s += `<rect x="${x0 + 3}" y="${bot - 17}" width="${x1 - x0 - 6}" height="6" fill="${a.akzent}"/>`;
  s += `<path d="M${x0 + 9} ${top + 12}H${x0 + 48}V${top + 34}H${x0 + 5}Z" fill="${w}"/><path d="M${x1 - 9} ${top + 12}H${x1 - 48}V${top + 34}H${x1 - 5}Z" fill="${w}"/>`;
  s += `<rect x="${x0 + 56}" y="${top + 10}" width="20" height="${bot - top - 16}" rx="2" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/><rect x="${x1 - 76}" y="${top + 10}" width="20" height="${bot - top - 16}" rx="2" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>`;
  s += grille(x0 + 96, x1 - 96, top + 12, 24);
  if (a.achsen === 6) s += bogie(x0 + 90, 24, 11) + bogie((x0 + x1) / 2, 24, 11) + bogie(x1 - 90, 24, 11);
  else s += bogie(x0 + 108) + bogie(x1 - 108);
  if (a.panto) s += panto(x0 + 150, top - 6) + panto(x1 - 150, top - 6, -1);
  return s;
}
function artHaube(a) {
  const bot = 112, x0 = 84, x1 = 556, cab0 = a.mittig ? 272 : 410, cab1 = a.mittig ? 368 : x1 - 10;
  let s = `<rect x="${x0}" y="${bot}" width="${x1 - x0}" height="8" fill="${DK}"/>` + buffers(x0, x1, bot + 2);
  s += `<rect x="${x0 - 4}" y="${bot - 5}" width="${x1 - x0 + 8}" height="6" fill="#3A4047"/>`;
  s += `<path d="M${x0 + 4} ${bot - 4}H${x1 - 4}" stroke="#9AA1A8" stroke-width="1.5"/>`;
  for (let x = x0 + 8; x < x1 - 4; x += 46) s += `<path d="M${x} ${bot - 5}V${bot - 34}" stroke="#9AA1A8" stroke-width="1.5"/>`;
  s += `<path d="M${x0 + 6} ${bot - 34}H${x1 - 6}" stroke="#9AA1A8" stroke-width="1.5"/>`;
  s += `<path d="M${x0 + 18} ${bot - 5}V76Q${x0 + 18} 70 ${x0 + 24} 70H${x1 - 18}Q${x1 - 12} 70 ${x1 - 12} 76V${bot - 5}Z" fill="${a.farbe}"/>`;
  s += `<path d="M${cab0} ${bot - 5}V48Q${cab0} 40 ${cab0 + 8} 40H${cab1 - 8}Q${cab1} 40 ${cab1} 48V${bot - 5}Z" fill="${a.farbe}"/>`;
  s += `<rect x="${cab0 - 4}" y="35" width="${cab1 - cab0 + 8}" height="6" rx="2" fill="#5B636B"/>`;
  s += `<rect x="${cab0 + 12}" y="50" width="${(cab1 - cab0) / 2 - 18}" height="22" rx="3" fill="#27313B"/><rect x="${(cab0 + cab1) / 2 + 6}" y="50" width="${(cab1 - cab0) / 2 - 18}" height="22" rx="3" fill="#27313B"/>`;
  s += grille(x0 + 40, cab0 - 20, 78, 16);
  if (a.mittig) s += grille(cab1 + 20, x1 - 40, 78, 16);
  s += `<rect x="${x0 + 70}" y="62" width="9" height="9" fill="${DK}"/>`;
  if (a.akzent) s += `<rect x="${x0 + 18}" y="${bot - 16}" width="${x1 - x0 - 30}" height="5" fill="${a.akzent}"/>`;
  s += bogie(x0 + 104) + bogie(x1 - 104);
  return s;
}
function artRangier(a) {
  const bot = 114, x0 = a.klein ? 220 : 180, x1 = a.klein ? 420 : 460, cab0 = x1 - (a.klein ? 70 : 100);
  let s = `<rect x="${x0}" y="${bot}" width="${x1 - x0}" height="7" fill="${DK}"/>` + buffers(x0, x1, bot + 1);
  s += `<rect x="${x0 - 4}" y="${bot - 5}" width="${x1 - x0 + 8}" height="6" fill="#3A4047"/>`;
  s += `<path d="M${x0 + 10} ${bot - 5}V78Q${x0 + 10} 72 ${x0 + 16} 72H${cab0}V${bot - 5}Z" fill="${a.farbe}"/>`;
  s += `<path d="M${cab0} ${bot - 5}V${a.klein ? 56 : 46}Q${cab0} ${a.klein ? 50 : 40} ${cab0 + 6} ${a.klein ? 50 : 40}H${x1 - 8}Q${x1 - 2} ${a.klein ? 50 : 40} ${x1 - 2} ${a.klein ? 56 : 46}V${bot - 5}Z" fill="${a.farbe}"/>`;
  const wy = a.klein ? 58 : 50;
  s += `<rect x="${cab0 + 10}" y="${wy}" width="${x1 - cab0 - 26}" height="22" rx="3" fill="#27313B"/>`;
  s += grille(x0 + 26, cab0 - 14, 80, 14);
  if (a.akzent) s += `<rect x="${x0 + 10}" y="${bot - 16}" width="${x1 - x0 - 12}" height="5" fill="${a.akzent}"/>`;
  if (a.kran) s += `<path d="M${x0 + 40} 72V60L${x0 + 120} 40" fill="none" stroke="${DK}" stroke-width="5" stroke-linecap="round"/><path d="M${x0 + 120} 40V60" stroke="${DK}" stroke-width="1.6"/>`;
  if (a.achsen === 3) {
    const xs = [x0 + 50, (x0 + x1) / 2 - 10, x1 - 70];
    xs.forEach(x => s += wheel(x, 16));
    s += `<path d="M${xs[0]} ${R - 16}H${xs[2]}" stroke="#8A9199" stroke-width="4" stroke-linecap="round"/>`;
  } else {
    const r = a.klein ? 14 : 16;
    s += wheel(x0 + (a.klein ? 50 : 62), r) + wheel(x1 - (a.klein ? 50 : 70), r);
  }
  if (a.panto) s += panto(cab0 + 40, a.klein ? 50 : 40);
  return s;
}
function artTriebzug(a) {
  const top = a.dd ? 30 : 52, bot = 114, w = '#27313B';
  let nose, nx, wind, front, b1;
  if (a.nase === 'lang') {
    nose = `M16 ${bot}V${bot - 10}C20 ${bot - 40} 74 ${top + 3} 166 ${top}H640V${bot}Z`; nx = 166; b1 = 150;
    wind = `M38 ${bot - 36}C52 ${bot - 58} 92 ${top + 12} 140 ${top + 7}L144 ${top + 24}C104 ${top + 30} 66 ${bot - 40} 46 ${bot - 28}Z`;
    front = `M16 ${bot}V${bot - 10}C17 ${bot - 16} 19 ${bot - 22} 23 ${bot - 28}L74 ${bot}Z`;
  } else if (a.nase === 'mittel') {
    nose = `M24 ${bot}V${bot - 20}C26 ${top + 30} 54 ${top} 106 ${top}H640V${bot}Z`; nx = 106; b1 = 112;
    wind = `M32 ${top + 44}C38 ${top + 22} 58 ${top + 9} 86 ${top + 7}L88 ${top + 30}L34 ${top + 54}Z`;
    front = `M24 ${bot}V${bot - 24}L64 ${bot}Z`;
  } else {
    nose = `M32 ${bot}V${top + 20}Q32 ${top} 56 ${top}H640V${bot}Z`; nx = 56; b1 = 98;
    wind = `M37 ${top + 10}H62V${top + 42}H35Z`;
    front = `M32 ${bot}V${bot - 26}L58 ${bot}Z`;
  }
  let s = `<rect x="40" y="${bot}" width="600" height="7" fill="${DK}"/>`;
  s += `<rect x="${nx + 20}" y="${top - 5}" width="${400 - nx}" height="6" rx="2" fill="#5B636B"/><rect x="452" y="${top - 5}" width="200" height="6" rx="2" fill="#5B636B"/>`;
  s += `<path d="${nose}" fill="${a.farbe}"/>`;
  s += `<path d="${front}" fill="${a.akzent || RED}"/>`;
  s += `<path d="${wind}" fill="${w}"/>`;
  const doors = [nx + 150, 520].filter(x => x > nx + 30);
  const doorTop = a.dd ? bot - 58 : top + 8;
  const gap0 = 428, gap1 = 436;
  const rows = a.dd ? [top + 10, top + 46] : [top + 14];
  for (const y of rows) for (let x = nx + 24; x < 632; x += 44) {
    const x2 = x + 32;
    if (doors.some(d => x2 > d - 6 && x < d + 36) && (!a.dd || y > top + 30)) continue;
    if (x2 > gap0 - 4 && x < gap1 + 4) continue;
    s += `<rect x="${x}" y="${y}" width="32" height="24" rx="5" fill="${w}"/>`;
  }
  for (const d of doors) s += `<rect x="${d}" y="${doorTop}" width="30" height="${bot - doorTop - 2}" rx="3" fill="${a.tuer || '#6E7780'}"/><rect x="${d + 5}" y="${doorTop + 6}" width="20" height="${Math.min(26, bot - doorTop - 30)}" rx="3" fill="${w}"/>`;
  s += `<rect x="${gap0}" y="${top + 3}" width="${gap1 - gap0}" height="${bot - top}" fill="var(--art-bg)"/><rect x="${gap0 + 1}" y="${top + 10}" width="${gap1 - gap0 - 2}" height="${bot - top - 12}" fill="#3A4047"/>`;
  s += bogie(b1) + bogie(432);
  if (a.panto) s += panto(320, top - 5);
  return s;
}
function artSpezial(a) {
  const bot = 112, top = 56;
  let s = '';
  const box = (x0, x1, t, col) => `<path d="M${x0} ${bot}V${t + 8}Q${x0} ${t} ${x0 + 8} ${t}H${x1 - 8}Q${x1} ${t} ${x1} ${t + 8}V${bot}Z" fill="${col}"/>`;
  const cabWin = (x, y) => `<rect x="${x}" y="${y}" width="34" height="20" rx="3" fill="#27313B"/>`;
  const beacon = (x, y) => `<rect x="${x - 4}" y="${y - 7}" width="8" height="7" rx="2" fill="#FF9F1A"/>`;
  if (a.var === 'schnee') {
    s += `<rect x="120" y="${bot}" width="440" height="8" fill="${DK}"/>` + buffers(160, 560, bot + 2);
    s += box(190, 560, 50, a.farbe) + cabWin(204, 62) + cabWin(510, 62) + grille(260, 480, 66, 26);
    s += `<rect x="62" y="44" width="134" height="${bot - 44}" rx="10" fill="${a.farbe}"/>`;
    s += `<circle cx="112" cy="${bot - 26}" r="40" fill="${a.akzent}"/><circle cx="112" cy="${bot - 26}" r="34" fill="#4A5158"/>`;
    for (let i = 0; i < 8; i++) { const an = i * Math.PI / 4; s += `<path d="M112 ${bot - 26}L${(112 + 32 * Math.cos(an)).toFixed(1)} ${(bot - 26 + 32 * Math.sin(an)).toFixed(1)}" stroke="#C9CED3" stroke-width="3"/>`; }
    s += `<circle cx="112" cy="${bot - 26}" r="7" fill="${a.farbe}"/>`;
    s += `<path d="M150 46L172 14H196L184 46Z" fill="${a.akzent}"/>`;
    s += bogie(260) + bogie(480) + beacon(380, 50);
  } else if (a.var === 'kran') {
    s += `<rect x="90" y="${bot - 18}" width="470" height="18" fill="${a.akzent}"/><rect x="90" y="${bot}" width="470" height="8" fill="${DK}"/>` + buffers(90, 560, bot + 2);
    s += box(300, 470, 58, a.farbe) + cabWin(312, 66) + grille(360, 456, 70, 20);
    s += `<rect x="440" y="76" width="60" height="18" fill="${a.akzent}"/>`;
    s += `<path d="M320 66L96 20" stroke="${a.farbe}" stroke-width="12" stroke-linecap="round"/><path d="M320 66L96 20" stroke="${a.akzent}" stroke-width="2" stroke-dasharray="6 10"/>`;
    s += `<path d="M100 22V70" stroke="${DK}" stroke-width="1.6"/><path d="M94 70h12l-6 9z" fill="${DK}"/>`;
    s += bogie(170) + bogie(480) + beacon(400, 58);
  } else if (a.var === 'montage') {
    s += `<rect x="70" y="${bot}" width="500" height="8" fill="${DK}"/>` + buffers(70, 570, bot + 2);
    s += box(70, 190, 52, a.farbe) + cabWin(80, 62) + cabWin(144, 62);
    s += `<rect x="190" y="${bot - 22}" width="380" height="22" fill="${a.farbe}"/><rect x="190" y="${bot - 26}" width="380" height="5" fill="${a.akzent}"/>`;
    s += `<path d="M300 86L440 56M300 56L440 86" stroke="${DK}" stroke-width="4"/><rect x="286" y="44" width="170" height="10" fill="${a.farbe}"/><path d="M286 44V30H456V44M330 30V44M372 30V44M414 30V44" fill="none" stroke="${DK}" stroke-width="2"/>`;
    s += bogie(150) + bogie(490) + beacon(130, 52);
  } else if (a.var === 'mess') {
    s += `<rect x="60" y="${bot}" width="520" height="8" fill="${DK}"/>` + buffers(60, 580, bot + 2);
    s += box(60, 580, 50, a.farbe) + `<rect x="60" y="${bot - 18}" width="520" height="7" fill="${a.akzent}"/>`;
    s += cabWin(74, 62) + cabWin(532, 62);
    for (let x = 140; x < 500; x += 46) s += `<rect x="${x}" y="64" width="30" height="20" rx="4" fill="#27313B"/>`;
    s += `<rect x="190" y="38" width="44" height="12" rx="6" fill="#9AA1A8"/><rect x="410" y="40" width="30" height="10" rx="5" fill="#9AA1A8"/>` + panto(320, 50);
    s += `<rect x="250" y="${bot + 6}" width="40" height="8" rx="2" fill="#E0A21B"/>`;
    s += bogie(160) + bogie(480);
  } else {
    s += `<rect x="64" y="${bot}" width="512" height="8" fill="${DK}"/>` + buffers(64, 576, bot + 2);
    s += box(64, 576, 50, a.farbe) + `<rect x="64" y="${bot - 22}" width="512" height="12" fill="${a.akzent}"/>`;
    s += cabWin(76, 60) + cabWin(530, 60);
    s += `<rect x="150" y="60" width="150" height="34" rx="3" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="1.5"/><rect x="330" y="60" width="160" height="34" rx="3" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="1.5"/>`;
    s += `<rect x="180" y="38" width="90" height="12" rx="3" fill="#5B636B"/><rect x="360" y="40" width="70" height="10" rx="3" fill="#5B636B"/>`;
    s += beacon(100, 50) + beacon(540, 50);
    s += bogie(170) + bogie(470);
  }
  return s;
}
// wagons without own drive: hopper for ballast, flat wagon with rails or cable drums, crew coach, passenger coach
function artWagen(a) {
  // zweiachs: shorter wagon on two single axles instead of bogies
  const bot = 112, x0 = a.zweiachs ? 130 : 70, x1 = a.zweiachs ? 510 : 570;
  let s = `<rect x="${x0}" y="${bot}" width="${x1 - x0}" height="8" fill="${DK}"/>` + buffers(x0, x1, bot + 2);
  if (a.var === 'mulde') {
    // flat wagon carrying a row of open containers on side rails
    s += `<rect x="${x0}" y="${bot - 12}" width="${x1 - x0}" height="12" fill="${DK}"/><rect x="${x0 + 6}" y="${bot - 20}" width="${x1 - x0 - 12}" height="5" fill="#9AA1A8"/>`;
    const n = 7, w = (x1 - x0 - 24) / n;
    for (let i = 0; i < n; i++) { const x = x0 + 12 + i * w; s += `<path d="M${x + 2} 58H${x + w - 2}L${x + w - 6} ${bot - 22}H${x + 6}Z" fill="${a.farbe}"/><path d="M${x + 4} 58Q${x + w / 2} 48 ${x + w - 4} 58Z" fill="#8E8A84"/>`; }
  } else if (a.var === 'kipp') {
    // tipping box, slightly raised on one side
    s += `<rect x="${x0}" y="${bot - 10}" width="${x1 - x0}" height="10" fill="${DK}"/>`;
    s += `<path d="M${x0 + 8} 54L${x1 - 8} 48V${bot - 14}H${x0 + 8}Z" fill="${a.farbe}"/><path d="M${x0 + 8} 54L${x1 - 8} 48" stroke="rgba(0,0,0,.25)" stroke-width="3"/>`;
    for (let x = x0 + 60; x < x1 - 40; x += 70) s += `<path d="M${x} 58V${bot - 18}" stroke="rgba(0,0,0,.18)" stroke-width="3"/>`;
    if (a.band) s += `<path d="M${x1 - 30} ${bot - 16}L${x1 + 6} 40" stroke="${DK}" stroke-width="7" stroke-linecap="round"/>`;
  } else if (a.var === 'schotter') {
    s += `<path d="M${x0 + 10} 52H${x1 - 10}L${x1 - 40} ${bot - 6}H${x0 + 40}Z" fill="${a.farbe}"/>`;
    for (let x = x0 + 60; x < x1 - 50; x += 50) s += `<path d="M${x} 56V${bot - 10}" stroke="rgba(0,0,0,.22)" stroke-width="3"/>`;
    s += `<path d="M${x0 + 14} 52Q${(x0 + x1) / 2} 34 ${x1 - 14} 52Z" fill="#8E8A84"/>`;
    s += `<path d="M${x0 + 60} ${bot - 6}l14 10h40l14-10M${x1 - 128} ${bot - 6}l14 10h40l14-10" fill="${DK}"/>`;
  } else if (a.var === 'flach') {
    s += `<rect x="${x0}" y="${bot - 14}" width="${x1 - x0}" height="14" fill="${a.farbe}"/>`;
    for (let x = x0 + 30; x < x1 - 20; x += 80) s += `<rect x="${x}" y="${bot - 46}" width="6" height="32" fill="${DK}"/>`;
    s += `<rect x="${x0 + 10}" y="${bot - 26}" width="${x1 - x0 - 20}" height="5" fill="#9AA1A8"/><rect x="${x0 + 10}" y="${bot - 38}" width="${x1 - x0 - 20}" height="5" fill="#9AA1A8"/>`;
    // small loading cranes (STE) or a loader portal (SILAD)
    if (a.kran) for (const cx of [x0 + 70, x1 - 70]) s += `<rect x="${cx - 4}" y="${bot - 70}" width="8" height="56" fill="${DK}"/><path d="M${cx} ${bot - 66}H${cx + 54}" stroke="${DK}" stroke-width="6" stroke-linecap="round"/><path d="M${cx + 50} ${bot - 64}V${bot - 44}" stroke="${DK}" stroke-width="2"/>`;
    if (a.portal) s += `<path d="M${x0 + 150} ${bot - 14}V36H${x1 - 150}V${bot - 14}" fill="none" stroke="${a.akzent || DK}" stroke-width="9"/><rect x="${(x0 + x1) / 2 - 26}" y="40" width="52" height="16" fill="${DK}"/>`;
  } else if (a.var === 'kabel') {
    s += `<rect x="${x0}" y="${bot - 14}" width="${x1 - x0}" height="14" fill="${a.farbe}"/>`;
    for (const cx of [170, 320, 470]) s += `<circle cx="${cx}" cy="${bot - 46}" r="32" fill="#7A5A3C"/><circle cx="${cx}" cy="${bot - 46}" r="26" fill="#2E3338"/><circle cx="${cx}" cy="${bot - 46}" r="8" fill="#9AA1A8"/>`;
  } else {
    // crew coach or passenger coach (dd = double deck)
    const top = a.dd ? 30 : 50;
    s += `<path d="M${x0} ${bot}V${top + 10}Q${x0} ${top} ${x0 + 10} ${top}H${x1 - 10}Q${x1} ${top} ${x1} ${top + 10}V${bot}Z" fill="${a.farbe}"/>`;
    if (a.akzent) s += `<rect x="${x0}" y="${bot - 18}" width="${x1 - x0}" height="6" fill="${a.akzent}"/>`;
    const rows = a.dd ? [42, 78] : [64];
    // geschlossen: covered work wagon with sliding doors instead of a row of windows
    if (a.geschlossen) {
      for (const x of [x0 + 70, x1 - 130]) s += `<rect x="${x}" y="${top + 14}" width="60" height="${bot - top - 22}" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="2"/>`;
      s += `<rect x="${(x0 + x1) / 2 - 22}" y="${top + 14}" width="44" height="18" rx="3" fill="#27313B"/>`;
    } else for (const y of rows) for (let x = x0 + 40; x < x1 - 50; x += 44) s += `<rect x="${x}" y="${y}" width="32" height="20" rx="4" fill="#27313B"/>`;
    if (a.buehne) s += `<path d="M${x0 + 60} ${top}L${x0 + 110} ${top - 22}H${x0 + 190}" fill="none" stroke="${DK}" stroke-width="5"/><rect x="${x0 + 180}" y="${top - 30}" width="40" height="10" fill="${DK}"/>`;
    s += `<rect x="${x0 + 12}" y="${top + 16}" width="18" height="${bot - top - 24}" rx="2" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/><rect x="${x1 - 30}" y="${top + 16}" width="18" height="${bot - top - 24}" rx="2" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/>`;
  }
  if (a.zweiachs) return s + `<rect x="${x0 + 50}" y="${R - 25}" width="40" height="9" rx="3" fill="${DK}"/><rect x="${x1 - 90}" y="${R - 25}" width="40" height="9" rx="3" fill="${DK}"/>` + wheel(x0 + 70, 13) + wheel(x1 - 70, 13);
  return s + bogie(150) + bogie(490);
}
function art(z) {
  const a = z.art;
  let s = `<svg class="art" viewBox="0 0 640 170" preserveAspectRatio="xMidYMax meet" role="img" aria-label="${esc(tr('Illustration'))} ${esc(fullName(z))}">`;
  s += `<rect x="0" y="${R + 4}" width="640" height="${170 - R - 4}" fill="var(--art-ground)"/>`;
  for (let x = 4; x < 640; x += 22) s += `<rect x="${x}" y="${R + 4}" width="12" height="5" fill="var(--art-sleeper)"/>`;
  s += `<rect x="0" y="${R}" width="640" height="4" fill="var(--art-rail)"/>`;
  s += ({ lok: artLok, haube: artHaube, rangier: artRangier, triebzug: artTriebzug, spezial: artSpezial, wagen: artWagen })[a.typ](a);
  return s + '</svg>';
}
