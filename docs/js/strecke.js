/* RailBase – Führerstandsfahrt Normalspur und Meterspur */
'use strict';

/* =====================================================================
   SPURWEITE: zwei Strecken, eine Engine
   Normalspur: mit 200 km/h durch einen Tunnel, Durchfahrt Erlenried,
               Halt in Sonnwil (Bahnhof mit vielen Weichen, Abstellgleisen, Passerelle).
   Meterspur:  Halt am Signal, Weiche wird umgestellt, Weichenverbindung, Bahnhof Lindmatt.
   Weiche:      Backenschienen, Zungen (eine anliegend, eine offen), Stell- und
                Prüfstange mit Antrieb, Herzstück mit Flügelschienen, Radlenker,
                durchgehende Weichenschwellen.
   Oberleitung: Mast mit Fundament, Rohrschwenkausleger mit Isolatoren, im Bahnhof
                Joche (Quertragwerke), durchhängendes Tragseil, Hänger, Fahrdraht im
                Zickzack, Rückleiter auf den Mastspitzen, im Tunnel Deckenaufhängung.
   ===================================================================== */
const canvas = $('#track'), ctx = canvas.getContext('2d'), stage = $('#stage');
const tag = $('#gauge-tag'), pauseBtn = $('#pause');
const gSpdEl = $('#g-spd'), gStatEl = $('#g-status'), gStatT = $('#g-status-t');
const ZN = 2.2, ZF = 90, SP = 0.6, SLW = 0.26, HEAD = 0.072, RAIL_H = 0.16, GAPB = 0.19, BLADE = 18, BL = HEAD * 0.85, FW = HEAD + 0.05, SPAN = 50, M0 = 10;
const sC = u => (1 - Math.cos(Math.PI * clamp01(u))) / 2;
const invS = v => Math.acos(1 - 2 * clamp01(v)) / Math.PI;
const sm = u => { u = clamp01(u); return u * u * (3 - 2 * u); };
const rng = seed => { let s = seed; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; };
const GPCOL = ['#3B4A6B', '#B8483E', '#E0B04A', '#4F7A5A', '#7A5C8F', '#2F3338', '#C77B4A', '#4D8FB0'];
let liveP1 = 1;

function makeCourse(c) {
  const LOOP = c.LOOP, g = c.g, D = c.D, L = c.L;
  const wrapZ = z => ((z % LOOP) + LOOP) % LOOP;
  const tpF = (z, toe) => { const w = wrapZ(z) - toe; return w >= 0 && w < BLADE ? 1 - w / BLADE : 0; };
  const tpB = (z, toe) => { const w = toe - wrapZ(z); return w > 0 && w <= BLADE ? 1 - w / BLADE : 0; };
  const T = c.tracks.map(([ln, z0, z1, o]) => ({ x: c.lanes[ln], z0, z1, o: o || {}, modL: [], modR: [], toes: [] }));
  const K = c.conns.map(([a, b, zs, ze, o], i) => {
    const xa = c.lanes[a], xb = c.lanes[b];
    return { i, xa, xb, s: Math.sign(xb - xa), zs, ze, o: o || {}, used: c.route.includes(i), x: z => xa + (xb - xa) * sC((wrapZ(z) - zs) / (ze - zs)) };
  });
  const trackAt = (x, z) => T.find(t => Math.abs(t.x - x) < 0.01 && z >= t.z0 - 0.01 && z <= t.z1 + 0.01);
  K.forEach(k => {
    k.dA = () => k.used ? 1 : 0;
    k.dB = () => k.used ? 1 : 0;
    if (c.live === k.i) k.dA = () => liveP1;
    if (!k.o.nA) { const t = trackAt(k.xa, k.zs); if (t) { (k.s > 0 ? t.modR : t.modL).push(z => -k.s * (BL + k.dA() * GAPB) * tpF(z, k.zs)); t.toes.push(k.zs); } }
    if (!k.o.nB) { const t = trackAt(k.xb, k.ze); if (t) { (k.s > 0 ? t.modL : t.modR).push(z => k.s * (BL + k.dB() * GAPB) * tpB(z, k.ze)); t.toes.push(k.ze); } }
    k.railM = z => k.x(z) - k.s * g / 2 + (k.o.nA ? 0 : k.s * (BL + (1 - k.dA()) * GAPB) * tpF(z, k.zs));
    k.railP = z => k.x(z) + k.s * g / 2 - (k.o.nB ? 0 : k.s * (BL + (1 - k.dB()) * GAPB) * tpB(z, k.ze));
  });
  T.forEach(t => {
    t.L = z => { let x = t.x - g / 2; for (const f of t.modL) x += f(z); return x; };
    t.R = z => { let x = t.x + g / 2; for (const f of t.modR) x += f(z); return x; };
  });
  const F = [], TO = [];
  K.forEach(k => {
    const dx = Math.abs(k.xb - k.xa), len = k.ze - k.zs;
    if (!k.o.nA) {
      F.push({ k, z: k.zs + invS(g / dx) * len, main: k.xa + k.s * g / 2, other: k.xa - k.s * g / 2, xf: k.railM, xo: k.railP, dir: 1 });
      TO.push({ z: k.zs, d: 1, x: k.xa, side: -k.s, k });
    }
    if (!k.o.nB) {
      F.push({ k, z: k.zs + invS(1 - g / dx) * len, main: k.xb - k.s * g / 2, other: k.xb + k.s * g / 2, xf: k.railP, xo: k.railM, dir: -1 });
      TO.push({ z: k.ze, d: -1, x: k.xb, side: k.s, k });
    }
  });
  const RK = K.filter(k => k.used).sort((p, q) => p.zs - q.zs), x0 = c.lanes[c.start];
  const routeX = z => { const w = wrapZ(z); let x = x0; for (const k of RK) { if (w < k.zs) return x; if (w < k.ze) return k.x(w); x = k.xb; } return x; };
  const lanesAt = w => { const xs = []; for (const t of T) if (w >= t.z0 && w <= t.z1) xs.push(t.x); return xs.sort((p, q) => p - q); };
  const centersAt = w => { const xs = lanesAt(w); for (const k of K) if (w > k.zs && w < k.ze) xs.push(k.x(w)); return xs; };
  const ext = w => { let a = Infinity, b = -Infinity; for (const x of centersAt(w)) { if (x < a) a = x; if (x > b) b = x; } return [a, b]; };
  const inT = w => !!c.tunnel && w >= c.tunnel[0] && w <= c.tunnel[1];

  // scenery that only depends on the seed
  const r = rng(c.seed);
  const trees = [];
  for (let i = 0; i < c.treeN; i++) {
    const z = r() * LOOP, side = r() < 0.5 ? -1 : 1;
    if ((c.noTrees || []).some(([a, b, sd]) => z > a && z < b && (!sd || sd === side))) continue;
    trees.push({ z, side, off: c.treeOff + r() * 45, rr: 1.8 + r() * 2.4, h: 4 + r() * 4.5, c: r() < 0.5 });
  }
  const people = [];
  for (const p of c.platforms) for (let i = 0; i < (p[5] || 0); i++) {
    const z = p[2] + 18 + r() * (p[3] - p[2] - 36), o = 1.0 + r() * 2.6, col = GPCOL[(r() * GPCOL.length) | 0];
    people.push({ z, x: p[4] < 0 ? p[0] + o : p[1] - o - 0.5, c: col });
  }
  const stones = [];
  for (let i = 0; i < 30; i++) {
    const a = r() * 0.22;
    stones.push({ x: r(), dz: r() * SP, s: 0.03 + r() * 0.05, fill: r() < 0.5 ? 'rgba(255,255,255,' + a.toFixed(3) + ')' : 'rgba(0,0,0,' + a.toFixed(3) + ')' });
  }

  // ride profile: stops, speed limits with braking curves
  const R = (() => {
    const p = c.ride, DT = 0.05, ZS = [], VV = [], stops = [];
    let z = p.Z0, v = p.VMAX, tm = 0, si = 0, wait = 0;
    while (z < p.Z0 + LOOP && tm < 1200) {
      ZS.push(z); VV.push(v);
      if (wait > 0) { wait -= DT; if (wait <= 1e-9) stops[stops.length - 1].go = tm + DT; tm += DT; continue; }
      let lim = p.VMAX;
      for (const [a, b, vl] of p.limits) { if (z >= a && z < b) lim = Math.min(lim, vl); else if (z < a) lim = Math.min(lim, Math.sqrt(vl * vl + 2 * p.BR * (a - z))); }
      if (si < p.stops.length) {
        const d = p.stops[si].z - z;
        if (d < 0.04) { z = p.stops[si].z; v = 0; stops.push({ z, t: tm, go: 0 }); wait = p.stops[si].wait; si++; tm += DT; continue; }
        lim = Math.min(lim, Math.max(0.3, Math.sqrt(2 * p.BR * d)));
      }
      v = v < lim ? Math.min(lim, v + p.AC * DT) : lim;
      z += v * DT; tm += DT;
    }
    ZS.push(p.Z0 + LOOP); VV.push(p.VMAX);
    const at = t => {
      const f = Math.max(0, Math.min(ZS.length - 1.0001, t / DT)), i = Math.floor(f), u = f - i;
      return { z: ZS[i] + (ZS[i + 1] - ZS[i]) * u, v: VV[i] + (VV[i + 1] - VV[i]) * u };
    };
    const tAtZ = Z => { for (let i = 0; i < ZS.length; i++) if (ZS[i] >= Z) return i * DT; return 0; };
    return { at, tAtZ, DUR: (ZS.length - 1) * DT, stops };
  })();

  return Object.assign(c, { wrapZ, tpF, tpB, T, K, F, TO, routeX, lanesAt, centersAt, ext, inT, trees, people, stones, R, switches: TO.length });
}

