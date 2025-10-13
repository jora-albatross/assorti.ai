// --- Assorti.ai Service Worker ---
const VERSION = 'v3';                         // <- повышай при изменениях
const PRECACHE = `assorti-precache-${VERSION}`;
const RUNTIME  = `assorti-runtime-${VERSION}`;

const PRECACHE_ASSETS = [
  '/',                                        // главная
  '/offline.html',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/site.webmanifest',
  '/img/og.png'
];

// Утилиты
const sameOrigin = (url) => new URL(url).origin === self.location.origin;

// Установка: кладём предкэш
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then((c) => c.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

// Активация: чистим старые кэши
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter((k) => ![PRECACHE, RUNTIME].includes(k))
        .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Стратегии:
//  - HTML (navigate): Network-first с fallback на offline.html
//  - Картинки/иконки/шрифты: Stale-While-Revalidate
//  - Остальная статика (CSS/JS/JSON из своего домена): Cache-first
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Навигация по страницам
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        // Кэшируем успешный HTML навигации
        const copy = fresh.clone();
        const cache = await caches.open(RUNTIME);
        cache.put(request, copy);
        return fresh;
      } catch (err) {
        // offline fallback: кэш страницы или offline.html
        const cached = await caches.match(request);
        return cached || caches.match('/offline.html');
      }
    })());
    return;
  }

  const url = new URL(request.url);
  const isImage = /\.(png|jpg|jpeg|gif|webp|svg|ico)$/i.test(url.pathname);
  const isStatic = sameOrigin(url) && /\.(css|js|json|webmanifest)$/.test(url.pathname);

  // SW кэширует только свой домен (кросс-домен лучше не трогать)
  if (!sameOrigin(url)) return;

  if (isImage) {
    // Stale-While-Revalidate
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME);
      const cached = await cache.match(request);
      const network = fetch(request).then((res) => {
        if (res.ok) cache.put(request, res.clone());
        return res;
      }).catch(() => null);
      return cached || network || caches.match('/offline.html');
    })());
    return;
  }

  if (isStatic) {
    // Cache-first
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const res = await fetch(request);
        if (res.ok) {
          const cache = await caches.open(RUNTIME);
          cache.put(request, res.clone());
        }
        return res;
      } catch {
        return caches.match('/offline.html');
      }
    })());
  }
});

// Опционально: мгновенное обновление по сообщению SKIP_WAITING
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
