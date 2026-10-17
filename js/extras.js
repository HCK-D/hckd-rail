/* HCKD RAIL – Fahrzeugvergleich und Zeitstrahl */
'use strict';

/* =====================================================================
   VERGLEICH: bis zu drei Fahrzeuge, die Auswahl bleibt im Browser (localStorage)
   ===================================================================== */
const CMP_KEY = 'hckd-vergleich', CMP_MAX = 3;
let cmpIds = (() => {
  try {
    const a = JSON.parse(localStorage.getItem(CMP_KEY) || '[]');
    return Array.isArray(a) ? a.filter(id => zugOf(id)).slice(0, CMP_MAX) : [];
  } catch (e) { return []; }
})();
const cmpBtn = $('#zug-cmp'), cmpBar = $('#cmp-bar'), cmpAdd = $('#cmp-add');

function cmpSet(ids) {
  cmpIds = ids.filter((id, i) => zugOf(id) && ids.indexOf(id) === i).slice(0, CMP_MAX);
  try { localStorage.setItem(CMP_KEY, JSON.stringify(cmpIds)); } catch (e) { /* private window: keep it for this visit */ }
  cmpSync();
  if (curView === 'vergleich') renderVergleich();
}
function cmpSync() {
  const on = !!(curZug && cmpIds.includes(curZug.id)), full = cmpIds.length >= CMP_MAX;
  cmpBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  cmpBtn.disabled = !on && full;
  $('span', cmpBtn).textContent = on ? 'Im Vergleich' : full ? 'Vergleich ist voll (3)' : 'Zum Vergleich';
  $('#cmp-chips').innerHTML = cmpIds.map(id => {
    const z = zugOf(id);
    return `<li><a href="#${id}">${esc(z.name)}</a><button type="button" data-cmp-del="${id}" aria-label="${esc(z.name)} aus dem Vergleich entfernen">×</button></li>`;
  }).join('');
  const bar = cmpIds.length > 0 && curView !== 'vergleich';
  cmpBar.hidden = !bar;
  document.body.classList.toggle('has-cmp', bar);
  albumSync();
}
cmpBtn.addEventListener('click', () => {
  if (!curZug) return;
  cmpSet(cmpIds.includes(curZug.id) ? cmpIds.filter(id => id !== curZug.id) : cmpIds.concat(curZug.id));
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-cmp-del]');
  if (b) cmpSet(cmpIds.filter(id => id !== b.dataset.cmpDel));
  if (e.target.closest('#cmp-clear')) cmpSet([]);
});
cmpAdd.addEventListener('change', () => { if (cmpAdd.value) cmpSet(cmpIds.concat(cmpAdd.value)); });