/* ---------- Meterspur: wie bisher (Lindmatt) ---------- */
const DM = 3.6;
const COURSE_M = makeCourse({
  id: 'm', g: 1.0, L: 1.9, D: DM, HCW: 4.9, LOOP: 900, start: 'a', seed: 4242, treeN: 90, treeOff: 11, hills: [0.055, 0.035], lamps: 2,
  lanes: { a: 0, b: DM },
  tracks: [['a', 0, 900], ['b', 0, 900]],
  conns: [['a', 'b', 220, 320], ['b', 'a', 640, 740]],
  route: [0, 1], live: 0,
  ride: { VMAX: 16.7, AC: 0.9, BR: 1.3, Z0: 60, stops: [{ z: 203, wait: 3.4 }], limits: [[203, 380, 11.1]], rate: () => 1.6 },
  noTrees: [[455, 545, -1]],
  platforms: [[DM + 1.65, DM + 5.65, 430, 590, -1, 7], [-5.65, -1.65, 430, 590, 1, 6]],
  canopies: [[DM + 2.0, DM + 5.4, 480, 552, DM + 4.0], [-5.4, -2.0, 480, 552, -4.2]],
  buildings: [[-17, -8.5, 470, 530, 6.2]],
  signs: [[DM + 2.3, 452, 'Lindmatt'], [DM + 2.3, 558, 'Lindmatt'], [-2.3, 452, 'Lindmatt'], [-2.3, 558, 'Lindmatt']],
  signals: [
    { x: -1.9 / 2 - 1.2, z: 212, st: (rt, w, R) => (rt >= R.stops[0].t + 2.6 || w > 217) ? 'g' : 'r' },
    { x: DM / 2, z: 626, st: () => 'g' }
  ],
  wp: [{ z: 203, t: 'Halt am Signal', stop: true }, { z: 220, t: 'Weichenverbindung auf Gleis 2' }, { z: 430, t: 'Bahnhof Lindmatt' }, { z: 640, t: 'Zurück auf Gleis 1' }],
  labelZ: 215, labelX: 1.25, labelConn: 0,
  status(rt, z) {
    const R = this.R, s = R.stops[0], w = this.wrapZ(z);
    if (rt < s.t && s.z - z < 110) return 'Halt am Signal';
    if (rt >= s.t && rt < s.t + 0.9) return 'Halt am Signal';
    if (rt >= s.t + 0.9 && rt < s.t + 2.3) return 'Weiche wird umgestellt';
    if (rt >= s.t + 2.3 && rt < s.go + 1.6) return 'Fahrt frei';
    if (w >= 214 && w < 330) return 'Über die Weichenverbindung auf Gleis 2';
    if (w >= 370 && w < 590) return 'Durchfahrt Bahnhof Lindmatt';
    if (w >= 615 && w < 740) return 'Zurück auf Gleis 1';
    return null;
  },
  caption: tr('<b>Meterspur, 1000 mm.</b> Halt am Signal, die Weiche wird umgestellt, dann über die Weichenverbindung und durch den Bahnhof Lindmatt. Typisch für Bahnen wie RhB, MGB oder zb.')
});

/* ---------- Normalspur: Tunnel, Durchfahrt Erlenried, Halt in Sonnwil ---------- */
const DN = 4.5;
const COURSE_N = makeCourse({
  id: 'n', g: 1.435, L: 2.6, D: DN, HCW: 5.4, LOOP: 4500, start: 'a', seed: 1435, treeN: 420, treeOff: 12, hills: [0.12, 0.06], lamps: 3,
  lanes: { a: 0, b: DN, e1: -6, e4: DN + 6, s1: -8.7, s4: DN + 8.7, s5: DN + 13.2 },
  tracks: [['a', 0, 4500], ['b', 0, 4500], ['e1', 1180, 1460], ['e4', 1210, 1470],
    ['s1', 2850, 3260, { stop: 1 }], ['s4', 2830, 3270, { stop: 1 }], ['s5', 2960, 3230, { stop: 1 }]],
  conns: [
    ['a', 'b', 940, 1030], ['a', 'e1', 1060, 1180, { nB: 1 }], ['b', 'e4', 1090, 1210, { nB: 1 }],
    ['e1', 'a', 1460, 1580, { nA: 1 }], ['e4', 'b', 1470, 1590, { nA: 1 }], ['b', 'a', 1620, 1710],
    ['a', 'b', 2560, 2640], ['a', 's1', 2700, 2850, { nB: 1 }], ['b', 's4', 2680, 2830, { nB: 1 }], ['s4', 's5', 2860, 2960, { nB: 1 }],
    ['s1', 'a', 3190, 3340], ['s4', 'b', 3200, 3350], ['b', 'a', 3400, 3480]
  ],
  route: [7, 10],
  tunnel: [200, 520],
  ride: { VMAX: 55.6, AC: 1.4, BR: 1.3, Z0: 40, stops: [{ z: 3000, wait: 18 }], limits: [[2690, 3345, 11.1]], rate: v => 1 + 1.4 * (1 - v / 55.6) },
  noTrees: [[150, 545, 0], [2860, 3300, -1], [1280, 1360, -1]],
  platforms: [
    [-11.25, -7.65, 1230, 1440, 1, 5], [DN + 7.65, DN + 11.25, 1240, 1450, -1, 5],
    [-14.5, -10.35, 2880, 3170, 1, 9], [DN + 3.2, DN + 7.05, 2880, 3170, 1, 7]
  ],
  canopies: [[-10.9, -8.0, 1310, 1350, -9.45], [DN + 8.0, DN + 10.9, 1320, 1360, DN + 9.45],
    [-14.3, -10.7, 2960, 3110, -13.4], [DN + 3.4, DN + 6.8, 2990, 3090, DN + 5.1]],
  buildings: [[-20, -13, 1300, 1340, 5], [-28, -16, 3010, 3080, 9]],
  signs: [[-8.3, 1260, 'Erlenried'], [-8.3, 1400, 'Erlenried'], [DN + 8.3, 1270, 'Erlenried'], [DN + 8.3, 1410, 'Erlenried'],
    [-11.0, 2900, 'Sonnwil'], [-11.0, 3130, 'Sonnwil'], [DN + 6.4, 2900, 'Sonnwil'], [DN + 6.4, 3130, 'Sonnwil']],
  bridge: { z: 3085, x0: -15, x1: DN + 16, towers: [-12.4, DN + 5.1] },
  wagons: { x: DN + 13.2, z0: 3040, n: 4 },
  signals: [
    { x: -2.5, z: 140, st: () => 'g' },
    { x: -2.5, z: 1020, st: () => 'g' },
    { x: -2.5, z: 2610, st: () => 'g40' },
    { x: -6.4, z: 3072, st: (rt, w, R) => { const s = R.stops[0]; return (rt >= s.go - 3 || w > 3076) ? 'g40' : 'r'; } }
  ],
  // dwarf signals before the switches; on the train's route they show Fahrt, elsewhere Halt.
  // The one after the stop shows «Fahrt mit Vorsicht» while the exit signal is still at stop.
  dwarfs: [
    { x: -2.2, z: 928, st: () => 'f' }, { x: -2.2, z: 1048, st: () => 'f' }, { x: 2.3, z: 1078, st: () => 'h' }, { x: 2.3, z: 1608, st: () => 'h' },
    { x: -2.2, z: 2548, st: () => 'f' }, { x: 2.3, z: 2668, st: () => 'h' }, { x: -2.2, z: 2688, st: (rt, w, R) => rt < R.stops[0].t ? 'f' : 'h' },
    { x: DN + 10.95, z: 2846, st: () => 'h' },
    { x: -6.5, z: 3012, st: (rt, w, R) => { const s = R.stops[0]; return rt >= s.go - 3 || w > 3016 ? 'f' : 'v'; } },
    { x: -6.5, z: 3176, st: (rt, w, R) => { const s = R.stops[0]; return rt >= s.go - 3 || w > 3180 ? 'f' : 'h'; } },
    { x: DN + 10.95, z: 3186, st: () => 'h' }, { x: 2.3, z: 3388, st: () => 'h' }
  ],
  wp: [{ z: 200, t: 'Tunnel, 320 m' }, { z: 1050, t: 'Erlenried, Durchfahrt' }, { z: 2700, t: 'Weichen Sonnwil' }, { z: 3000, t: 'Halt Sonnwil, Gleis 1', stop: true }, { z: 3190, t: 'Ausfahrt aufs Streckengleis' }],
  labelZ: 2552, labelX: 1.25, labelConn: 6,
  status(rt, z) {
    const s = this.R.stops[0], w = this.wrapZ(z);
    if (rt >= s.t && rt < s.go) return rt < s.go - 3 ? 'Halt in Sonnwil, Gleis 1' : 'Ausfahrsignal zeigt Fahrt';
    if (w >= 110 && w < 200) return 'Gleich im Tunnel';
    if (w >= 200 && w < 520) return 'Im Tunnel mit 200 km/h';
    if (w >= 1040 && w < 1640) return 'Durchfahrt Erlenried';
    if (rt < s.t && w >= 2560 && w < 2870) return 'Einfahrt Sonnwil über die Weichen auf Gleis 1';
    if (rt < s.t && w >= 1700 && w < 3000) return 'Bremsen für den Halt in Sonnwil';
    if (rt >= s.go && w >= 2990 && w < 3360) return 'Ausfahrt über die Weichen aufs Streckengleis';
    if (rt >= s.go && w >= 3360 && w < 3950) return 'Beschleunigen auf 200 km/h';
    return null;
  }
});
COURSE_N.caption = tr('<b>Normalspur, 1435 mm.</b> Mit 200 km/h durch den Tunnel, Durchfahrt in Erlenried, dann Halt in Sonnwil auf Gleis 1. Unterwegs liegen {n} Weichen, dazu Abstellgleise mit Prellbock und eine Passerelle.', { n: COURSE_N.switches });
const COURSES = { n: COURSE_N, m: COURSE_M };

