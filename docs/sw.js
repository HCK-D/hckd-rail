/* RailBase – Service Worker (automatisch erzeugt von werkzeuge\website-bauen.ps1) */
'use strict';
const V = 'hckd-20261019234208';
self.addEventListener('install', e => {
  // cache: 'reload' = directly from the server, never an older copy from the browser cache
  e.waitUntil(caches.open(V).then(c => c.addAll(['./', 'index.html', 'manifest.webmanifest'].map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const merke = (req, res) => { if (res.ok && res.type === 'basic') { const c = res.clone(); caches.open(V).then(k => k.put(req, c)); } return res; };
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => merke(req, res))
      .catch(() => caches.match(req, { ignoreSearch: true }).then(m => m || caches.match('index.html'))));
    return;
  }
  // first use after an update: ask the server whether the file is new (no-cache), so no outdated copy is kept
  e.respondWith(caches.match(req).then(m => m || fetch(new Request(req, { cache: 'no-cache' })).then(res => merke(req, res))));
});