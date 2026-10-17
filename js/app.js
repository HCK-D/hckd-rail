/* HCKD RAIL – als App installieren (PWA) */
'use strict';

/* =====================================================================
   APP: Auf der fertigen Website (docs/) gibt es manifest.webmanifest und
   sw.js. Der Service Worker hält besuchte Seiten, Bilder und Skripte im
   Speicher des Handys, damit die App schnell startet und auch ohne Netz
   schon besuchte Seiten zeigt. In der Vorschau und auf claude.ai läuft
   das nicht (HCKD_SEITEN fehlt).
   Der Knopf «App installieren» unten auf der Seite erscheint nur, wenn der
   Browser das Installieren anbietet (Android, Chrome, Edge) oder auf dem
   iPhone, wo er erklärt, wie man die Seite zum Home-Bildschirm hinzufügt.
   ===================================================================== */
(() => {
  const btn = $('#app-install'), tipp = $('#app-tipp');
  const lokal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (!window.HCKD_SEITEN || !('serviceWorker' in navigator) || !(location.protocol === 'https:' || lokal)) return;
  addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => { /* no offline mode, site still works */ }); });

  const installiert = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (installiert || !btn) return;

  // Android, Chrome, Edge: the browser offers the install dialog
  let angebot = null;
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); angebot = e; btn.hidden = false; });
  addEventListener('appinstalled', () => { angebot = null; btn.hidden = true; tipp.hidden = true; });

  // iPhone and iPad: Safari has no install dialog, so explain the steps
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (ios) btn.hidden = false;

  btn.addEventListener('click', async () => {
    if (angebot) {
      angebot.prompt();
      try { await angebot.userChoice; } catch (e) { /* closed */ }
      angebot = null; btn.hidden = true;
      return;
    }
    tipp.hidden = !tipp.hidden;
  });
})();
