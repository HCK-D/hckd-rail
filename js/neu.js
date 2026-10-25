/* RailBase – Seite «Neu und aktualisiert» (Menü «Entdecken») */
'use strict';

/* =====================================================================
   NEU: alle Änderungen aus js/daten/neu.js, die neuesten zuoberst, auf der
   Seite #neu bzw. neu.html. Die Startseite zeigt die neuesten vier.
   ===================================================================== */
(() => {
  if (typeof NEU === 'undefined') return;
  const CHIPS = 6, AUF_START = 4;
  const tag = s => { const d = new Date(s + 'T12:00:00'); return isNaN(d) ? s : d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'long', year: 'numeric' }); };
  const eintrag = e => {
    const ids = (e.ids || []).filter(id => zugOf(id));
    const chips = ids.slice(0, CHIPS).map(id => `<li><a href="#${id}">${esc(zn(zugOf(id)))}</a></li>`).join('')
      + (ids.length > CHIPS ? `<li class="neu-n">${esc(tr('+{n} weitere', { n: ids.length - CHIPS }))}</li>` : '');
    return `<li class="neu-item">
      <div class="neu-top"><span class="neu-art ${e.art === 'neu' ? 'neu' : 'upd'}">${esc(e.art === 'neu' ? tr('Neu') : tr('Aktualisiert'))}</span><time datetime="${esc(e.datum)}">${esc(tag(e.datum))}</time></div>
      <p>${esc(tr(e.text))}${e.link ? ` <a class="neu-link" href="#${esc(e.link)}">${esc(tr('Ansehen'))}</a>` : ''}</p>
      ${chips ? `<ul class="neu-chips">${chips}</ul>` : ''}
    </li>`;
  };
  const alle = $('#neu-list'), start = $('#neu-start-list');
  if (alle) alle.innerHTML = NEU.map(eintrag).join('');
  if (start) start.innerHTML = NEU.slice(0, AUF_START).map(eintrag).join('');
})();
