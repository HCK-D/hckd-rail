/* HCKD RAIL – Startseite, Suche, Slideshow, Kategorien, Fahrzeugseiten, Navigation */
'use strict';

const SPEC = ['Hersteller', 'In Betrieb seit', 'Anzahl', 'Spurweite', 'Antrieb', 'Stromsystem', 'Leistung', 'Höchstgeschwindigkeit', 'Länge', 'Gewicht', 'Einsatz'];
ZUEGE.forEach(z => { if (!z.daten['Spurweite']) z.daten['Spurweite'] = 'Normalspur, 1435 mm'; });
const katOf = id => KATS.find(k => k.id === id);
// small version of a photo (480 px) for cards and thumbnails: bilder/x.jpg -> bilder/klein/x.jpg
// only the built website (website-bauen.ps1 sets HCKD_SEITEN) has the small versions; the preview uses the photo itself
const klein = src => window.HCKD_SEITEN ? String(src).replace(/^bilder\//, 'bilder/klein/') : String(src);
const zugOf = id => ZUEGE.find(z => z.id === id);
const inKat = id => ZUEGE.filter(z => z.kat === id);
const fullName = z => z.name + (z.beiname ? ' «' + z.beiname + '»' : '');


/* =====================================================================
   START: Kategorien, Suche, Navigation
   ===================================================================== */
const arrow = '<svg width="16" height="16" aria-hidden="true"><use href="#i-arrow"/></svg>';
const QICO = {
  personenverkehr: '<path d="M7 4h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM4 11h16M8 15h.01M16 15h.01M8 18l-2 3M16 18l2 3"/>',
  cargo: '<path d="M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8"/>',
  infrastruktur: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  rangier: '<path d="M4 17V9h7l3 3h6v5M4 17h16M7 17v2M17 17v2M6 9V6h4v3"/>',
  dienst: '<path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.5-.8z"/>',
  historisch: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  netz: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>'
};
const qIcon = id => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${QICO[id]}</svg>`;
$('#quick').innerHTML = KATS.map(k => `<a href="#${k.id}">${qIcon(k.id)}${esc(k.name.replace('SBB ', '').replace('Dienst- und Spezialfahrzeuge', 'Spezialfahrzeuge').replace('Historische Fahrzeuge', 'Historisch'))}</a>`).join('') + `<a href="#netz">${qIcon('netz')}Karte</a>`
  + `<button type="button" class="quick-rand" data-zufall><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="15" r="1.2" fill="currentColor"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1.2" fill="currentColor"/></svg>Zufälliges Fahrzeug</button>`;
$('#foot-links').innerHTML = KATS.map(k => `<li><a href="#${k.id}">${esc(k.name)}</a></li>`).join('') + '<li><a href="#spurweite">Normalspur / Meterspur</a></li><li><a href="#abfahrten">Abfahrten</a></li><li><a href="#netz">Bahnnetz Schweiz</a></li><li><a href="#zeitstrahl">Zeitstrahl</a></li><li><a href="#quiz">Quiz</a></li><li><a href="#bahn-abc">Bahn-ABC</a></li><li><a href="#vergleich">Vergleich</a></li><li><a href="#impressum">Impressum</a></li><li><a href="#datenschutz">Datenschutz</a></li>';
/* ---------- slideshow beside the search ---------- */
(() => {
  const S = [
    ['slide-01', 'Regionalzug über einem Bergsee', 'Pixabay'],
    ['slide-02', 'FV-Dosto (RABe 502) in den Bergen', 'Pixabay', 'rabe-502'],
    ['slide-03', 'Re 460 in einer Bahnhofshalle', 'daigdude / Pixabay', 're-460'],
    ['slide-04', 'RABe 503 «Astoro» am Perron', 'dankernmedia / Pixabay'],
    ['slide-05', 'BLS-Triebzüge in Burgdorf', 'emmentalerhousi / Pixabay'],
    ['slide-06', 'Regionalzug im Schnee', 'ewirz / Pixabay'],
    ['slide-07', 'Re 420 von SBB Cargo mit Güterzug', 'hpgruesen / Pixabay', 're-420'],
    ['slide-08', 'BLS Re 465 mit Autozug', 'hpgruesen / Pixabay'],
    ['slide-09', 'Re 460 mit IC2000 bei der Einfahrt', 'hpgruesen / Pixabay', 're-460'],
    ['slide-10', 'Rhätische Bahn in Tirano', 'hpgruesen / Pixabay'],
    ['slide-11', 'Bahnhofsuhr und SBB-Logo', 'markus53 / Pixabay'],
    ['slide-12', 'Re 620 mit Kesselwagenzug', 'music4life / Pixabay', 're-620'],
    ['slide-13', 'Triebzug über die Weichen', 'ramboldheiner / Pixabay'],
    ['slide-14', 'Postwagen in der Bahnhofshalle', 'slpix / Pixabay']
  ];
  const show = $('#hero-show'), list = $('#hs-slides'), dots = $('#hs-dots'), cap = $('#hs-cap'), playBtn = $('#hs-play');
  list.innerHTML = S.map(([f, t], i) => `<li class="hs-slide${i ? '' : ' on'}" aria-hidden="${i ? 'true' : 'false'}"><img ${i < 2 ? 'src' : 'data-src'}="bilder/slides/${f}.jpg" alt="${esc(t)}" draggable="false"></li>`).join('');
  dots.innerHTML = S.map((s, i) => `<button type="button" role="tab" aria-label="Bild ${i + 1}: ${esc(s[1])}" aria-selected="${i ? 'false' : 'true'}"></button>`).join('');
  const items = $$('.hs-slide', list), dotBtns = $$('button', dots);
  let cur = 0, timer = 0, auto = !reduce, hover = false, inView = true;
  const load = i => { const img = $('img', items[(i + S.length) % S.length]); if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; } };
  function go(i) {
    i = (i + S.length) % S.length;
    items[cur].classList.remove('on'); items[cur].setAttribute('aria-hidden', 'true'); dotBtns[cur].setAttribute('aria-selected', 'false');
    cur = i; load(i); load(i + 1);
    items[cur].classList.add('on'); items[cur].setAttribute('aria-hidden', 'false'); dotBtns[cur].setAttribute('aria-selected', 'true');
    const [, t, cr, link] = S[cur];
    cap.innerHTML = `<b>${esc(t)}</b>${link ? `<a href="#${link}">Zum Fahrzeug</a>` : ''}<small>Foto: ${esc(cr)}</small>`;
    arm();
  }
  function arm() { clearTimeout(timer); if (auto && !hover && inView && !document.hidden) timer = setTimeout(() => go(cur + 1), 5500); }
  function setAuto(on) { auto = on; playBtn.setAttribute('aria-label', on ? 'Diashow anhalten' : 'Diashow abspielen'); $('#hs-i-pause').toggleAttribute('hidden', !on); $('#hs-i-play').toggleAttribute('hidden', on); arm(); }
  $('#hs-prev').addEventListener('click', () => go(cur - 1));
  $('#hs-next').addEventListener('click', () => go(cur + 1));
  playBtn.addEventListener('click', () => setAuto(!auto));
  dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) go(dotBtns.indexOf(b)); });
  show.addEventListener('mouseenter', () => { hover = true; arm(); });
  show.addEventListener('mouseleave', () => { hover = false; arm(); });
  show.addEventListener('focusin', () => { hover = true; arm(); });
  show.addEventListener('focusout', () => { hover = false; arm(); });
  document.addEventListener('visibilitychange', arm);
  if ('IntersectionObserver' in window) new IntersectionObserver(en => { inView = en[0].isIntersecting; arm(); }).observe(show);
  // swipe with finger or mouse
  let sx = null, sy = 0;
  show.addEventListener('pointerdown', e => { if (e.target.closest('button,a')) return; sx = e.clientX; sy = e.clientY; });
  show.addEventListener('pointerup', e => {
    if (sx == null) return;
    const dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
  });
  show.addEventListener('pointercancel', () => { sx = null; });
  show.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1); });
  setAuto(auto); go(0);
})();

