const CACHE_NAME = 'emergencia-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  './icono.png'
  './insignia.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