// parts that can be labelled
const PARTS = [
  { g: 'Weiche', id: 'backen', name: 'Backenschiene', d: 'Feste äussere Schiene. An ihr liegt die Zunge an.' },
  { g: 'Weiche', id: 'zunge', name: 'Weichenzunge', d: 'Bewegliche, spitz auslaufende Schiene. Sie entscheidet, ob der Zug geradeaus oder abzweigend fährt.' },
  { g: 'Weiche', id: 'antrieb', name: 'Weichenantrieb', d: 'Motor mit Stell- und Prüfstange. Er bewegt die Zungen und verriegelt sie in der Endlage.' },
  { g: 'Weiche', id: 'herz', name: 'Herzstück', d: 'Kreuzung zweier Schienen mit Herzstückspitze und Flügelschienen.' },
  { g: 'Weiche', id: 'radlenker', name: 'Radlenker', d: 'Führt das gegenüberliegende Rad, damit das andere die Herzstückspitze sicher passiert.' },
  { g: 'Weiche', id: 'schwellen', name: 'Weichenschwellen', d: 'Lange Schwellen, die beide Fahrwege gemeinsam tragen.' },
  { g: 'Oberleitung', id: 'mast', name: 'Mast', d: 'Steht etwa alle 50 m und trägt Ausleger und Rückleiter. Im Bahnhof tragen Joche alle Gleise gemeinsam.' },
  { g: 'Oberleitung', id: 'ausleger', name: 'Ausleger', d: 'Rohrkonstruktion mit Isolatoren. Er hält Tragseil und Fahrdraht in Position.' },
  { g: 'Oberleitung', id: 'trag', name: 'Tragseil', d: 'Oberes Seil, hängt zwischen den Masten durch.' },
  { g: 'Oberleitung', id: 'haenger', name: 'Hänger', d: 'Senkrechte Verbindungen. Sie halten den Fahrdraht auf gleicher Höhe.' },
  { g: 'Oberleitung', id: 'fahrdraht', name: 'Fahrdraht', d: 'Hier schleift der Stromabnehmer. Er liegt im Zickzack, damit sich die Schleifleiste gleichmässig abnutzt.' }
];
PARTS.forEach((p, i) => p.n = i + 1);
let labelsOn = false, activePart = null;

let CO = COURSE_N;
let W = 0, H = 0, DPR = 1;
let camX = 0, camTarget = 0, camH = 2.6, camHT = 2.6;
let rt = reduce ? CO.R.tAtZ(1250) : 0;
let playing = !reduce, visible = true, raf = 0, last = 0, lastTag = '', lastSpd = -1, lastStat;
const C = {};
const hexRgb = h => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); const n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const TK = ['sky2', 'sky', 'hill1', 'hill2', 'ground', 'slope', 'ballast', 'sleeper', 'sleeper-edge', 'rail-top', 'rail-side', 'clip', 'plat', 'plat-edge', 'roof', 'roof-under', 'build', 'build-side', 'win', 'mast', 'wire', 'tree', 'tree2', 'check', 'frog', 'ins', 'timber', 'tun', 'tun2', 'rock', 'portal'];
function readColors() {
  const cs = getComputedStyle(root);
  TK.forEach(k => { C[k] = cs.getPropertyValue('--t-' + k).trim() || '#888888'; });
  C.accent = cs.getPropertyValue('--accent').trim() || '#D71920';
  C.skyRgb = hexRgb(C.sky);
  kick();
}
function resize() {
  const r = stage.getBoundingClientRect();
  DPR = Math.min(2, window.devicePixelRatio || 1);
  W = r.width; H = r.height;
  canvas.width = Math.max(1, Math.round(W * DPR)); canvas.height = Math.max(1, Math.round(H * DPR));
  kick();
}
function poly(pts, color) {
  ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.closePath(); ctx.fillStyle = color; ctx.fill();
}
function strip(pairs, col) {
  if (pairs.length < 2) return;
  ctx.beginPath(); ctx.moveTo(pairs[0][0][0], pairs[0][0][1]);
  for (let i = 1; i < pairs.length; i++) ctx.lineTo(pairs[i][0][0], pairs[i][0][1]);
  for (let i = pairs.length - 1; i >= 0; i--) ctx.lineTo(pairs[i][1][0], pairs[i][1][1]);
  ctx.closePath(); ctx.fillStyle = col; ctx.fill();
}

