/* RailBase – Karte «Wo fährt er?» auf den Fahrzeugseiten */
'use strict';

/* =====================================================================
   EINSATZKARTE: Schweiz mit Normalspurnetz, darauf rot die Strecken und
   Gebiete aus js/daten/einsatz.js. Strecken folgen den echten Gleisen:
   zwischen zwei Bahnhöfen wird der kürzeste Weg im Netz gesucht.
   ===================================================================== */
const einsatzKarte = (() => {
  const N = window.NETZ, NS = 'http://www.w3.org/2000/svg';
  const box = $('#zug-einsatz'), svg = $('#ez-map'), txt = $('#ez-txt');
  const TRAM = new Set(['VBZ', 'BVB', 'TPG', 'SVB', 'BLT', 'VBG', 'TL']);
  const dec = d => { const p = []; let x = 0, y = 0; for (let i = 0; i < d.length; i += 2) { x += d[i]; y += d[i + 1]; p.push([x, y]); } return p; };
  let G = null; // built on first use

  function baue() {
    const border = N.border.map(dec);
    let y1 = -Infinity, x0 = Infinity, x1 = -Infinity, y0 = Infinity;
    for (const r of border) for (const [x, y] of r) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    const flip = y => y1 - y;
    const segs = N.segs
      .filter(([oi, gi]) => !TRAM.has(N.ops[oi]) && /1435/.test(N.gauges[gi]))
      .map(([oi, gi, ei, tr, li, len, d]) => ({ len, pts: dec(d), sbb: N.ops[oi] === 'SBB CFF FFS' }));
    // graph: segment ends are the corners; ends closer than 60 m are joined
    const key = ([x, y]) => x + ',' + y, adj = new Map(), pos = new Map();
    const add = (k, p, e) => { if (!adj.has(k)) { adj.set(k, []); pos.set(k, p); } adj.get(k).push(e); };
    segs.forEach((s, i) => {
      const A = s.pts[0], B = s.pts[s.pts.length - 1];
      add(key(A), A, { to: key(B), i, w: s.len }); add(key(B), B, { to: key(A), i, w: s.len });
    });
    const ks = [...pos.keys()];
    for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) {
      const p = pos.get(ks[i]), q = pos.get(ks[j]), dd = Math.hypot(p[0] - q[0], p[1] - q[1]);
      if (dd > 0 && dd <= 3) { adj.get(ks[i]).push({ to: ks[j], i: -1, w: dd * N.unit }); adj.get(ks[j]).push({ to: ks[i], i: -1, w: dd * N.unit }); }
    }
    const pathD = pts => 'M' + pts.map(([x, y]) => x + ' ' + flip(y)).join('L');
    G = {
      segs, adj, pos, flip, pathD,
      vb: [x0 - 300, flip(y1) - 300, x1 - x0 + 600, y1 - y0 + 600],
      land: border.map(r => pathD(r) + 'Z').join(''),
      netz: segs.map(s => pathD(s.pts)).join(''),
      sbb: segs.filter(s => s.sbb).map(s => pathD(s.pts)).join('')
    };
  }
  const node = name => N.nodes.find(n => n[0] === name);
  function naechste(x, y) {
    let best = null, bd = Infinity;
    for (const [k, p] of G.pos) { const dd = Math.hypot(p[0] - x, p[1] - y); if (dd < bd) { bd = dd; best = k; } }
    return best;
  }
  // shortest way between two corners (Dijkstra); returns the segment ids on the way
  function weg(a, b) {
    const dist = new Map([[a, 0]]), prev = new Map(), done = new Set(), q = [[0, a]];
    while (q.length) {
      let m = 0; for (let i = 1; i < q.length; i++) if (q[i][0] < q[m][0]) m = i;
      const [d, u] = q.splice(m, 1)[0];
      if (done.has(u)) continue; done.add(u);
      if (u === b) break;
      for (const e of G.adj.get(u) || []) {
        const nd = d + e.w;
        if (nd < (dist.has(e.to) ? dist.get(e.to) : Infinity)) { dist.set(e.to, nd); prev.set(e.to, [u, e.i]); q.push([nd, e.to]); }
      }
    }
    const ids = []; let c = b;
    while (prev.has(c)) { const [u, i] = prev.get(c); if (i >= 0) ids.push(i); c = u; }
    return c === a ? ids : [];
  }
  const el = (tag, attrs, text) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text) e.textContent = text; return e; };
  const KM = 1000 / N.unit;

  function zeige(z) {
    const e = (typeof EINSATZ !== 'undefined') && EINSATZ[z.id];
    box.hidden = !e;
    if (!e) return;
    if (!G) baue();
    svg.textContent = '';
    svg.setAttribute('viewBox', G.vb.join(' '));
    svg.appendChild(el('path', { d: G.land, class: 'ez-land' }));
    svg.appendChild(el('path', { d: G.netz, class: e.netz ? 'ez-netz on' : 'ez-netz' }));
    if (e.netz) svg.appendChild(el('path', { d: G.sbb, class: 'ez-hl' }));
    const marken = [];
    for (const [name, r, label] of e.gebiete || []) {
      const n = node(name); if (!n) continue;
      svg.appendChild(el('circle', { cx: n[1], cy: G.flip(n[2]), r: r * KM, class: 'ez-area' }));
      marken.push([label ? tr(label) : name, n[1], n[2], true]);
    }
    const ids = new Set();
    for (const list of e.strecken || []) {
      const pts = list.map(node).filter(Boolean);
      for (let i = 1; i < pts.length; i++) weg(naechste(pts[i - 1][1], pts[i - 1][2]), naechste(pts[i][1], pts[i][2])).forEach(id => ids.add(id));
      if (pts.length) { marken.push([pts[0][0], pts[0][1], pts[0][2]]); marken.push([pts[pts.length - 1][0], pts[pts.length - 1][1], pts[pts.length - 1][2]]); }
    }
    if (ids.size) svg.appendChild(el('path', { d: [...ids].map(i => G.pathD(G.segs[i].pts)).join(''), class: 'ez-hl' }));
    for (const [name, E, Nn] of e.orte || []) {
      // a station name alone, or a name with Swiss coordinates (LV95)
      const n = E == null ? node(name) : null;
      if (n) marken.push([name, n[1], n[2], false, true]);
      else if (E != null) marken.push([name, (E - N.x0) / N.unit, (Nn - N.y0) / N.unit, false, true]);
    }
    // labels: each place once
    const seen = new Set();
    for (const [name, x, y, gebiet, ort] of marken) {
      if (seen.has(name)) continue; seen.add(name);
      const cy = G.flip(y);
      if (!gebiet) svg.appendChild(el('circle', { cx: x, cy, r: ort ? 260 : 190, class: ort ? 'ez-ort' : 'ez-dot' }));
      svg.appendChild(el('text', { x: x + (gebiet ? 0 : 340), y: cy + (gebiet ? 130 : 130), class: 'ez-label' + (gebiet ? ' mid' : '') }, name));
    }
    txt.textContent = UEB_EINSATZ[z.id] || tr(e.text || '');
  }
  return zeige;
})();
