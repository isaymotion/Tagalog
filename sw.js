/* Offline support. Bump VERSION whenever any file changes so phones pick up the update. */
const VERSION = 'usaptayo-1.2.0';
const FILES = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css',
  'js/core.js', 'js/views.js', 'js/psych-views.js', 'js/app.js', 'js/conjugate.js',
  'js/data/dict-core.js', 'js/data/dict-everyday.js', 'js/data/dict-clinical.js', 'js/data/dict-more.js', 'js/data/verbs.js',
  'js/data/lessons.js', 'js/data/reading.js', 'js/data/dialogues.js', 'js/data/psych-phrases.js',
  'js/data/psych-cases.js', 'js/data/psych-flow.js', 'js/data/psych-deesc.js', 'js/deesc.js', 'js/data/meta.js', 'js/handout.js',
  'js/vendor/pdfmake.min.js', 'js/vendor/vfs_fonts.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/logo-96.png', 'icons/favicon-32.png', 'icons/favicon-64.png', 'icons/apple-touch-icon.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Network first for app files (so updates arrive), falling back to cache when offline.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })));
  }
});
