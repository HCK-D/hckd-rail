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
  $('span', cmpBtn).textContent = on ? tr('Im Vergleich') : full ? tr('Vergleich ist voll (3)') : tr('Zum Vergleich');
  $('#cmp-chips').innerHTML = cmpIds.map(id => {
    const z = zugOf(id);
    return `<li><a href="#${id}">${esc(z.name)}</a><button type="button" data-cmp-del="${id}" aria-label="${esc(tr('{name} aus dem Vergleich entfernen', { name: z.name }))}">×</button></li>`;
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
// German value: for the numbers (highest value)
function cmpVal(z, key) {
  if (key === 'Typ') return z.typ;
  if (key === 'Kategorie') return katOf(z.kat).name;
  if (key === 'In Betrieb seit' && !z.daten[key]) { const j = jahrOf(z); return isNaN(j) ? '' : String(j); }
  return z.daten[key] || '';
}
// the same value in the chosen language: for the table
function cmpText(z, key) {
  if (key === 'Typ') return zt(z, 'typ');
  if (key === 'Kategorie') return tr(katOf(z.kat).name);
  if (z.daten[key]) return zd(z, key);
  return cmpVal(z, key);
}
function renderVergleich() {
  cmpAdd.innerHTML = `<option value="">${esc(cmpIds.length >= CMP_MAX ? tr('Vergleich ist voll (3)') : tr('Fahrzeug wählen …'))}</option>` +
    KATS.map(k => `<optgroup label="${esc(tr(k.name))}">${inKat(k.id).map(z => `<option value="${z.id}"${cmpIds.includes(z.id) ? ' disabled' : ''}>${esc(fullName(z))}</option>`).join('')}</optgroup>`).join('');
  cmpAdd.disabled = cmpIds.length >= CMP_MAX;
  const list = cmpIds.map(zugOf), out = $('#cmp-out');
  if (!list.length) {
    out.innerHTML = `<p class="empty">${esc(tr('Noch nichts ausgewählt. Wähle oben ein Fahrzeug oder tippe auf einer Fahrzeugseite auf «Zum Vergleich».'))}</p>`;
    return;
  }
  const rows = CMP_ROWS.filter(key => list.some(z => cmpVal(z, key)));
  const head = list.map(z => `<th scope="col"><div class="cmp-head">
      <a class="cmp-pic" href="#${z.id}">${z.bilder && z.bilder.length ? `<img src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy">` : art(z)}</a>
      <a class="cmp-name" href="#${z.id}">${esc(z.name)}${zt(z, 'beiname') ? `<small>${esc(zt(z, 'beiname'))}</small>` : ''}</a>
      <button class="cmp-del" type="button" data-cmp-del="${z.id}">${esc(tr('Entfernen'))}</button>
    </div></th>`).join('');
  const body = rows.map(key => {
    let best = -1;
    if (CMP_BEST.includes(key) && list.length > 1) {
      const n = list.map(z => zahl(cmpVal(z, key))), max = Math.max(...n.filter(x => !isNaN(x)));
      if (n.filter(x => !isNaN(x)).length > 1 && n.filter(x => x === max).length === 1) best = n.indexOf(max);
    }
    return `<tr><th scope="row">${esc(tr(key))}</th>${list.map((z, i) => {
      const v = cmpText(z, key);
      return `<td class="${v ? '' : 'tbd'}${i === best ? ' best' : ''}">${v ? esc(v) : '–'}</td>`;
    }).join('')}</tr>`;
  }).join('');
  out.innerHTML = `<div class="tbl-wrap cmp-wrap"><table class="tbl cmp-tbl cols-${list.length}">
      <thead><tr><td></td>${head}</tr></thead><tbody>${body}</tbody></table></div>
    ${laengen(list)}
    <div class="cmp-foot"><p>${esc(tr('Grün markiert: der höchste Wert in der Zeile. Angaben mit * sind ungefähr.'))}</p><button class="report-btn" type="button" id="cmp-clear">${esc(tr('Vergleich leeren'))}</button></div>`;
}
// lengths to scale, one thin bar per vehicle; the ticks mark every 10 m
function laengen(list) {
  const l = list.map(z => ({ z, m: zahl(z.daten['Länge']) }));
  const max = Math.max(...l.map(o => o.m).filter(m => !isNaN(m)));
  if (!isFinite(max) || l.filter(o => !isNaN(o.m)).length < 1) return '';
  return `<div class="cmp-len">
    <h2>${esc(tr('Länge im Massstab'))}</h2>
    <ul>${l.map(({ z, m }) => `<li><span class="cl-name">${esc(z.name)}</span>${isNaN(m)
      ? `<span class="cl-none">${esc(tr('Länge folgt'))}</span>`
      : `<span class="cl-track" style="--tick:${(10 / max * 100).toFixed(3)}%"><i style="width:${(m / max * 100).toFixed(2)}%"></i></span><span class="cl-m">${esc(zahlText(m))} m</span>`}</li>`).join('')}</ul>
    <p>${esc(l.some(o => /\*|ca\./.test(o.z.daten['Länge'] || '')) ? tr('Ein Strich = 10 m, ungefähre Werte.') : tr('Ein Strich = 10 m.'))}</p>
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
const SICHT_KEY = 'hckd-sichtungen';
let sicht = (() => {
  try { const o = JSON.parse(localStorage.getItem(SICHT_KEY) || '{}'); return o && typeof o === 'object' && !Array.isArray(o) ? o : {}; }
  catch (e) { return {}; }
})();
const sichtAnzahl = () => Object.values(sicht).reduce((n, l) => n + (Array.isArray(l) ? l.length : 0), 0);
const seenBtn = $('#zug-seen');
function istGesehen(id) { return seenIds.includes(id); }
function albumSync() {
  const on = !!(curZug && istGesehen(curZug.id));
  seenBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  $('span', seenBtn).textContent = on ? tr('Gesehen') : tr('Hab ich gesehen');
  const n = seenIds.length, total = ZUEGE.length;
  const s = sichtAnzahl();
  $('#album-n').textContent = tr('{n} von {total} gesehen', { n, total }) + (s ? ' · ' + (s === 1 ? tr('1 Sichtung') : tr('{s} Sichtungen', { s })) : '');
  $('#album-bar').style.width = (total ? n / total * 100 : 0) + '%';
  if (typeof sammlungRender === 'function') sammlungRender(); // page «Meine Sammlung» and the badges (sammlung.js)
  $$('[data-seen-kat]').forEach(el => {
    const k = inKat(el.dataset.seenKat).filter(z => istGesehen(z.id)).length;
    el.textContent = k ? ' · ' + tr('{n} gesehen', { n: k }) : '';
  });
}
function seenSpeichern() {
  try { localStorage.setItem(SEEN_KEY, JSON.stringify(seenIds)); } catch (e) { /* private window: keep it for this visit */ }
}
seenBtn.addEventListener('click', () => {
  if (!curZug) return;
  seenIds = istGesehen(curZug.id) ? seenIds.filter(id => id !== curZug.id) : seenIds.concat(curZug.id);
  seenSpeichern();
  albumSync();
});

/* ---------- Sichtungen: wann, wo, welche Nummer, Notiz (nur im Browser) ----------
   hckd-sichtungen = { "re-460": [{ d: "2026-10-18", ort, nr, notiz, t }] }; t = time of entry, keeps entries apart.
   Saving a sighting also marks the vehicle as seen. */
const sichtForm = $('#sicht-form'), sichtNeu = $('#sicht-neu');
const heute = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const datumText = s => { const d = new Date(s + 'T12:00:00'); return isNaN(d) ? s : d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'long', year: 'numeric' }); };
function sichtSpeichern() {
  try { localStorage.setItem(SICHT_KEY, JSON.stringify(sicht)); } catch (e) { /* private window: keep it for this visit */ }
}
function sichtRender() {
  if (!curZug) return;
  const list = (sicht[curZug.id] || []).slice().sort((a, b) => (b.d || '').localeCompare(a.d || '') || b.t - a.t);
  $('#sicht-list').innerHTML = list.map(s => `<li><span class="sl-d">${esc(datumText(s.d))}</span>${s.ort ? `<span class="sl-ort">${esc(s.ort)}</span>` : ''}${s.nr ? `<span class="sl-nr">${esc(tr('Nr.'))} ${esc(s.nr)}</span>` : ''}${s.notiz ? `<span class="sl-notiz">${esc(s.notiz)}</span>` : ''}<button type="button" class="sl-del" data-sicht-del="${s.t}" aria-label="${esc(tr('Sichtung vom {d} löschen', { d: datumText(s.d) }))}">×</button></li>`).join('');
  $('#sicht-titel').textContent = list.length ? tr('Meine Sichtungen ({n})', { n: list.length }) : tr('Meine Sichtungen');
}
function sichtFormZu() { sichtForm.hidden = true; sichtNeu.setAttribute('aria-expanded', 'false'); }
sichtNeu.addEventListener('click', () => {
  const auf = sichtForm.hidden;
  sichtForm.hidden = !auf; sichtNeu.setAttribute('aria-expanded', String(auf));
  if (auf) { sichtForm.reset(); sichtForm.elements.d.value = heute(); sichtForm.elements.ort.focus(); }
});
$('#sicht-abbruch').addEventListener('click', sichtFormZu);
sichtForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!curZug) return;
  const f = sichtForm.elements, txt = el => el.value.trim().slice(0, +el.maxLength > 0 ? +el.maxLength : 200);
  (sicht[curZug.id] = sicht[curZug.id] || []).push({ d: f.d.value || heute(), ort: txt(f.ort), nr: txt(f.nr), notiz: txt(f.notiz), t: Date.now() });
  sichtSpeichern();
  if (!istGesehen(curZug.id)) { seenIds = seenIds.concat(curZug.id); seenSpeichern(); }
  sichtFormZu(); sichtRender(); albumSync();
});
$('#sicht-list').addEventListener('click', e => {
  const b = e.target.closest('[data-sicht-del]'); if (!b || !curZug) return;
  sicht[curZug.id] = (sicht[curZug.id] || []).filter(s => String(s.t) !== b.dataset.sichtDel);
  if (!sicht[curZug.id].length) delete sicht[curZug.id];
  sichtSpeichern(); sichtRender(); albumSync();
});
// another page: close the form (renderZug shows the sightings of the new vehicle)
addEventListener('hashchange', sichtFormZu);