function draw() {
  if (!W || !H) return;
  const c = CO, R = c.R, g = c.g, D = c.D, L = c.L, LOOP = c.LOOP, wrapZ = c.wrapZ, HCW = c.HCW, MH = HCW + 2.9;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  const now = R.at(rt);
  if (c.live != null) { const s = R.stops[0]; liveP1 = labelsOn ? 1 : rt < s.t ? 0 : sm((rt - s.t - 0.9) / 1.4); }
  const liveS = c.live != null ? R.stops[0] : null;
  const throwing = !!liveS && !labelsOn && rt >= liveS.t + 0.9 && rt < liveS.t + 2.3;
  // with labels on, the camera leaves the cab: a little higher, between the tracks, just before a switch
  const zc = labelsOn ? c.labelZ : now.z, xr = c.routeX(zc), xc = xr + camX;
  const yaw = Math.atan2(c.routeX(zc + 14) - xr, 14);
  const co = Math.cos(yaw), si = Math.sin(yaw);
  const hy = H * 0.36, f = Math.min(H * 1.05, W * 0.92);
  const P = (x, h, z) => {
    const dx = x - xc, dz = z - zc;
    const rx = dx * co - dz * si;
    let rz = dx * si + dz * co;
    if (rz < 0.25) rz = 0.25;
    return [W / 2 + rx * f / rz, hy + (camH - h) * f / rz];
  };
  const depth = (x, z) => (x - xc) * si + (z - zc) * co;
  const zb0 = zc + ZN * 0.85, z1 = zc + ZF;
  const base = Math.floor(zc / LOOP) * LOOP;
  const copies = (za, zb) => { const out = []; for (const k of [-1, 0, 1]) { const a = base + k * LOOP + za, b = base + k * LOOP + zb; if (b > zc - 3 && a < z1 + 40) out.push(a); } return out; };
  const anchors = labelsOn ? {} : null;
  const anc = (id, p) => { if (anchors && !anchors[id]) anchors[id] = p; };
  const wc = wrapZ(zc);

  // tunnel state
  let insideT = false, T0a = 0, T1a = 0, approachT = false;
  const SEC = [];
  let xm = 0, hw = 0;
  if (c.tunnel) {
    xm = D / 2; hw = D / 2 + L / 2 + 2.6;
    SEC.push([xm - hw, 0], [xm - hw, 3.2]);
    for (let i = 1; i < 12; i++) { const th = Math.PI - i * Math.PI / 12; SEC.push([xm + hw * Math.cos(th), 3.2 + 4.9 * Math.sin(th)]); }
    SEC.push([xm + hw, 3.2], [xm + hw, 0]);
    T0a = zc - wc + c.tunnel[0]; T1a = zc - wc + c.tunnel[1];
    insideT = wc >= c.tunnel[0] && wc < c.tunnel[1];
    approachT = wc < c.tunnel[0] && T0a < z1 + 5;
  }
  const ceilH = x => 3.2 + 4.9 * Math.sqrt(Math.max(0, 1 - Math.pow((x - xm) / hw, 2)));
  const ringPath = (z, sc) => {
    const p0 = P(xm + (SEC[0][0] - xm) * sc, 0, z); ctx.moveTo(p0[0], p0[1] + 2);
    for (const [x, h] of SEC) { const p = P(xm + (x - xm) * sc, h * sc, z); ctx.lineTo(p[0], p[1]); }
    const pe = P(xm + (SEC[SEC.length - 1][0] - xm) * sc, 0, z); ctx.lineTo(pe[0], pe[1] + 2);
    ctx.closePath();
  };
  function tunnelInterior(zNear, zFar, floor) {
    const zs = [];
    for (let z = zFar; z > zNear; ) { zs.push(z); const dd = z - zc; z -= dd > 40 ? 8 : dd > 15 ? 4 : 2; }
    zs.push(zNear);
    if (floor) poly([P(xm - hw, 0, zNear), P(xm + hw, 0, zNear), P(xm + hw, 0, zFar), P(xm - hw, 0, zFar)], C.tun2);
    for (let r = 0; r < zs.length - 1; r++) {
      const za = zs[r], zb = zs[r + 1], band = Math.floor(wrapZ(zb) / 12) % 2;
      for (let i = 0; i < SEC.length - 1; i++) {
        const [x1, h1] = SEC[i], [x2, h2] = SEC[i + 1], ceil = (h1 + h2) / 2 > 3.3;
        poly([P(x1, h1, za), P(x2, h2, za), P(x2, h2, zb), P(x1, h1, zb)], ceil ? (band ? C.tun2 : C.tun) : (band ? C.tun : C.tun2));
      }
    }
    ctx.strokeStyle = C.mast; ctx.lineWidth = 1.2;
    for (const xh of [xm - hw + 0.35, xm + hw - 0.35]) {
      ctx.beginPath();
      for (let z = zNear, first = true; ; z = Math.min(zFar, z + (z - zc < 20 ? 1.5 : 6))) { const p = P(xh, 1.05, z); if (first) { ctx.moveTo(p[0], p[1]); first = false; } else ctx.lineTo(p[0], p[1]); if (z >= zFar) break; }
      ctx.stroke();
    }
  }
  function tunnelLamps(zNear, zFar) {
    const k0 = Math.ceil(zNear / 25), k1 = Math.floor(zFar / 25);
    for (let k = k1; k >= k0; k--) {
      const z = k * 25, p = P(xm - hw + 0.08, 2.5, z), dd = Math.max(1, z - zc), rr = Math.max(1.2, 0.12 * f / dd);
      const gr = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], rr * 6);
      gr.addColorStop(0, 'rgba(255,214,140,.55)'); gr.addColorStop(1, 'rgba(255,214,140,0)');
      ctx.fillStyle = gr; ctx.fillRect(p[0] - rr * 6, p[1] - rr * 6, rr * 12, rr * 12);
      ctx.fillStyle = '#FFE3A8'; ctx.beginPath(); ctx.ellipse(p[0], p[1], rr * 1.6, rr * 0.7, 0, 0, 6.283); ctx.fill();
    }
  }

  // sky, hills, ground
  const sky = ctx.createLinearGradient(0, 0, 0, hy);
  sky.addColorStop(0, C.sky2); sky.addColorStop(1, C.sky);
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, hy + 1);
  for (const [col, amp, bs, fr] of [[C.hill1, c.hills[0], 0.03, 1], [C.hill2, c.hills[1], 0.01, 2.3]]) {
    ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(0, hy + 1);
    for (let sx = 0; sx <= W + 8; sx += 8) {
      const th = Math.atan((sx - W / 2) / f) + yaw;
      const hgt = bs + amp * (0.5 + 0.5 * Math.sin(th * 3.1 * fr + 1.3 * fr) * Math.cos(th * 1.7 * fr + 0.4));
      ctx.lineTo(sx, hy - hgt * H);
    }
    ctx.lineTo(W + 8, hy + 1); ctx.closePath(); ctx.fill();
  }
  ctx.fillStyle = C.ground; ctx.fillRect(0, hy, W, H - hy);
  if (insideT) tunnelInterior(zc + 0.6, Math.min(T1a, z1), true);
  const exitClip = fn => () => { ctx.save(); ctx.beginPath(); ringPath(T1a, 1); ctx.clip(); fn(); ctx.restore(); };

  // trees
  const tl = [];
  for (const tr of c.trees) for (const z of copies(tr.z, tr.z)) {
    const e = c.ext(wrapZ(z));
    if (!isFinite(e[0])) continue;
    const x = tr.side < 0 ? e[0] - tr.off : e[1] + tr.off, dd = depth(x, z);
    if (dd > 3 && dd < 150) tl.push({ x, z, dd, tr });
  }
  tl.sort((a, b) => b.dd - a.dd);
  const drawTree = o => {
    const b0 = P(o.x, 0, o.z), tp = P(o.x, o.tr.h, o.z), r = o.tr.rr * f / o.dd;
    ctx.strokeStyle = C.tree2; ctx.lineWidth = Math.max(1, 0.28 * f / o.dd);
    ctx.beginPath(); ctx.moveTo(b0[0], b0[1]); ctx.lineTo(tp[0], tp[1]); ctx.stroke();
    ctx.fillStyle = o.tr.c ? C.tree : C.tree2;
    ctx.beginPath(); ctx.ellipse(tp[0], tp[1] - r * 0.35, r, r * 1.12, 0, 0, 6.283); ctx.fill();
  };
  for (const o of tl) { if (insideT) { if (o.z > T1a) exitClip(() => drawTree(o))(); } else drawTree(o); }

  // ballast bed following the outermost tracks
  const bt = L / 2 + 0.45;
  {
    const sl = [], bl = [];
    for (let z = zb0; ; z = Math.min(z1, z + (z - zc < 25 ? 1 : 4))) {
      const e = c.ext(wrapZ(z));
      sl.push([P(e[0] - bt - 0.9, 0, z), P(e[1] + bt + 0.9, 0, z)]);
      bl.push([P(e[0] - bt, 0, z), P(e[1] + bt, 0, z)]);
      if (z >= z1) break;
    }
    strip(sl, C.slope); strip(bl, C.ballast);
  }
  for (let kk = Math.floor((zc + 26) / SP); kk >= Math.floor(zb0 / SP); kk--) {
    const zb = kk * SP, e = c.ext(wrapZ(zb)), wd = e[1] - e[0] + 2 * bt;
    for (const s of c.stones) {
      const z = zb + s.dz;
      if (z < zb0) continue;
      const sz = s.s * f / (z - zc);
      if (sz < 0.7) continue;
      const pt = P(e[0] - bt + s.x * wd, 0, z);
      ctx.fillStyle = s.fill; ctx.fillRect(pt[0] - sz / 2, pt[1] - sz * 0.3, sz, sz * 0.6);
    }
  }

  // sleepers: overlapping tracks merge into long switch timbers
  const hs = 0.03;
  for (let kk = Math.floor(z1 / SP); kk >= Math.ceil(zb0 / SP); kk--) {
    const za = kk * SP, zz = za + SLW, w = wrapZ(za);
    const xs = c.centersAt(w).sort((p, q) => p - q);
    const iv = [];
    for (const x of xs) { const a = x - L / 2, b = x + L / 2; if (iv.length && a <= iv[iv.length - 1][1] + 0.05) iv[iv.length - 1][1] = Math.max(iv[iv.length - 1][1], b); else iv.push([a, b]); }
    const near = za - zc < 45;
    for (const [xa, xb] of iv) {
      if (near) poly([P(xa, hs, za), P(xb, hs, za), P(xb, -0.03, za), P(xa, -0.03, za)], C['sleeper-edge']);
      poly([P(xa, hs, za), P(xb, hs, za), P(xb, hs, zz), P(xa, hs, zz)], xb - xa > L + 0.05 ? C.timber : C.sleeper);
    }
  }
  if (anchors) { const k = c.K[c.labelConn]; for (const a of copies(k.zs, k.zs)) anc('schwellen', P((k.xa + k.x(k.zs + 16)) / 2 + k.s * 0.9, hs, a + 16)); }

  // switch rods (Stell- und Prüfstange)
  for (const t of c.TO) for (const a of copies(t.z, t.z)) {
    for (const off of [0.65, 1.55]) {
      const z = a + t.d * off;
      if (z < zb0 || z > z1) continue;
      const s0 = t.x - g / 2, s1 = t.x + g / 2;
      const x0 = t.side < 0 ? s0 - 0.75 : s0 - 0.05, x1 = t.side < 0 ? s1 + 0.05 : s1 + 0.75;
      poly([P(x0, 0.075, z), P(x1, 0.075, z), P(x1, 0.075, z + 0.09), P(x0, 0.075, z + 0.09)], C.clip);
    }
  }
  // frog base plates
  for (const fr of c.F) for (const zF of copies(fr.z, fr.z)) {
    const lo = Math.max(zb0, fr.dir > 0 ? zF - 2.5 : zF - 5), hi = Math.min(z1, fr.dir > 0 ? zF + 5 : zF + 2.5);
    if (hi <= lo) continue;
    const pairs = [];
    for (let z = lo; ; z = Math.min(hi, z + 0.5)) {
      const x1 = fr.main, x2 = fr.xf(z);
      pairs.push([P(Math.min(x1, x2) - 0.17, 0.05, z), P(Math.max(x1, x2) + 0.17, 0.05, z)]);
      if (z >= hi) break;
    }
    strip(pairs, C.frog);
  }

  // rails
  function rail(xf, za, zb, topCol, maxStep, hTop) {
    za = Math.max(za, zb0); zb = Math.min(zb, z1);
    if (zb <= za) return;
    const RH = hTop || RAIL_H, zs = [];
    for (let z = za; ; ) { zs.push(z); if (z >= zb) break; const dd = z - zc; let st = dd < 20 ? 1 : dd < 45 ? 2.5 : 6; if (maxStep) st = Math.min(st, maxStep); z = Math.min(zb, z + st); }
    const foot = [], side = [], top = [];
    for (const z of zs) {
      const x = xf(z), face = x > xc ? x - HEAD / 2 : x + HEAD / 2;
      foot.push([P(x - 0.075, 0.045, z), P(x + 0.075, 0.045, z)]);
      side.push([P(face, RH, z), P(face, 0.045, z)]);
      top.push([P(x - HEAD / 2, RH, z), P(x + HEAD / 2, RH, z)]);
    }
    strip(foot, C['rail-side']); strip(side, C['rail-side']); strip(top, topCol || C['rail-top']);
  }
  function railB(xf, za, zb, toes) {
    const br = [];
    for (const t of toes) for (const a of copies(t, t)) if (a > za && a < zb) br.push(a);
    br.sort((p, q) => p - q);
    let s = za;
    for (const b of br) { rail(xf, s, b - 0.002); s = b + 0.002; }
    rail(xf, s, zb);
  }
  for (const t of c.T) for (const a of copies(t.z0, t.z1)) {
    const b = a + (t.z1 - t.z0);
    railB(t.L, a, b, t.toes); railB(t.R, a, b, t.toes);
  }
  for (const k of c.K) for (const a of copies(k.zs, k.ze)) {
    rail(k.railM, a, a + (k.ze - k.zs));
    rail(k.railP, a, a + (k.ze - k.zs));
    if (c.live === k.i && (throwing || (liveP1 > 0 && liveP1 < 1))) {
      const t = c.T.find(tt => Math.abs(tt.x - k.xa) < 0.01);
      rail(k.railM, a, a + BLADE, C.accent); rail(k.s > 0 ? t.R : t.L, a + 0.002, a + BLADE, C.accent);
    }
    if (anchors && k.i === c.labelConn) { anc('zunge', P(k.railM(a + 5), RAIL_H, a + 5)); anc('backen', P(k.railP(a + 7), RAIL_H, a + 7)); }
  }

  // frog details: wing rails beside the V, check rails opposite the frog
  const flare = (z, lo, hi, amt) => { const e = 0.9; return amt * (Math.max(0, 1 - (z - lo) / e) + Math.max(0, 1 - (hi - z) / e)); };
  for (const fr of c.F) for (const zF of copies(fr.z, fr.z)) {
    if (zF < zb0 - 4 || zF > z1 + 4) continue;
    const d = fr.dir, sgn = Math.sign(fr.main - fr.xf(zF + d * 3)) || 1;
    const wLo = Math.min(zF - d * 1.6, zF + d * 2.6), wHi = Math.max(zF - d * 1.6, zF + d * 2.6);
    rail(z => fr.main + sgn * (FW + flare(z, wLo, wHi, 0.09)), wLo, wHi, C.check, 0.3);
    rail(z => fr.xf(z) - sgn * (FW + flare(z, wLo, wHi, 0.09)), wLo, wHi, C.check, 0.3);
    const cLo = zF - 3.2, cHi = zF + 3.2;
    const sIn1 = Math.sign(fr.main - fr.other), sIn2 = Math.sign(fr.xf(zF) - fr.xo(zF));
    rail(z => fr.other + sIn1 * (FW + flare(z, cLo, cHi, 0.08)), cLo, cHi, C.check, 0.3, RAIL_H + 0.02);
    rail(z => fr.xo(z) + sIn2 * (FW + flare(z, cLo, cHi, 0.08)), cLo, cHi, C.check, 0.3, RAIL_H + 0.02);
    if (anchors && fr.k.i === c.labelConn && fr.dir > 0) {
      anc('herz', P(fr.main, RAIL_H, zF + 0.6));
      anc('radlenker', P(fr.other + sIn1 * FW, RAIL_H + 0.02, zF));
    }
  }

  // generic box: x0..x1, z a..b, height h0..h1
  const box = (x0, x1, za, zb, h0, h1, cTop, cSide, cFront, cBottom) => {
    if (zb < zb0 || za > z1) return;
    const zA = Math.max(za, zb0), zB = Math.min(zb, z1);
    if (cSide) {
      if (xc < x0) poly([P(x0, h0, zA), P(x0, h0, zB), P(x0, h1, zB), P(x0, h1, zA)], cSide);
      else if (xc > x1) poly([P(x1, h0, zA), P(x1, h0, zB), P(x1, h1, zB), P(x1, h1, zA)], cSide);
    }
    if (cTop && h1 < camH) poly([P(x0, h1, zA), P(x1, h1, zA), P(x1, h1, zB), P(x0, h1, zB)], cTop);
    if (cBottom && h0 > camH) poly([P(x0, h0, zA), P(x1, h0, zA), P(x1, h0, zB), P(x0, h0, zB)], cBottom);
    if (cFront && za >= zb0) poly([P(x0, h0, za), P(x1, h0, za), P(x1, h1, za), P(x0, h1, za)], cFront);
  };
  // platforms (low, before the tall objects)
  for (const p of c.platforms) for (const a of copies(p[2], p[3])) {
    const b = a + (p[3] - p[2]), x0 = p[0], x1 = p[1];
    box(x0, x1, a, b, 0, 0.55, C.plat, C['plat-edge'], C['plat-edge']);
    if (p[4] < 0) { box(x0, x0 + 0.35, a, b, 0.55, 0.551, C['plat-edge']); box(x0 + 0.78, x0 + 0.88, a, b, 0.552, 0.553, '#FFFFFF'); }
    else { box(x1 - 0.35, x1, a, b, 0.55, 0.551, C['plat-edge']); box(x1 - 0.88, x1 - 0.78, a, b, 0.552, 0.553, '#FFFFFF'); }
  }

  // overhead line geometry
  const spanU = z => { let u = ((z - M0) / SPAN) % 1; if (u < 0) u += 1; return u; };
  const zig = z => { const ph = ((z - M0) / SPAN) % 2; const u = ph < 0 ? ph + 2 : ph; return (u < 1 ? -0.3 + 0.6 * u : 0.3 - 0.6 * (u - 1)); };
  const hMsg = z => { const u = spanU(z); return HCW + 0.42 + 0.98 * Math.pow(2 * u - 1, 2); };

  // tall objects, sorted far to near
  const objs = [];
  // long objects (roofs, buildings, wagons) pass their far end: they stay until the camera has passed all of them
  // layer: 0 station buildings, 1 platform roofs, 2 everything else; posts and masts are drawn after roofs so they stay whole
  const add = (x, z, fn, z2, layer) => {
    const zz = z2 != null ? Math.min(Math.max(z, zc + 0.5), z2) : z;
    const dd = depth(x, zz);
    if (dd > -2 && dd < ZF + 20) objs.push({ dd, ly: layer == null ? 2 : layer, fn: insideT && z > T1a ? exitClip(fn) : fn });
  };
  // platform height under a point (masts and posts that stand on a platform start on its surface)
  const platH = (x, w) => { for (const p of c.platforms) if (w >= p[2] && w <= p[3] && x >= p[0] && x <= p[1]) return 0.55; return 0; };
  const ln = (a, b, col, w) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
  const lp = (a, b, u) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
  const zLab = Math.ceil((zc + 34 - M0) / SPAN) * SPAN + M0;
  const feedL = [], feedR = [];
  for (let m = Math.floor((zc - 60 - M0) / SPAN); m * SPAN + M0 < z1 + 60; m++) {
    const z = m * SPAN + M0, w = wrapZ(z), dz = Math.max(1, z - zc), lw = k => Math.max(1, k * f / dz);
    if (c.inT(w)) {
      feedL.push(null); feedR.push(null);
      if (z < zb0) continue;
      for (const tx of [0, D]) add(tx, z, () => {
        const xz = tx + zig(z), top = P(xz, ceilH(xz) - 0.05, z), ms = P(xz, hMsg(z), z);
        ln(top, ms, C.mast, lw(0.05)); ln(P(xz - 0.5, ceilH(xz - 0.5) - 0.05, z), P(xz, HCW + 0.25, z), C.mast, lw(0.035));
      });
      continue;
    }
    const xs = c.lanesAt(w), cxs = c.centersAt(w).sort((p, q) => p - q);
    if (!xs.length) continue;
    // masts stand outside everything that carries trains here, diverging tracks included
    const mL = cxs[0] - L / 2 - 2.25, mR = cxs[cxs.length - 1] + L / 2 + 2.25;
    const outside = cxs[0] < xs[0] - 0.01 || cxs[cxs.length - 1] > xs[xs.length - 1] + 0.01;
    feedL.push([mL, z]); feedR.push(xs.length > 1 || outside ? [mR, z] : null);
    if (z < zb0) continue;
    const mastBox = mx => { const b0 = platH(mx, w); box(mx - 0.35, mx + 0.35, z - 0.35, z + 0.65, b0, b0 + 0.3, '#8C9298', '#7A8086', '#7A8086'); box(mx - 0.15, mx + 0.15, z, z + 0.3, b0 + 0.3, MH, null, C.mast, C.mast); ln(P(mx, MH, z), P(mx, MH + 0.45, z), C.ins, lw(0.1)); };
    if (xs.length <= 2 && !outside) {
      const pairs = [[mL, xs[0]]];
      if (xs.length === 2) pairs.push([mR, xs[1]]);
      for (const [mx, tx] of pairs) add(mx, z, () => {
        mastBox(mx);
        const sg = Math.sign(tx - mx), xm2 = mx + sg * 0.15, zs = zig(z);
        // Rohrschwenkausleger: Spitzenrohr (oben), Stützrohr (schräg), Seitenrohr + Seitenhalter
        const T0 = P(xm2, HCW + 1.75, z), T1 = P(tx + zs + sg * 0.35, HCW + 1.42, z);
        const S0 = P(xm2, HCW + 0.3, z), S1 = P(tx + zs - sg * 0.4, HCW + 1.45, z);
        const R0 = lp(S0, S1, 0.32), rh = HCW + 0.3 + (1.15 * 0.32);
        const R1 = P(tx + zs - sg * 0.9, rh - 0.12, z), CW = P(tx + zs, HCW, z);
        ln(T0, T1, C.mast, lw(0.07)); ln(S0, S1, C.mast, lw(0.06)); ln(R0, R1, C.mast, lw(0.045)); ln(R1, CW, C.mast, lw(0.035));
        ln(T0, lp(T0, T1, 0.12), C.ins, lw(0.13)); ln(S0, lp(S0, S1, 0.12), C.ins, lw(0.12));
        const MS = P(tx + zs, hMsg(z), z);
        ctx.fillStyle = C.mast; ctx.beginPath(); ctx.arc(MS[0], MS[1], Math.max(1, 0.06 * f / dz), 0, 6.283); ctx.fill();
        if (anchors && Math.abs(z - zLab) < 1 && mx === mL) { anc('mast', P(mx, MH * 0.45, z)); anc('ausleger', lp(T0, T1, 0.55)); }
      });
    } else {
      const cx = cxs;
      add(mL, z, () => mastBox(mL));
      add(mR, z, () => mastBox(mR));
      add((mL + mR) / 2, z - 0.2, () => {
        box(mL - 0.15, mR + 0.15, z, z + 0.32, HCW + 2.45, HCW + 2.8, null, C.mast, C.mast, C.mast);
        for (const x of cx) {
          const xz = x + zig(z);
          ln(P(xz, HCW + 2.45, z), P(xz, hMsg(z), z), C.mast, lw(0.04));
          ln(P(xz - 0.6, hMsg(z) - 0.3, z), P(xz, HCW + 0.05, z), C.mast, lw(0.03));
          const MS = P(xz, hMsg(z), z);
          ctx.fillStyle = C.ins; ctx.beginPath(); ctx.arc(MS[0], MS[1], Math.max(1, 0.07 * f / dz), 0, 6.283); ctx.fill();
        }
      });
    }
  }
  // canopies and station buildings
  for (const cp of c.canopies || []) for (const a of copies(cp[2], cp[3])) {
    const len = cp[3] - cp[2];
    for (let pz = a + 4; pz < a + len; pz += 9) add(cp[4], pz, () => box(cp[4], cp[4] + 0.2, pz, pz + 0.2, 0.55, 3.3, null, C.mast, C.mast));
    add((cp[0] + cp[1]) / 2, a, () => box(cp[0], cp[1], a, a + len, 3.3, 3.55, null, C.roof, C.roof, C['roof-under']), a + len, 1);
  }
  for (const bd of c.buildings || []) for (const a of copies(bd[2], bd[3])) {
    const [bx0, bx1, , , bh] = bd, len = bd[3] - bd[2], ridge = bh + 2.4, rx = (bx0 + bx1) / 2;
    add(bx1, a, () => {
      box(bx0, bx1, a, a + len, 0, bh, null, C.build, C['build-side']);
      if (xc > bx1) {
        const rows = bh > 7 ? [[1.2, 2.4], [3.6, 4.8], [6.0, 7.2]] : [[1.2, 2.4], [3.6, 4.8]].filter(r => r[1] < bh - 0.4);
        for (let wz = a + 4; wz < a + len - 3; wz += 4) for (const [h0, h1] of rows) {
          if (wz + 2 < zb0 || wz > z1) continue;
          const wa = Math.max(wz, zb0), wb = Math.min(wz + 2, z1);
          const isDoor = h0 < 2 && Math.abs(wz - (a + len / 2)) < 3;
          poly([P(bx1 + 0.01, isDoor ? 0 : h0, wa), P(bx1 + 0.01, isDoor ? 0 : h0, wb), P(bx1 + 0.01, isDoor ? 2.6 : h1, wb), P(bx1 + 0.01, isDoor ? 2.6 : h1, wa)], isDoor ? C.roof : C.win);
        }
        const zA = Math.max(a, zb0), zB = Math.min(a + len, z1);
        if (zB > zA) poly([P(bx1, bh, zA), P(bx1, bh, zB), P(rx, ridge, zB), P(rx, ridge, zA)], C.roof);
      }
      if (a >= zb0) poly([P(bx0, bh, a), P(bx1, bh, a), P(rx, ridge, a)], C['build-side']);
    }, a + len, 0);
  }
  // station name signs
  const sign = (xb, z, text) => add(xb, z, () => {
    if (z < zb0 || z > z1) return;
    const faceSign = xb > xc ? -1 : 1;
    for (const pz of [z + 0.3, z + 2.9]) box(xb - 0.03, xb + 0.03, pz, pz + 0.06, 0.55, 2.15, null, C.mast, C.mast);
    const q00 = P(xb, 2.15, z), q10 = P(xb, 2.15, z + 3.2), q11 = P(xb, 2.75, z + 3.2), q01 = P(xb, 2.75, z);
    poly([q00, q10, q11, q01], '#26303C');
    const span = Math.hypot(q10[0] - q00[0], q10[1] - q00[1]);
    if (span > 26) {
      ctx.save();
      const o = faceSign < 0 ? q11 : q01, ex = faceSign < 0 ? q01 : q11, ey = faceSign < 0 ? q10 : q00;
      ctx.setTransform(DPR * (ex[0] - o[0]) / 100, DPR * (ex[1] - o[1]) / 100, DPR * (ey[0] - o[0]) / 20, DPR * (ey[1] - o[1]) / 20, DPR * o[0], DPR * o[1]);
      ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = '700 12px Figtree, Arial, sans-serif';
      ctx.fillText(text, 50, 10);
      ctx.restore();
    }
  });
  for (const [x, z, t] of c.signs || []) for (const a of copies(z, z)) sign(x, a, t);
  for (const pp of c.people) for (const z of copies(pp.z, pp.z)) add(pp.x, z, () => box(pp.x, pp.x + 0.5, z, z + 0.4, 0.55, 2.25, null, pp.c, pp.c));
  // footbridge (Passerelle) with lift towers
  if (c.bridge) for (const z of copies(c.bridge.z, c.bridge.z)) {
    const br = c.bridge;
    for (const tx of br.towers) add(tx, z, () => box(tx - 1.1, tx + 1.1, z - 1.2, z + 1.2, 0.55, 8.7, null, C['build-side'], C.build));
    add((br.x0 + br.x1) / 2, z - 1.5, () => {
      box(br.x0, br.x1, z - 1.5, z + 1.5, 7.3, 7.85, null, C['build-side'], C.build, C['roof-under']);
      box(br.x0, br.x1, z - 1.5, z - 1.42, 7.85, 9.0, null, null, 'rgba(160,190,210,.35)');
      box(br.x0, br.x1, z - 1.5, z + 1.5, 9.0, 9.15, null, C.roof, C.roof, C.roof);
    });
  }
  // parked freight wagons on the siding
  if (c.wagons) {
    const wg = c.wagons, cols = ['#7A4A3A', '#5E6B73', '#3F5B4A', '#8A6A3A'];
    for (let i = 0; i < wg.n; i++) for (const z of copies(wg.z0 + i * 14.2, wg.z0 + i * 14.2)) {
      add(wg.x, z, () => {
        box(wg.x - 1.2, wg.x + 1.2, z + 0.4, z + 12.6, 0.45, 1.05, null, '#2B3036', '#2B3036');
        box(wg.x - 1.45, wg.x + 1.45, z, z + 13, 1.05, 3.9, null, cols[i % 4], cols[i % 4]);
      }, z + 13);
    }
  }
  // buffer stops at stub tracks
  for (const t of c.T) if (t.o.stop) for (const z of copies(t.z1, t.z1)) add(t.x, z, () => {
    box(t.x - 0.95, t.x + 0.95, z - 0.4, z + 0.4, 0.2, 1.15, null, '#C8102E', '#C8102E');
    box(t.x - 0.95, t.x + 0.95, z - 0.42, z - 0.4, 0.62, 0.78, null, null, '#FFFFFF');
  });
  // lamp with glow; off lamps stay as dark glass
  const lamp = (pt, r, on, col, glow) => {
    if (on) {
      const gr = ctx.createRadialGradient(pt[0], pt[1], 0, pt[0], pt[1], r * glow);
      gr.addColorStop(0, 'rgba(' + col + ',.55)'); gr.addColorStop(1, 'rgba(' + col + ',0)');
      ctx.fillStyle = gr; ctx.fillRect(pt[0] - r * glow, pt[1] - r * glow, r * glow * 2, r * glow * 2);
    }
    ctx.fillStyle = on ? 'rgb(' + col + ')' : '#2A2F35';
    ctx.beginPath(); ctx.arc(pt[0], pt[1], r, 0, 6.283); ctx.fill();
    if (on) { ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.beginPath(); ctx.arc(pt[0] - r * 0.25, pt[1] - r * 0.25, r * 0.35, 0, 6.283); ctx.fill(); }
  };
  // main signals, Swiss type L: oblong black screen, lamps top to bottom green, orange, red, green.
  // r = Halt, g = Fahrbegriff 1, g40 = Fahrbegriff 2 (green over orange, 40 km/h), g60 = Fahrbegriff 3 (two green)
  const ASPECT = { r: { r: 1 }, g: { g1: 1 }, g40: { g1: 1, o: 1 }, g60: { g1: 1, g2: 1 } };
  const LPOS = [['g1', 4.66, '46,214,120'], ['o', 4.34, '255,168,0'], ['r', 4.02, '255,52,44'], ['g2', 3.70, '46,214,120']];
  for (const sg of c.signals || []) for (const sz of copies(sg.z, sg.z)) add(sg.x, sz, () => {
    if (sz < zb0) return;
    const asp = labelsOn && c.id === 'n' ? 'g' : sg.st(rt, wc, R), on = ASPECT[asp] || {};
    const sx = sg.x, dd = Math.max(1, sz - zc), rr = Math.max(1.3, 0.1 * f / dd);
    const face = (x0, x1, h0, h1, col) => poly([P(x0, h0, sz), P(x1, h0, sz), P(x1, h1, sz), P(x0, h1, sz)], col);
    box(sx - 0.08, sx + 0.08, sz + 0.06, sz + 0.22, 0, 3.4, null, '#7C848C', '#7C848C');
    // ladder and platform behind the screen
    ln(P(sx + 0.16, 0.2, sz + 0.25), P(sx + 0.16, 3.4, sz + 0.25), '#7C848C', Math.max(1, 0.03 * f / dd));
    box(sx - 0.4, sx + 0.4, sz + 0.1, sz + 0.5, 3.35, 3.42, '#6A7279', '#6A7279', '#6A7279');
    box(sx - 0.32, sx + 0.32, sz, sz + 0.2, 3.45, 4.95, '#2B3036', '#2B3036');
    face(sx - 0.32, sx + 0.32, 3.45, 4.95, '#3D434A');
    face(sx - 0.27, sx + 0.27, 3.5, 4.9, '#101316');
    for (const [k, lh, col] of LPOS) {
      const hood = [P(sx - 0.15, lh + 0.14, sz - 0.12), P(sx + 0.15, lh + 0.14, sz - 0.12), P(sx + 0.15, lh + 0.14, sz), P(sx - 0.15, lh + 0.14, sz)];
      poly(hood, '#1A1E22');
      lamp(P(sx, lh, sz - 0.01), rr, !!on[k], col, 5);
    }
    // white signal plate under the screen
    face(sx - 0.2, sx + 0.2, 2.95, 3.3, '#F4F5F6');
    face(sx - 0.2, sx + 0.2, 3.1, 3.15, '#202326');
  });
  // dwarf signals (Zwergsignale): black housing with the top right corner cut, three white lamps
  // top left, bottom left, bottom right. h = Halt (both bottom), f = Fahrt (both left), v = Fahrt mit Vorsicht (diagonal)
  const DW = { h: [0, 1, 1], f: [1, 1, 0], v: [1, 0, 1] };
  for (const dw of c.dwarfs || []) for (const dz of copies(dw.z, dw.z)) add(dw.x, dz, () => {
    if (dz < zb0) return;
    const asp = dw.st(rt, wc, R), on = DW[asp] || DW.h, sx = dw.x, d2 = Math.max(1, dz - zc);
    const x0 = sx - 0.32, x1 = sx + 0.32, h0 = 0.32, h1 = 0.96, ch = 0.24;
    box(sx - 0.06, sx + 0.06, dz + 0.05, dz + 0.17, 0, h0, null, '#5E666E', '#5E666E');
    box(x0, x1, dz, dz + 0.24, h0, h1, '#2B3036', '#2B3036');
    poly([P(x0, h0, dz), P(x1, h0, dz), P(x1, h1 - ch, dz), P(x1 - ch, h1, dz), P(x0, h1, dz)], '#0E1012');
    const r = Math.max(1.1, 0.075 * f / d2);
    lamp(P(x0 + 0.15, h1 - 0.16, dz - 0.01), r, !!on[0], '255,247,222', 4.5);
    lamp(P(x0 + 0.15, h0 + 0.15, dz - 0.01), r, !!on[1], '255,247,222', 4.5);
    lamp(P(x1 - 0.15, h0 + 0.15, dz - 0.01), r, !!on[2], '255,247,222', 4.5);
  });
  // point machines (Weichenantrieb) with position light
  for (const t of c.TO) for (const z of copies(t.z, t.z)) {
    const mx = t.side < 0 ? t.x - g / 2 - 0.95 : t.x + g / 2 + 0.95, zA = t.d > 0 ? z + 0.4 : z - 2.0;
    const live = c.live === t.k.i && t.d > 0;
    add(mx, zA, () => {
      box(mx - 0.25, mx + 0.25, zA, zA + 1.6, 0, 0.42, '#3F454B', '#2E3338', '#2E3338');
      const lc = P(mx, 0.5, zA + 0.3), lr = Math.max(1.2, 0.09 * f / Math.max(1, zA - zc));
      ctx.fillStyle = live ? (throwing ? (Math.sin(rt * 14) > 0 ? '#FFB547' : '#5B4A2A') : (liveP1 >= 1 ? '#3BD47E' : '#9AA1A8')) : '#3BD47E';
      ctx.beginPath(); ctx.arc(lc[0], lc[1], lr, 0, 6.283); ctx.fill();
    });
    if (anchors && t.k.i === c.labelConn && t.d > 0) anc('antrieb', P(mx, 0.42, zA + 0.8));
  }
  // tunnel entrance seen from outside: interior, darkness, lamps, then the mountain with the portal
  if (approachT) add(xm, T0a, () => {
    const zFar = Math.min(T1a, z1);
    tunnelInterior(T0a, zFar, false);
    ctx.fillStyle = 'rgba(4,6,8,.55)'; ctx.beginPath(); ringPath(T0a, 1); ctx.fill();
    tunnelLamps(T0a, zFar);
    ctx.beginPath();
    const N = 36;
    for (let i = 0; i <= N; i++) {
      const u = i / N, x = xm - 95 + 190 * u;
      const h = 8 + 20 * Math.sin(Math.PI * u) + 3.5 * Math.sin(u * 23) + 2 * Math.cos(u * 41);
      const p = P(x, h, T0a); if (i === 0) { const b = P(x, 0, T0a); ctx.moveTo(b[0], b[1] + 2); } ctx.lineTo(p[0], p[1]);
    }
    const be = P(xm + 95, 0, T0a); ctx.lineTo(be[0], be[1] + 2); ctx.closePath();
    ringPath(T0a, 1.14);
    const gTop = P(xm, 28, T0a), gBot = P(xm, 0, T0a);
    const mg = ctx.createLinearGradient(0, gTop[1], 0, gBot[1]);
    mg.addColorStop(0, C.tree2); mg.addColorStop(0.5, C.rock); mg.addColorStop(1, C.rock);
    ctx.fillStyle = mg; ctx.fill('evenodd');
    // bushes on the slope, kept inside the mountain outline
    ctx.save(); ctx.clip('evenodd');
    const vr = rng(77), dM = Math.max(1, T0a - zc);
    for (let i = 0; i < 80; i++) {
      const x = xm - 90 + 180 * vr(), h = 10 + 22 * vr(), p = P(x, h, T0a), rr = (0.9 + vr() * 1.8) * f / dM;
      ctx.fillStyle = vr() < 0.5 ? C.tree : C.tree2; ctx.beginPath(); ctx.ellipse(p[0], p[1], rr, rr * 0.8, 0, 0, 6.283); ctx.fill();
    }
    ctx.restore();
    ctx.beginPath(); ringPath(T0a, 1.14); ringPath(T0a, 1); ctx.fillStyle = C.portal; ctx.fill('evenodd');
  });
  objs.sort((a, b) => a.ly - b.ly || b.dd - a.dd);
  for (const o of objs) o.fn();

  // wires: Tragseil, Fahrdraht, Hänger, Rückleiter
  const wire = (xf, za, zb, hf, w, zigOn) => {
    za = Math.max(za, zb0); zb = Math.min(zb, z1);
    if (zb <= za) return;
    ctx.lineWidth = w; ctx.beginPath();
    let first = true;
    for (let z = za; ; z = Math.min(zb, z + (z - zc < 30 ? 1.5 : 5))) {
      const p = P(xf(z) + (zigOn ? zig(z) : 0), hf(z), z);
      if (first) { ctx.moveTo(p[0], p[1]); first = false; } else ctx.lineTo(p[0], p[1]);
      if (z >= zb) break;
    }
    ctx.stroke();
  };
  const droppers = (xf, za, zb) => {
    ctx.lineWidth = 1;
    const k0 = Math.ceil((Math.max(za, zc + 3) - M0) / (SPAN / 6)), k1 = Math.floor((Math.min(zb, zc + 75) - M0) / (SPAN / 6));
    ctx.beginPath();
    for (let k = k0; k <= k1; k++) {
      if (k % 6 === 0) continue;
      const z = M0 + k * SPAN / 6, x = xf(z) + zig(z);
      const a = P(x, HCW, z), b = P(x, hMsg(z), z);
      ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
    }
    ctx.stroke();
  };
  ctx.strokeStyle = C.wire;
  const cw = () => HCW;
  for (const t of c.T) for (const a of copies(t.z0, t.z1)) {
    const b = a + (t.z1 - t.z0), xf = () => t.x;
    wire(xf, a, b, hMsg, 1, true); wire(xf, a, b, cw, 1.4, true); droppers(xf, a, b);
  }
  for (const k of c.K) for (const a of copies(k.zs, k.ze)) {
    const b = a + (k.ze - k.zs);
    wire(k.x, a, b, hMsg, 1, true); wire(k.x, a, b, cw, 1.4, true); droppers(k.x, a, b);
  }
  for (const fd of [feedL, feedR]) for (let i = 0; i < fd.length - 1; i++) {
    const p0 = fd[i], p1 = fd[i + 1];
    if (!p0 || !p1) continue;
    wire(z => p0[0] + (p1[0] - p0[0]) * (z - p0[1]) / SPAN, p0[1], p1[1], z => MH + 0.4 - 0.35 * 4 * spanU(z) * (1 - spanU(z)), 1, false);
  }
  if (anchors) {
    const zm = zLab - SPAN / 2, zh = zLab - SPAN / 6 * 4, zd = zLab - SPAN / 6 * 2;
    anc('trag', P(zig(zm), hMsg(zm), zm));
    anc('haenger', P(zig(zh), (hMsg(zh) + HCW) / 2, zh));
    anc('fahrdraht', P(D + zig(zd), HCW, zd));
  }

  if (insideT) {
    ctx.beginPath(); ctx.rect(0, 0, W, H);
    if (T1a < z1) ringPath(T1a, 1);
    ctx.fillStyle = 'rgba(3,5,8,.5)'; ctx.fill('evenodd');
    tunnelLamps(zc + 1, Math.min(T1a, z1));
  } else {
    const skyc = C.skyRgb.join(',');
    const fog = ctx.createLinearGradient(0, hy - (H - hy) * 0.08, 0, hy + (H - hy) * 0.3);
    fog.addColorStop(0, 'rgba(' + skyc + ',0)');
    fog.addColorStop(0.25, 'rgba(' + skyc + ',.7)');
    fog.addColorStop(1, 'rgba(' + skyc + ',0)');
    ctx.fillStyle = fog; ctx.fillRect(0, hy - (H - hy) * 0.08, W, (H - hy) * 0.38);
  }

  // gauge measurement on our own track, 14 mm below top of rail
  const zM = zc + 6.5, hM = RAIL_H - 0.014, rx = c.routeX(zM);
  const m1 = P(rx - g / 2 + HEAD / 2, hM, zM), m2 = P(rx + g / 2 - HEAD / 2, hM, zM);
  ctx.strokeStyle = C.accent; ctx.fillStyle = C.accent; ctx.lineWidth = 2;
  ctx.setLineDash([6, 5]); ctx.beginPath(); ctx.moveTo(m1[0] + 6, m1[1]); ctx.lineTo(m2[0] - 6, m2[1]); ctx.stroke(); ctx.setLineDash([]);
  for (const [pt, dir] of [[m1, 1], [m2, -1]]) {
    ctx.beginPath(); ctx.moveTo(pt[0], pt[1] - 9); ctx.lineTo(pt[0], pt[1] + 9); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pt[0] + dir, pt[1]); ctx.lineTo(pt[0] + dir * 9, pt[1] - 5); ctx.lineTo(pt[0] + dir * 9, pt[1] + 5); ctx.closePath(); ctx.fill();
  }
  tag.style.left = ((m1[0] + m2[0]) / 2) + 'px';
  tag.style.top = (m1[1] - 14) + 'px';
  const label = Math.round(g * 1000) + ' mm';
  if (label !== lastTag) { tag.textContent = label; lastTag = label; }

  if (anchors) drawLabels(anchors);

  // HUD
  const kmh = labelsOn ? 0 : Math.round(now.v * 3.6);
  if (kmh !== lastSpd) { lastSpd = kmh; gSpdEl.textContent = kmh; }
  updateLive(now, kmh);
  const st = labelsOn ? 'Bauteile beschriftet · Fahrt pausiert' : c.status(rt, now.z), sk = st && tr(st);
  if (sk !== lastStat) {
    lastStat = sk;
    if (sk) { gStatT.textContent = sk; gStatEl.classList.add('on'); } else gStatEl.classList.remove('on');
  }
}

