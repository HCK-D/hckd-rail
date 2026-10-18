/* HCKD RAIL – Seite «Neu und aktualisiert» (Menü «Entdecken») */
'use strict';

/* =====================================================================
   NEU: alle Änderungen aus js/daten/neu.js, die neuesten zuoberst.
   Die Seite steht nicht auf der Startseite, sondern unter #neu bzw. neu.html.
   ===================================================================== */
(() => {
  const box = $('#neu-list');
  if (!box || typeof NEU === 'undefined') return;
  const CHIPS = 6;
  const tag = s => { const d = new Date(s + 'T12:00:00'); return isNaN(d) ? s : d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'long', year: 'numeric' }); };
  box.innerHTML = NEU.map(e => {
    const ids = (e.ids || []).filter(id => zugOf(id));
    const chips = ids.slice(0, CHIPS).map(id => `<li><a href="#${id}">${esc(zn(zugOf(id)))}</a></li>`).join('')
      + (ids.length > CHIPS ? `<li class="neu-n">${esc(tr('+{n} weitere', { n: ids.length - CHIPS }))}</li>` : '');
    return `<li class="neu-item">
      <div class="neu-top"><span class="neu-art ${e.art === 'neu' ? 'neu' : 'upd'}">${esc(e.art === 'neu' ? tr('Neu') : tr('Aktualisiert'))}</span><time datetime="${esc(e.datum)}">${esc(tag(e.datum))}</time></div>
      <p>${esc(tr(e.text))}${e.link ? ` <a class="neu-link" href="#${esc(e.link)}">${esc(tr('Ansehen'))}</a>` : ''}</p>
      ${chips ? `<ul class="neu-chips">${chips}</ul>` : ''}
    </li>`;
  }).join('');
})();
