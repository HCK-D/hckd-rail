/* HCKD RAIL – Bahn-ABC: Bezeichnungen entschlüsseln */
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

  function deute(text) {
    const m = String(text).trim().replace(/\s+/g, ' ').match(/^([A-Z]+)([a-z]*)\s*(?:(\d+)\s*\/\s*(\d+)\s*([IVX]+)?|(\d{3}))?$/);
    if (!m) return null;
    const [, gross, klein, an, alle, serie, reihe] = m, teile = [];
    if (gross.length === 1 && LOK[gross]) teile.push([gross, LOK[gross]]);
    else {
      let rest = gross;
      if (rest[0] === 'R' && rest.length > 1) { teile.push(['R', 'Triebzug oder Triebwagen mit höherer Kurvengeschwindigkeit, mindestens 110 km/h']); rest = rest.slice(1); }
      else teile.push(['', 'Triebwagen oder Triebzug mit Fahrgastraum']);
      for (const ch of rest) { if (!ABTEIL[ch]) return null; teile.push([ch, ABTEIL[ch]]); }
    }
    if (!klein) teile.push(['–', 'kein Kleinbuchstabe: Dampf']);
    for (const ch of klein) { if (!ANTRIEB[ch]) return null; teile.push([ch, ANTRIEB[ch]]); }
    if (an) {
      teile.push([an + '/' + alle, +an === +alle ? `${alle} Achsen, alle angetrieben` : `${an} von ${alle} Achsen angetrieben`]);
      if (serie) teile.push([serie, ROEM[serie] ? ROEM[serie] + '. Serie mit dieser Bezeichnung' : 'Serie']);
    }
    if (reihe) {
      const z = ZUEGE.find(x => (x.name.match(/\d{3}/) || [])[0] === reihe);
      teile.push([reihe, 'Baureihe im neuen System (seit 1989)' + (z ? ` · <a href="#${z.id}">${esc(fullName(z))} ansehen</a>` : '')]);
    }
    return teile;
  }
  function zeige() {
    const t = deute(input.value);
    if (!input.value.trim()) { out.innerHTML = ''; return; }
    out.innerHTML = t
      ? t.map(([k, v]) => `<li><b>${esc(k)}</b><span>${v.includes('<a ') ? v : esc(v)}</span></li>`).join('')
      : '<li class="abc-none"><span>Das kann ich nicht lesen. Achte auf Gross- und Kleinschreibung, z. B. «Re 4/4 II» oder «RABe 523».</span></li>';
  }
  $('#abc-chips').innerHTML = BEISPIELE.map(b => `<button type="button" data-abc="${esc(b)}">${esc(b)}</button>`).join('');
  $('#abc-chips').addEventListener('click', e => { const b = e.target.closest('[data-abc]'); if (b) { input.value = b.dataset.abc; zeige(); } });
  input.addEventListener('input', zeige);
  zeige();
})();