// numbered callouts, stacked on the left and right edge of the stage
function drawLabels(anchors) {
  ctx.font = '600 12px Figtree, Arial, sans-serif';
  ctx.textBaseline = 'middle';
  const items = [];
  for (const p of PARTS) {
    const a = anchors[p.id];
    if (!a || a[0] < 4 || a[0] > W - 4 || a[1] < 4 || a[1] > H - 4) continue;
    const txt = p.n + '  ' + p.name;
    items.push({ p, x: a[0], y: a[1], w: ctx.measureText(txt).width + 18, txt });
  }
  const compact = W < 520;
  const cols = [items.filter(i => i.x < W / 2), items.filter(i => i.x >= W / 2)];
  cols.forEach((col, ci) => {
    col.sort((a, b) => a.y - b.y);
    let prev = 64;
    for (const it of col) { it.ly = Math.max(it.y, prev + 28); prev = it.ly; }
    const over = prev - (H - 52);
    if (over > 0) for (const it of col) it.ly -= over;
    for (const it of col) {
      const on = activePart === it.p.id;
      const txt = compact ? String(it.p.n) : it.txt, w = compact ? 24 : it.w;
      const lx = ci === 0 ? 10 : W - 10 - w;
      const ex = ci === 0 ? lx + w : lx;
      ctx.strokeStyle = on ? C.accent : 'rgba(255,255,255,.9)'; ctx.lineWidth = on ? 2 : 1.4;
      ctx.beginPath(); ctx.moveTo(ex, it.ly); ctx.lineTo(it.x, it.y); ctx.stroke();
      ctx.fillStyle = on ? C.accent : '#FFFFFF';
      ctx.beginPath(); ctx.arc(it.x, it.y, on ? 4 : 3, 0, 6.283); ctx.fill();
      ctx.strokeStyle = 'rgba(12,15,20,.8)'; ctx.lineWidth = 1.2; ctx.stroke();
      ctx.fillStyle = on ? C.accent : 'rgba(12,15,20,.78)';
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(lx, it.ly - 11, w, 22, 11) : ctx.rect(lx, it.ly - 11, w, 22); ctx.fill();
      ctx.fillStyle = '#FFFFFF'; ctx.textAlign = compact ? 'center' : 'left';
      ctx.fillText(txt, compact ? lx + w / 2 : lx + 9, it.ly + 0.5);
    }
  });
  ctx.textAlign = 'left';
}

