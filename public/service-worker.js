// public/service-worker.js
const CACHE = 'assorti-v1';
const ASSETS = [
  '/',                        // главная
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/img/og.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first для статики + fallback для навигации
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Переходы по страницам
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/'))
    );
    return;
  }

  // Остальное: сначала кэш, потом сеть
  event.respondWith(
    caches.match(req).then((res) =>
      res || fetch(req).then((netRes) => {
        // Кэшируем только успешные ответы своего домена
        try {
          const url = new URL(req.url);
          if (netRes.ok && url.origin === self.location.origin) {
            const copy = netRes.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
        } catch {}
        return netRes;
      }).catch(() => caches.match('/'))
    )
  );
});
