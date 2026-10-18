/* HCKD RAIL – «Meine Sammlung» und Entdecker-Abzeichen */
'use strict';

/* =====================================================================
   SAMMLUNG: Seite #sammlung (sammlung.html) mit Fortschritt, Abzeichen,
   allen gesehenen Fahrzeugen samt Sichtungen und den Knöpfen zum Sichern.
   Die Daten kommen aus dem Sammelalbum in extras.js (seenIds, sicht);
   alles bleibt im Browser.
   ABZEICHEN: wer ein Ziel erreicht, bekommt das Abzeichen. Neue Abzeichen
   hier in der Liste ergänzen; wert() zählt, ziel ist die nötige Zahl.
   ===================================================================== */
const ABZEICHEN = (() => {
  const gesehenIn = kat => inKat(kat).filter(z => istGesehen(z.id)).length;
  const kat = (id, titel, text) => ({ id: 'kat-' + id, zeichen: (katOf(id) || {}).code || '?', titel, text, ziel: () => inKat(id).length, wert: () => gesehenIn(id) });
  const liste = (id, zeichen, titel, text, ids) => ({ id, zeichen, titel, text, ziel: () => ids.length, wert: () => ids.filter(istGesehen).length });
  const anzahl = (ziel, zeichen, titel) => ({ id: 'n' + ziel, zeichen, titel, text: ziel === 1 ? '1 Fahrzeug gesehen' : '{n} Fahrzeuge gesehen', ziel: () => ziel, wert: () => seenIds.length });
  return [
    anzahl(1, '1', 'Erste Entdeckung'),
    anzahl(10, '10', 'Zehner-Sammler'),
    anzahl(25, '25', 'Bahnkenner'),
    anzahl(50, '50', 'Bahnexperte'),
    { id: 'alle', zeichen: '★', titel: 'Ganzer Katalog', text: 'Alle {n} Fahrzeuge gesehen', ziel: () => ZUEGE.length, wert: () => seenIds.length },
    kat('personenverkehr', 'Reiseprofi', 'Alle Fahrzeuge im Personenverkehr gesehen'),
    kat('cargo', 'Güterverkehr-Kenner', 'Alle Lokomotiven von SBB Cargo gesehen'),
    kat('infrastruktur', 'Infrastruktur-Profi', 'Alle Fahrzeuge von SBB Infrastruktur gesehen'),
    kat('rangier', 'Rangiermeister', 'Alle Rangierfahrzeuge gesehen'),
    kat('dienst', 'Spezialisten-Blick', 'Alle Dienst- und Spezialfahrzeuge gesehen'),
    kat('historisch', 'Zeitreisender', 'Alle historischen Fahrzeuge entdeckt'),
    liste('flirt', 'F', 'FLIRT-Kenner', 'Die FLIRT 521, 522, 523 und 524 gesehen', ['rabe-521', 'rabe-522', 'rabe-523', 'rabe-524']),
    liste('krokodil', 'Ce', 'Krokodil-Jäger', 'Beide Krokodile Ce 6/8 II und Ce 6/8 III gesehen', ['h-ce68ii', 'h-ce68iii']),
    { id: 's1', zeichen: '✎', titel: 'Notizbuch', text: 'Erste Sichtung eingetragen', ziel: () => 1, wert: () => sichtAnzahl() },
    { id: 's10', zeichen: '✎', titel: 'Bahnbeobachter', text: '{n} Sichtungen eingetragen', ziel: () => 10, wert: () => sichtAnzahl() }
  ].filter(a => a.ziel() > 0);
})();
const erreicht = () => ABZEICHEN.filter(a => a.wert() >= a.ziel());

function sammlungRender() {
  const total = ZUEGE.length, n = seenIds.length, haben = erreicht();
  // start page: number of badges next to the button
  const kurz = $('#album-badges');
  if (kurz) kurz.textContent = haben.length ? (haben.length === 1 ? tr('1 Abzeichen') : tr('{n} Abzeichen', { n: haben.length })) : '';
  const seite = $('#v-entdecken [data-seite="sammlung"]');
  if (!seite || seite.hidden) return;

  $('#sam-n').textContent = tr('{n} von {total} gesehen', { n, total }) + (sichtAnzahl() ? ' · ' + (sichtAnzahl() === 1 ? tr('1 Sichtung') : tr('{s} Sichtungen', { s: sichtAnzahl() })) : '');
  $('#sam-bar').style.width = (total ? n / total * 100 : 0) + '%';

  $('#sam-badges').innerHTML = ABZEICHEN.map(a => {
    const ziel = a.ziel(), wert = Math.min(a.wert(), ziel), ok = wert >= ziel;
    return `<li class="badge${ok ? ' on' : ''}">
      <span class="medal" aria-hidden="true">${esc(a.zeichen)}</span>
      <div><b>${esc(tr(a.titel))}</b><span>${esc(tr(a.text, { n: ziel }))}</span>
      ${ok ? `<em>${esc(tr('Erreicht'))}</em>` : `<span class="b-prog" aria-label="${esc(tr('{a} von {b}', { a: wert, b: ziel }))}"><i style="width:${(wert / ziel * 100).toFixed(1)}%"></i></span><small>${esc(tr('{a} von {b}', { a: wert, b: ziel }))}</small>`}</div>
    </li>`;
  }).join('');

  if (!n) {
    $('#sam-list').innerHTML = `<p class="empty">${esc(tr('Du hast noch kein Fahrzeug als gesehen markiert. Öffne eine Fahrzeugseite und tippe auf «Hab ich gesehen» oder trage eine Sichtung ein.'))}</p>`;
    return;
  }
  const datum = s => { const d = new Date(s + 'T12:00:00'); return isNaN(d) ? s : d.toLocaleDateString(LOCALE, { day: 'numeric', month: 'short', year: 'numeric' }); };
  $('#sam-list').innerHTML = KATS.map(k => {
    const alle = inKat(k.id), da = alle.filter(z => istGesehen(z.id));
    if (!da.length) return '';
    return `<section class="sam-kat"><h3>${esc(tr(k.name))} <small>${esc(tr('{a} von {b}', { a: da.length, b: alle.length }))}</small></h3>
      <ul class="sam-grid">${da.map(z => {
        const s = (sicht[z.id] || []).slice().sort((a, b) => (b.d || '').localeCompare(a.d || ''));
        const bild = z.bilder && z.bilder.length ? `<img src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy">` : art(z);
        return `<li><a class="sam-card" href="#${z.id}">
          <span class="sam-pic">${bild}</span>
          <span class="sam-txt"><b>${esc(fullName(z))}</b>
          <small>${s.length ? esc(s.length === 1 ? tr('1 Sichtung') : tr('{s} Sichtungen', { s: s.length })) + ' · ' + esc(tr('zuletzt {d}', { d: datum(s[0].d) })) + (s[0].ort ? ' · ' + esc(s[0].ort) : '') : esc(tr('Gesehen'))}</small></span>
        </a></li>`;
      }).join('')}</ul></section>`;
  }).join('');
}
sammlungRender(); // badge count on the start page