function step(ts) {
  raf = 0;
  const dt = last ? Math.min(0.05, (ts - last) / 1000) : 0;
  last = ts;
  camX += (camTarget - camX) * (1 - Math.pow(0.002, dt));
  camH += (camHT - camH) * (1 - Math.pow(0.004, dt));
  const camDone = Math.abs(camTarget - camX) < 0.001 && Math.abs(camHT - camH) < 0.002;
  if (camDone) { camX = camTarget; camH = camHT; }
  if (playing) { rt += dt * CO.ride.rate(CO.R.at(rt).v); if (rt >= CO.R.DUR) rt -= CO.R.DUR; }
  draw();
  if ((playing || !camDone) && visible && !document.hidden && !views.home.hidden) raf = requestAnimationFrame(step); else last = 0;
}
function kick() { if (!raf) raf = requestAnimationFrame(step); }
readColors();
if ('ResizeObserver' in window) new ResizeObserver(resize).observe(stage); else resize();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', readColors);
new MutationObserver(readColors).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
if ('IntersectionObserver' in window) new IntersectionObserver(en => { visible = en[0].isIntersecting; if (visible) kick(); }).observe(stage);
document.addEventListener('visibilitychange', () => { if (!document.hidden) kick(); });
stage.addEventListener('pointermove', e => {
  if (reduce || labelsOn) return;
  const r = stage.getBoundingClientRect();
  camTarget = ((e.clientX - r.left) / r.width - 0.5) * 0.7;
  kick();
});
stage.addEventListener('pointerleave', () => { if (!labelsOn) camTarget = 0; kick(); });
function setPlaying(on) {
  playing = on;
  pauseBtn.setAttribute('aria-pressed', on ? 'false' : 'true');
  pauseBtn.setAttribute('aria-label', on ? tr('Animation pausieren') : tr('Animation abspielen'));
  $('#ico-pause').toggleAttribute('hidden', !on);
  $('#ico-play').toggleAttribute('hidden', on);
  kick();
}
pauseBtn.addEventListener('click', () => setPlaying(!playing));  setPlaying(playing);