// close the dropdown when clicking elsewhere, reopen on focus
document.addEventListener('pointerdown', e => { if (!e.target.closest('#search-form')) $('#results').hidden = true; });
$('#q').addEventListener('focus', () => { if ($('#q').value.trim()) renderResults(); });
$('#search-form').addEventListener('submit', e => {
  e.preventDefault();
  renderResults();
  if (hits && hits[sel]) gehe(hits[sel].id); else q.focus();
});
$('#kat-grid').innerHTML = KATS.map(k => {
  const list = inKat(k.id), shown = list.slice(0, 4);
  return `<li><a class="kat" href="#${k.id}">
    <div class="art-panel">${k.bild ? `<img class="photo" src="${esc(k.bild)}" alt="" loading="lazy" style="object-position:${esc(k.bildPos || 'center')}">` : art(zugOf(k.rep)) + '<span class="illus">Illustration</span>'}</div>
    <div class="kat-body">
      <span class="kat-code">Kategorie ${k.code}</span>
      <h3 class="kat-title">${esc(k.name)}</h3>
      <p class="kat-text">${esc(k.text)}</p>
      <ul class="names" aria-label="Fahrzeuge">${shown.map(z => `<li>${esc(z.name)}</li>`).join('')}${list.length > shown.length ? `<li class="more-n">+${list.length - shown.length} weitere</li>` : ''}</ul>
      <div class="kat-foot"><span class="count">${list.length} Fahrzeuge<span class="seen-n" data-seen-kat="${k.id}"></span></span><span class="go">Öffnen ${arrow}</span></div>
    </div></a></li>`;
}).join('');

