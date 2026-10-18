/* RailBase – Karte aller Bahnstrecken der Schweiz */
'use strict';

/* =====================================================================
   KARTE: alle Bahnstrecken der Schweiz (BAV Schienennetz)
   ===================================================================== */
(() => {
  const N = window.NETZ;
  const svg = $('#map'), mstage = $('#map-stage'), tip = $('#map-tip'), NS = 'http://www.w3.org/2000/svg';
  const TRAM = new Set(['VBZ', 'BVB', 'TPG', 'SVB', 'BLT', 'VBG', 'TL']);
  const OPN = { 'SBB CFF FFS': 'SBB', 'BLSN': 'BLS Netz', 'RhB FR VR': 'Rhätische Bahn (RhB)', 'zb': 'Zentralbahn', 'MGI': 'Matterhorn Gotthard Bahn', 'SOB': 'Schweizerische Südostbahn (SOB)', 'RBS': 'Regionalverkehr Bern-Solothurn', 'MOB': 'Montreux-Berner Oberland-Bahn', 'TPFH': 'Freiburgische Verkehrsbetriebe (TPF)', 'AB': 'Appenzeller Bahnen', 'asm': 'Aare Seeland mobil', 'CJ': 'Chemins de fer du Jura', 'TRN': 'Transports Publics Neuchâtelois', 'TMR': 'Transports de Martigny et Régions', 'MBC': 'Transports de la région Morges-Bière-Cossonay', 'LEB': 'Lausanne-Echallens-Bercher', 'NStCM': 'Nyon-St-Cergue-Morez', 'SZU': 'Sihltal Zürich Uetliberg Bahn', 'FB': 'Forchbahn', 'RB': 'Rigi Bahnen', 'GGB': 'Gornergrat Bahn', 'WAB': 'Wengernalpbahn', 'BOB': 'Berner Oberland-Bahn', 'JB': 'Jungfraubahn', 'BRB': 'Brienz Rothorn Bahn', 'PB': 'Pilatus-Bahnen', 'MVR': 'Transports Montreux-Vevey-Riviera', 'TPC': 'Transports Publics du Chablais', 'TRAVYS': 'TRAVYS', 'AVA': 'Aargau Verkehr', 'THURBO': 'THURBO', 'DB': 'Deutsche Bahn', 'SNCF': 'SNCF', 'ÖBB-I': 'ÖBB Infrastruktur', 'OeBB': 'Oensingen-Balsthal-Bahn', 'DFB': 'Dampfbahn Furka-Bergstrecke', 'DVZO': 'Dampfbahn-Verein Zürcher Oberland', 'ETB': 'Emmentalbahn', 'VBZ': 'Verkehrsbetriebe Zürich', 'BVB': 'Basler Verkehrs-Betriebe', 'TPG': 'Transports publics genevois', 'SVB': 'Bernmobil', 'BLT': 'Baselland Transport', 'VBG': 'Verkehrsbetriebe Glattal', 'TL': 'Transports publics de la région lausannoise' };
  const GAUGE = { mm1435: 'Normalspur, 1435 mm', mm1000: 'Meterspur, 1000 mm', mm800: '800 mm', mm750: '750 mm', mm600: '600 mm', mm1200: '1200 mm', mm1000_1435: 'Dreischienengleis 1000/1435 mm' };
  const ELEC = { Wechselstrom_16_7Hz: 'Wechselstrom 16,7 Hz', Gleichstrom: 'Gleichstrom', Wechselstrom_50Hz: 'Wechselstrom 50 Hz', Drehstrom: 'Drehstrom', nicht_elektrifiziert: 'nicht elektrifiziert', Wechselstrom_16_7Hz_50Hz: 'Wechselstrom 16,7 und 50 Hz', Wechselstrom_16_7Hz_Gleichstrom: 'Wechselstrom 16,7 Hz und Gleichstrom' };
  const CATS = [
    { id: 'sbb', name: 'SBB', col: 'var(--map-sbb)', on: true },
    { id: 'ns', name: 'Normalspur, weitere Bahnen', col: 'var(--map-ns)', on: true },
    { id: 'ms', name: 'Meterspur', col: 'var(--map-ms)', on: true },
    { id: 'spec', name: 'Andere Spurweiten', col: 'var(--map-spec)', on: true },
    { id: 'tram', name: 'Tram und Metro', col: 'var(--map-tram)', on: false }
  ];
  const catOf = (oi, gi) => {
    const op = N.ops[oi], g = N.gauges[gi];
    if (TRAM.has(op)) return 'tram';
    if (g === 'mm1000') return 'ms';
    if (g === 'mm1435' || g === 'mm1000_1435') return op === 'SBB CFF FFS' ? 'sbb' : 'ns';
    return 'spec';
  };
  const dec = d => { const pts = []; let x = 0, y = 0; for (let i = 0; i < d.length; i += 2) { x += d[i]; y += d[i + 1]; pts.push([x, y]); } return pts; };
  const border = N.border.map(dec);
  let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity;
  for (const ring of border) for (const [x, y] of ring) { bx0 = Math.min(bx0, x); bx1 = Math.max(bx1, x); by0 = Math.min(by0, y); by1 = Math.max(by1, y); }
  const flip = y => by1 - y;
  const segs = N.segs.map(([oi, gi, ei, tr, li, len, d]) => ({ oi, gi, ei, tr, li, len, pts: dec(d).map(([x, y]) => [x, flip(y)]), cat: catOf(oi, gi) }));
  const km = {}; for (const s of segs) km[s.cat] = (km[s.cat] || 0) + s.len / 1000;
  const fmtKm = v => Math.round(v).toLocaleString(LOCALE) + ' km';

  // static layers
  const el = (tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };
  const pathD = pts => 'M' + pts.map(p => p[0] + ' ' + p[1]).join('L');
  svg.appendChild(el('path', { d: border.map(r => pathD(r.map(([x, y]) => [x, flip(y)])) + 'Z').join(''), style: 'fill:var(--map-land);stroke:var(--map-border);stroke-width:1.2', 'vector-effect': 'non-scaling-stroke' }));
  const layer = {};
  for (const c of [...CATS].reverse()) {
    const g = el('g', { 'data-cat': c.id });
    const single = segs.filter(s => s.cat === c.id && s.tr < 2).map(s => pathD(s.pts)).join('');
    const dbl = segs.filter(s => s.cat === c.id && s.tr >= 2).map(s => pathD(s.pts)).join('');
    const w = c.id === 'tram' ? [1, 1.4] : [1.5, 2.7];
    if (single) g.appendChild(el('path', { d: single, style: `fill:none;stroke:${c.col};stroke-width:${w[0]};stroke-linecap:round;stroke-linejoin:round`, 'vector-effect': 'non-scaling-stroke' }));
    if (dbl) g.appendChild(el('path', { d: dbl, style: `fill:none;stroke:${c.col};stroke-width:${w[1]};stroke-linecap:round;stroke-linejoin:round`, 'vector-effect': 'non-scaling-stroke' }));
    if (!c.on) g.style.display = 'none';
    layer[c.id] = g; svg.appendChild(g);
  }
  const hl = el('path', { d: '', style: 'fill:none;stroke:var(--accent);stroke-width:5;stroke-linecap:round;stroke-linejoin:round;opacity:.85', 'vector-effect': 'non-scaling-stroke' });
  svg.appendChild(hl);
  const labels = el('g', {});
  const stations = N.nodes.map(([name, x, y, lvl]) => {
    const gx = x, gy = flip(y);
    const dot = el('circle', { cx: gx, cy: gy, style: 'fill:var(--map-label);stroke:var(--map-halo)' });
    const tx = el('text', { x: gx, y: gy, class: 'st-l' }); tx.textContent = name;
    labels.appendChild(dot); labels.appendChild(tx);
    return { lvl, dot, tx, gx, gy };
  });
  svg.appendChild(labels);

  // legend
  const legend = $('#map-legend');
  legend.innerHTML = CATS.map(c => `<button class="lg" type="button" data-c="${c.id}" aria-pressed="${c.on}"><i style="background:${c.col}"></i>${esc(tr(c.name))} <small>${fmtKm(km[c.id] || 0)}</small></button>`).join('');
  legend.addEventListener('click', e => {
    const b = e.target.closest('.lg'); if (!b) return;
    const c = CATS.find(x => x.id === b.dataset.c); c.on = !c.on;
    b.setAttribute('aria-pressed', c.on); layer[c.id].style.display = c.on ? '' : 'none';
    hideTip();
  });
  const total = ['sbb', 'ns', 'ms', 'spec'].reduce((a, k) => a + (km[k] || 0), 0);
  $('#map-src').textContent = tr('Rund {km} Bahnstrecke ohne Tram, {n} Abschnitte. Daten: Bundesamt für Verkehr (BAV), Schienennetz, Stand 6. Juli 2021. Landesgrenze: swisstopo.', { km: fmtKm(total), n: segs.length.toLocaleString(LOCALE) });

  // view: viewBox with zoom and pan
  const pad = 300, full = { x: bx0 - pad, y: 0 - pad, w: bx1 - bx0 + 2 * pad, h: by1 - by0 + 2 * pad };
  let vb = { ...full };
  const zoomLevel = () => full.w / vb.w;
  function fitAspect(v) {
    const r = mstage.clientWidth / Math.max(1, mstage.clientHeight), cx = v.x + v.w / 2, cy = v.y + v.h / 2;
    let w = v.w, h = v.h;
    if (w / h > r) h = w / r; else w = h * r;
    return { x: cx - w / 2, y: cy - h / 2, w, h };
  }
  function apply() {
    if (!mstage.clientWidth || !mstage.clientHeight) return;
    vb = fitAspect(vb);
    const zMax = full.w / 12;
    if (vb.w < zMax) { const s = zMax / vb.w, cx = vb.x + vb.w / 2, cy = vb.y + vb.h / 2; vb = { x: cx - vb.w * s / 2, y: cy - vb.h * s / 2, w: vb.w * s, h: vb.h * s }; }
    const fb = fitAspect(full);
    if (vb.w > fb.w) vb = fb;
    vb.x = Math.min(Math.max(vb.x, fb.x), fb.x + fb.w - vb.w); vb.y = Math.min(Math.max(vb.y, fb.y), fb.y + fb.h - vb.h);
    svg.setAttribute('viewBox', `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
    const upp = vb.w / Math.max(1, mstage.clientWidth), z = zoomLevel();
    for (const s of stations) {
      const show = s.lvl === 1 || z >= 2.2;
      s.dot.style.display = s.tx.style.display = show ? '' : 'none';
      if (!show) continue;
      const fs = (s.lvl === 1 ? 12.5 : 11) * upp;
      s.dot.setAttribute('r', (s.lvl === 1 ? 3 : 2.3) * upp); s.dot.setAttribute('stroke-width', 1.2 * upp);
      s.tx.setAttribute('font-size', fs); s.tx.setAttribute('stroke-width', 3 * upp);
      s.tx.setAttribute('x', s.gx + 5 * upp); s.tx.setAttribute('y', s.gy - 4 * upp);
    }
    mstage.style.touchAction = z > 1.05 ? 'none' : 'pan-y';
  }
  function zoomAt(f, cx, cy) {
    const r = mstage.getBoundingClientRect();
    const mx = vb.x + (cx - r.left) / r.width * vb.w, my = vb.y + (cy - r.top) / r.height * vb.h;
    vb = { x: mx - (mx - vb.x) / f, y: my - (my - vb.y) / f, w: vb.w / f, h: vb.h / f };
    apply(); hideTip();
  }
  const centerZoom = f => { const r = mstage.getBoundingClientRect(); zoomAt(f, r.left + r.width / 2, r.top + r.height / 2); };
  $('#mz-in').addEventListener('click', () => centerZoom(1.6));
  $('#mz-out').addEventListener('click', () => centerZoom(1 / 1.6));
  $('#mz-reset').addEventListener('click', () => { vb = { ...full }; apply(); hideTip(); });
  mstage.addEventListener('wheel', e => { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); zoomAt(Math.exp(-e.deltaY * 0.0022), e.clientX, e.clientY); }, { passive: false });
  mstage.addEventListener('dblclick', e => { if (e.target.closest('.map-zoom')) return; zoomAt(1.8, e.clientX, e.clientY); });
  if ('ResizeObserver' in window) new ResizeObserver(apply).observe(mstage); else apply();

  // hit testing on a coarse grid
  const CELL = 500, grid = new Map();
  segs.forEach((s, i) => {
    const seen = new Set();
    for (const [x, y] of s.pts) { const k = Math.floor(x / CELL) + ',' + Math.floor(y / CELL); if (!seen.has(k)) { seen.add(k); (grid.get(k) || grid.set(k, []).get(k)).push(i); } }
  });
  function nearest(mx, my, tol) {
    let best = -1, bd = tol * tol;
    const cx = Math.floor(mx / CELL), cy = Math.floor(my / CELL), rr = Math.ceil(tol / CELL) + 1;
    for (let gx = cx - rr; gx <= cx + rr; gx++) for (let gy = cy - rr; gy <= cy + rr; gy++) {
      for (const i of grid.get(gx + ',' + gy) || []) {
        const s = segs[i]; if (!CATS.find(c => c.id === s.cat).on) continue;
        for (let j = 1; j < s.pts.length; j++) {
          const [ax, ay] = s.pts[j - 1], [bx, by] = s.pts[j], dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
          let u = l2 ? ((mx - ax) * dx + (my - ay) * dy) / l2 : 0; u = u < 0 ? 0 : u > 1 ? 1 : u;
          const ex = ax + u * dx - mx, ey = ay + u * dy - my, d2 = ex * ex + ey * ey;
          if (d2 < bd) { bd = d2; best = i; }
        }
      }
    }
    return best;
  }
  function hideTip() { tip.hidden = true; hl.setAttribute('d', ''); }
  function showAt(clientX, clientY, tolPx) {
    const r = mstage.getBoundingClientRect(), upp = vb.w / r.width;
    const mx = vb.x + (clientX - r.left) * upp, my = vb.y + (clientY - r.top) * upp;
    const i = nearest(mx, my, tolPx * upp);
    if (i < 0) { hideTip(); return; }
    const s = segs[i], op = N.ops[s.oi], line = s.li >= 0 ? N.lines[s.li] : '';
    const m = /^(\S+)\s+(.*)$/.exec(line);
    hl.setAttribute('d', pathD(s.pts));
    tip.innerHTML = `<b>${m ? esc(m[2].replace(/ - /g, ' – ')) : esc(tr('Streckenabschnitt'))}</b><dl>` +
      (m ? `<dt>${esc(tr('Linie'))}</dt><dd>${esc(m[1])}</dd>` : '') +
      `<dt>${esc(tr('Betreiber'))}</dt><dd>${esc(tr(OPN[op] || op))}</dd><dt>${esc(tr('Spurweite'))}</dt><dd>${esc(tr(GAUGE[N.gauges[s.gi]] || N.gauges[s.gi]))}</dd>` +
      `<dt>${esc(tr('Gleise'))}</dt><dd>${esc(s.tr >= 2 ? (s.tr === 2 ? tr('Doppelspur') : tr('{n} Gleise', { n: s.tr })) : tr('Einspur'))}</dd><dt>${esc(tr('Strom'))}</dt><dd>${esc(tr(ELEC[N.elec[s.ei]] || N.elec[s.ei]))}</dd>` +
      `<dt>${esc(tr('Abschnitt'))}</dt><dd>${(s.len / 1000).toLocaleString(LOCALE, { maximumFractionDigits: 1 })} km</dd></dl>`;
    tip.hidden = false;
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let tx = clientX - r.left + 14, ty = clientY - r.top + 14;
    if (tx + tw > r.width - 8) tx = clientX - r.left - tw - 14;
    if (ty + th > r.height - 8) ty = clientY - r.top - th - 14;
    tip.style.left = Math.max(8, tx) + 'px'; tip.style.top = Math.max(8, ty) + 'px';
  }

  // pointer: drag to pan when zoomed, pinch with two fingers, tap or hover for details
  const pts = new Map();
  let drag = null, pinch = null, moved = false, hoverRaf = 0;
  mstage.addEventListener('pointerdown', e => {
    if (e.target.closest('.map-zoom')) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved = false;
    if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) }; drag = null; }
    else if (zoomLevel() > 1.05 || e.pointerType === 'mouse') { drag = { x: e.clientX, y: e.clientY, vb: { ...vb } }; }
    if (pts.size === 2 || zoomLevel() > 1.05) mstage.setPointerCapture(e.pointerId);
  });
  mstage.addEventListener('pointermove', e => {
    if (pts.has(e.pointerId)) pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pts.size === 2) {
      const [a, b] = [...pts.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
      zoomAt(d / pinch.d, (a.x + b.x) / 2, (a.y + b.y) / 2); pinch.d = d; moved = true; return;
    }
    if (drag && pts.has(e.pointerId) && zoomLevel() > 1.05) {
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) { moved = true; mstage.classList.add('drag'); }
      const r = mstage.getBoundingClientRect();
      vb = { ...drag.vb, x: drag.vb.x - dx / r.width * drag.vb.w, y: drag.vb.y - dy / r.height * drag.vb.h };
      apply(); hideTip(); return;
    }
    if (e.pointerType === 'mouse' && !pts.size) {
      const cx = e.clientX, cy = e.clientY;
      if (!hoverRaf) hoverRaf = requestAnimationFrame(() => { hoverRaf = 0; showAt(cx, cy, 7); });
    }
  });
  const end = e => {
    const wasTap = pts.has(e.pointerId) && !moved && pts.size === 1;
    pts.delete(e.pointerId);
    if (pts.size < 2) pinch = null;
    if (!pts.size) { drag = null; mstage.classList.remove('drag'); }
    if (wasTap && e.type === 'pointerup' && !e.target.closest('.map-zoom')) showAt(e.clientX, e.clientY, e.pointerType === 'mouse' ? 7 : 16);
  };
  mstage.addEventListener('pointerup', end);
  mstage.addEventListener('pointercancel', end);
  mstage.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !pts.size) hideTip(); });
  apply();
})();
