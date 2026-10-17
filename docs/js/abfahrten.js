/* HCKD RAIL – Live-Abfahrtstafel */
'use strict';

/* =====================================================================
   ABFAHRTEN: nächste Abfahrten eines Bahnhofs von transport.opendata.ch
   (gratis, ohne Schlüssel). Lädt nur, solange die Tafel sichtbar ist,
   und dann alle 60 Sekunden neu. Auf claude.ai sind Verbindungen nach
   aussen gesperrt; dort erscheint ein Hinweis.
   ===================================================================== */
(() => {
  const API = 'https://transport.opendata.ch/v1/';
  const START = 'Fribourg/Freiburg', KEY = 'hckd-bahnhof';
  const form = $('#board-form'), input = $('#board-q'), list = $('#board-list'), rows = $('#board-rows'), msg = $('#board-msg');
  let station = START;
  try { station = localStorage.getItem(KEY) || START; } catch (e) { /* private window */ }
  input.value = station;
  let timer = 0, sichtbar = false, laden = null;

  const zeit = s => { const d = new Date(s); return isNaN(d) ? '' : d.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' }); };
  // "S" + "30" -> S30; night trains carry the train number instead of a line, then only the category
  const linie = c => {
    const cat = c.category || '', nr = String(c.number || '');
    return cat + (nr && nr.length <= 3 && !/^0/.test(nr) ? nr : '');
  };
  const say = (t, kind) => { msg.textContent = t; msg.className = 'board-msg' + (kind ? ' ' + kind : ''); };

  async function lade() {
    if (laden) laden.abort();
    laden = new AbortController();
    say(rows.children.length ? '' : 'Lade Abfahrten …');
    try {
      const res = await fetch(API + 'stationboard?limit=12&station=' + encodeURIComponent(station), { signal: laden.signal });
      if (!res.ok) throw new Error('http ' + res.status);
      const data = await res.json();
      const st = data.station && data.station.name;
      const deps = (data.stationboard || []).filter(c => c.stop && c.stop.departure);
      $('#board-station').textContent = st ? 'Abfahrt ' + st : 'Abfahrt';
      if (!st) { rows.innerHTML = ''; say('Diesen Bahnhof gibt es nicht. Versuche einen anderen Namen, z. B. «Bern».', 'err'); return; }
      zuege = deps;
      rows.innerHTML = deps.map((c, i) => {
        const s = c.stop, delay = +s.delay || 0, plat = (s.prognosis && s.prognosis.platform) || s.platform || '';
        const neu = s.prognosis && s.prognosis.platform && s.platform && s.prognosis.platform !== s.platform;
        const cat = String(c.category || '').toUpperCase();
        const typ = /^(S|SN)$/.test(cat) ? 's' : /^(IC|ICE|EC|IR|RJX|TGV|EN|NJ)$/.test(cat) ? 'fv' : /^(RE|R|PE)$/.test(cat) ? 'r' : '';
        const stops = (c.passList || []).length > 1;
        return `<tr class="b-row" data-i="${i}">
          <td class="b-time">${zeit(s.departure)}</td>
          <td><span class="b-line ${typ}">${esc(linie(c))}</span></td>
          <td class="b-to">${stops ? `<button class="b-open" type="button" aria-expanded="false" aria-label="Halte von ${esc(linie(c))} nach ${esc(c.to || '')} anzeigen"><span>${esc(c.to || '')}</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>` : esc(c.to || '')}</td>
          <td class="b-pl${neu ? ' neu' : ''}">${esc(plat)}</td>
          <td class="b-delay">${delay > 0 ? '+' + delay + '′' : ''}</td>
        </tr>`;
      }).join('');
      // keep an open train open after the refresh
      if (offen) { const i = deps.findIndex(c => schluessel(c) === offen); if (i >= 0) aufklappen(i); else offen = ''; }
      say(deps.length ? 'Stand ' + new Date().toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' }) : 'Im Moment keine Abfahrten.');
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      say('Die Abfahrten können gerade nicht geladen werden. Auf der fertigen Website funktioniert die Tafel; in der Vorschau sind Verbindungen nach aussen gesperrt.', 'err');
    }
  }
  /* ---------- route of a train: tap a destination to see all stops ---------- */
  let zuege = [], offen = '';
  const schluessel = c => (c.category || '') + (c.number || '') + (c.stop && c.stop.departure);
  function aufklappen(i) {
    const c = zuege[i], tr = $(`tr.b-row[data-i="${i}"]`, rows);
    if (!c || !tr) return;
    const halte = (c.passList || []).slice(1).filter(p => p.station && p.station.name);
    const html = halte.map((p, k) => {
      const t = p.arrival || p.departure, d = +p.delay || 0, letzter = k === halte.length - 1;
      return `<li${letzter ? ' class="end"' : ''}><span class="bs-time">${zeit(t)}${d > 0 ? ` <em>+${d}′</em>` : ''}</span><span class="bs-name">${esc(p.station.name)}</span>${p.platform ? `<span class="bs-pl">Gl. ${esc(p.platform)}</span>` : ''}</li>`;
    }).join('');
    tr.insertAdjacentHTML('afterend', `<tr class="b-detail"><td colspan="5"><ol class="b-stops">${html}</ol></td></tr>`);
    tr.classList.add('open');
    $('.b-open', tr).setAttribute('aria-expanded', 'true');
  }
  function zuklappen() {
    $$('.b-detail', rows).forEach(r => r.remove());
    $$('tr.b-row.open', rows).forEach(r => { r.classList.remove('open'); const b = $('.b-open', r); if (b) b.setAttribute('aria-expanded', 'false'); });
  }
  rows.addEventListener('click', e => {
    const b = e.target.closest('.b-open'); if (!b) return;
    const i = +b.closest('tr').dataset.i, war = b.getAttribute('aria-expanded') === 'true';
    zuklappen();
    offen = war ? '' : schluessel(zuege[i]);
    if (!war) aufklappen(i);
  });

  function plane() {
    clearInterval(timer);
    if (sichtbar && !document.hidden) { lade(); timer = setInterval(lade, 60000); }
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = input.value.trim();
    if (!v) { input.focus(); return; }
    station = v;
    try { localStorage.setItem(KEY, v); } catch (err) { /* private window */ }
    rows.innerHTML = ''; offen = '';
    plane();
    if (!sichtbar) lade();
  });
  // station suggestions while typing
  let tippT = 0, tippC = null;
  input.addEventListener('input', () => {
    clearTimeout(tippT);
    const v = input.value.trim();
    if (v.length < 2) return;
    tippT = setTimeout(async () => {
      if (tippC) tippC.abort();
      tippC = new AbortController();
      try {
        const res = await fetch(API + 'locations?type=station&query=' + encodeURIComponent(v), { signal: tippC.signal });
        const data = await res.json();
        list.innerHTML = (data.stations || []).filter(s => s.name && s.id).slice(0, 8).map(s => `<option value="${esc(s.name)}"></option>`).join('');
      } catch (e) { /* keep the old list */ }
    }, 300);
  });
  // a station chosen from the list loads right away
  input.addEventListener('change', () => { if ([...list.options].some(o => o.value === input.value)) form.requestSubmit(); });

  // small station clock in the header of the board
  const clock = $('#board-clock');
  const tick = () => { clock.textContent = new Date().toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' }); };
  tick(); setInterval(tick, 10000);

  document.addEventListener('visibilitychange', plane);
  const setze = v => { if (v !== sichtbar) { sichtbar = v; plane(); } };
  if ('IntersectionObserver' in window) new IntersectionObserver(en => setze(en[0].isIntersecting), { rootMargin: '200px' }).observe($('#abfahrten'));
  else { sichtbar = true; plane(); }
  // also check after switching pages: the observer does not always report a view that was hidden
  addEventListener('hashchange', () => setTimeout(() => {
    const r = $('#abfahrten').getBoundingClientRect();
    setze(r.height > 0 && r.bottom > -200 && r.top < innerHeight + 200);
  }, 120));
})();
