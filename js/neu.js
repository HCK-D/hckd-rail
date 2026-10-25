/* RailBase – «Neu und aktualisiert»: Seiten unter Entdecken und Kasten auf der Startseite */
'use strict';

/* =====================================================================
   NEU: alle Änderungen aus js/daten/neu.js, die neuesten zuoberst, auf der
   Seite #neu bzw. neu.html. Die Startseite zeigt einen Kasten mit je dem
   neuesten Eintrag zu «Neues Fahrzeug», «Neue Fahrzeugfotos» und «Daten
   aktualisiert»; «Weiter» (oder ein Tipp auf die Zeile) führt zur Seite
   dieser Art: #neu-fahrzeuge (alle neuen Fahrzeuge als Karten),
   #neu-fotos (Bilder der Fahrzeuge) und #neu-daten (was geändert wurde,
   Fahrzeug für Fahrzeug). Was seit dem letzten Besuch dazukam, ist
   markiert (Datum im Browser gemerkt, localStorage).
   ===================================================================== */
(() => {
  if (typeof NEU === 'undefined') return;
  const CHIPS = 6, CHIPS_START = 4, FOTOS_START = 5, KEY = 'hckd-neu-gesehen';
  const svg = d => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const ARTEN = {
    fahrzeug: { titel: 'Neues Fahrzeug hinzugefügt', kurz: 'Neues Fahrzeug', seite: 'neu-fahrzeuge', ico: svg('<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M8.5 13.5h.01M15.5 13.5h.01M8 17l-2 4M16 17l2 4"/>') },
    foto: { titel: 'Neue Fahrzeugfotos', kurz: 'Neue Fotos', seite: 'neu-fotos', ico: svg('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>') },
    daten: { titel: 'Daten aktualisiert', kurz: 'Daten aktualisiert', seite: 'neu-daten', ico: svg('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>') },
    funktion: { titel: 'Neue Funktion', kurz: 'Neue Funktion', ico: svg('<path d="M12 3l2 5.5 5.5 2-5.5 2L12 18l-2-5.5-5.5-2 5.5-2z"/>') }
  };
  const tag = s => { const d = new Date(s + 'T12:00:00'); return isNaN(d) ? s : d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'long', year: 'numeric' }); };
  const zuege = e => e.bahnen ? ZUEGE.filter(z => e.bahnen.includes(bahnOf(z))) : (e.ids || []).map(zugOf).filter(Boolean);
  const chips = (e, max) => {
    const zz = zuege(e);
    return zz.length ? `<ul class="neu-chips">${zz.slice(0, max).map(z => `<li><a href="#${z.id}">${esc(zn(z))}</a></li>`).join('')}`
      + (zz.length > max ? `<li class="neu-n">${esc(tr('+{n} weitere', { n: zz.length - max }))}</li>` : '') + '</ul>' : '';
  };
  const bild = z => z.bilder && z.bilder.length ? `<img src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy">` : art(z);
  // small photos instead of names, for the line «new photos»
  const fotoreihe = (e, max) => {
    const zz = zuege(e).filter(z => z.bilder && z.bilder.length);
    return zz.length ? `<ul class="neu-fotoreihe">${zz.slice(0, max).map(z => `<li><a href="#${z.id}" title="${esc(zn(z))}"><img src="${esc(klein(z.bilder[0].src))}" alt="${esc(zn(z))}" loading="lazy"></a></li>`).join('')}`
      + (zz.length > max ? `<li class="neu-n">${esc(tr('+{n} weitere', { n: zz.length - max }))}</li>` : '') + '</ul>' : '';
  };
  const link = e => e.link ? ` <a class="neu-link" href="#${esc(e.link)}">${esc(tr('Ansehen'))}</a>` : '';
  const datum = e => `<time datetime="${esc(e.datum)}">${esc(tag(e.datum))}</time>`;
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
      <div class="neu-top"><span class="neu-art ${e.art}">${a.ico}${esc(tr(a.kurz))}</span>${datum(e)}</div>
      <p>${esc(tr(e.text))}${link(e)}${a.seite ? ` <a class="neu-link" href="#${a.seite}">${esc(tr('Mehr dazu'))}</a>` : ''}</p>
      ${chips(e, CHIPS)}
    </li>`;
  }).join('');

  // start page: newest vehicle, newest photos, newest data update, each with «Weiter»
  const start = $('#neu-start-list');
  if (start) {
    start.innerHTML = ['fahrzeug', 'foto', 'daten'].map(art => {
      const e = NEU.find(x => x.art === art);
      if (!e) return '';
      const a = ARTEN[art];
      return `<li class="neu-zeile" data-seite-link="${a.seite}">
        <span class="neu-ico">${a.ico}</span>
        <div class="neu-zeile-txt">
          <b>${esc(tr(a.titel))}${neuFuerDich(e)}</b>
          <span class="neu-sub">${datum(e)} · ${esc(tr(e.text))}</span>
          ${art === 'foto' ? fotoreihe(e, FOTOS_START) : chips(e, CHIPS_START)}
        </div>
        <a class="neu-weiter" href="#${a.seite}">${esc(tr('Weiter'))} ${arrow}</a>
      </li>`;
    }).join('');
    // a tap anywhere on a line opens its page; links inside the line keep their own target
    start.addEventListener('click', e => {
      if (e.target.closest('a, button')) return;
      const zeile = e.target.closest('[data-seite-link]');
      if (zeile) gehe(zeile.dataset.seiteLink);
    });
  }

  // page «Neue Fahrzeuge»: every new vehicle as a card, grouped by date
  const abschnitt = (e, inhalt) => `<section class="nd-eintrag"><div class="neu-top">${datum(e)}</div><p class="nd-text">${esc(tr(e.text))}</p>${inhalt}</section>`;
  const nf = $('#nd-fahrzeug');
  if (nf) nf.innerHTML = NEU.filter(e => e.art === 'fahrzeug').map(e => abschnitt(e, `<ul class="grid nd-karten">${zuege(e).map(z => `<li><a class="card" href="#${z.id}">
      <div class="art-panel">${bild(z)}</div>
      <div class="card-body"><h3 class="card-name">${esc(zn(z))}${zt(z, 'beiname') ? ` <small>«${esc(zt(z, 'beiname'))}»</small>` : ''}</h3><p class="card-typ">${esc(zt(z, 'typ'))}</p></div></a></li>`).join('')}</ul>`)).join('');

  // page «Neue Fahrzeugfotos»: big pictures with the name of the vehicle
  const nfo = $('#nd-foto');
  if (nfo) nfo.innerHTML = NEU.filter(e => e.art === 'foto').map(e => abschnitt(e, `<ul class="nd-fotos">${zuege(e).filter(z => z.bilder && z.bilder.length).map(z => `<li><a href="#${z.id}">
      <img src="${esc(klein(z.bilder[0].src))}" alt="${esc(zb(z, 0))}" loading="lazy">
      <span><b>${esc(zn(z))}</b><small>${esc(tr(z.bilder.length === 1 ? '{n} Foto' : '{n} Fotos', { n: z.bilder.length }))}</small></span></a></li>`).join('')}</ul>`)).join('');

  // page «Aktualisierte Daten»: each vehicle with what was changed (field details), else its type
  const nd = $('#nd-daten');
  if (nd) nd.innerHTML = NEU.filter(e => e.art === 'daten').map(e => abschnitt(e, `<ul class="nd-aenderungen">${zuege(e).map(z => `<li><a href="#${z.id}">
      <span class="nd-pic">${bild(z)}</span>
      <span><b>${esc(zn(z))}</b><span>${esc(e.details && e.details[z.id] ? tr(e.details[z.id]) : zt(z, 'typ'))}</span></span></a></li>`).join('')}</ul>`)).join('');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(en => { if (en.some(x => x.isIntersecting)) { gesehen(); io.disconnect(); } });
    [alle, start].forEach(el => el && io.observe(el));
  }
})();
