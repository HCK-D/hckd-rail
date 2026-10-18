/* RailBase – Karte «Wo fährt er?» auf den Fahrzeugseiten */
'use strict';

/* =====================================================================
   EINSATZKARTE: Schweiz mit Normalspurnetz, darauf rot die Strecken und
   Gebiete aus js/daten/einsatz.js. Strecken folgen den echten Gleisen:
   zwischen zwei Bahnhöfen wird der kürzeste Weg im Netz gesucht.
   ===================================================================== */
const einsatzKarte = (() => {
  const N = window.NETZ, NS = 'http://www.w3.org/2000/svg';
  const box = $('#zug-einsatz'), svg = $('#ez-map'), txt = $('#ez-txt'), tabs = $('#ez-tabs');
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
    // gaps in the map data (e.g. Aarau–Olten): a track that simply stops is joined to the next corner
    // up to 800 m away, but only straight ahead (within 35°), so real terminus stations stay ends
    for (const k of ks) {
      if (adj.get(k).length !== 1) continue;
      const e = adj.get(k)[0], s = segs[e.i], p = pos.get(k);
      const nb = key(s.pts[0]) === k ? s.pts[1] : s.pts[s.pts.length - 2];
      const dx = p[0] - nb[0], dy = p[1] - nb[1], dl = Math.hypot(dx, dy) || 1;
      let best = null, bd = Infinity;
      for (const q of ks) {
        if (q === k || q === e.to) continue;
        const r = pos.get(q), vx = r[0] - p[0], vy = r[1] - p[1], d = Math.hypot(vx, vy);
        if (d <= 3 || d > 40 || d >= bd) continue;
        if ((dx * vx + dy * vy) / (dl * d) < Math.cos(35 * Math.PI / 180)) continue;
        best = q; bd = d;
      }
      if (!best) continue;
      const i = segs.push({ len: bd * N.unit, pts: [p, pos.get(best)], sbb: s.sbb }) - 1;
      adj.get(k).push({ to: best, i, w: bd * N.unit }); adj.get(best).push({ to: k, i, w: bd * N.unit });
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
  const node = name => {
    const n = N.nodes.find(n => n[0] === name), x = typeof BAHNHOF_EXTRA !== 'undefined' && BAHNHOF_EXTRA[name];
    return n || (x ? [name, (x[0] - N.x0) / N.unit, (x[1] - N.y0) / N.unit] : undefined);
  };
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

  // labels: each place once, on the side where it hides the least of the red route and of other labels.
  // marken: [name, x, y, gebiet, ort] in drawing coordinates; rot: points along the red route
  function beschrifte(marken, rot, [vx, vy, vw, vh]) {
    const probe = svg.appendChild(el('text', { class: 'ez-label' }, 'x'));
    const fs = parseFloat(getComputedStyle(probe).fontSize) || 400; probe.remove();
    const boxen = [], punkteAlle = marken.filter(m => !m[3]).map(m => [m[1], m[2], m[4] ? 260 : 190]);
    const kosten = ([x0, y0, x1, y1]) => {
      const h = fs * .3; let c = 0;
      for (const [px, py] of rot) if (px > x0 - h && px < x1 + h && py > y0 - h && py < y1 + h) c++;
      for (const [px, py, r] of punkteAlle) if (px + r > x0 && px - r < x1 && py + r > y0 && py - r < y1) c += 300; // a station dot
      for (const [a0, b0, a1, b1] of boxen) if (x0 < a1 && x1 > a0 && y0 < b1 && y1 > b0) c += 1000;
      if (x0 < vx || x1 > vx + vw || y0 < vy || y1 > vy + vh) c += 500;
      return c;
    };
    const seen = new Set();
    const ordnung = [...marken.filter(m => m[3]), ...marken.filter(m => !m[3])]; // areas first, they cannot move
    for (const [name, x, cy, gebiet, ort] of ordnung) {
      if (seen.has(name)) continue; seen.add(name);
      const w = name.length * fs * .56, auf = fs * .75, ab = fs * .2, gap = fs * .85, ty = cy + fs * .33;
      if (gebiet) {
        boxen.push([x - w / 2, ty - auf, x + w / 2, ty + ab]);
        svg.appendChild(el('text', { x, y: ty, class: 'ez-label mid' }, name));
        continue;
      }
      svg.appendChild(el('circle', { cx: x, cy, r: ort ? 260 : 190, class: ort ? 'ez-ort' : 'ez-dot' }));
      const [k, wahl] = [
        [x + gap, ty, '', [x + gap, ty - auf, x + gap + w, ty + ab]],
        [x - gap, ty, ' end', [x - gap - w, ty - auf, x - gap, ty + ab]],
        [x, cy - gap, ' mid', [x - w / 2, cy - gap - auf, x + w / 2, cy - gap + ab]],
        [x, cy + gap + auf, ' mid', [x - w / 2, cy + gap, x + w / 2, cy + gap + auf + ab]],
        [x + gap * .7, cy - gap * .7, '', [x + gap * .7, cy - gap * .7 - auf, x + gap * .7 + w, cy - gap * .7 + ab]],
        [x + gap * .7, cy + gap * .7 + auf, '', [x + gap * .7, cy + gap * .7, x + gap * .7 + w, cy + gap * .7 + auf + ab]],
        [x - gap * .7, cy - gap * .7, ' end', [x - gap * .7 - w, cy - gap * .7 - auf, x - gap * .7, cy - gap * .7 + ab]],
        [x - gap * .7, cy + gap * .7 + auf, ' end', [x - gap * .7 - w, cy + gap * .7, x - gap * .7, cy + gap * .7 + auf + ab]]
      ].map((c, i) => [kosten(c[3]) + i * .5, c]).sort((a, b) => a[0] - b[0])[0];
      if (k >= 1000) continue; // every side would cover another name: keep only the dot
      boxen.push(wahl[3]);
      svg.appendChild(el('text', { x: wahl[0], y: wahl[1], class: 'ez-label' + wahl[2] }, name));
    }
  }
  // points every 150 units along a line, for the label placement
  function punkte(pts, ziel) {
    pts.forEach((b, j) => {
      const a = pts[j - 1], n = a ? Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 150) : 1;
      for (let t = 1; t <= n; t++) ziel.push(a ? [a[0] + (b[0] - a[0]) * t / n, a[1] + (b[1] - a[1]) * t / n] : b);
    });
  }

  function zeigeSchweiz(e) {
    if (!G) baue();
    svg.setAttribute('viewBox', G.vb.join(' '));
    svg.setAttribute('aria-label', tr('Karte der Schweiz mit den Einsatzstrecken'));
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
    const rot = [];
    for (const s of e.netz ? G.segs.filter(s => s.sbb) : [...ids].map(i => G.segs[i])) punkte(s.pts.map(([x, y]) => [x, G.flip(y)]), rot);
    beschrifte(marken.map(([n, x, y, g, o]) => [n, x, G.flip(y), g, o]), rot, G.vb);
  }

  // overview of the international routes: straight lines from stop to stop, as on the SBB maps
  function zeigeEuropa(I) {
    const E = EUROPA, P = ([lon, lat]) => [(lon - E.lon0) * E.c * E.k, (E.lat0 - lat) * E.k];
    svg.setAttribute('viewBox', `0 0 ${E.b} ${E.h}`);
    svg.setAttribute('aria-label', tr('Karte Europas mit den internationalen Strecken'));
    svg.appendChild(el('rect', { x: 0, y: 0, width: E.b, height: E.h, class: 'ez-meer' }));
    svg.appendChild(el('path', { d: E.land, class: 'ez-eu-land' }));
    svg.appendChild(el('path', { d: E.ch, class: 'ez-eu-ch' }));
    const linien = [], marken = [], rot = [];
    for (const list of I.strecken) {
      const pts = list.filter(n => STAEDTE[n]).map(n => P(STAEDTE[n]));
      if (pts.length < 2) continue;
      linien.push('M' + pts.map(([x, y]) => Math.round(x) + ' ' + Math.round(y)).join('L'));
      punkte(pts, rot);
      for (const n of list) if (STAEDTE[n] && STAEDTE[n][2] !== false) marken.push([n, ...P(STAEDTE[n]), false, false]);
    }
    svg.appendChild(el('path', { d: linien.join(''), class: 'ez-hl' }));
    beschrifte(marken, rot, [0, 0, E.b, E.h]);
  }

  // switch «Schweiz | International» above the map, only for vehicles with an international map
  let aktuell = null, modus = 'ch';
  tabs.addEventListener('click', ev => {
    const b = ev.target.closest('[data-ez]');
    if (b && aktuell && b.dataset.ez !== modus) { modus = b.dataset.ez; zeige(aktuell, true); }
  });
  tabs.addEventListener('keydown', ev => {
    if (ev.key !== 'ArrowLeft' && ev.key !== 'ArrowRight') return;
    const b = $(`[data-ez="${modus === 'ch' ? 'eu' : 'ch'}"]`, tabs); b.click(); b.focus();
  });

  function zeige(z, behalten) {
    const e = (typeof EINSATZ !== 'undefined') && EINSATZ[z.id];
    box.hidden = !e;
    if (!e) return;
    const I = e.international && typeof INTERNATIONAL !== 'undefined' && typeof EUROPA !== 'undefined' && INTERNATIONAL[e.international];
    if (!behalten || !I) modus = 'ch';
    aktuell = z;
    tabs.hidden = !I;
    $$('[data-ez]', tabs).forEach(b => { const an = b.dataset.ez === modus; b.setAttribute('aria-selected', String(an)); b.tabIndex = an ? 0 : -1; });
    $('#ez-hinweis-ch').hidden = modus !== 'ch';
    $('#ez-hinweis-eu').hidden = modus !== 'eu';
    svg.textContent = '';
    svg.classList.toggle('eu', modus === 'eu');
    if (modus === 'eu') { zeigeEuropa(I); txt.textContent = tr(I.text); return; }
    zeigeSchweiz(e);
    txt.textContent = UEB_EINSATZ[z.id] || tr(e.text || '');
  }
  return zeige;
})();
