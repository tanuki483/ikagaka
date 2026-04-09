const CACHE_NAME = 'ikagaka-v1';
const urlsToCache = [
  './',
  './index.html',
  './js/ikagakaConfig.js',
  './css/',
  './vendor/',
  './img/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
