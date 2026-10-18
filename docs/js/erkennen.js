/* RailBase – Startseite: «Züge unterscheiden» (FLIRT 521–524) */
'use strict';

/* =====================================================================
   ERKENNEN: Übersichtstabelle und je eine Karte pro Baureihe mit Foto.
   Nummerierte Punkte auf dem Foto zeigen die Merkmale; die Erklärung
   steht darunter. Daten: js/daten/erkennen.js
   ===================================================================== */
(() => {
  const grid = $('#erkennen-grid'), tab = $('#erkennen-tbl');
  if (!grid || typeof ERKENNEN === 'undefined') return;
  const reihen = ERKENNEN.filter(e => zugOf(e.zug));
  tab.innerHTML = `<thead><tr><th scope="col">${esc(tr('Baureihe'))}</th><th scope="col">${esc(tr('Strom'))}</th><th scope="col">${esc(tr('Wagen'))}</th><th scope="col">${esc(tr('Nummern'))}</th><th scope="col">${esc(tr('Unterwegs'))}</th></tr></thead>
    <tbody>${reihen.map(e => { const z = zugOf(e.zug), s = e.schnell; return `<tr><th scope="row"><a href="#${z.id}">${esc(zn(z))}</a></th><td>${esc(tr(s.strom))}</td><td>${esc(s.wagen)}</td><td>${esc(s.nummern)}</td><td>${esc(tr(s.region))}</td></tr>`; }).join('')}</tbody>`;
  grid.innerHTML = reihen.map(e => {
    const z = zugOf(e.zug), i = (z.bilder || []).findIndex(b => b.src === e.bild), b = z.bilder[i];
    return `<li class="erk-card">
      <div class="erk-foto">
        <img src="${esc(klein(e.bild))}" alt="${esc(zb(z, i) || z.name)}" loading="lazy">
        ${e.marken.map((m, k) => `<span class="erk-punkt" style="left:${m.x}%;top:${m.y}%" aria-hidden="true">${k + 1}</span>`).join('')}
      </div>
      ${b && b.foto ? `<p class="erk-credit">${esc(tr('Foto:'))} ${esc(b.foto)}${b.lizenz ? ' · ' + esc(b.lizenz) : ''}</p>` : ''}
      <div class="erk-body">
        <h3><a href="#${z.id}">${esc(zn(z))}</a> <small>${esc(zt(z, 'typ'))}</small></h3>
        <ol class="erk-marken">${e.marken.map(m => `<li>${esc(tr(m.text))}</li>`).join('')}</ol>
        <ul class="erk-merkmale">${e.merkmale.map(m => `<li>${esc(tr(m))}</li>`).join('')}</ul>
      </div>
    </li>`;
  }).join('');
})();