/* ---------- Sammlung sichern und laden ---------- */
function datei(name, inhalt, typ) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([inhalt], { type: typ }));
  a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
const albumMsg = t => { $('#album-msg').textContent = t; };
$('#album-export').addEventListener('click', () => {
  const daten = { app: 'HCKD RAIL', version: 1, exportiert: new Date().toISOString(), gesehen: seenIds, sichtungen: sicht };
  datei('hckd-rail-sammlung-' + heute() + '.json', JSON.stringify(daten, null, 2), 'application/json');
  albumMsg(tr('Gesichert: {n} Fahrzeuge, {s} Sichtungen.', { n: seenIds.length, s: sichtAnzahl() }));
});
$('#album-csv').addEventListener('click', () => {
  const zelle = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  const zeilen = [[tr('Fahrzeug'), tr('Kategorie'), tr('Datum'), tr('Ort'), tr('Fahrzeugnummer'), tr('Notiz')]];
  for (const id of seenIds) {
    const z = zugOf(id), list = sicht[id] || [];
    if (!list.length) zeilen.push([fullName(z), tr(katOf(z.kat).name), '', '', '', '']);
    for (const s of list) zeilen.push([fullName(z), tr(katOf(z.kat).name), s.d, s.ort, s.nr, s.notiz]);
  }
  // semicolons and a BOM so that Excel in Switzerland opens it correctly
  datei('hckd-rail-sammlung-' + heute() + '.csv', '﻿' + zeilen.map(r => r.map(zelle).join(';')).join('\r\n'), 'text/csv;charset=utf-8');
});
$('#album-import-btn').addEventListener('click', () => $('#album-import').click());
$('#album-import').addEventListener('change', async e => {
  const f = e.target.files && e.target.files[0]; e.target.value = '';
  if (!f) return;
  try {
    const o = JSON.parse(await f.text());
    if (!o || o.app !== 'HCKD RAIL' || !Array.isArray(o.gesehen)) throw new Error('format');
    // merge: nothing that is already here gets lost
    seenIds = seenIds.concat(o.gesehen.filter(id => typeof id === 'string' && zugOf(id) && !seenIds.includes(id)));
    let neu = 0;
    for (const [id, list] of Object.entries(o.sichtungen || {})) {
      if (!zugOf(id) || !Array.isArray(list)) continue;
      const da = sicht[id] = sicht[id] || [];
      for (const s of list) {
        if (!s || typeof s.d !== 'string' || da.some(x => x.t === s.t && x.d === s.d)) continue;
        da.push({ d: s.d.slice(0, 10), ort: String(s.ort || '').slice(0, 80), nr: String(s.nr || '').slice(0, 40), notiz: String(s.notiz || '').slice(0, 200), t: +s.t || Date.now() + neu });
        neu++;
      }
      if (!seenIds.includes(id)) seenIds.push(id);
    }
    seenSpeichern(); sichtSpeichern(); albumSync(); sichtRender();
    albumMsg(tr('Geladen: {n} Fahrzeuge, {s} neue Sichtungen.', { n: seenIds.length, s: neu }));
  } catch (err) {
    albumMsg(tr('Diese Datei kann nicht gelesen werden. Wähle eine Datei, die mit «Sammlung sichern» erstellt wurde.'));
  }
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
  try { await navigator.clipboard.writeText(data.kopie || data.url); say(data.kopie ? tr('Text kopiert') : tr('Link kopiert')); }
  catch (e) { say(tr('Kopieren nicht möglich')); }
}
const shareBtn = $('#zug-share');
shareBtn.addEventListener('click', () => {
  if (!curZug) return;
  teilen({ title: fullName(curZug) + ' · HCKD RAIL', text: fullName(curZug) + ': ' + zt(curZug, 'typ'), url: seitenLink(curZug.id) }, $('span', shareBtn));
});

/* =====================================================================
   BILDNACHWEIS im Impressum: alle Fotos mit freier Lizenz
   ===================================================================== */
(() => {
  const liste = ZUEGE.map(z => ({ z, b: (z.bilder || []).map((x, i) => ({ x, i })).filter(o => o.x.foto) })).filter(o => o.b.length);
  $('#bildnachweis').innerHTML = liste.map(({ z, b }) => `<li><b>${esc(fullName(z))}</b><ul>${b.map(({ x, i }) =>
    `<li>${esc(zb(z, i))}: ${nachweis(x).replace(/^<small class="credit">|<\/small>$/g, '')}</li>`).join('')}</ul></li>`).join('');
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
  const datum = d.toLocaleDateString(LOCALE, { weekday: 'long', day: 'numeric', month: 'long' });
  const pic = z.bilder && z.bilder.length ? `<img src="${esc(z.bilder[0].src)}" alt="${esc(zb(z, 0))}" loading="lazy">` : art(z);
  const kz = zt(z, 'kennzahlen') || [], bei = zt(z, 'beiname');
  $('#heute-card').innerHTML = `<a class="heute-pic" href="#${z.id}" tabindex="-1" aria-hidden="true">${pic}</a>
    <div class="heute-body">
      <span class="kicker">${esc(tr('Fahrzeug des Tages'))} · ${esc(datum)}</span>
      <h2 id="heute-h"><a href="#${z.id}">${esc(z.name)}${bei ? ` <small>«${esc(bei)}»</small>` : ''}</a></h2>
      <p class="heute-typ">${esc(zt(z, 'typ'))} · ${esc(tr(k.name))}</p>
      <p class="heute-text">${esc(zt(z, 'text')[0])}</p>
      ${kz.length ? `<ul class="kz">${kz.slice(0, 3).map(([v, l]) => `<li><b>${esc(v)}</b><span>${esc(l)}</span></li>`).join('')}</ul>` : ''}
      <a class="heute-go" href="#${z.id}">${esc(tr('Zum Fahrzeug'))} ${arrow}</a>
    </div>`;
})();

/* =====================================================================
   ZEITSTRAHL: Fahrzeuge nach Jahr der ersten Inbetriebnahme
   ===================================================================== */
(() => {
  const items = ZUEGE.map(z => ({ z, j: jahrOf(z) })).filter(o => !isNaN(o.j))
    .sort((a, b) => a.j - b.j || a.z.name.localeCompare(b.z.name, LOCALE, { numeric: true }));
  const list = $('#zs-list');
  list.innerHTML = items.map(({ z, j }, i) => `<li${i && items[i - 1].j === j ? ' class="same"' : ''}><a class="zs-item" href="#${z.id}">
      <span class="zs-jahr">${j}</span><span class="zs-dot" aria-hidden="true"></span>
      <span class="zs-card"><span class="zs-pic">${z.bilder && z.bilder.length ? `<img src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy" draggable="false">` : art(z)}</span>
        <b>${esc(z.name)}</b>${zt(z, 'beiname') ? `<small>${esc(zt(z, 'beiname'))}</small>` : ''}<span class="zs-kat">${esc(tr(katOf(z.kat).name))}</span></span>
    </a></li>`).join('');
  // arrows for mouse users; touch and trackpads scroll natively
  const wrap = list.parentElement;
  wrap.insertAdjacentHTML('beforeend', `<button class="zs-nav prev" type="button" aria-label="${esc(tr('Zurück'))}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button><button class="zs-nav next" type="button" aria-label="${esc(tr('Weiter'))}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>`);
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