// gauge selector: each gauge has its own course
const seg = $('#seg'), segBtns = $$('button', seg), caption = $('#caption');
// live ride data beside the stage: distance, speed, ride time, next point
const lvDist = $('#lv-dist'), lvSpeed = $('#lv-speed'), lvTime = $('#lv-time'), lvBar = $('#lv-bar'), lvNext = $('#lv-next');
const lcKmh = $('#lc-kmh'), lcS = $('#lc-s'), lc10 = $('#lc-10'), lcM = $('#lc-m'), lcH = $('#lc-h'), lcF = $('#lc-f');
const fmtDec = (v, dec) => zahlText(v, { minimumFractionDigits: dec, maximumFractionDigits: dec });
const fmtM = m => Math.round(m).toLocaleString(LOCALE) + ' m';
let lvKey = '';
function liveSetup() {
  const c = CO, z0 = c.ride.Z0;
  $('#lv-marks').innerHTML = c.wp.map(p => `<span class="mk${p.stop ? ' stop' : ''}" style="left:${((p.z - z0) / c.LOOP * 100).toFixed(2)}%"></span>`).join('');
  lvKey = '';
}
function updateLive(now, kmh) {
  const c = CO, z0 = c.ride.Z0, d = Math.max(0, Math.min(c.LOOP, now.z - z0)), dm = Math.round(d);
  const t = Math.floor(rt), key = dm + '|' + kmh + '|' + t + '|' + c.id;
  if (key === lvKey) return;
  lvKey = key;
  lvDist.textContent = fmtM(dm);
  lvSpeed.textContent = kmh + ' km/h';
  lvTime.textContent = Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
  lvBar.style.width = (d / c.LOOP * 100).toFixed(2) + '%';
  const next = c.wp.find(p => p.z - z0 > d + 1);
  lvNext.innerHTML = next ? tr('Nächster Punkt: <b>{p}</b> in {m}', { p: esc(tr(next.t)), m: fmtM(next.z - z0 - d) }) : esc(tr('Gleich ist die Runde komplett: noch {m}', { m: fmtM(c.LOOP - d) }));
  // distance covered at the current speed: km/h ÷ 3,6 = m/s
  const ms = kmh / 3.6;
  lcKmh.textContent = kmh + ' km/h';
  lcS.textContent = fmtDec(ms, 1) + ' m';
  lc10.textContent = Math.round(ms * 10).toLocaleString(LOCALE) + ' m';
  lcM.textContent = Math.round(ms * 60).toLocaleString(LOCALE) + ' m';
  lcH.textContent = kmh.toLocaleString(LOCALE) + ' km';
  lcF.textContent = kmh ? tr('Rechnung: {kmh} km/h ÷ 3,6 = {ms} m pro Sekunde', { kmh, ms: fmtDec(ms, 1) }) : tr('Der Zug steht: 0 m pro Sekunde.');
}
function gaugeTexts() {
  liveSetup();
  caption.innerHTML = CO.caption;
  canvas.setAttribute('aria-label', CO.id === 'n'
    ? tr('Führerstandsfahrt auf Normalspur, 1435 mm: Tunnel, Durchfahrt Erlenried, Halt in Sonnwil')
    : tr('Führerstandsfahrt auf Meterspur, 1000 mm: Weichenverbindung und Bahnhof Lindmatt'));
}
function selectGauge(btn, focus) {
  segBtns.forEach(b => { const on = b === btn; b.setAttribute('aria-checked', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; });
  seg.style.setProperty('--seg-i', segBtns.indexOf(btn));
  const next = COURSES[btn.dataset.course];
  if (next !== CO) {
    stage.classList.add('swap');
    setTimeout(() => {
      CO = next;
      rt = labelsOn && CO.live != null ? CO.R.stops[0].t + 2.9 : reduce ? CO.R.tAtZ(CO.id === 'n' ? 1250 : 405) : 0;
      if (labelsOn) { camTarget = CO.labelX; camX = camTarget; }
      lastStat = undefined; lastSpd = -1;
      gaugeTexts();
      stage.classList.remove('swap');
      kick();
    }, reduce ? 0 : 180);
  }
  if (focus) btn.focus();
}
segBtns.forEach(b => b.addEventListener('click', () => selectGauge(b)));
seg.addEventListener('keydown', e => {
  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
  e.preventDefault();
  const cur = segBtns.findIndex(b => b.getAttribute('aria-checked') === 'true');
  selectGauge(segBtns[(cur + 1) % segBtns.length], true);
});
gaugeTexts();
