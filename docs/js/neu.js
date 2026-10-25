/* RailBase – «Neu und aktualisiert»: Seite unter Entdecken und Kasten auf der Startseite */
'use strict';

/* =====================================================================
   NEU: alle Änderungen aus js/daten/neu.js, die neuesten zuoberst, auf der
   Seite #neu bzw. neu.html. Die Startseite zeigt einen Kasten mit je dem
   neuesten Eintrag zu «Neues Fahrzeug», «Neue Fahrzeugfotos» und «Daten
   aktualisiert». Was seit dem letzten Besuch dazukam, ist markiert
   (Datum im Browser gemerkt, localStorage).
   ===================================================================== */
(() => {
  if (typeof NEU === 'undefined') return;
  const CHIPS = 6, CHIPS_START = 4, KEY = 'hckd-neu-gesehen';
  const svg = d => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ARTEN = {
    fahrzeug: { titel: 'Neues Fahrzeug hinzugefügt', kurz: 'Neues Fahrzeug', ico: svg('<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M8.5 13.5h.01M15.5 13.5h.01M8 17l-2 4M16 17l2 4"/>') },
    foto: { titel: 'Neue Fahrzeugfotos', kurz: 'Neue Fotos', ico: svg('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>') },
    daten: { titel: 'Daten aktualisiert', kurz: 'Daten aktualisiert', ico: svg('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>') },
    funktion: { titel: 'Neue Funktion', kurz: 'Neue Funktion', ico: svg('<path d="M12 3l2 5.5 5.5 2-5.5 2L12 18l-2-5.5-5.5-2 5.5-2z"/>') }
  };
  const tag = s => { const d = new Date(s + 'T12:00:00'); return isNaN(d) ? s : d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'long', year: 'numeric' }); };
  const chips = (e, max) => {
    const ids = (e.ids || []).filter(id => zugOf(id));
    return ids.length ? `<ul class="neu-chips">${ids.slice(0, max).map(id => `<li><a href="#${id}">${esc(zn(zugOf(id)))}</a></li>`).join('')}`
      + (ids.length > max ? `<li class="neu-n">${esc(tr('+{n} weitere', { n: ids.length - max }))}</li>` : '') + '</ul>' : '';
  };
  const link = e => e.link ? ` <a class="neu-link" href="#${esc(e.link)}">${esc(tr('Ansehen'))}</a>` : '';
  // date of the newest entry at the last visit; entries after it are new for this visitor
  let zuletzt = '';
  try { zuletzt = localStorage.getItem(KEY) || ''; } catch (e) { /* private window */ }
  // remembered only once the news were really on screen (not on every vehicle page)
  const gesehen = () => { try { localStorage.setItem(KEY, NEU[0].datum); } catch (e) { /* private window */ } };
  const neuFuerDich = e => zuletzt && e.datum > zuletzt ? `<span class="neu-dich">${esc(tr('Neu für dich'))}</span>` : '';

  // page «Neu und aktualisiert»: every entry with its kind
  const alle = $('#neu-list');
  if (alle) alle.innerHTML = NEU.map(e => {
    const a = ARTEN[e.art] || ARTEN.funktion;
    return `<li class="neu-item">
      <div class="neu-top"><span class="neu-art ${e.art}">${a.ico}${esc(tr(a.kurz))}</span><time datetime="${esc(e.datum)}">${esc(tag(e.datum))}</time></div>
      <p>${esc(tr(e.text))}${link(e)}</p>
      ${chips(e, CHIPS)}
    </li>`;
  }).join('');

  // start page: newest vehicle, newest photos, newest data update
  const start = $('#neu-start-list');
  if (start) start.innerHTML = ['fahrzeug', 'foto', 'daten'].map(art => {
    const e = NEU.find(x => x.art === art);
    if (!e) return '';
    const a = ARTEN[art];
    return `<li class="neu-zeile">
      <span class="neu-ico">${a.ico}</span>
      <div class="neu-zeile-txt">
        <b>${esc(tr(a.titel))}${neuFuerDich(e)}</b>
        <span class="neu-sub"><time datetime="${esc(e.datum)}">${esc(tag(e.datum))}</time> · ${esc(tr(e.text))}${link(e)}</span>
        ${chips(e, CHIPS_START)}
      </div>
    </li>`;
  }).join('');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(en => { if (en.some(x => x.isIntersecting)) { gesehen(); io.disconnect(); } });
    [alle, start].forEach(el => el && io.observe(el));
  }
})();
