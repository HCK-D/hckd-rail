/* RailBase – Konto: anmelden und alles online speichern */
'use strict';

/* =====================================================================
   KONTO (freiwillig)
   Ein Konto für railbase.ch und das Spiel RailBase Legends (railbase-legends.ch):
   beide nutzen dieselbe Supabase-Datenbank, also dieselben Konten.
   Jede Seite speichert ihre eigenen Sachen in ihrer eigenen Tabelle:
     public.webseite = diese Website (werkzeuge/datenbank-webseite.sql)
     public.spieler  = Spielstand von RailBase Legends
   Gespeichert werden die Einträge in KONTO.felder (Sammlung, Sichtungen,
   Quiz-Bestwerte, Vergleich, Bahnhof der Abfahrtstafel). Sie bleiben wie
   bisher im Browser; das Konto hält eine Kopie und gleicht sie zwischen
   den Geräten ab. Ohne Konto ändert sich nichts.
   Keine Cookies: die Anmeldung liegt im lokalen Speicher (hckd-konto-auth).
   Die Bibliothek supabase-js wird erst geladen, wenn jemand angemeldet ist
   oder sich anmelden will.
   ===================================================================== */
const KONTO = {
  url: 'https://ilxtsqfbsejrjgfxkxdf.supabase.co',
  // Publishable key: darf öffentlich in der Website stehen, die Regeln in der Datenbank schützen die Daten
  schluessel: 'sb_publishable_TmIzKNvimUolL3hpX6WVTw_T3azNY9x',
  bibliothek: 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.min.js',
  tabelle: 'webseite',
  felder: ['hckd-gesehen', 'hckd-favoriten', 'hckd-sichtungen', 'hckd-quiz-best', 'hckd-vergleich', 'hckd-bahnhof', 'hckd-privat']
};

