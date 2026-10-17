/* HCKD RAIL – Steckbrief eines Fahrzeugs als PDF */
'use strict';

/* =====================================================================
   STECKBRIEF: eine kompakte A4-Seite mit Foto, Kennzahlen, technischen
   Daten und Kurztext. Der Knopf öffnet die Druckansicht des Browsers;
   dort wählt man «Als PDF speichern» (auf dem Handy: Teilen > Drucken
   bzw. «PDF»). Es wird keine zusätzliche Bibliothek geladen.
   ===================================================================== */
(() => {
  const btn = $('#zug-pdf');
  if (!btn) return;
  let blatt = null;
  const aufraeumen = () => { if (blatt) { blatt.remove(); blatt = null; } document.documentElement.classList.remove('druck-steckbrief'); };
  addEventListener('afterprint', aufraeumen);

  function adresse(z) {
    if (window.HCKD_SEITEN) return new URL(spracheUrl(LANG, z.id), location.href).href;
    return location.href.split('#')[0] + '#' + z.id;
  }
  function inhalt(z) {
    const foto = (z.bilder || [])[0];
    const kz = zt(z, 'kennzahlen') || [];
    const keys = z.specOrder || SPEC.concat(Object.keys(z.daten).filter(x => !SPEC.includes(x)));
    const daten = keys.map(k => [k, zd(z, k)]).filter(([, v]) => v);
    const text = (zt(z, 'text') || []).slice(0, 2);
    const credit = foto && foto.foto ? `${tr('Foto:')} ${foto.foto}${foto.lizenz ? ' · ' + foto.lizenz : ''}${foto.quelle ? ' · Wikimedia Commons' : ''}` : '';
    const stand = z.daten['Datenstand'] ? zd(z, 'Datenstand') : tr(DATENSTAND);
    return `
      <header class="sb-kopf">
        <svg class="sb-logo" viewBox="0 0 100 92" aria-hidden="true"><rect width="100" height="92" fill="#D71920"/><path d="M0 32.4H30.5L44 42M56 42L69.5 32.4H100M0 63H30.5L44 53M56 53L69.5 63H100" fill="none" stroke="#fff" stroke-width="8.2"/><rect x="43.6" y="41.4" width="12.8" height="12.2" fill="#D71920" stroke="#fff" stroke-width="3"/></svg>
        <div><b>HCKD <em>RAIL</em></b><span>${esc(tr('Steckbrief'))} · ${esc(tr(katOf(z.kat).name))}</span></div>
      </header>
      <p class="sb-typ">${esc(zt(z, 'typ'))}</p>
      <h1>${esc(fullName(z))}</h1>
      ${foto ? `<figure><img src="${esc(foto.src)}" alt="${esc(zb(z, 0) || '')}">${credit || zb(z, 0) ? `<figcaption>${esc(zb(z, 0) || '')}${credit ? ' – ' + esc(credit) : ''}</figcaption>` : ''}</figure>` : ''}
      ${kz.length ? `<ul class="sb-kz">${kz.map(([v, l]) => `<li><b>${esc(v)}</b><span>${esc(l)}</span></li>`).join('')}</ul>` : ''}
      <div class="sb-spalten">
        <section><h2>${esc(tr('Technische Daten'))}</h2><dl>${daten.map(([k, v]) => `<div><dt>${esc(tr(k))}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></section>
        <section><h2>${esc(tr('Kurz erklärt'))}</h2>${text.map(p => `<p>${esc(p)}</p>`).join('')}${zt(z, 'specNote') ? `<p class="sb-note">${esc(zt(z, 'specNote'))}</p>` : ''}</section>
      </div>
      <footer class="sb-fuss">${esc(tr('Datenstand: {d}', { d: stand }))} · ${esc(adresse(z))}</footer>`;
  }
  btn.addEventListener('click', async () => {
    const z = curZug; if (!z) return;
    aufraeumen();
    blatt = document.createElement('article');
    blatt.id = 'steckbrief';
    blatt.innerHTML = inhalt(z);
    document.body.appendChild(blatt);
    document.documentElement.classList.add('druck-steckbrief');
    // wait for the photo, otherwise the PDF may come out without it
    const img = $('img', blatt);
    if (img) { try { await Promise.race([img.decode(), new Promise(r => setTimeout(r, 4000))]); } catch (e) { /* print without photo */ } }
    const titel = document.title;
    document.title = fullName(z) + ' – ' + tr('Steckbrief') + ' · HCKD RAIL'; // suggested file name of the PDF
    print();
    document.title = titel;
    // some phones do not fire afterprint
    setTimeout(aufraeumen, 60000);
  });
})();