// search
const q = $('#q'), results = $('#results');
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '');
const hay = ZUEGE.map(z => ({ z, h: norm([z.name, z.beiname, z.typ, katOf(z.kat).name, z.daten['Hersteller'] || ''].join(' ')) }));
let sel = 0, hits = [], nrHit = null;
// vehicle number: "460 058", "460058-6", the full number "91 85 4460 058-0" or an old one like "11108"
function loknummer(text) {
  if (!/^[\d\s.\-]+$/.test(text.trim())) return null;
  const d = text.replace(/\D/g, '');
  const inRange = (z, n) => (z.nummern || []).some(([a, b]) => n >= a && n <= b);
  if (d.length === 5) { const z = ZUEGE.find(x => inRange(x, +d)); return z ? { z, nr: d } : null; }
  let serie, nr;
  if (d.length >= 11 && d[0] === '9') { serie = d.slice(5, 8); nr = d.slice(8, 11); }
  else if (d.length === 6 || d.length === 7) { serie = d.slice(0, 3); nr = d.slice(3, 6); }
  else return null;
  // several series can share a number (Tm 232 and Tmf 232): where the numbers are known, the number has to exist
  const passt = x => {
    if ((x.name.match(/\d{3}/) || [])[0] !== serie) return false;
    const sechs = (x.nummern || []).filter(([a]) => a >= 100000);
    return !sechs.length || inRange(x, +(serie + nr));
  };
  const kand = ZUEGE.filter(passt);
  const z = kand.find(x => (x.nummern || []).length) || kand[0];
  return z ? { z, nr: serie + ' ' + nr } : null;
}
function renderResults() {
  const v = norm(q.value);
  if (!v) { results.hidden = true; return; }
  nrHit = loknummer(q.value);
  hits = hay.filter(o => o.h.includes(v)).slice(0, 8).map(o => o.z);
  if (nrHit) hits = [nrHit.z].concat(hits.filter(z => z !== nrHit.z));
  sel = Math.min(sel, Math.max(0, hits.length - 1));
  results.innerHTML = hits.length
    ? hits.map((z, i) => `<li><a href="#${z.id}" class="${i === sel ? 'sel' : ''}"><b>${esc(fullName(z))}</b><span>${nrHit && nrHit.z === z ? 'Loknummer ' + esc(nrHit.nr) + ' · ' : ''}${esc(katOf(z.kat).name)}</span></a></li>`).join('')
    : `<li class="none">Kein Fahrzeug gefunden. Versuche eine Baureihe wie «Re 420».</li>`;
  results.hidden = false;
}
q.addEventListener('input', () => { sel = 0; renderResults(); });
q.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' && hits.length) { e.preventDefault(); sel = (sel + 1) % hits.length; renderResults(); }
  else if (e.key === 'ArrowUp' && hits.length) { e.preventDefault(); sel = (sel - 1 + hits.length) % hits.length; renderResults(); }
  else if (e.key === 'Enter' && hits[sel]) { e.preventDefault(); gehe(hits[sel].id); }
  else if (e.key === 'Escape') { q.value = ''; renderResults(); }
});
document.addEventListener('keydown', e => {
  if (e.key === '/' && !/input|textarea/i.test(document.activeElement.tagName) && !$('#v-home').hidden) { e.preventDefault(); q.focus(); }
});

