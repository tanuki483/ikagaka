const CACHE_NAME = 'ikagaka-v1';
const urlsToCache = [
  './',
  './index.html',
  // 必要なJS、CSS、vendorフォルダ内のファイルなどを列挙（BrowserFSなど重いので最低限）
  // または動的キャッシュ戦略を使う
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});