const CMP_ROWS = ['Typ', 'Kategorie', 'Hersteller', 'Betreiber', 'In Betrieb seit', 'Anzahl', 'Spurweite', 'Stromsystem', 'Antrieb', 'Leistung', 'Höchstgeschwindigkeit', 'Anfahrzugkraft', 'Länge', 'Gewicht', 'Sitzplätze', 'Einsatz'];
// rows where the highest number is marked
const CMP_BEST = ['Leistung', 'Höchstgeschwindigkeit', 'Anfahrzugkraft', 'Sitzplätze'];
function cmpVal(z, key) {
  if (key === 'Typ') return z.typ;
  if (key === 'Kategorie') return katOf(z.kat).name;
  if (key === 'In Betrieb seit' && !z.daten[key]) { const j = jahrOf(z); return isNaN(j) ? '' : String(j); }
  return z.daten[key] || '';
}
function renderVergleich() {
  cmpAdd.innerHTML = `<option value="">${cmpIds.length >= CMP_MAX ? 'Vergleich ist voll (3)' : 'Fahrzeug wählen …'}</option>` +
    KATS.map(k => `<optgroup label="${esc(k.name)}">${inKat(k.id).map(z => `<option value="${z.id}"${cmpIds.includes(z.id) ? ' disabled' : ''}>${esc(fullName(z))}</option>`).join('')}</optgroup>`).join('');
  cmpAdd.disabled = cmpIds.length >= CMP_MAX;
  const list = cmpIds.map(zugOf), out = $('#cmp-out');
  if (!list.length) {
    out.innerHTML = `<p class="empty">Noch nichts ausgewählt. Wähle oben ein Fahrzeug oder tippe auf einer Fahrzeugseite auf «Zum Vergleich».</p>`;
    return;
  }
  const rows = CMP_ROWS.filter(key => list.some(z => cmpVal(z, key)));
  const head = list.map(z => `<th scope="col"><div class="cmp-head">
      <a class="cmp-pic" href="#${z.id}">${z.bilder && z.bilder.length ? `<img src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy">` : art(z)}</a>
      <a class="cmp-name" href="#${z.id}">${esc(z.name)}${z.beiname ? `<small>${esc(z.beiname)}</small>` : ''}</a>
      <button class="cmp-del" type="button" data-cmp-del="${z.id}">Entfernen</button>
    </div></th>`).join('');
  const body = rows.map(key => {
    let best = -1;
    if (CMP_BEST.includes(key) && list.length > 1) {
      const n = list.map(z => zahl(cmpVal(z, key))), max = Math.max(...n.filter(x => !isNaN(x)));
      if (n.filter(x => !isNaN(x)).length > 1 && n.filter(x => x === max).length === 1) best = n.indexOf(max);
    }
    return `<tr><th scope="row">${esc(key)}</th>${list.map((z, i) => {
      const v = cmpVal(z, key);
      return `<td class="${v ? '' : 'tbd'}${i === best ? ' best' : ''}">${v ? esc(v) : '–'}</td>`;
    }).join('')}</tr>`;
  }).join('');
  out.innerHTML = `<div class="tbl-wrap cmp-wrap"><table class="tbl cmp-tbl cols-${list.length}">
      <thead><tr><td></td>${head}</tr></thead><tbody>${body}</tbody></table></div>
    ${laengen(list)}
    <div class="cmp-foot"><p>Grün markiert: der höchste Wert in der Zeile. Angaben mit * sind ungefähr.</p><button class="report-btn" type="button" id="cmp-clear">Vergleich leeren</button></div>`;
}
// lengths to scale, one thin bar per vehicle; the ticks mark every 10 m
function laengen(list) {
  const l = list.map(z => ({ z, m: zahl(z.daten['Länge']) }));
  const max = Math.max(...l.map(o => o.m).filter(m => !isNaN(m)));
  if (!isFinite(max) || l.filter(o => !isNaN(o.m)).length < 1) return '';
  return `<div class="cmp-len">
    <h2>Länge im Massstab</h2>
    <ul>${l.map(({ z, m }) => `<li><span class="cl-name">${esc(z.name)}</span>${isNaN(m)
      ? '<span class="cl-none">Länge folgt</span>'
      : `<span class="cl-track" style="--tick:${(10 / max * 100).toFixed(3)}%"><i style="width:${(m / max * 100).toFixed(2)}%"></i></span><span class="cl-m">${esc(String(m).replace('.', ','))} m</span>`}</li>`).join('')}</ul>
    <p>Ein Strich = 10 m${l.some(o => /\*|ca\./.test(o.z.daten['Länge'] || '')) ? ', ungefähre Werte' : ''}.</p>
  </div>`;
}

/* =====================================================================
   SAMMELALBUM: welche Fahrzeuge du schon gesehen hast (nur im Browser)
   ===================================================================== */
const SEEN_KEY = 'hckd-gesehen';
let seenIds = (() => {
  try { const a = JSON.parse(localStorage.getItem(SEEN_KEY) || '[]'); return Array.isArray(a) ? a.filter(id => zugOf(id)) : []; }
  catch (e) { return []; }
})();
const seenBtn = $('#zug-seen');
function istGesehen(id) { return seenIds.includes(id); }
function albumSync() {
  const on = !!(curZug && istGesehen(curZug.id));
  seenBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  $('span', seenBtn).textContent = on ? 'Gesehen' : 'Hab ich gesehen';
  const n = seenIds.length, total = ZUEGE.length;
  $('#album-n').textContent = `${n} von ${total} gesehen`;
  $('#album-bar').style.width = (total ? n / total * 100 : 0) + '%';
  $$('[data-seen-kat]').forEach(el => {
    const k = inKat(el.dataset.seenKat).filter(z => istGesehen(z.id)).length;
    el.textContent = k ? ` · ${k} gesehen` : '';
  });
}
seenBtn.addEventListener('click', () => {
  if (!curZug) return;
  seenIds = istGesehen(curZug.id) ? seenIds.filter(id => id !== curZug.id) : seenIds.concat(curZug.id);
  try { localStorage.setItem(SEEN_KEY, JSON.stringify(seenIds)); } catch (e) { /* private window: keep it for this visit */ }
  albumSync();
});

/* =====================================================================
   TEILEN: Teilen-Menü des Handys, sonst Link kopieren
   ===================================================================== */
// full address of a page, also on the GitHub version (re-460.html)
const seitenLink = id => SEITEN ? new URL(seitenUrl(id), location.href).href : location.href.split('#')[0] + '#' + id;
// share menu of the phone; otherwise copy text and link. label = the <span> in the button
async function teilen(data, label) {
  const alt = label.textContent;
  const say = t => { label.textContent = t; setTimeout(() => { label.textContent = alt; }, 2200); };
  if (navigator.share) {
    try { await navigator.share(data); return; }
    catch (e) { if (e && e.name === 'AbortError') return; }
  }
  try { await navigator.clipboard.writeText(data.kopie || data.url); say(data.kopie ? 'Text kopiert' : 'Link kopiert'); }
  catch (e) { say('Kopieren nicht möglich'); }
}
const shareBtn = $('#zug-share');
shareBtn.addEventListener('click', () => {
  if (!curZug) return;
  teilen({ title: fullName(curZug) + ' · HCKD RAIL', text: fullName(curZug) + ': ' + curZug.typ, url: seitenLink(curZug.id) }, $('span', shareBtn));
});

/* =====================================================================
   BILDNACHWEIS im Impressum: alle Fotos mit freier Lizenz
   ===================================================================== */
(() => {
  const liste = ZUEGE.map(z => ({ z, b: (z.bilder || []).filter(b => b.foto) })).filter(o => o.b.length);
  $('#bildnachweis').innerHTML = liste.map(({ z, b }) => `<li><b>${esc(fullName(z))}</b><ul>${b.map(x =>
    `<li>${esc(x.titel)}: ${nachweis(x).replace(/^<small class="credit">|<\/small>$/g, '')}</li>`).join('')}</ul></li>`).join('');
})();

/* =====================================================================
   ZUFÄLLIGES FAHRZEUG (Knopf auf der Startseite und auf jeder Fahrzeugseite)
   ===================================================================== */
document.addEventListener('click', e => {
  if (!e.target.closest('[data-zufall]')) return;
  const andere = ZUEGE.filter(z => !curZug || z.id !== curZug.id);
  gehe(andere[Math.floor(Math.random() * andere.length)].id);
});

/* =====================================================================
   FAHRZEUG DES TAGES: jeden Tag ein anderes, zuerst die fertigen Einträge
   ===================================================================== */
(() => {
  const fertig = ZUEGE.filter(z => z.vorlaeufig === false || (z.bilder && z.bilder.length));
  const list = fertig.length ? fertig : ZUEGE;
  const d = new Date(), tag = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  const z = list[tag % list.length], k = katOf(z.kat);
  const datum = d.toLocaleDateString('de-CH', { weekday: 'long', day: 'numeric', month: 'long' });
  const pic = z.bilder && z.bilder.length ? `<img src="${esc(z.bilder[0].src)}" alt="${esc(z.bilder[0].titel || z.name)}" loading="lazy">` : art(z);
  $('#heute-card').innerHTML = `<a class="heute-pic" href="#${z.id}" tabindex="-1" aria-hidden="true">${pic}</a>
    <div class="heute-body">
      <span class="kicker">Fahrzeug des Tages · ${esc(datum)}</span>
      <h2 id="heute-h"><a href="#${z.id}">${esc(z.name)}${z.beiname ? ` <small>«${esc(z.beiname)}»</small>` : ''}</a></h2>
      <p class="heute-typ">${esc(z.typ)} · ${esc(k.name)}</p>
      <p class="heute-text">${esc(z.text[0])}</p>
      ${z.kennzahlen && z.kennzahlen.length ? `<ul class="kz">${z.kennzahlen.slice(0, 3).map(([v, l]) => `<li><b>${esc(v)}</b><span>${esc(l)}</span></li>`).join('')}</ul>` : ''}
      <a class="heute-go" href="#${z.id}">Zum Fahrzeug ${arrow}</a>
    </div>`;
})();

/* =====================================================================
   ZEITSTRAHL: Fahrzeuge nach Jahr der ersten Inbetriebnahme
   ===================================================================== */
(() => {
  const items = ZUEGE.map(z => ({ z, j: jahrOf(z) })).filter(o => !isNaN(o.j))
    .sort((a, b) => a.j - b.j || a.z.name.localeCompare(b.z.name, 'de', { numeric: true }));
  const list = $('#zs-list');
  list.innerHTML = items.map(({ z, j }, i) => `<li${i && items[i - 1].j === j ? ' class="same"' : ''}><a class="zs-item" href="#${z.id}">
      <span class="zs-jahr">${j}</span><span class="zs-dot" aria-hidden="true"></span>
      <span class="zs-card"><span class="zs-pic">${z.bilder && z.bilder.length ? `<img src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy" draggable="false">` : art(z)}</span>
        <b>${esc(z.name)}</b>${z.beiname ? `<small>${esc(z.beiname)}</small>` : ''}<span class="zs-kat">${esc(katOf(z.kat).name)}</span></span>
    </a></li>`).join('');
  // arrows for mouse users; touch and trackpads scroll natively
  const wrap = list.parentElement;
  wrap.insertAdjacentHTML('beforeend', `<button class="zs-nav prev" type="button" aria-label="Zurück"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button><button class="zs-nav next" type="button" aria-label="Weiter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>`);
  const prev = $('.zs-nav.prev', wrap), next = $('.zs-nav.next', wrap);
  const upd = () => { prev.disabled = list.scrollLeft < 4; next.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 4; };
  const step = d => list.scrollBy({ left: d * Math.max(240, list.clientWidth * 0.8), behavior: reduce ? 'auto' : 'smooth' });
  prev.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  list.addEventListener('scroll', upd, { passive: true });
  addEventListener('resize', upd);
  addEventListener('hashchange', () => requestAnimationFrame(upd)); // width is 0 while the start page is hidden
  upd();
})();