(() => {
  const dlg = $('#konto'), knopf = $('#konto-btn');
  if (!dlg || !knopf) return;
  const AUTH = 'hckd-konto-auth', META = 'hckd-konto-sync', HINWEIS = 'hckd-konto-hinweis', GOOGLE = 'hckd-konto-google';
  const PROFIL_NEU = 'hckd-konto-profil'; // Profil aus «Neues Konto», bis es gespeichert ist (nur für diesen Besuch)
  const f = { form: $('#ko-form'), vorname: $('#ko-vorname'), nachname: $('#ko-nachname'), geburt: $('#ko-geburt'), email: $('#ko-email'), pw: $('#ko-pw'), pw2: $('#ko-pw2'), los: $('#ko-los'), msg: $('#ko-msg') };
  const p = { form: $('#ko-profil'), vorname: $('#kp-vorname'), nachname: $('#kp-nachname'), geburt: $('#kp-geburt'), los: $('#kp-los'), msg: $('#kp-msg') };

  let db = null, laden = null;   // Supabase-Client, wird erst bei Bedarf geladen
  let nutzer = null;             // angemeldetes Konto
  let profil = null;             // { vorname, nachname, geburtsdatum } aus public.profil
  let profilAendern = false;     // Formular «Profil ändern» offen
  let profilFehlt = false;       // angemeldet, aber noch kein Profil gespeichert
  let art = 'anmelden';          // oder 'registrieren'
  let status = '';
  let zurueck = null, uhr = 0, takt = 0, zuletzt = 0, kette = Promise.resolve();

  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private window */ } };
  const lsDel = k => { try { localStorage.removeItem(k); } catch (e) { /* private window */ } };
  // Privatsphäre-Einstellungen des Kontos, z. B. { spielErfolge: false }
  const privat = () => { try { return JSON.parse(lsGet('hckd-privat') || '{}') || {}; } catch (e) { return {}; } };
  const ssGet = k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } };
  const ssSet = (k, v) => { try { if (v == null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch (e) { /* ignore */ } };

  /* ---------- Profil und Mindestalter ---------- */
  const MINDESTALTER = 16;
  const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  // spätestes erlaubtes Geburtsdatum: heute vor 16 Jahren
  const spaetestens = () => { const d = new Date(); d.setFullYear(d.getFullYear() - MINDESTALTER); return iso(d); };
  [f.geburt, p.geburt].forEach(el => { el.max = spaetestens(); });
  // Eingaben prüfen; gibt einen Fehlertext zurück oder ''
  function profilFehler(vorname, nachname, geburt) {
    if (!vorname) return { text: tr('Gib deinen Vornamen ein.'), feld: 'vorname' };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(geburt) || geburt < '1900-01-01') return { text: tr('Gib dein Geburtsdatum ein.'), feld: 'geburt' };
    if (geburt > spaetestens()) return { text: tr('Ein Konto gibt es erst ab 16 Jahren. Ohne Konto kannst du RailBase ganz normal nutzen.'), feld: 'geburt' };
    return null;
  }
  let ohneBildSpalten = false; // Datenbank kennt bild/bild_foto noch nicht (SQL noch nicht ausgeführt)
  async function ladeProfil() {
    let { data, error } = await db.from('profil').select('vorname, nachname, geburtsdatum, bild, bild_foto').eq('id', nutzer.id).maybeSingle();
    if (error && /bild/.test(`${error.message} ${error.details}`)) {
      ohneBildSpalten = true;
      ({ data, error } = await db.from('profil').select('vorname, nachname, geburtsdatum').eq('id', nutzer.id).maybeSingle());
    }
    if (error) throw error;
    profil = data || null;
    profilFehlt = false;
    // noch kein Profilbild auf der Website: das Bild aus RailBase Legends zeigen, falls es eines gibt
    spielBild = null;
    if (profil && !profil.bild) {
      try {
        const r = await db.from('spieler').select('bild, bild_foto').eq('id', nutzer.id).maybeSingle();
        if (r.data && r.data.bild) spielBild = { bild: r.data.bild, foto: r.data.bild_foto || '' };
      } catch (e) { /* ohne Spiel-Bild */ }
    }
    // Profil aus «Neues Konto» nachtragen (z. B. wenn die Sitzung erst nach dem Registrieren kam)
    if (!profil) {
      let neu = null;
      try { neu = JSON.parse(ssGet(PROFIL_NEU) || 'null'); } catch (e) { /* ignore */ }
      if (neu && String(neu.email).toLowerCase() === String(nutzer.email || '').toLowerCase()) await speichereProfil(neu.vorname, neu.nachname, neu.geburtsdatum);
    }
    ssSet(PROFIL_NEU, null);
    profilFehlt = !profil;
  }
  async function speichereProfil(vorname, nachname, geburtsdatum) {
    const zeile = { id: nutzer.id, vorname, nachname, geburtsdatum };
    const { error } = await db.from('profil').upsert(zeile);
    if (error) throw error;
    profil = Object.assign({}, profil, { vorname, nachname, geburtsdatum });
  }

  /* ---------- Profilbild: gleiche Bilder wie in RailBase Legends (js/freunde.js im Spiel) oder ein eigenes Foto ---------- */
  const PROFILBILDER = [
    { id: 'dampflok', zeichen: '🚂', farbe: '#d93a33', name: 'Dampflok' },
    { id: 'regio', zeichen: '🚆', farbe: '#2f6fe0', name: 'Regionalzug' },
    { id: 'schnellzug', zeichen: '🚄', farbe: '#6d7a88', name: 'Schnellzug' },
    { id: 'hochgeschw', zeichen: '🚅', farbe: '#24356b', name: 'Hochgeschwindigkeitszug' },
    { id: 'tram', zeichen: '🚋', farbe: '#e8a300', name: 'Tram' },
    { id: 'bergbahn', zeichen: '🚞', farbe: '#2a9d63', name: 'Bergbahn' },
    { id: 'einschiene', zeichen: '🚝', farbe: '#1499ad', name: 'Einschienenbahn' },
    { id: 'wagen', zeichen: '🚃', farbe: '#c0661d', name: 'Personenwagen' },
    { id: 'seilbahn', zeichen: '🚠', farbe: '#8550cf', name: 'Seilbahn' },
    { id: 'berge', zeichen: '🏔️', farbe: '#4f86b8', name: 'Berge' },
    { id: 'signal', zeichen: '🚦', farbe: '#39424d', name: 'Signal' },
    { id: 'billett', zeichen: '🎫', farbe: '#d6407e', name: 'Billett' },
    { id: 'bahnhof', zeichen: '🚉', farbe: '#0e7c86', name: 'Bahnhof' },
    { id: 'gleise', zeichen: '🛤️', farbe: '#8b6b4a', name: 'Gleise' },
    { id: 'uhr', zeichen: '⏱️', farbe: '#5a4fcf', name: 'Uhr' }
  ];
  let spielBild = null; // Bild aus dem Spiel, solange auf der Website keines gewählt ist
  const FOTO_MUSTER = /^data:image\/(webp|jpeg|png);base64,[A-Za-z0-9+/=]+$/;
  const fotoOk = foto => typeof foto === 'string' && foto.length < 16000 && FOTO_MUSTER.test(foto);
  const bildVon = id => PROFILBILDER.find(b => b.id === id) || null;
  const hatBild = b => (b.bild === 'eigen' && fotoOk(b.foto)) || !!bildVon(b.bild);
  // aktuelles Bild: { bild, foto } von der Website, sonst aus dem Spiel, sonst leer
  const meinBild = () => (profil && profil.bild ? { bild: profil.bild, foto: profil.bild_foto || '' } : spielBild || { bild: '', foto: '' });
  // rundes Bild als HTML: eigenes Foto, Zeichen auf Farbe oder der erste Buchstabe
  function bildHtml(b, buchstabe) {
    if (b.bild === 'eigen' && fotoOk(b.foto)) return `<img src="${b.foto}" alt="" draggable="false">`;
    const z = bildVon(b.bild);
    if (z) return `<span class="kt-pb" style="--pb:${z.farbe}">${z.zeichen}</span>`;
    return esc(buchstabe);
  }
  // Foto aus der Galerie: Mitte quadratisch ausschneiden, auf 160 px verkleinern, als Bild-Text (wie im Spiel)
  async function fotoAusDatei(datei) {
    const url = URL.createObjectURL(datei);
    try {
      const img = await new Promise((ok, fehler) => {
        const i = new Image();
        i.onload = () => ok(i);
        i.onerror = () => fehler(new Error('bild'));
        i.src = url;
      });
      const seite = Math.min(img.naturalWidth, img.naturalHeight);
      if (!seite) throw new Error('bild');
      for (const [groesse, qualitaet] of [[160, 0.8], [160, 0.65], [128, 0.6], [96, 0.55]]) {
        const c = document.createElement('canvas');
        c.width = groesse;
        c.height = groesse;
        c.getContext('2d').drawImage(img, (img.naturalWidth - seite) / 2, (img.naturalHeight - seite) / 2, seite, seite, 0, 0, groesse, groesse);
        let text = c.toDataURL('image/webp', qualitaet);
        if (!text.startsWith('data:image/webp')) text = c.toDataURL('image/jpeg', qualitaet); // ältere iPhones
        if (fotoOk(text)) return text;
      }
      throw new Error('gross');
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  /* ---------- Daten im Browser ---------- */
  // nur die gespeicherten Felder, immer in derselben Reihenfolge (damit der Vergleich stimmt)
  const nur = o => { const r = {}; KONTO.felder.forEach(k => { if (o && o[k] != null && o[k] !== '') r[k] = o[k]; }); return r; };
  const abdruck = o => JSON.stringify(nur(o));
  function lies() {
    const o = {};
    KONTO.felder.forEach(k => {
      const v = lsGet(k);
      if (v == null || v === '') return;
      try { o[k] = JSON.parse(v); } catch (e) { o[k] = v; } // hckd-bahnhof ist reiner Text
    });
    return o;
  }
  function schreibe(o) {
    KONTO.felder.forEach(k => {
      if (o[k] == null || o[k] === '') lsDel(k);
      else lsSet(k, typeof o[k] === 'string' ? o[k] : JSON.stringify(o[k]));
    });
  }
  // Stand des letzten Abgleichs: welches Konto, welche Version online, welche Daten
  const meta = () => { try { return JSON.parse(lsGet(META) || 'null') || {}; } catch (e) { return {}; } };
  const merkeMeta = (zeit, o, erfolge) => lsSet(META, JSON.stringify({ konto: nutzer.id, zeit, abdruck: abdruck(o), erfolge: JSON.stringify(erfolge || []) }));

  // Erreichte Erfolge (Abzeichen aus js/sammlung.js), so wie das Spiel RailBase Legends sie anzeigt:
  // stand.erfolge = [{ id, titel, text, zeichen }], Texte auf Deutsch; nur die erreichten
  function erfolgeJetzt() {
    if (typeof ABZEICHEN === 'undefined' || typeof erreicht !== 'function') return [];
    if (privat().spielErfolge === false) return []; // Privatsphäre: Erfolge nicht im Spiel zeigen
    return erreicht().map(a => ({ id: a.id, titel: a.titel, text: String(a.text).replace('{n}', a.ziel()), zeichen: a.zeichen }));
  }

  // Zwei Stände zusammenlegen, ohne dass etwas verloren geht (a = dieses Gerät, b = Konto)
  function zusammen(a, b) {
    const liste = x => (Array.isArray(x) ? x : []);
    const objekt = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
    const r = Object.assign({}, nur(b), nur(a));
    const g = [...new Set(liste(a['hckd-gesehen']).concat(liste(b['hckd-gesehen'])))];
    if (g.length) r['hckd-gesehen'] = g;
    const fav = [...new Set(liste(a['hckd-favoriten']).concat(liste(b['hckd-favoriten'])))];
    if (fav.length) r['hckd-favoriten'] = fav;
    const sa = objekt(a['hckd-sichtungen']), sb = objekt(b['hckd-sichtungen']), s = {};
    new Set(Object.keys(sa).concat(Object.keys(sb))).forEach(id => {
      const schon = new Set(), l = [];
      liste(sa[id]).concat(liste(sb[id])).forEach(e => {
        const k = e && e.t ? 't' + e.t : JSON.stringify(e);
        if (!schon.has(k)) { schon.add(k); l.push(e); }
      });
      if (l.length) s[id] = l;
    });
    if (Object.keys(s).length) r['hckd-sichtungen'] = s;
    const qa = objekt(a['hckd-quiz-best']), qb = objekt(b['hckd-quiz-best']), q = Object.assign({}, qb);
    Object.keys(qa).forEach(l => { q[l] = Math.max(Number(qa[l]) || 0, Number(qb[l]) || 0); });
    if (Object.keys(q).length) r['hckd-quiz-best'] = q;
    if (!liste(r['hckd-vergleich']).length && liste(b['hckd-vergleich']).length) r['hckd-vergleich'] = b['hckd-vergleich'];
    return r;
  }

  // Neue Daten im Browser: Seite neu laden, damit Sammlung, Quiz usw. sie zeigen (höchstens 3-mal pro Minute)
  function neuLaden(hinweis) {
    let n = [];
    try { n = JSON.parse(ssGet('hckd-konto-neu') || '[]').filter(t => Date.now() - t < 60000); } catch (e) { /* ignore */ }
    if (n.length >= 3) return;
    ssSet('hckd-konto-neu', JSON.stringify(n.concat(Date.now())));
    if (hinweis) ssSet(HINWEIS, '1');
    location.reload();
  }

  /* ---------- Verbindung ---------- */
  function ladeBibliothek() {
    if (window.supabase) return Promise.resolve();
    return new Promise((ok, fehler) => {
      const s = document.createElement('script');
      s.src = KONTO.bibliothek;
      s.async = true;
      s.onload = ok;
      s.onerror = () => fehler(new Error('Load failed'));
      document.head.appendChild(s);
    });
  }
  function verbinde() {
    if (!laden) {
      laden = ladeBibliothek().then(() => {
        db = window.supabase.createClient(KONTO.url, KONTO.schluessel, {
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce', storageKey: AUTH }
        });
        db.auth.onAuthStateChange((ereignis, sitzung) => {
          const u = sitzung && sitzung.user;
          // verzögert, damit Supabase fertig ist (sonst hängt der nächste Aufruf)
          if (u && (!nutzer || nutzer.id !== u.id)) setTimeout(() => angemeldet(u));
          if (!u && ereignis === 'SIGNED_OUT' && nutzer) { nutzer = null; zeige(); }
        });
        return db;
      }).catch(e => { laden = null; throw e; });
    }
    return laden;
  }

  // Nach dem Anmelden zuerst das Profil holen. Erst mit vollständigem Profil (ab 16 Jahren) wird gespeichert.
  let profilLaeuft = null;
  function angemeldet(u) {
    if (nutzer && nutzer.id === u.id) return profilLaeuft || kette;
    nutzer = u;
    profil = null;
    profilFehlt = false;
    profilAendern = false;
    f.pw.value = f.pw2.value = '';
    setzeStatus('lade');
    profilLaeuft = ladeProfil().then(() => {
      zeige();
      // Profil fehlt: danach fragen, auf der Seite «Mein Konto» direkt dort, sonst im Fenster
      if (!profil) {
        const seiteOffen = !$('#v-entdecken [data-seite="konto"]').hidden && !$('#v-entdecken').hidden;
        if (!seiteOffen) oeffnen(knopf);
        return;
      }
      if (!dlg.hidden) $('#ko-an .dlg-fokus').focus({ preventScroll: true });
      pruefeAdmin();
      beobachte();
      return synchron();
    }, e => {
      zeige();
      setzeStatus(/PGRST205|profil/.test(`${e && e.code} ${e && e.message}`) ? 'tabelle' : 'fehler');
    }).finally(() => { profilLaeuft = null; });
    zeige();
    return profilLaeuft;
  }
  const bereit = () => !!(nutzer && profil);

  // Admin? Fragt die Datenbank (ist_admin); die Liste der Admins ist von aussen nicht lesbar.
  // Ohne die Funktion (SQL noch nicht ausgeführt) einfach kein Admin.
  let istAdmin = false;
  async function pruefeAdmin() {
    try {
      const { data, error } = await db.rpc('ist_admin');
      istAdmin = !error && data === true;
    } catch (e) { istAdmin = false; }
    zeigeSeite();
  }

  // Abgleich nacheinander, nie zwei gleichzeitig
  function synchron() {
    clearTimeout(uhr);
    if (!bereit()) return kette; // ohne vollständiges Profil wird nichts gespeichert
    kette = kette.then(abgleich).then(() => setzeStatus('ok'), e => {
      setzeStatus(/PGRST205|webseite/.test(`${e && e.code} ${e && e.message}`) ? 'tabelle' : 'fehler');
    });
    return kette;
  }

  // Browser und Konto vergleichen: was sich nur hier geändert hat, geht hoch; was sich nur im Konto
  // geändert hat (anderes Gerät), kommt herunter; hat sich beides geändert, wird zusammengelegt.
  async function abgleich() {
    if (!bereit()) return;
    zuletzt = Date.now();
    if (status !== 'ok') setzeStatus('lade');
    const { data, error } = await db.from(KONTO.tabelle).select('stand').eq('id', nutzer.id).maybeSingle();
    if (error) throw error;
    const m = meta(), eigen = m.konto === nutzer.id;
    // Daten eines anderen Kontos auf diesem Gerät (sollte nach dem Abmelden nicht vorkommen) nicht übernehmen
    const fremd = m.konto && !eigen;
    const lokal = fremd ? {} : lies();
    const online = (data && data.stand) || {}, zeitOnline = Number(online.zeit) || 0;
    const hierGeaendert = !eigen || abdruck(lokal) !== m.abdruck;
    const dortGeaendert = !data || !eigen || zeitOnline !== m.zeit;
    // Erfolge (für das Spiel RailBase Legends): neu hochladen, wenn sich etwas geändert hat
    const erfolge = erfolgeJetzt(), erfolgeNeu = JSON.stringify(erfolge) !== m.erfolge;
    if (!hierGeaendert && !dortGeaendert && !erfolgeNeu) return;
    let neu;
    if (!data) neu = lokal;                       // erstes Mal auf der Website: dieses Gerät gibt den Stand vor
    else if (!dortGeaendert) neu = lokal;         // nur hier geändert
    else if (!hierGeaendert) neu = nur(online);   // nur auf einem anderen Gerät geändert
    else neu = zusammen(lokal, online);           // beides, oder dieses Gerät ist neu: nichts geht verloren
    if (!data || erfolgeNeu || abdruck(neu) !== abdruck(online)) {
      const zeit = Math.max(Date.now(), zeitOnline + 1);
      const { error: e2 } = await db.from(KONTO.tabelle)
        .upsert({ id: nutzer.id, stand: Object.assign(nur(neu), { zeit, erfolge }), geaendert: new Date().toISOString() });
      if (e2) throw e2;
      merkeMeta(zeit, neu, erfolge);
    } else {
      merkeMeta(zeitOnline, neu, erfolge);
    }
    if (fremd || abdruck(neu) !== abdruck(lokal)) {
      schreibe(neu);
      neuLaden(!eigen);
    }
  }

  // Änderungen im Browser bemerken (Sammlung, Quiz usw. schreiben direkt in den lokalen Speicher)
  const geaendert = () => {
    if (!bereit()) return false;
    const m = meta();
    return abdruck(lies()) !== m.abdruck || JSON.stringify(erfolgeJetzt()) !== m.erfolge;
  };
  function beobachte() {
    if (takt) return;
    takt = setInterval(() => { if (geaendert()) { clearTimeout(uhr); uhr = setTimeout(synchron, 1500); } }, 4000);
    document.addEventListener('visibilitychange', () => {
      if (!nutzer) return;
      if (document.hidden) { if (geaendert()) synchron(); }
      else if (Date.now() - zuletzt > 30000) synchron(); // zurück im Tab: vielleicht auf einem anderen Gerät geändert
    });
  }

  /* ---------- Texte ---------- */
  function deutsch(e) {
    const m = `${(e && e.code) || ''} ${(e && e.message) || ''} ${(e && e.hint) || ''}`;
    if (/mindestalter/i.test(m)) return tr('Ein Konto gibt es erst ab 16 Jahren. Ohne Konto kannst du RailBase ganz normal nutzen.');
    if (/Geburtsdatum/i.test(m)) return tr('Gib dein Geburtsdatum ein.');
    if (/invalid_credentials|Invalid login credentials/i.test(m)) return tr('E-Mail oder Passwort stimmt nicht.');
    if (/user_already_exists|already registered/i.test(m)) return tr('Für diese E-Mail gibt es schon ein Konto. Melde dich an.');
    if (/weak_password|at least 6|Password should/i.test(m)) return tr('Das Passwort braucht mindestens 6 Zeichen.');
    if (/email_not_confirmed|not confirmed/i.test(m)) return tr('Bitte bestätige zuerst deine E-Mail (Link in der Mail), dann melde dich an.');
    if (/email_address_invalid|invalid.*email|validate email/i.test(m)) return tr('Diese E-Mail-Adresse stimmt nicht.');
    if (/rate_limit|rate limit|too many/i.test(m)) return tr('Zu viele Versuche. Warte kurz und versuch es dann nochmals.');
    if (/signup_disabled|Signups not allowed/i.test(m)) return tr('Neue Konten sind gerade ausgeschaltet.');
    if (/fetch|network|Load failed/i.test(m)) return tr('Keine Verbindung zum Server. Prüfe dein Internet.');
    return tr('Das hat nicht geklappt. Versuch es nochmals.');
  }
  const sage = (t, kind) => { f.msg.textContent = t; f.msg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };
  function setzeStatus(neu) {
    status = neu;
    const text = {
      lade: tr('Wird gespeichert …'),
      ok: tr('Alles gespeichert ✓'),
      fehler: tr('Gerade keine Verbindung. Deine Daten werden gespeichert, sobald du wieder online bist.'),
      tabelle: tr('Die Datenbank für die Website ist noch nicht eingerichtet.')
    }[neu] || '';
    // im Fenster und auf der Seite «Mein Konto»
    ['#ko-status', '#kt-status'].forEach(s => { const el = $(s); if (el) { el.dataset.status = neu; el.textContent = text; } });
    if (nutzer && !profil) zeigeSeite(); // Seite «Mein Konto» zeigt dann diesen Hinweis
  }

  /* ---------- Fenster «Konto» ---------- */
  // welcher Teil des Fensters: 'aus' (Anmelden), 'profil' (Profil ergänzen oder ändern), 'an' (Konto)
  const teil = () => (!nutzer ? 'aus' : profilFehlt || profilAendern ? 'profil' : 'an');
  function zeige() {
    const an = !!nutzer, t = teil();
    knopf.classList.toggle('an', an);
    knopf.setAttribute('aria-label', an ? tr('Mein Konto') : tr('Konto'));
    knopf.title = knopf.getAttribute('aria-label');
    // angemeldet: roter Kreis mit dem ersten Buchstaben des Vornamens
    $('#konto-btn-kreis').innerHTML = an ? bildHtml(meinBild(), anfang()) : '';
    knopf.classList.toggle('mit-bild', an && hatBild(meinBild()));
    $('#konto-btn-txt').textContent = an ? tr('Mein Konto') : tr('Anmelden');
    $('#ko-aus').hidden = t !== 'aus';
    $('#ko-profil').hidden = t !== 'profil';
    $('#ko-an').hidden = t !== 'an';
    $('#ko-ab-frage').hidden = true;
    $('#ko-ab').hidden = false;
    $('#ko-del-frage').hidden = true;
    $('#ko-del').hidden = false;
    if (an) $('#ko-wer').textContent = nutzer.email || '';
    if (t === 'profil') {
      $('#ko-profil-text').textContent = profilAendern ? tr('Hier kannst du dein Profil ändern.') : tr('Bitte ergänze dein Profil. Ein Konto gibt es ab 16 Jahren.');
      $('#kp-zurueck').hidden = !profilAendern;
      $('#kp-ab').hidden = profilAendern;
    }
    zeigeSeite();
    zeichne();
  }
  const anfang = () => String((profil && profil.vorname) || (nutzer && nutzer.email) || '?').trim().charAt(0).toUpperCase() || '?';
  function zeichne() {
    const neu = art === 'registrieren', t = teil();
    $('#ko-h').textContent = t === 'an' ? (profil ? tr('Hallo, {name}!', { name: profil.vorname }) : tr('Dein Konto'))
      : t === 'profil' ? tr('Dein Profil') : neu ? tr('Neues Konto') : tr('Anmelden');
    $$('#ko-reiter [data-art]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.art === art)));
    $('#ko-neu').hidden = !neu;
    $('#ko-pw2-feld').hidden = !neu;
    f.pw.setAttribute('autocomplete', neu ? 'new-password' : 'current-password');
    f.los.textContent = neu ? tr('Konto erstellen') : tr('Anmelden');
  }

  /* ---------- Seite «Mein Konto» (#konto) ---------- */
  // Profil, Zahlen, letzte Sichtungen, Bahnhof, Favoriten, Abzeichen (aus js/sammlung.js) und Einstellungen
  const bild = z => (z.bilder && z.bilder.length ? `<img src="${esc(klein(z.bilder[0].src))}" alt="" loading="lazy">` : art(z));
  const pfeil = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
  function zeigeSeite() {
    const seite = $('#v-entdecken [data-seite="konto"]');
    if (!seite) return;
    // an: angemeldet und Profil geladen; laedt: angemeldet, Profil noch nicht da (oder Datenbank nicht erreichbar)
    const t = teil(), an = t === 'an' && !!profil, laedt = t === 'an' && !profil;
    $('#kt-an').hidden = !an;
    $('#kt-gast').hidden = an;
    $$('[data-kt-profil]', seite).forEach(b => { b.hidden = !an; });
    $('#kt-admin').hidden = !(an && istAdmin);
    $('[data-kt-admin]', seite).hidden = !(an && istAdmin);
    $('.kt-nav', seite).classList.toggle('aus', !an);
    $('#kt-gast-text').textContent = t === 'profil'
      ? tr('Bitte ergänze dein Profil. Ein Konto gibt es ab 16 Jahren.')
      : laedt ? (status === 'tabelle' || status === 'fehler' ? $('#ko-status').textContent : tr('Dein Konto wird geladen …'))
        : tr('Melde dich an: Dann sind deine Sammlung, deine Sichtungen und deine Favoriten auf allen deinen Geräten da.');
    // Profil fehlt: Formular gleich hier auf der Seite (vorausgefüllt, z. B. mit dem Namen von Google)
    const ergaenzen = t === 'profil' && profilFehlt;
    $('#kt-gast-h').hidden = !ergaenzen;
    $('#kt-profilform').hidden = !ergaenzen;
    $('#kt-gast-btn').hidden = laedt || ergaenzen;
    $('#kt-gast-btn').textContent = t === 'profil' ? tr('Profil ergänzen') : tr('Anmelden');
    if (ergaenzen && !$('#kt-p-vorname').value) {
      const meta = nutzer.user_metadata || {};
      $('#kt-p-vorname').value = meta.given_name || meta.spielername || '';
      $('#kt-p-nachname').value = meta.family_name || '';
    }
    $('#kt-hallo').textContent = an && profil ? tr('Hallo {name}.', { name: profil.vorname }) : tr('Mein Konto');
    // Privatsphäre: Besucherzählung für alle, «Erfolge im Spiel zeigen» nur mit Konto
    $('#kt-pr-erfolge-zeile').hidden = !an;
    $('#kt-pr-erfolge').checked = privat().spielErfolge !== false;
    $('#kt-pr-zaehlen').checked = lsGet('skipgc') !== 't';
    if (!an) return;

    $('#kt-avatar-bild').innerHTML = bildHtml(meinBild(), anfang());
    $('#kt-avatar').classList.toggle('mit-bild', hatBild(meinBild()));
    $('#kt-name').textContent = `${profil.vorname} ${profil.nachname}`.trim();
    const seit = nutzer.created_at ? new Date(nutzer.created_at) : null;
    $('#kt-seit').textContent = seit && !isNaN(seit)
      ? tr('Bahnfan seit {datum}', { datum: seit.toLocaleDateString(LOCALE, { month: 'long', year: 'numeric' }) })
      : tr('Mein Bahnprofil');
    $('#kt-email').textContent = nutzer.email || '';
    $('#kt-n-gesehen').textContent = seenIds.length;
    $('#kt-n-sicht').textContent = sichtAnzahl();
    $('#kt-n-fav').textContent = favIds.length;

    // letzte Sichtungen: die drei neuesten, über alle Fahrzeuge
    const datum = s => { const d = new Date(s + 'T12:00:00'); return isNaN(d) ? s : d.toLocaleDateString(LOCALE, { day: '2-digit', month: '2-digit', year: 'numeric' }); };
    const letzte = Object.entries(sicht).flatMap(([id, l]) => (Array.isArray(l) ? l : []).map(s => ({ z: zugOf(id), s })))
      .filter(x => x.z).sort((a, b) => (b.s.d || '').localeCompare(a.s.d || '') || (b.s.t || 0) - (a.s.t || 0)).slice(0, 3);
    $('#kt-sichtungen').innerHTML = letzte.length
      ? letzte.map(({ z, s }) => `<li><a href="#${esc(z.id)}"><span class="kt-bild">${bild(z)}</span>
          <span class="kt-txt"><b>${esc(fullName(z))}</b><small>${esc([s.ort, datum(s.d)].filter(Boolean).join(' · '))}</small></span>${pfeil}</a></li>`).join('')
      : `<li class="kt-leer">${esc(tr('Noch keine Sichtungen. Tippe auf «Sichtung eintragen».'))}</li>`;

    $('#kt-bahnhof').textContent = lsGet('hckd-bahnhof') || 'Bern';

    const favs = favIds.map(zugOf).filter(Boolean);
    $('#kt-fav-liste').innerHTML = favs.length
      ? favs.map(z => `<li><a class="sam-card" href="#${esc(z.id)}"><span class="sam-pic">${bild(z)}</span><span class="sam-txt"><b>${esc(fullName(z))}</b><small>${esc(tr(katOf(z.kat).name))}</small></span></a></li>`).join('')
      : `<li class="kt-leer">${esc(tr('Noch keine Lieblingsfahrzeuge. Tippe auf einer Fahrzeugseite auf «Lieblingsfahrzeug».'))}</li>`;

    // Abzeichen: die zwei zuletzt erreichten und das nächste (mit Schloss)
    const alle = typeof ABZEICHEN !== 'undefined' ? ABZEICHEN : [], da = alle.length ? erreicht() : [];
    $('#kt-abz-n').textContent = tr('{a} von {b}', { a: da.length, b: alle.length });
    const offen = alle.filter(a => a.wert() < a.ziel()).sort((x, y) => y.wert() / y.ziel() - x.wert() / x.ziel())[0];
    const zeigen = da.slice(-2).map(a => ({ a, ok: true })).concat(offen ? [{ a: offen, ok: false }] : []);
    $('#kt-abz-liste').innerHTML = zeigen.map(({ a, ok }) => `<li class="${ok ? 'on' : ''}">
        <span class="medal" aria-hidden="true">${esc(a.zeichen)}${ok ? '' : '<i class="kt-schloss"></i>'}</span>
        <span><b>${esc(tr(a.titel))}</b><small>${esc(tr(a.text, { n: a.ziel() }))}</small></span></li>`).join('');

    zeigeStatistik();
    // Fotos beitragen: wie viele Fahrzeuge noch kein Foto haben
    const ohneFoto = ZUEGE.filter(z => !z.bilder || !z.bilder.length).length;
    $('#kt-fotos-fehlt').textContent = ohneFoto ? tr('Für {n} Fahrzeuge suchen wir noch Fotos.', { n: ohneFoto }) : '';
  }
  window.kontoSeite = zeigeSeite; // js/katalog.js ruft das beim Öffnen der Seite auf

  /* ---------- Meine Statistik: aus den Sichtungen, gesamte Zeit, ein Jahr oder ein Monat ---------- */
  let zeitraum = 'alle';
  const sichtListe = () => Object.entries(sicht)
    .flatMap(([id, l]) => (Array.isArray(l) ? l : []).map(s => ({ z: zugOf(id), s })))
    .filter(x => x.z && x.s && /^\d{4}-\d{2}/.test(x.s.d || ''));
  function zeigeStatistik() {
    const alle = sichtListe();
    const jahre = [...new Set(alle.map(x => x.s.d.slice(0, 4)))].sort().reverse();
    const monate = [...new Set(alle.map(x => x.s.d.slice(0, 7)))].sort().reverse();
    const monatName = m => { const d = new Date(m + '-15T12:00:00'); return isNaN(d) ? m : d.toLocaleDateString(LOCALE, { month: 'long', year: 'numeric' }); };
    if (zeitraum !== 'alle' && !jahre.includes(zeitraum) && !monate.includes(zeitraum)) zeitraum = 'alle';
    const sel = $('#kt-zeitraum');
    sel.innerHTML = `<option value="alle">${esc(tr('Gesamte Zeit'))}</option>`
      + (jahre.length ? `<optgroup label="${esc(tr('Jahr'))}">${jahre.map(j => `<option value="${j}">${j}</option>`).join('')}</optgroup>` : '')
      + (monate.length ? `<optgroup label="${esc(tr('Monat'))}">${monate.map(m => `<option value="${m}">${esc(monatName(m))}</option>`).join('')}</optgroup>` : '');
    sel.value = zeitraum;
    const liste = zeitraum === 'alle' ? alle : alle.filter(x => x.s.d.startsWith(zeitraum));
    const proZug = new Map(), proBahn = new Map();
    liste.forEach(({ z }) => {
      proZug.set(z, (proZug.get(z) || 0) + 1);
      proBahn.set(bahnOf(z), (proBahn.get(bahnOf(z)) || 0) + 1);
    });
    $('#kt-s-sicht').textContent = liste.length;
    $('#kt-s-typen').textContent = proZug.size;
    $('#kt-s-bahnen').textContent = proBahn.size;
    $('#kt-stat-teile').hidden = !liste.length;
    $('#kt-stat-leer').hidden = !!liste.length;
    $('#kt-stat-leer').textContent = alle.length
      ? tr('In diesem Zeitraum hast du keine Sichtung eingetragen.')
      : tr('Noch keine Sichtungen. Tippe auf «Sichtung eintragen».');
    const max = Math.max(1, ...proBahn.values());
    $('#kt-s-bahnliste').innerHTML = [...proBahn].sort((a, b) => b[1] - a[1]).map(([b, n]) => {
      const info = BAHNEN.find(x => x.id === b) || { name: b, lang: b };
      return `<li><span class="kt-b-name" title="${esc(tr(info.lang))}">${esc(tr(info.name))}</span>
        <span class="kt-b-balken" aria-hidden="true"><i style="width:${(n / max * 100).toFixed(1)}%"></i></span><b>${n}</b></li>`;
    }).join('');
    $('#kt-s-top').innerHTML = [...proZug].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([z, n]) =>
      `<li><a href="#${esc(z.id)}">${esc(fullName(z))}</a><span>${esc(n === 1 ? tr('1 Sichtung') : tr('{s} Sichtungen', { s: n }))}</span></li>`).join('');
  }
  $('#kt-zeitraum').addEventListener('change', e => { zeitraum = e.target.value; zeigeStatistik(); });

  /* ---------- Privatsphäre ---------- */
  // Erfolge im Spiel zeigen: gilt fürs Konto (hckd-privat wird mitgespeichert);
  // Besucherzählung: gilt für dieses Gerät (skipgc, so wie GoatCounter selbst es kennt; js/statistik.js)
  $('#kt-pr-erfolge').addEventListener('change', e => {
    const o = privat();
    o.spielErfolge = e.target.checked;
    lsSet('hckd-privat', JSON.stringify(o));
    synchron();
  });
  $('#kt-pr-zaehlen').addEventListener('change', e => {
    if (e.target.checked) lsDel('skipgc'); else lsSet('skipgc', 't');
  });

  /* ---------- Meine Daten herunterladen ---------- */
  $('#kt-export-json').addEventListener('click', async () => {
    const msg = $('#kt-export-msg');
    msg.className = 'rp-msg';
    msg.textContent = tr('Einen Moment …');
    const daten = {
      app: 'RailBase', art: 'Konto', exportiert: new Date().toISOString(),
      konto: { email: nutzer.email || '', id: nutzer.id, erstellt: nutzer.created_at || '' },
      profil, website: lies(), erfolge: erreicht().map(a => ({ id: a.id, titel: a.titel, text: String(a.text).replace('{n}', a.ziel()) }))
    };
    // dazu der Spielstand aus RailBase Legends, falls es einen gibt (gleiches Konto)
    try {
      const { data } = await db.from('spieler').select('spieler_id, name, level, stand').eq('id', nutzer.id).maybeSingle();
      if (data) daten.spiel = data;
    } catch (e) { /* ohne Spielstand */ }
    datei('railbase-konto-' + new Date().toISOString().slice(0, 10) + '.json', JSON.stringify(daten, null, 2), 'application/json');
    msg.className = 'rp-msg ok';
    msg.textContent = tr('Heruntergeladen.');
  });
  $('#kt-export-csv').addEventListener('click', () => $('#album-csv').click()); // gleiche Tabelle wie in «Meine Sammlung»

  /* ---------- Profilbild wählen (Fenster #kt-bildwahl) ---------- */
  const bw = { box: $('#kt-bildwahl'), raster: $('#kt-bild-raster'), datei: $('#kt-bild-datei'), fertig: $('#kt-bild-fertig'), msg: $('#kt-bild-msg') };
  let bwWahl = '', bwFoto = '';
  const bwSage = (t, kind) => { bw.msg.textContent = t; bw.msg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };
  function bwZeichne() {
    const eigen = `<li><button type="button" class="kt-bild-knopf" data-bild="eigen" aria-pressed="${bwWahl === 'eigen'}"
        aria-label="${esc(bwFoto ? tr('Eigenes Foto (nochmals antippen: anderes Foto wählen)') : tr('Eigenes Foto aus der Galerie wählen'))}">
        <span class="kt-bild-rund">${bwFoto ? `<img src="${bwFoto}" alt="">` : '<span class="kt-pb kt-pb-kamera">📷</span>'}</span>
        <small>${esc(bwFoto ? (bwWahl === 'eigen' ? tr('Ändern') : tr('Dein Foto')) : tr('Eigenes Foto'))}</small></button></li>`;
    const ohne = `<li><button type="button" class="kt-bild-knopf" data-bild="kein" aria-pressed="${bwWahl === 'kein'}" aria-label="${esc(tr('Ohne Bild'))}">
        <span class="kt-bild-rund kt-bild-ohne">${esc(anfang())}</span><small>${esc(tr('Ohne Bild'))}</small></button></li>`;
    bw.raster.innerHTML = eigen + PROFILBILDER.map(b => `<li><button type="button" class="kt-bild-knopf" data-bild="${b.id}" aria-pressed="${b.id === bwWahl}" aria-label="${esc(tr(b.name))}">
        <span class="kt-bild-rund"><span class="kt-pb" style="--pb:${b.farbe}">${b.zeichen}</span></span></button></li>`).join('') + ohne;
    bw.fertig.disabled = bwWahl === 'eigen' && !bwFoto;
  }
  function bildWaehlen() {
    if (ohneBildSpalten) {
      // Datenbank noch ohne Bild-Spalten: Hinweis statt Fenster
      oeffnen(knopf);
      setzeStatus('tabelle');
      return;
    }
    const b = meinBild();
    bwWahl = b.bild || 'kein'; // 'kein' = bewusst ohne Bild (dann auch nicht das Bild aus dem Spiel)
    bwFoto = fotoOk(b.foto) ? b.foto : (profil && fotoOk(profil.bild_foto) ? profil.bild_foto : '');
    bwSage('');
    bwZeichne();
    bw.box.hidden = false;
    bw.fertig.focus({ preventScroll: true });
  }
  const bwZu = () => { bw.box.hidden = true; $('#kt-avatar').focus({ preventScroll: true }); };
  $('#kt-avatar').addEventListener('click', bildWaehlen);
  bw.box.addEventListener('click', e => { if (e.target === bw.box || e.target.closest('[data-close]')) bwZu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !bw.box.hidden) bwZu(); });
  bw.raster.addEventListener('click', e => {
    const b = e.target.closest('[data-bild]');
    if (!b) return;
    // eigenes Foto: noch keines oder schon gewählt → Galerie öffnen
    if (b.dataset.bild === 'eigen' && (!bwFoto || bwWahl === 'eigen')) { bw.datei.value = ''; bw.datei.click(); return; }
    bwWahl = b.dataset.bild;
    bwSage('');
    bwZeichne();
  });
  bw.datei.addEventListener('change', async () => {
    const f = bw.datei.files && bw.datei.files[0];
    if (!f) return;
    bwSage(tr('Einen Moment …'));
    try {
      bwFoto = await fotoAusDatei(f);
      bwWahl = 'eigen';
      bwSage('');
      bwZeichne();
    } catch (err) {
      bwSage(err.message === 'gross' ? tr('Das Foto ist zu gross. Nimm ein anderes.') : tr('Dieses Bild kann nicht geöffnet werden. Nimm ein anderes Foto.'), 'err');
    }
  });
  bw.fertig.addEventListener('click', async () => {
    bw.fertig.disabled = true;
    bwSage(tr('Einen Moment …'));
    const zeile = { bild: bwWahl, bild_foto: bwWahl === 'eigen' ? bwFoto : (profil && profil.bild_foto) || '' };
    try {
      const { error } = await db.from('profil').update(zeile).eq('id', nutzer.id);
      if (error) throw error;
      profil = Object.assign({}, profil, zeile);
      spielBild = null;
      bwSage('');
      zeige();
      bwZu();
    } catch (err) {
      bwSage(deutsch(err), 'err');
    } finally {
      bw.fertig.disabled = false;
    }
  });

  // «Foto einsenden» (js/fotos.js): angemeldet sind Name und E-Mail schon ausgefüllt
  document.addEventListener('click', e => {
    if (!e.target.closest('[data-fotos]') || !nutzer) return;
    setTimeout(() => {
      const name = $('#ft-name'), mail = $('#ft-mail');
      if (name && !name.value && profil) name.value = `${profil.vorname} ${profil.nachname}`.trim();
      if (mail && !mail.value) mail.value = nutzer.email || '';
    });
  });

  function oeffnen(von) {
    zurueck = von || null;
    dlg.hidden = false;
    zeige();
    $('.ko-dlg', dlg).scrollTop = 0;
    const t = teil();
    if (t === 'aus') {
      sage('');
      f.email.focus();
      verbinde().then(() => db.auth.getSession()).then(r => { if (r.data.session) angemeldet(r.data.session.user); }).catch(() => { /* erst beim Absenden melden */ });
    } else if (t === 'profil') {
      fuelleProfil();
      (p.vorname.value ? p.geburt : p.vorname).focus();
    } else {
      $('#ko-an .dlg-fokus').focus({ preventScroll: true });
      if (Date.now() - zuletzt > 5000) synchron();
    }
  }
  // Profil-Formular mit dem gespeicherten Profil füllen (bei einem Konto aus Google: Vor- und Nachname von Google)
  function fuelleProfil() {
    const meta = (nutzer && nutzer.user_metadata) || {};
    p.vorname.value = profil ? profil.vorname : (meta.given_name || meta.spielername || '');
    p.nachname.value = profil ? profil.nachname : (meta.family_name || '');
    p.geburt.value = profil ? profil.geburtsdatum : '';
    p.msg.textContent = '';
    p.msg.className = 'rp-msg';
  }
  function schliessen() { dlg.hidden = true; $('#ko-geladen').hidden = true; if (zurueck) zurueck.focus(); }

  // Kopfzeile: angemeldet zur Seite «Mein Konto», sonst das Fenster zum Anmelden
  knopf.addEventListener('click', () => {
    if (teil() === 'an') gehe('konto'); // js/katalog.js: #konto oder konto.html
    else oeffnen(knopf);
  });

  // ---------- Bedienung der Seite «Mein Konto» ----------
  const seite = $('#v-entdecken [data-seite="konto"]');
  const springe = id => {
    if (id.charAt(0) === '#') { gehe(id.slice(1)); return; }
    const el = document.getElementById(id);
    if (el) scrollTo({ top: id === 'kt-oben' ? 0 : el.getBoundingClientRect().top + scrollY - 80, behavior: reduce ? 'auto' : 'smooth' });
  };
  seite.addEventListener('click', e => {
    const ziel = e.target.closest('[data-kt-ziel]');
    if (ziel) {
      $$('.kt-nav [data-kt-ziel]', seite).forEach(b => b.removeAttribute('aria-current'));
      ziel.setAttribute('aria-current', 'true');
      springe(ziel.dataset.ktZiel);
      return;
    }
    if (e.target.closest('[data-kt-profil]')) { profilAendern = true; oeffnen(e.target.closest('[data-kt-profil]')); return; }
    const admin = e.target.closest('[data-kt-admin], #kt-admin-btn');
    if (admin) { if (istAdmin && window.adminOeffnen) window.adminOeffnen(admin); return; }
    if (e.target.closest('[data-kt-abmelden]')) {
      springe('kt-einstellungen');
      $('#ko-ab').hidden = true;
      $('#ko-ab-frage').hidden = false;
      return;
    }
    if (e.target.closest('[data-kt-sicht]')) {
      const form = $('#kt-sicht-wahl');
      form.hidden = !form.hidden;
      if (!form.hidden) {
        if (!$('#kt-zuege').options.length) $('#kt-zuege').innerHTML = ZUEGE.map(z => `<option value="${esc(fullName(z))}"></option>`).join('');
        $('#kt-sicht-msg').textContent = '';
        $('#kt-sicht-zug').focus();
      }
    }
  });
  $('#kt-wahl').addEventListener('change', e => { springe(e.target.value); e.target.value = 'kt-oben'; });
  $('#kt-gast-btn').addEventListener('click', e => oeffnen(e.currentTarget));
  $('#ko-profil-btn').addEventListener('click', e => { profilAendern = true; oeffnen(e.currentTarget); });

  // «Sichtung eintragen»: Fahrzeug wählen, dann auf dessen Seite das Formular öffnen
  const SICHT_NEU = 'hckd-sicht-neu';
  $('#kt-sicht-wahl').addEventListener('submit', e => {
    e.preventDefault();
    const text = $('#kt-sicht-zug').value.trim().toLowerCase();
    const z = ZUEGE.find(x => fullName(x).toLowerCase() === text) || ZUEGE.find(x => fullName(x).toLowerCase().includes(text) && text.length > 1);
    if (!z) { $('#kt-sicht-msg').className = 'rp-msg err'; $('#kt-sicht-msg').textContent = tr('Dieses Fahrzeug gibt es nicht. Wähle eines aus der Liste.'); return; }
    ssSet(SICHT_NEU, z.id);
    gehe(z.id);
    setTimeout(sichtFormularOeffnen, 400);
  });
  function sichtFormularOeffnen() {
    const id = ssGet(SICHT_NEU);
    if (!id || typeof curZug === 'undefined' || !curZug || curZug.id !== id) return;
    ssSet(SICHT_NEU, null);
    const b = $('#sicht-neu');
    if (b && b.getAttribute('aria-expanded') !== 'true') b.click();
    b && b.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
  }
  setTimeout(sichtFormularOeffnen, 600); // nach dem Wechsel auf eine andere Datei (fertige Website)
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('[data-close]')) schliessen(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dlg.hidden) schliessen(); });
  $('#ko-reiter').addEventListener('click', e => {
    const b = e.target.closest('[data-art]');
    if (!b) return;
    art = b.dataset.art;
    sage('');
    zeichne();
    (art === 'registrieren' ? f.vorname : f.email).focus();
  });

  f.form.addEventListener('submit', async e => {
    e.preventDefault();
    const neu = art === 'registrieren';
    const email = f.email.value.trim(), pw = f.pw.value;
    const vorname = f.vorname.value.trim().slice(0, 50), nachname = f.nachname.value.trim().slice(0, 50), geburt = f.geburt.value;
    if (neu) {
      const fehler = profilFehler(vorname, nachname, geburt);
      if (fehler) { sage(fehler.text, 'err'); f[fehler.feld].focus(); return; }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { sage(tr('Gib deine E-Mail-Adresse ein.'), 'err'); f.email.focus(); return; }
    if (pw.length < 6) { sage(tr('Das Passwort braucht mindestens 6 Zeichen.'), 'err'); f.pw.focus(); return; }
    if (neu && pw !== f.pw2.value) { sage(tr('Die beiden Passwörter sind nicht gleich. Gib sie nochmals ein.'), 'err'); f.pw2.focus(); return; }
    f.los.disabled = true;
    sage(tr('Einen Moment …'));
    try {
      await verbinde();
      if (neu) {
        // das Profil wird gleich nach dem Anmelden gespeichert (ladeProfil); bis dahin nur für diesen Besuch gemerkt
        ssSet(PROFIL_NEU, JSON.stringify({ email, vorname, nachname, geburtsdatum: geburt }));
        // spielername: den Vornamen zeigt auch das Spiel RailBase Legends
        const { data, error } = await db.auth.signUp({ email, password: pw, options: { data: { spielername: vorname.slice(0, 30) } } });
        if (error) { ssSet(PROFIL_NEU, null); throw error; }
        if (!data.session) {
          sage(tr('Fast fertig: Bestätige deine E-Mail (Link in der Mail), dann melde dich hier an.'), 'ok');
          art = 'anmelden';
          zeichne();
          return;
        }
      } else {
        const { error } = await db.auth.signInWithPassword({ email, password: pw });
        if (error) throw error;
      }
      sage('');
    } catch (err) {
      sage(deutsch(err), 'err');
    } finally {
      f.los.disabled = false;
    }
  });

  $('#ko-google').addEventListener('click', async () => {
    const b = $('#ko-google');
    sage('');
    b.disabled = true;
    try {
      await verbinde();
      // ist Google in Supabase eingeschaltet? Sonst landet man auf einer Fehlerseite
      const r = await fetch(`${KONTO.url}/auth/v1/settings`, { headers: { apikey: KONTO.schluessel } });
      const einst = await r.json();
      if (!einst.external || !einst.external.google) {
        sage(tr('Anmelden mit Google ist noch nicht eingerichtet. Nimm vorerst E-Mail und Passwort.'), 'err');
        b.disabled = false;
        return;
      }
      // nach der Rückkehr von Google wieder auf derselben Seite (und Ansicht) landen
      ssSet(GOOGLE, location.hash || '#');
      const { error } = await db.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
      if (error) throw error;
    } catch (err) {
      ssSet(GOOGLE, null);
      b.disabled = false;
      sage(deutsch(err), 'err');
    }
  });

  // Abmelden: zuerst nachfragen; danach sind die Daten nur noch im Konto, nicht mehr auf diesem Gerät
  $('#ko-ab').addEventListener('click', () => { $('#ko-ab').hidden = true; $('#ko-ab-frage').hidden = false; $('#ko-ab-ja').focus(); });
  $('#ko-ab-nein').addEventListener('click', () => { $('#ko-ab-frage').hidden = true; $('#ko-ab').hidden = false; $('#ko-ab').focus(); });
  $('#ko-ab-ja').addEventListener('click', () => { $('#ko-ab-ja').disabled = true; abmelden(); });
  // ohne Profil (z. B. unter 16): abmelden, die Daten auf diesem Gerät bleiben (sie waren nie im Konto)
  $('#kp-ab').addEventListener('click', () => { $('#kp-ab').disabled = true; abmelden(); });
  async function abmelden() {
    const imKonto = nutzer && meta().konto === nutzer.id;
    try { if (geaendert()) await synchron(); } catch (e) { /* ohne Netz trotzdem abmelden */ }
    try { await db.auth.signOut({ scope: 'local' }); } catch (e) { /* ohne Netz trotzdem abmelden */ }
    try { Object.keys(localStorage).filter(k => k.indexOf(AUTH) === 0).forEach(lsDel); } catch (e) { /* private window */ }
    ssSet(PROFIL_NEU, null);
    if (imKonto) { schreibe({}); lsDel(META); }
    location.reload();
  }

  // Konto löschen: zuerst nachfragen. Die Datenbank löscht das Konto (konto_loeschen, werkzeuge/datenbank-webseite.sql),
  // mit allem, was daran hängt: Website, Profil und Spielstand von RailBase Legends. Das geht sofort.
  // Danach geht eine Mail an RailBase (Web3Forms, gleicher Schlüssel wie «Fehler melden», js/melden.js).
  const GELOESCHT = 'hckd-konto-geloescht';
  $('#ko-del').addEventListener('click', () => {
    $('#ko-del').hidden = true;
    $('#ko-del-frage').hidden = false;
    $('#ko-del-msg').textContent = '';
    $('#ko-del-frage').scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
    $('#ko-del-nein').focus({ preventScroll: true });
  });
  $('#ko-del-nein').addEventListener('click', () => { $('#ko-del-frage').hidden = true; $('#ko-del').hidden = false; $('#ko-del').focus(); });
  $('#ko-del-ja').addEventListener('click', async () => {
    const knopfJa = $('#ko-del-ja'), msg = $('#ko-del-msg');
    knopfJa.disabled = true;
    msg.className = 'rp-msg';
    msg.textContent = tr('Einen Moment …');
    const wer = { email: nutzer.email || '', id: nutzer.id, name: profil ? `${profil.vorname} ${profil.nachname}` : '' };
    try {
      const { error } = await db.rpc('konto_loeschen');
      if (error) throw error;
    } catch (e) {
      knopfJa.disabled = false;
      msg.className = 'rp-msg err';
      msg.textContent = /PGRST202|konto_loeschen/.test(`${e && e.code} ${e && e.message}`)
        ? tr('Konto löschen ist noch nicht eingerichtet. Schreib uns bitte über das Formular.')
        : deutsch(e);
      return;
    }
    await meldeLoeschung(wer);
    // alles vom Gerät entfernen, wie beim Abmelden
    try { await db.auth.signOut({ scope: 'local' }); } catch (e) { /* das Konto gibt es schon nicht mehr */ }
    try { Object.keys(localStorage).filter(k => k.indexOf(AUTH) === 0).forEach(lsDel); } catch (e) { /* private window */ }
    schreibe({});
    lsDel(META);
    ssSet(GELOESCHT, '1');
    location.reload();
  });
  // Mail an RailBase: wer sein Konto gelöscht hat. 🔴 im Betreff und oben im Text, damit sie auffällt
  // (Web3Forms schickt die Felder als Tabelle; eigene Farben gehen dort nicht)
  async function meldeLoeschung(wer) {
    if (typeof MELDEN === 'undefined' || !MELDEN.web3formsKey) return;
    const zeit = new Date();
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: MELDEN.web3formsKey,
          subject: `🔴🔴 WICHTIG: Konto gelöscht – ${wer.email}`,
          from_name: 'RailBase Konto',
          '🔴 WICHTIG': '🔴 Ein Konto wurde gelöscht. Die Datenbank hat das Konto mit Website-Daten, Profil und Spielstand schon automatisch gelöscht. Bitte prüfen, ob sonst noch etwas von dieser Person übrig ist (z. B. Mails, Fotos). 🔴',
          'E-Mail-Adresse': wer.email,
          Name: wer.name || '(kein Profil)',
          'Konto-ID': wer.id,
          Zeit: zeit.toLocaleString('de-CH', { timeZone: 'Europe/Zurich' }),
          Seite: location.origin
        })
      });
    } catch (e) { /* das Konto ist trotzdem gelöscht */ }
  }

  // Profil ergänzen oder ändern
  $('#kp-zurueck').addEventListener('click', () => { profilAendern = false; zeige(); $('#ko-an .dlg-fokus').focus({ preventScroll: true }); });
  // Profil speichern: aus dem Fenster (p) oder aus dem Formular direkt auf der Seite «Mein Konto» (kp)
  const kp = { form: $('#kt-profilform'), vorname: $('#kt-p-vorname'), nachname: $('#kt-p-nachname'), geburt: $('#kt-p-geburt'), los: $('#kt-p-los'), msg: $('#kt-p-msg') };
  kp.geburt.max = spaetestens();
  async function profilAbsenden(e, x, imFenster) {
    e.preventDefault();
    const sagP = (t, kind) => { x.msg.textContent = t; x.msg.className = 'rp-msg' + (kind ? ' ' + kind : ''); };
    const vorname = x.vorname.value.trim().slice(0, 50), nachname = x.nachname.value.trim().slice(0, 50), geburt = x.geburt.value;
    const fehler = profilFehler(vorname, nachname, geburt);
    if (fehler) { sagP(fehler.text, 'err'); x[fehler.feld].focus(); return; }
    x.los.disabled = true;
    sagP(tr('Einen Moment …'));
    try {
      const erstes = !profil;
      await speichereProfil(vorname, nachname, geburt);
      profilFehlt = false;
      profilAendern = false;
      sagP('');
      zeige();
      if (imFenster) $('#ko-an .dlg-fokus').focus({ preventScroll: true });
      else scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      // erst jetzt, mit vollständigem Profil, die Daten der Website im Konto speichern
      if (erstes) { beobachte(); synchron(); pruefeAdmin(); }
    } catch (err) {
      sagP(deutsch(err), 'err');
    } finally {
      x.los.disabled = false;
    }
  }
  p.form.addEventListener('submit', e => profilAbsenden(e, p, true));
  kp.form.addEventListener('submit', e => profilAbsenden(e, kp, false));

  /* ---------- Start ---------- */
  // Nur wer schon angemeldet ist (oder gerade von Google zurückkommt), lädt die Bibliothek gleich beim Start
  let sitzung = false;
  try { sitzung = Object.keys(localStorage).some(k => k.indexOf(AUTH) === 0); } catch (e) { /* private window */ }
  const vonGoogle = ssGet(GOOGLE);
  zeige();
  if (sitzung || vonGoogle) {
    verbinde().then(() => db.auth.getSession()).then(({ data, error }) => {
      // Rückkehr von Google: ?code=… aus der Adresse entfernen, die Ansicht von vorher wiederherstellen
      const p = new URLSearchParams(location.search);
      const fehler = p.get('error_description');
      if (p.has('code') || p.has('error') || vonGoogle) {
        ['code', 'error', 'error_code', 'error_description', 'state'].forEach(k => p.delete(k));
        const q = p.toString(), hashJetzt = location.hash;
        const ziel = hashJetzt || (vonGoogle && vonGoogle !== '#' ? vonGoogle : '');
        history.replaceState(history.state, '', location.pathname + (q ? '?' + q : '') + ziel);
        if (!hashJetzt && ziel) dispatchEvent(new HashChangeEvent('hashchange'));
        ssSet(GOOGLE, null);
        if (vonGoogle) {
          oeffnen(knopf);
          if (fehler || error) sage(tr('Anmelden mit Google hat nicht geklappt. Versuch es nochmals.'), 'err');
        }
      }
      if (data && data.session) angemeldet(data.session.user);
    }).catch(() => { if (nutzer) setzeStatus('fehler'); });
  }
  // nach dem Löschen: bestätigen
  if (ssGet(GELOESCHT)) {
    ssSet(GELOESCHT, null);
    setTimeout(() => {
      oeffnen(knopf);
      sage(tr('Dein Konto ist gelöscht. Danke, dass du dabei warst!'), 'ok');
    }, 300);
  }
  // nach dem ersten Anmelden auf diesem Gerät: kurz zeigen, dass die Daten aus dem Konto da sind
  if (ssGet(HINWEIS)) {
    ssSet(HINWEIS, null);
    setTimeout(() => {
      oeffnen(knopf);
      setzeStatus('ok');
      $('#ko-geladen').hidden = false;
    }, 300);
  }
})();
