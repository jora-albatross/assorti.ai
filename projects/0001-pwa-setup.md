# 0001 – PWA Setup (Favicon + Manifest + Service Worker)

## ✅ Что сделано
- Добавлены favicon и иконки для разных платформ:
  - `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
  - `apple-touch-icon.png` (180×180)
  - `android-chrome-192x192.png`, `android-chrome-512x512.png`
- Создан **`site.webmanifest`**:
  - корректный `Content-Type: application/manifest+json`
  - прописаны все иконки, short_name, theme_color, background_color
- В `Layout.astro`:
  - подключен манифест
  - meta-теги для Open Graph и Twitter Card
  - ссылки на иконки
- Добавлен **Service Worker** (`/public/service-worker.js`):
  - предкэш иконок, manifest, offline.html
  - стратегии: Network-first (HTML), SWR (картинки), Cache-first (CSS/JS)
  - offline fallback
- Добавлена страница **`offline.html`**.
- Настроен `_headers` для корректных заголовков:
  - `Content-Type` для manifest, service-worker, offline.html
  - `Cache-Control` для статики
- Проверено в **DevTools → Application → Manifest**:
  - PWA работает
  - installable app доступен
  - offline fallback корректный

---

## 🐞 Проблемы и фиксы
- **Manifest не определялся** → решено через `Content-Type: application/manifest+json`.
- **Фавикон не отображался** → добавлены все размеры, `link rel="icon"` прописан.
- **Service Worker не обновлялся** → версия кэша вынесена в константу (`VERSION`).

---

## 📌 Следующие шаги
- 🔄 Заменить текущий favicon/иконки на финальный дизайн (сейчас placeholder).
- 🎨 Подготовить дизайн-план:
  - цветовая схема
  - UI для карточек рецептов
  - навигация и типографика
- 📱 Опционально: добавить splash-screen для Android/iOS.
- ⚡ Рассмотреть Workbox для более гибких стратегий кэширования.

---

## 🗂 История
- **2025-10-13** – initial PWA setup complete (favicon, manifest, SW).
