/* RailBase – Bahn-ABC: Bezeichnungen entschlüsseln */
'use strict';

/* =====================================================================
   ENTSCHLÜSSLER: «RABDe 500», «Re 4/4 II», «Ge 4/4 III», «Tm 232» …
   Grossbuchstaben = Art bzw. Abteile, Kleinbuchstaben = Antrieb,
   danach Achsen/Serie (alt) oder dreistellige Baureihe (neu).
   ===================================================================== */
(() => {
  const input = $('#abc-q'), out = $('#abc-out');
  const BEISPIELE = ['RABDe 500', 'Re 4/4 II', 'Re 620', 'Ee 3/3', 'Am 843', 'Tm 232', 'Ge 4/4 III', 'RBDe 560'];
  const LOK = {
    R: 'Streckenlok mit höherer Kurvengeschwindigkeit, mindestens 110 km/h',
    A: 'Normalspur-Streckenlok, schneller als 80 km/h',
    B: 'Normalspur-Streckenlok, 70–80 km/h', C: 'Normalspur-Streckenlok, 60–65 km/h', D: 'Normalspur-Streckenlok, 45–55 km/h',
    E: 'Rangierlok', G: 'Lok für Schmalspur (z. B. Meterspur)', H: 'Lok für Zahnradbahnen', T: 'Traktor (kleines Rangierfahrzeug)'
  };
  const ABTEIL = { A: '1. Klasse', B: '2. Klasse', C: '3. Klasse (bis 1956)', D: 'Gepäckabteil', Z: 'Postabteil', X: 'Dienstfahrzeug', S: 'Spezialabteil' };
  const ANTRIEB = { e: 'elektrisch', m: 'Verbrennungsmotor (meist Diesel)', a: 'Batterie (Akku)', h: 'Zahnradantrieb', f: 'funkferngesteuert' };
  const ROEM = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };

  // older designations of steam tank locomotives such as «Eb 3/5» follow a different letter scheme:
  // only the axle numbers are explained, plus a link to the vehicle page
  function historisch(text) {
    const t = text.toLowerCase(), z = ZUEGE.find(x => x.name.replace(/\s+/g, ' ').toLowerCase() === t);
    const m = text.match(/^([A-Z][a-z]+)\s*(\d+)\s*\/\s*(\d+)/);
    if (!z || !m || !/^h-/.test(z.id)) return null;
    const [, buch, an, alle] = m;
    return [
      [buch, tr('ältere Bezeichnung einer Dampflok; die Buchstaben folgen einem früheren Schema und werden hier nicht einzeln erklärt')],
      [an + '/' + alle, +an === +alle ? tr('{n} Achsen, alle angetrieben', { n: alle }) : tr('{a} von {n} Achsen angetrieben', { a: an, n: alle })],
      ['→', `<a href="#${z.id}">${esc(tr('{name} ansehen', { name: fullName(z) }))}</a>`, true]
    ];
  }
  function deute(text) {
    text = String(text).trim().replace(/\s+/g, ' ');
    const alt = historisch(text);
    if (alt) return alt;
    const m = text.match(/^([A-Z]+)([a-z]*)\s*(?:(\d+)\s*\/\s*(\d+)\s*([IVX]+)?|(\d{3}))?$/);
    if (!m) return null;
    const [, gross, klein, an, alle, serie, reihe] = m, teile = [];
    if (gross.length === 1 && LOK[gross]) teile.push([gross, tr(LOK[gross])]);
    else {
      let rest = gross;
      if (rest[0] === 'R' && rest.length > 1) { teile.push(['R', tr('Triebzug oder Triebwagen mit höherer Kurvengeschwindigkeit, mindestens 110 km/h')]); rest = rest.slice(1); }
      else teile.push(['', tr('Triebwagen oder Triebzug mit Fahrgastraum')]);
      for (const ch of rest) { if (!ABTEIL[ch]) return null; teile.push([ch, tr(ABTEIL[ch])]); }
    }
    if (!klein) teile.push(['–', tr('kein Kleinbuchstabe: Dampf')]);
    for (const ch of klein) { if (!ANTRIEB[ch]) return null; teile.push([ch, tr(ANTRIEB[ch])]); }
    if (an) {
      teile.push([an + '/' + alle, +an === +alle ? tr('{n} Achsen, alle angetrieben', { n: alle }) : tr('{a} von {n} Achsen angetrieben', { a: an, n: alle })]);
      if (serie) teile.push([serie, ROEM[serie] ? tr('{n}. Serie mit dieser Bezeichnung', { n: ROEM[serie] }) : tr('Serie')]);
    }
    if (reihe) {
      const z = ZUEGE.find(x => (x.name.match(/\d{3}/) || [])[0] === reihe);
      teile.push([reihe, esc(tr('Baureihe im neuen System (seit 1989)')) + (z ? ` · <a href="#${z.id}">${esc(tr('{name} ansehen', { name: fullName(z) }))}</a>` : ''), true]);
    }
    return teile;
  }
  function zeige() {
    const t = deute(input.value);
    if (!input.value.trim()) { out.innerHTML = ''; return; }
    // third entry true = the text is already HTML (with a link)
    out.innerHTML = t
      ? t.map(([k, v, html]) => `<li><b>${esc(k)}</b><span>${html ? v : esc(v)}</span></li>`).join('')
      : `<li class="abc-none"><span>${esc(tr('Diese Bezeichnung kann ich (noch) nicht entschlüsseln. Probiere zum Beispiel «Re 4/4 II» oder «RABe 523»; Gross- und Kleinbuchstaben haben dabei eine eigene Bedeutung.'))}</span></li>`;
  }
  $('#abc-chips').innerHTML = BEISPIELE.map(b => `<button type="button" data-abc="${esc(b)}">${esc(b)}</button>`).join('');
  $('#abc-chips').addEventListener('click', e => { const b = e.target.closest('[data-abc]'); if (b) { input.value = b.dataset.abc; zeige(); } });
  input.addEventListener('input', zeige);
  zeige();

  // the full list opens with the button, and by itself when the page is opened with #bahn-abc
  const mehr = $('#abc-mehr'), knopf = $('#abc-toggle');
  function oeffne(auf) {
    mehr.hidden = !auf;
    knopf.setAttribute('aria-expanded', auf ? 'true' : 'false');
    knopf.textContent = auf ? tr('Weniger anzeigen') : tr('Ganzes Bahn-ABC anzeigen');
  }
  knopf.addEventListener('click', () => {
    const auf = mehr.hidden;
    oeffne(auf);
    if (!auf) $('#bahn-abc').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  });
  const vomLink = () => { if (decodeURIComponent(location.hash.slice(1)) === 'bahn-abc') oeffne(true); };
  addEventListener('hashchange', vomLink);
  vomLink();
})();
