/* RailBase – Admin-Fenster (dreimal auf das Logo in der Fusszeile klicken) */
'use strict';

/* =====================================================================
   ADMIN: grosse Besucherzahl, eigene Notizen, Notizen ans Postfach senden.
   Achtung: Die Website hat keinen Server. Der Code wird im Browser geprüft
   und schützt darum nur vor Neugierigen, nicht vor Fachleuten. Hinter dem
   Fenster liegt nichts Geheimes: Die Besucherzahl ist öffentlich, die Notizen
   bleiben im Browser des eigenen Geräts.
   Der Code steht nicht im Klartext hier, nur seine SHA-256-Prüfsumme
   (mit dem Vorsatz 'hckd-rail-admin:'). Neuen Code setzen: im Browser
     crypto.subtle.digest('SHA-256', new TextEncoder().encode('hckd-rail-admin:NEUERCODE'))
   ausrechnen und die Hex-Zahl unten bei HASH eintragen.
   Senden: über Web3Forms wie «Fehler melden» (js/melden.js), damit keine
   E-Mail-Adresse im Code steht.
   ===================================================================== */
(() => {
  const HASH = '756c29d7cf954f687c3935c21cc309be3d9d3227a9b5be6ef84c73a6ed579f01';
  const NOTIZ_KEY = 'hckd-admin-notizen', OFFEN_KEY = 'hckd-admin-offen';
  const dlg = $('#admin'), logo = $('.foot-brand');
  if (!dlg || !logo) return;
  const pin = $('#ad-pin'), code = $('#ad-code'), pinMsg = $('#ad-pin-msg'), panel = $('#ad-panel');
  const notiz = $('#ad-notiz'), msg = $('#ad-msg');
  let zurueck = null, fehler = 0, sperreBis = 0;

  // three clicks on the footer logo within 1.2 seconds
  let klicks = 0, timer = 0;
  logo.style.cursor = 'default';
  logo.addEventListener('click', () => {
    klicks++; clearTimeout(timer);
    timer = setTimeout(() => { klicks = 0; }, 1200);
    if (klicks >= 3) { klicks = 0; oeffnen(logo); }
  });

  const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
  async function pruefe(text) {
    if (!crypto.subtle) return false; // only on https or localhost
    return hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode('hckd-rail-admin:' + text))) === HASH;
  }
  const istOffen = () => { try { return sessionStorage.getItem(OFFEN_KEY) === '1'; } catch (e) { return false; } };
  function zeigePanel(auf) {
    pin.hidden = auf; panel.hidden = !auf;
    if (auf) { ladeZahl(); ohneFotos(); notiz.value = lies(); notiz.focus(); } else { code.value = ''; pinMsg.textContent = ''; code.focus(); }
  }

  // vehicles without photos, grouped by railway and category; built from the data, so it stays current
  function ohneFotos() {
    const liste = ZUEGE.filter(z => !(z.bilder && z.bilder.length));
    $('#ad-ohne-n').textContent = liste.length;
    $('#ad-ohne-liste').innerHTML = BAHNEN.flatMap(b => KATS.map(k => {
      const zz = liste.filter(z => bahnOf(z) === b.id && z.kat === k.id);
      return zz.length ? `<h3>${esc(b.name)} · ${esc(k.name)} (${zz.length})</h3><ul>${zz.map(z => `<li><a href="#${z.id}" data-close>${esc(fullNameDe(z))}</a></li>`).join('')}</ul>` : '';
    })).join('') || '<p>Alle Fahrzeuge haben Fotos.</p>';
  }
  function oeffnen(von) { zurueck = von; dlg.hidden = false; msg.textContent = ''; zeigePanel(istOffen()); }
  function schliessen() { speichere(); dlg.hidden = true; if (zurueck) zurueck.focus(); }

  pin.addEventListener('submit', async e => {
    e.preventDefault();
    if (Date.now() < sperreBis) { pinMsg.textContent = 'Zu viele Versuche. Bitte eine Minute warten.'; return; }
    if (await pruefe(code.value.trim())) {
      fehler = 0;
      try { sessionStorage.setItem(OFFEN_KEY, '1'); } catch (err) { /* only for this visit */ }
      zeigePanel(true);
    } else {
      fehler++;
      if (fehler >= 5) { sperreBis = Date.now() + 60000; fehler = 0; }
      pinMsg.textContent = 'Falscher Code.';
      code.select();
    }
  });

  // big number: the public total of GoatCounter (needs the counter setting, see js/statistik.js)
  async function ladeZahl() {
    const feld = $('#ad-total'), stand = $('#ad-stand');
    const gc = (typeof STATISTIK !== 'undefined' && STATISTIK.goatcounter) || '';
    if (!gc) { feld.textContent = '–'; stand.textContent = 'Kein Besucherzähler eingetragen.'; return; }
    feld.textContent = '…';
    try {
      const r = await fetch('https://' + gc + '.goatcounter.com/counter/TOTAL.json', { cache: 'no-store' });
      const d = r.ok ? await r.json() : null;
      const n = d && parseInt(String(d.count).replace(/\D/g, ''), 10);
      feld.textContent = isNaN(n) ? '–' : n.toLocaleString('de-CH');
      stand.textContent = isNaN(n) ? 'Zahl gerade nicht verfügbar.' : 'GoatCounter, bis zu 4 Stunden verzögert';
    } catch (err) { feld.textContent = '–'; stand.textContent = 'Zahl gerade nicht verfügbar (Vorschau oder keine Verbindung).'; }
  }

  // notes: kept in this browser only, saved while typing
  const lies = () => { try { return localStorage.getItem(NOTIZ_KEY) || ''; } catch (e) { return ''; } };
  const speichere = () => { if (panel.hidden) return; try { localStorage.setItem(NOTIZ_KEY, notiz.value); } catch (e) { /* private window */ } };
  let speicherT = 0;
  notiz.addEventListener('input', () => { clearTimeout(speicherT); speicherT = setTimeout(speichere, 400); });

  $('#ad-kopieren').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(notiz.value); msg.textContent = 'Notizen kopiert.'; }
    catch (e) { notiz.select(); msg.textContent = 'Markiert: jetzt mit Ctrl+C bzw. «Kopieren» übernehmen.'; }
  });
  $('#ad-sperren').addEventListener('click', () => {
    speichere();
    try { sessionStorage.removeItem(OFFEN_KEY); } catch (e) { /* ignore */ }
    zeigePanel(false);
  });
  const senden = $('#ad-senden');
  senden.addEventListener('click', async () => {
    const text = notiz.value.trim();
    if (!text) { msg.textContent = 'Die Notizen sind leer.'; return; }
    if (typeof MELDEN === 'undefined' || !MELDEN.web3formsKey) { msg.textContent = 'Senden ist nicht eingerichtet (Web3Forms-Schlüssel fehlt).'; return; }
    senden.disabled = true; msg.textContent = 'Wird gesendet …';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: MELDEN.web3formsKey, subject: 'RailBase – Meine Notizen (' + new Date().toLocaleDateString('de-CH') + ')', from_name: 'RailBase Admin', Notizen: text, Besuche: $('#ad-total').textContent })
      });
      const out = await res.json().catch(() => ({}));
      msg.textContent = res.ok && out.success ? 'Gesendet. Die Notizen sind in deinem Postfach.' : 'Senden hat nicht geklappt. Bitte später nochmals versuchen.';
    } catch (err) { msg.textContent = 'Senden hat nicht geklappt (keine Verbindung).'; }
    senden.disabled = false;
  });

  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) schliessen(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dlg.hidden) schliessen(); });
})();
