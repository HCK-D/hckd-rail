/* RailBase – Steckbrief eines Fahrzeugs als PDF-Datei */
'use strict';

/* =====================================================================
   STECKBRIEF: eine A4-Seite (bei vielen Daten auch zwei) mit Foto,
   Kennzahlen, technischen Daten und Kurztext. Die PDF-Datei wird direkt
   im Browser erstellt und heruntergeladen: kein Druckfenster, keine
   zusätzliche Bibliothek. Schrift ist Helvetica, die jedes PDF-Programm
   kennt; Fotos werden als JPEG eingebettet.
   ===================================================================== */
(() => {
  const btn = $('#zug-pdf');
  if (!btn) return;
  const W = 595.28, H = 841.89, M = 42, CW = W - 2 * M, UNTEN = H - M - 26;
  const FARBE = { text: '0.125 0.137 0.149', grau: '0.384 0.412 0.443', rot: '0.843 0.098 0.125', linie: '0.89 0.902 0.914' };

  /* ---------- text: Helvetica knows only Windows-1252 characters ---------- */
  const CP = { '€': 128, '‚': 130, '„': 132, '…': 133, '‰': 137, '‹': 139, 'Œ': 140, '‘': 145, '’': 146, '“': 147, '”': 148, '•': 149, '–': 150, '—': 151, '™': 153, '›': 155, 'œ': 156, 'Ÿ': 159, 'Š': 138, 'š': 154, 'Ž': 142, 'ž': 158 };
  const ERSATZ = { '′': "'", '″': '"', '−': '-', '‑': '-', ' ': ' ', ' ': ' ', '→': '->', '≈': '~', '≤': '<=', '≥': '>=' };
  // readable form: every character can be written, others are replaced (accents dropped, else '?')
  function lesbar(s) {
    let out = '';
    for (const ch of String(s)) {
      const c = ch.charCodeAt(0);
      if (CP[ch] || (c < 256 && !(c >= 128 && c < 160))) out += ch;
      else if (ERSATZ[ch]) out += ERSATZ[ch];
      else { const b = ch.normalize('NFD')[0]; out += b.charCodeAt(0) < 256 ? b : '?'; }
    }
    return out;
  }
  const ansi = s => { let out = ''; for (const ch of lesbar(s)) out += CP[ch] ? String.fromCharCode(CP[ch]) : ch; return out; };
  const pdfStr = s => '(' + ansi(s).replace(/[\\()]/g, '\\$&') + ')';
  const n = v => String(Math.round(v * 100) / 100);
  // Arial has the same widths as Helvetica
  const mess = document.createElement('canvas').getContext('2d');
  const breite = (s, fett, gr) => { mess.font = `${fett ? 'bold ' : ''}100px Helvetica, Arial, sans-serif`; return mess.measureText(lesbar(s)).width / 100 * gr; };
  function zeilen(text, fett, gr, max) {
    const out = []; let z = '';
    for (const wort of lesbar(text).split(/\s+/).filter(Boolean)) {
      const probe = z ? z + ' ' + wort : wort;
      if (breite(probe, fett, gr) <= max) { z = probe; continue; }
      if (z) out.push(z);
      let w = wort; // a single word longer than the line is cut
      while (breite(w, fett, gr) > max && w.length > 1) { let i = w.length - 1; while (i > 1 && breite(w.slice(0, i), fett, gr) > max) i--; out.push(w.slice(0, i)); w = w.slice(i); }
      z = w;
    }
    if (z) out.push(z);
    return out;
  }

  /* ---------- pages: y is measured from the top, as on screen ---------- */
  function dokument() {
    const seiten = [], bilder = [];
    const seite = i => { while (seiten.length <= i) seiten.push({ ops: [], links: [] }); return seiten[i]; };
    return {
      seiten, bilder,
      text(p, x, y, s, gr, fett, farbe) { seite(p).ops.push(`BT /${fett ? 'F2' : 'F1'} ${n(gr)} Tf ${FARBE[farbe]} rg ${n(x)} ${n(H - y)} Td ${pdfStr(s)} Tj ET`); },
      // block of wrapped lines from the top edge y; returns the y below it
      absatz(p, s, x, y, max, gr, fett, farbe, lh) { const z = zeilen(s, fett, gr, max); z.forEach((l, i) => this.text(p, x, y + gr * 0.8 + i * lh, l, gr, fett, farbe)); return y + z.length * lh; },
      linie(p, x1, y, x2, dicke, farbe) { seite(p).ops.push(`${FARBE[farbe]} RG ${n(dicke)} w ${n(x1)} ${n(H - y)} m ${n(x2)} ${n(H - y)} l S`); },
      bild(p, b, x, y, w, h) { seite(p).ops.push(`q ${n(w)} 0 0 ${n(h)} ${n(x)} ${n(H - y - h)} cm /Im${b} Do Q`); },
      link(p, x, y, w, h, url) { seite(p).links.push([x, H - y - h, x + w, H - y, url]); },
      seite
    };
  }

  /* ---------- the PDF file itself ---------- */
  function datei(doc, titel) {
    const teile = [], ofs = []; let len = 0;
    const add = x => { teile.push(x); len += x.length; };
    let nr = 6;
    const bildNr = doc.bilder.map(() => nr++);
    const seitenNr = doc.seiten.map(s => ({ seite: nr++, inhalt: nr++, links: s.links.map(() => nr++) }));
    const obj = (i, body) => { ofs[i] = len; add(`${i} 0 obj\n${body}\nendobj\n`); };
    add('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
    obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    obj(2, `<< /Type /Pages /Kids [${seitenNr.map(s => s.seite + ' 0 R').join(' ')}] /Count ${seitenNr.length} >>`);
    obj(3, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
    obj(4, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
    obj(5, `<< /Title ${pdfStr(titel)} /Producer (RailBase) /Creator (railbase.ch) >>`);
    doc.bilder.forEach((b, i) => {
      ofs[bildNr[i]] = len;
      add(`${bildNr[i]} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${b.w} /Height ${b.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${b.daten.length} >>\nstream\n`);
      add(b.daten); add('\nendstream\nendobj\n');
    });
    const xobj = doc.bilder.length ? `/XObject << ${bildNr.map((b, i) => `/Im${i} ${b} 0 R`).join(' ')} >>` : '';
    doc.seiten.forEach((s, i) => {
      const sn = seitenNr[i], strom = s.ops.join('\n');
      obj(sn.seite, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> ${xobj} >> /Contents ${sn.inhalt} 0 R${sn.links.length ? ` /Annots [${sn.links.map(l => l + ' 0 R').join(' ')}]` : ''} >>`);
      obj(sn.inhalt, `<< /Length ${strom.length} >>\nstream\n${strom}\nendstream`);
      s.links.forEach(([x1, y1, x2, y2, url], j) => obj(sn.links[j], `<< /Type /Annot /Subtype /Link /Rect [${n(x1)} ${n(y1)} ${n(x2)} ${n(y2)}] /Border [0 0 0] /A << /S /URI /URI ${pdfStr(url)} >> >>`));
    });
    const xref = len;
    add(`xref\n0 ${nr}\n0000000000 65535 f \n` + ofs.slice(1, nr).map(o => String(o).padStart(10, '0') + ' 00000 n \n').join(''));
    add(`trailer\n<< /Size ${nr} /Root 1 0 R /Info 5 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
    const bytes = new Uint8Array(len); let pos = 0;
    for (const t of teile) {
      if (typeof t === 'string') { for (let i = 0; i < t.length; i++) bytes[pos++] = t.charCodeAt(i) & 255; }
      else { bytes.set(t, pos); pos += t.length; }
    }
    return bytes;
  }

  /* ---------- pictures as JPEG, cut to the box like object-fit: cover ---------- */
  const ladeBild = src => new Promise((ok, fehler) => { const i = new Image(); i.onload = () => ok(i); i.onerror = fehler; i.src = src; });
  async function alsJpeg(img, w, h, s = Math.min(2, 1600 / w)) { // s = 2: about 144 dpi
    const c = document.createElement('canvas');
    c.width = Math.round(w * s); c.height = Math.round(h * s);
    const g = c.getContext('2d');
    g.fillStyle = '#FFFFFF'; g.fillRect(0, 0, c.width, c.height);
    const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height, f = Math.max(c.width / iw, c.height / ih);
    g.drawImage(img, (c.width - iw * f) / 2, (c.height - ih * f) / 2, iw * f, ih * f);
    const blob = await new Promise(ok => c.toBlob(ok, 'image/jpeg', 0.86));
    return { daten: new Uint8Array(await blob.arrayBuffer()), w: c.width, h: c.height };
  }
  async function logoBild() {
    const sym = document.getElementById('logo');
    const svgTxt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 570 270">${sym.innerHTML.replace(/currentColor/g, '#202326')}</svg>`;
    const url = URL.createObjectURL(new Blob([svgTxt], { type: 'image/svg+xml' }));
    try { return await alsJpeg(await ladeBild(url), 46, 21.8, 8); } finally { URL.revokeObjectURL(url); }
  }

  function adresse(z) {
    if (window.HCKD_SEITEN) return new URL(spracheUrl(LANG, z.id), location.href).href;
    return location.href.split('#')[0] + '#' + z.id;
  }

  /* ---------- layout of the fact sheet ---------- */
  async function erstelle(z) {
    const doc = dokument();
    let y = M;
    // head: logo, «RailBase», fact sheet and category, red line
    let tx = M;
    try { doc.bilder.push(await logoBild()); doc.bild(0, 0, M, y, 46, 21.8); tx = M + 54; } catch (e) { /* without logo */ }
    doc.text(0, tx, y + 12, 'Rail', 16, true, 'text');
    doc.text(0, tx + breite('Rail', true, 16), y + 12, 'Base', 16, true, 'rot');
    doc.text(0, tx, y + 22, (tr('Steckbrief') + ' · ' + tr(katOf(z.kat).name)).toUpperCase(), 7.5, false, 'grau');
    y += 32; doc.linie(0, M, y, W - M, 1.6, 'rot'); y += 16;
    // type and name
    y = doc.absatz(0, zt(z, 'typ').toUpperCase(), M, y, CW, 8, false, 'grau', 11) + 4;
    y = doc.absatz(0, fullName(z), M, y, CW, 22, true, 'text', 25) + 8;
    // photo with credit
    const foto = (z.bilder || [])[0];
    if (foto) {
      try {
        const img = await ladeBild(foto.src);
        const h = Math.min(CW * img.naturalHeight / img.naturalWidth, 230);
        doc.bilder.push(await alsJpeg(img, CW, h));
        doc.bild(0, doc.bilder.length - 1, M, y, CW, h);
        y += h + 4;
        const credit = foto.foto ? `${tr('Foto:')} ${foto.foto}${foto.lizenz ? ' · ' + foto.lizenz : ''}${foto.quelle ? ' · Wikimedia Commons' : ''}` : '';
        const cap = [zb(z, 0) || '', credit].filter(Boolean).join(' – ');
        if (cap) y = doc.absatz(0, cap, M, y, CW, 7, false, 'grau', 9);
        y += 10;
      } catch (e) { /* without photo */ }
    }
    // key figures in one row
    const kz = (zt(z, 'kennzahlen') || []).slice(0, 4);
    if (kz.length) {
      const bw = CW / kz.length; let hoch = 0;
      kz.forEach(([v, l], i) => {
        const x = M + i * bw;
        const y2 = doc.absatz(0, v, x, y, bw - 12, 14, true, 'text', 16);
        hoch = Math.max(hoch, doc.absatz(0, String(l).toUpperCase(), x, y2 + 1, bw - 12, 6.5, false, 'grau', 8.5) - y);
      });
      y += hoch + 10;
    }
    doc.linie(0, M, y, W - M, 0.6, 'linie'); y += 14;

    // two columns that continue on the next page when they are full
    const LW = CW * 0.56 - 10, RX = M + CW * 0.56 + 10, RW = CW * 0.44 - 10;
    const spalte = (x, w) => ({ p: 0, y, x, w });
    const platz = (s, h) => { if (s.y + h > UNTEN) { s.p++; s.y = M + 6; doc.seite(s.p); } };
    const links = spalte(M, LW), rechts = spalte(RX, RW);
    // left: technical data
    platz(links, 18); doc.text(links.p, M, links.y + 9, tr('Technische Daten'), 10.5, true, 'rot'); links.y += 18;
    const keys = z.specOrder || SPEC.concat(Object.keys(z.daten).filter(x => !SPEC.includes(x)));
    const kb = LW * 0.36;
    for (const [k, v] of keys.map(k => [k, zd(z, k)]).filter(([, v]) => v)) {
      const kl = zeilen(tr(k), false, 8.5, kb - 8), vl = zeilen(v, false, 9, LW - kb);
      const h = Math.max(kl.length * 10.5, vl.length * 11.5) + 7;
      platz(links, h);
      kl.forEach((l, i) => doc.text(links.p, M, links.y + 7 + i * 10.5, l, 8.5, false, 'grau'));
      vl.forEach((l, i) => doc.text(links.p, M + kb, links.y + 7.4 + i * 11.5, l, 9, false, 'text'));
      links.y += h; doc.linie(links.p, M, links.y - 3, M + LW, 0.5, 'linie');
    }
    // right: short text and note, line by line so a paragraph may continue on the next page
    platz(rechts, 18); doc.text(rechts.p, RX, rechts.y + 9, tr('Kurz erklärt'), 10.5, true, 'rot'); rechts.y += 18;
    const absatzSpalte = (s, gr, farbe, lh) => {
      for (const l of zeilen(s, false, gr, RW)) { platz(rechts, lh); doc.text(rechts.p, RX, rechts.y + gr * 0.8, l, gr, false, farbe); rechts.y += lh; }
      rechts.y += 6;
    };
    (zt(z, 'text') || []).slice(0, 2).forEach(p => absatzSpalte(p, 9.5, 'text', 13.5));
    if (zt(z, 'specNote')) absatzSpalte(zt(z, 'specNote'), 8.5, 'grau', 11.5);

    // foot on every page: data status, link to the page, page number
    const stand = z.daten['Datenstand'] ? zd(z, 'Datenstand') : tr(DATENSTAND);
    const url = adresse(z), vorn = tr('Datenstand: {d}', { d: stand }) + ' · ';
    doc.seiten.forEach((s, p) => {
      const fy = H - M - 14;
      doc.linie(p, M, fy, W - M, 0.6, 'linie');
      doc.text(p, M, fy + 12, vorn, 7.5, false, 'grau');
      const ux = M + breite(vorn, false, 7.5);
      doc.text(p, ux, fy + 12, url, 7.5, false, 'rot');
      doc.link(p, ux, fy + 4, breite(url, false, 7.5), 10, url);
      if (doc.seiten.length > 1) {
        const t = tr('Seite {a} von {b}', { a: p + 1, b: doc.seiten.length });
        doc.text(p, W - M - breite(t, false, 7.5), fy + 12, t, 7.5, false, 'grau');
      }
    });
    return datei(doc, fullName(z) + ' – ' + tr('Steckbrief'));
  }

  let laeuft = false;
  btn.addEventListener('click', async () => {
    const z = curZug; if (!z || laeuft) return;
    laeuft = true; btn.disabled = true;
    const span = $('span', btn), vorher = span.textContent;
    span.textContent = tr('PDF wird erstellt …');
    try {
      const bytes = await erstelle(z);
      const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = (fullName(z) + ' – ' + tr('Steckbrief') + ' · RailBase.pdf').replace(/[\\/:*?"<>|]/g, '-');
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (e) {
      alert(tr('Der Steckbrief konnte nicht erstellt werden. Bitte versuche es noch einmal.'));
    } finally {
      span.textContent = vorher; btn.disabled = false; laeuft = false;
    }
  });
})();