/* =====================================================================
   KATEGORIE
   ===================================================================== */
const katQ = $('#kat-q');
let curKat = null;
function cardFacts(z) {
  const d = z.daten, out = [];
  if (d['Höchstgeschwindigkeit']) out.push(['Vmax', d['Höchstgeschwindigkeit']]);
  if (d['Leistung']) out.push(['', d['Leistung']]);
  if (d['In Betrieb seit']) out.push(['seit', d['In Betrieb seit']]);
  if (!out.length && d['Antrieb']) out.push(['', d['Antrieb']]);
  return out.map(([l, v]) => `<li>${l ? l + ' ' : ''}<b>${esc(v)}</b></li>`).join('');
}
// first number in a value like "6100 kW" or "ca. 80–85 t"; year = first 4-digit year
const zahl = s => { const m = String(s || '').replace(/['’\s](?=\d{3})/g, '').match(/\d+(?:[.,]\d+)?/); return m ? parseFloat(m[0].replace(',', '.')) : NaN; };
function jahrOf(z) {
  const y = s => { const m = String(s || '').match(/\b(18|19|20)\d\d\b/); return m ? +m[0] : NaN; };
  let j = y(z.daten['In Betrieb seit']);
  if (isNaN(j)) for (const [v, l] of z.kennzahlen || []) if (/einsatz|inbetrieb|bauzeit/i.test(l) && !isNaN(y(v))) { j = y(v); break; }
  return j;
}
const SORT = {
  name: (a, b) => a.name.localeCompare(b.name, 'de', { numeric: true }),
  vmax: z => zahl(z.daten['Höchstgeschwindigkeit']),
  leistung: z => zahl(z.daten['Leistung']),
  jahr: z => jahrOf(z)
};
const katSort = $('#kat-sort');
function sortiert(list) {
  const how = katSort.value, f = SORT[how];
  if (!f) return list;
  if (how === 'name') return list.slice().sort(f);
  // numbers: highest first, the year oldest first; vehicles without a value go last
  const dir = how === 'jahr' ? 1 : -1;
  return list.slice().sort((a, b) => {
    const x = f(a), y = f(b);
    if (isNaN(x) || isNaN(y)) return isNaN(x) - isNaN(y);
    return (x - y) * dir;
  });
}
katSort.addEventListener('change', () => renderKatList());
function renderKatList() {
  const v = norm(katQ.value);
  const list = sortiert(inKat(curKat.id).filter(z => !v || norm(z.name + z.beiname + z.typ).includes(v)));
  const card = z => `<li><a class="card" href="#${z.id}">
    <div class="art-panel">${z.bilder && z.bilder.length ? `<img class="photo" src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy">` : art(z)}${istGesehen(z.id) ? '<span class="seen-badge">Gesehen</span>' : ''}</div>
    <div class="card-body">
      <h2 class="card-name">${esc(z.name)}${z.beiname ? ` <small>«${esc(z.beiname)}»</small>` : ''}</h2>
      <p class="card-typ">${esc(z.typ)}</p>
      <ul class="facts">${cardFacts(z)}</ul>
    </div></a></li>`;
  // categories with groups (e.g. Infrastruktur: locomotives, then wagons): one heading per group
  const gruppen = curKat.gruppen || [];
  const html = !gruppen.length ? list.map(card).join('')
    : gruppen.map((g, i) => {
      const teil = list.filter(z => (z.gruppe || gruppen[0]) === g);
      return teil.length ? `<li class="kat-gruppe"><h2>${esc(g)}</h2></li>` + teil.map(card).join('') : '';
    }).join('');
  $('#kat-list').innerHTML = list.length ? html : `<li class="empty" style="grid-column:1/-1">Kein Fahrzeug passt zu «${esc(katQ.value)}».</li>`;
}
katQ.addEventListener('input', renderKatList);
function renderKat(k) {
  curKat = k;
  katQ.value = '';
  $('#kat-crumbs').innerHTML = `<li><a href="#start">Start</a></li><li aria-current="page">${esc(k.name)}</li>`;
  // cover photo of the category, with the credit of that photo
  const foto = k.bild && ZUEGE.flatMap(z => z.bilder || []).find(b => b.src === k.bild);
  $('#kat-banner').hidden = !k.bild;
  $('#kat-banner').innerHTML = k.bild ? `<img src="${esc(k.bild)}" alt="${esc(foto ? foto.titel : k.name)}" style="object-position:${esc(k.bildPos || 'center')}">${foto && foto.foto ? nachweis(foto) : ''}` : '';
  $('#kat-kicker').textContent = 'Kategorie ' + k.code + ' · ' + inKat(k.id).length + ' Fahrzeuge';
  $('#kat-title').textContent = k.name;
  $('#kat-text').textContent = k.text;
  renderKatList();
}

/* =====================================================================
   FAHRZEUG
   ===================================================================== */
let curZug = null, curImg = 0, curItems = [];
// photo credit for free licences: "Foto: Name · CC BY-SA 4.0 · Wikimedia Commons" with links
function nachweis(m) {
  if (!m || !m.foto) return '';
  const lic = m.lizenzUrl ? `<a href="${esc(m.lizenzUrl)}" target="_blank" rel="noopener license">${esc(m.lizenz)}</a>` : esc(m.lizenz || '');
  const src = m.quelle ? ` · <a href="${esc(m.quelle)}" target="_blank" rel="noopener">Wikimedia Commons</a>` : '';
  return `<small class="credit">Foto: ${esc(m.foto)}${lic ? ' · ' + lic : ''}${src}</small>`;
}
function mediaItems(z) {
  if (z.bilder && z.bilder.length) return z.bilder.map(b => ({ ...b, titel: b.titel || z.name }));
  return [
    { art: true, titel: 'Seitenansicht (Illustration)' },
    { ph: true, titel: 'Foto Front', hint: 'Frontansicht' },
    { ph: true, titel: 'Foto im Einsatz', hint: 'Im Einsatz' },
    { ph: true, titel: 'Foto Detail', hint: 'Detail / Innenraum' }
  ];
}

// swipeable strip: native scroll-snap for touch and trackpads, drag for the mouse, arrows and keys
function makeSlider(list, prevBtn, nextBtn, onChange) {
  let idx = 0, n = 0, raf = 0, drag = null;
  const width = () => list.clientWidth || 1;
  const buttons = i => { if (prevBtn) prevBtn.disabled = i <= 0; if (nextBtn) nextBtn.disabled = i >= n - 1; };
  function sync() {
    const i = Math.max(0, Math.min(n - 1, Math.round(list.scrollLeft / width())));
    buttons(i);
    if (i !== idx) { idx = i; onChange(i); }
  }
  list.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; sync(); }); }, { passive: true });
  if (prevBtn) prevBtn.addEventListener('click', () => api.go(idx - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => api.go(idx + 1));
  list.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || n < 2) return;
    drag = { x: e.clientX, left: list.scrollLeft, moved: false };
  });
  addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 6) { drag.moved = true; list.classList.add('dragging'); }
    if (drag.moved) list.scrollLeft = drag.left - dx;
  });
  addEventListener('pointerup', e => {
    if (!drag) return;
    const d = drag; drag = null;
    if (!d.moved) return;
    list.classList.remove('dragging');
    const dx = e.clientX - d.x, start = Math.round(d.left / width());
    api.go(Math.abs(dx) > width() * 0.12 ? start + (dx < 0 ? 1 : -1) : start);
    list.dataset.dragged = '1'; setTimeout(() => { delete list.dataset.dragged; }, 60);
  });
  list.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); api.go(idx + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); api.go(idx - 1); }
  });
  const api = {
    get idx() { return idx; },
    reset(count, start) { n = count; idx = start || 0; list.scrollLeft = idx * width(); buttons(idx); onChange(idx); },
    go(i, instant) { i = Math.max(0, Math.min(n - 1, i)); list.scrollTo({ left: i * width(), behavior: instant || reduce ? 'auto' : 'smooth' }); }
  };
  return api;
}

const slidesEl = $('#zug-slides');
const gal = makeSlider(slidesEl, $('#sl-prev'), $('#sl-next'), i => {
  curImg = i;
  const m = curItems[i]; if (!m) return;
  $('#zug-cap').innerHTML = esc(m.titel) + nachweis(m);
  $('#zug-count').textContent = (i + 1) + ' / ' + curItems.length;
  $$('#zug-thumbs .thumb').forEach((t, j) => t.setAttribute('aria-current', j === i ? 'true' : 'false'));
});
function slideInner(z, m, i) {
  if (m.src) return `<img src="${esc(m.src)}" alt="${esc(m.titel)}" ${i > 0 ? 'loading="lazy"' : ''} draggable="false">`;
  if (m.art) return art(z);
  return `<div class="ph-box"><b>${esc(m.titel)} folgt</b><span>Noch kein Foto von ${esc(z.name)}. Hast du eines?</span><button class="report-btn" type="button" data-fotos="zug">Foto einsenden</button></div>`;
}
function renderZug(z) {
  curZug = z;
  const k = katOf(z.kat), list = inKat(k.id), idx = list.indexOf(z);
  $('#zug-crumbs').innerHTML = `<li><a href="#start">Start</a></li><li><a href="#${k.id}">${esc(k.name)}</a></li><li aria-current="page">${esc(z.name)}</li>`;
  $('#zug-typ').textContent = z.typ;
  $('#zug-title').innerHTML = esc(z.name) + (z.beiname ? ` <span class="beiname">«${esc(z.beiname)}»</span>` : '');
  $('#zug-pill').hidden = z.vorlaeufig === false;
  const kz = $('#zug-kz');
  kz.innerHTML = (z.kennzahlen || []).map(([v, l]) => `<li><b>${esc(v)}</b><span>${esc(l)}</span></li>`).join('');
  kz.hidden = !(z.kennzahlen && z.kennzahlen.length);
  curItems = mediaItems(z);
  slidesEl.innerHTML = curItems.map((m, i) => `<li class="slide" aria-label="Bild ${i + 1} von ${curItems.length}">${m.ph
    ? `<div class="stage-img ph">${slideInner(z, m, i)}</div>`
    : `<button class="stage-img" type="button" data-zoom="${i}" aria-label="${esc(m.titel)}, gross anzeigen">${slideInner(z, m, i)}</button>`}</li>`).join('');
  $('#zug-thumbs').innerHTML = curItems.map((m, j) => `<li><button class="thumb" type="button" data-i="${j}" aria-label="${esc(m.titel)}">${m.src ? `<img src="${esc(klein(m.src))}" alt="" loading="lazy">` : m.art ? art(z) : `<span class="ph-mini">${esc(m.hint)}<br>folgt</span>`}</button></li>`).join('');
  gal.reset(curItems.length, 0);
  const keys = z.specOrder || SPEC.concat(Object.keys(z.daten).filter(x => !SPEC.includes(x)));
  $('#zug-specs').innerHTML = keys.map(key => {
    const v = z.daten[key];
    return `<div class="spec"><dt>${esc(key)}</dt><dd class="${v ? '' : 'tbd'}">${v ? esc(v) : 'folgt'}</dd></div>`;
  }).join('') + (z.specNote ? `<p class="hinweis" style="margin:0;padding:10px 20px 4px;font-size:13px;color:var(--fg-3)">${esc(z.specNote)}</p>` : '');
  $('#zug-text').innerHTML = z.text.map((p, i) => `<p class="${i ? '' : 'lead'}">${esc(p)}</p>`).join('');
  einsatzKarte(z); // map «Wo fährt er?» (einsatz.js)
  const secs = (z.abschnitte || []).map(a => `<section class="blk"><h2>${esc(a.titel)}</h2>` +
    (a.liste ? `<ul class="ausst">${a.liste.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '') +
    (a.tabelle ? `<div class="tbl-wrap"><table class="tbl"><thead><tr>${a.tabelle.kopf.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${a.tabelle.zeilen.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : '') +
    (a.p ? a.p.map(p => `<p>${esc(p)}</p>`).join('') : '') +
    (a.hinweis ? `<p class="hinweis">${esc(a.hinweis)}</p>` : '') + '</section>').join('');
  const qu = z.quellen && z.quellen.length ? `<section class="blk"><h2>Quellen</h2><ol class="quellen">${z.quellen.map(x => `<li>${esc(x)}</li>`).join('')}</ol></section>` : '';
  $('#zug-secs').innerHTML = secs + qu;
  const prev = list[idx - 1], next = list[idx + 1];
  $('#zug-pager').innerHTML =
    (prev ? `<a href="#${prev.id}"><small>Vorheriges</small><b>${esc(prev.name)}</b></a>` : `<a class="blank" aria-hidden="true" tabindex="-1"><small>&nbsp;</small><b>&nbsp;</b></a>`) +
    (next ? `<a class="next" href="#${next.id}"><small>Nächstes</small><b>${esc(next.name)}</b></a>` : `<a class="next" href="#${k.id}"><small>Zurück zu</small><b>${esc(k.name)}</b></a>`);
}
$('#zug-thumbs').addEventListener('click', e => { const b = e.target.closest('.thumb'); if (b) gal.go(+b.dataset.i); });

// lightbox, swipeable as well
const lb = $('#lb'), lbSlides = $('#lb-slides');
let lbReturn = null, lbItems = [];
const lbs = makeSlider(lbSlides, $('#lb-prev'), $('#lb-next'), i => {
  const m = lbItems[i]; if (!m) return;
  $('#lb-cap').innerHTML = esc(fullName(curZug) + ' · ' + m.titel + ' · ' + (i + 1) + ' / ' + lbItems.length) + nachweis(m);
});
function openLb(i) {
  const z = curZug;
  lbItems = curItems.filter(m => !m.ph);
  const start = Math.max(0, lbItems.indexOf(curItems[i]));
  lbSlides.innerHTML = lbItems.map(m => `<li class="slide">${m.src ? `<img src="${esc(m.src)}" alt="${esc(m.titel)}" draggable="false">` : art(z)}</li>`).join('');
  lbReturn = document.activeElement;
  lb.hidden = false;
  lbs.reset(lbItems.length, start);
  $('#lb-close').focus();
}
function closeLb() {
  lb.hidden = true;
  const back = curItems.indexOf(lbItems[lbs.idx]);
  if (back >= 0) gal.go(back, true);
  if (lbReturn) lbReturn.focus();
}
slidesEl.addEventListener('click', e => {
  const b = e.target.closest('[data-zoom]');
  if (b && !slidesEl.dataset.dragged) openLb(+b.dataset.zoom);
});
lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('#lb-close')) closeLb(); });
document.addEventListener('keydown', e => {
  if (!lb.hidden) {
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') lbs.go(lbs.idx + 1);
    if (e.key === 'ArrowLeft') lbs.go(lbs.idx - 1);
    return;
  }
  if (!$('#v-zug').hidden && !/input|textarea|select/i.test(document.activeElement.tagName) && document.activeElement !== slidesEl) {
    if (e.key === 'ArrowRight') gal.go(curImg + 1);
    if (e.key === 'ArrowLeft') gal.go(curImg - 1);
  }
});

/* =====================================================================
   ROUTER (#start, #<kategorie>, #<fahrzeug>, #kategorien, #spurweite)
   ===================================================================== */
const views = { home: $('#v-home'), kat: $('#v-kat'), zug: $('#v-zug'), text: $('#v-text'), vergleich: $('#v-vergleich') };
const TEXTSEITEN = { 'bahn-abc': 'Bahn-ABC', impressum: 'Impressum', datenschutz: 'Datenschutz' };
let curView = 'home';
function show(name) {
  for (const [n, el] of Object.entries(views)) el.hidden = n !== name;
  if (curView !== name) { views[name].classList.remove('view'); void views[name].offsetWidth; views[name].classList.add('view'); }
  curView = name;
}
function route() {
  // on a generated page like re-460.html, window.HCKD_START names the page to show when there is no #
  const h = decodeURIComponent(location.hash.slice(1)) || window.HCKD_START || '';
  const k = katOf(h), z = zugOf(h);
  if (!lb.hidden) lb.hidden = true;
  if (z) { show('zug'); renderZug(z); scrollTo(0, 0); document.title = z.name + (z.beiname ? ' «' + z.beiname + '»' : '') + ' · HCKD RAIL'; }
  else if (k) { show('kat'); renderKat(k); scrollTo(0, 0); document.title = k.name + ' · HCKD RAIL'; }
  else if (TEXTSEITEN[h]) {
    show('text'); $$('#v-text [data-seite]').forEach(s => { s.hidden = s.dataset.seite !== h; });
    scrollTo(0, 0); document.title = TEXTSEITEN[h] + ' · HCKD RAIL';
  }
  else if (h === 'vergleich') { show('vergleich'); renderVergleich(); scrollTo(0, 0); document.title = 'Vergleich · HCKD RAIL'; }
  else {
    show('home'); document.title = 'HCKD RAIL';
    const target = h && document.getElementById(h);
    if (target && h !== 'start') requestAnimationFrame(() => { const y = target.getBoundingClientRect().top + scrollY - 64; scrollTo(0, y); });
    else scrollTo(0, 0);
    kickClock();
  }
  const activeKat = k ? k.id : z ? z.kat : '';
  $$('#mainnav a').forEach(a => a.classList.toggle('on', a.dataset.k === activeKat));
  cmpSync(); // compare button and bar (extras.js)
}
addEventListener('hashchange', route);

/* ---------- GitHub version: one file per page ----------
   website-bauen.ps1 sets window.HCKD_SEITEN in every built page. Links like #re-460 then point to
   re-460.html, the start page to ./ and sections of the start page to ./#netz. */
const SEITEN = !!window.HCKD_SEITEN;
const istSeite = id => !!(katOf(id) || zugOf(id) || TEXTSEITEN[id] || id === 'vergleich');
const seitenUrl = id => !id || id === 'start' ? './' : istSeite(id) ? id + '.html' : './#' + id;
function gehe(id) { if (SEITEN) location.href = seitenUrl(id); else location.hash = id; }
if (SEITEN) {
  const one = a => a.setAttribute('href', seitenUrl(decodeURIComponent(a.getAttribute('href').slice(1))));
  const fix = root => { if (root.matches && root.matches('a[href^="#"]')) one(root); $$('a[href^="#"]', root).forEach(one); };
  fix(document);
  // links rendered later (category list, vehicle page, slideshow caption …)
  new MutationObserver(list => list.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) fix(n); })))
    .observe(document.body, { childList: true, subtree: true });
}
