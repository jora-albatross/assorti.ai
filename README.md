# Assorti.ai — Astro MVP (Cloudflare Pages)

Минимальная версия сайта с контент‑коллекцией рецептов (MDX), готовая к деплою на **Cloudflare Pages**.

## Требования
- Node.js 18+
- npm / pnpm / yarn

## Локально
```bash
npm i
npm run dev
```

## Деплой (Cloudflare Pages)
1. Создай GitHub репозиторий и залей этот код.
2. Cloudflare → Pages → Create Project → Import from GitHub.
3. Build command: `npm run build` · Output dir: `dist`
4. Подключи домен `assorti.ai` и включи SSL (Full).
5. Добавь GA4 (вставь свой код в `src/layouts/Layout.astro`).

## Контент
Рецепты находятся в `src/content/recipes/*.mdx`. Схема коллекции — в `src/content/config.ts`.
Новый рецепт = новый `.mdx` с фронтматтером и секциями (`outcome`, `steps`, `prompts`).

## Интеграции
- ConvertKit: вставь embed формы в `src/pages/index.astro`.
- Stripe/Gumroad: вставляй ссылки на Checkout в страницах рецептов/блог.
- GA4: подключи в `Layout.astro`.

## Дальше
- Telegram бот на Cloudflare Workers для купонов/ссылок.
- SEO schema: добавь HowTo в страницы рецептов (можно в следующей версии).


  # Assorti.ai

Curated AI recipes — ready-to-use workflows for creators, marketers and entrepreneurs.

## Tech stack
- Astro
- Tailwind CSS (custom palette, Inter + Playfair Display)
- Cloudflare Pages (deploy)
- PWA: `site.webmanifest` + `service-worker.js` + `offline.html`

## Local dev
```bash
npm install
npm run dev

## Build
npm run build
npm run preview

## Deploy
main → auto-deploy to Cloudflare Pages
After updating icons/OG/SW: Cloudflare Pages → Purge Everything

## Project structure (important)
/src
  /components      # Hero, RecipeCard, ...
  /layouts         # Layout.astro
  /pages           # index.astro, 404.astro, recipes/*
  /styles          # tailwind.css
/public
  _headers
  site.webmanifest
  service-worker.js
  offline.html
  favicon.ico, favicon-16x16.png, favicon-32x32.png
  apple-touch-icon.png
  android-chrome-192x192.png
  android-chrome-512x512.png
  /img/og.png
/projects
  0001-pwa-setup.md
  0002-design-plan.md
  (0003-ui-components.md — coming up)


## Styling — how to change colors/fonts
   Tailwind config: tailwind.config.cjs
      extend: {
        colors: {
          primary: "#5B6CFF",
          secondary: "#1E293B",
          accent: "#FF6B6B",
          background: "#FFFFFF",
          gradientStart: "#5B6CFF",
          gradientEnd: "#9B5BFF"
        },
        fontFamily: {
          sans: ["Inter", "ui-sans-serif", "system-ui"],
          display: ["Playfair Display", "serif"]
        }
      }

   Use in markup:
      Text: text-secondary
      Background: bg-background
      Buttons: bg-accent text-white
      Gradient: bg-gradient-to-r from-gradientStart to-gradientEnd

## Icons & OG

Replace files in /public/ with same names/sizes:
      apple-touch-icon.png — 180×180
      android-chrome-192x192.png, android-chrome-512x512.png
      favicon-16x16.png, favicon-32x32.png, favicon.ico
      img/og.png — 1200×630 (or 1600×900)
Then deploy + Purge Everything.

## PWA notes

Manifest: /public/site.webmanifest (served with application/manifest+json).
SW: /public/service-worker.js with versioned caches.
      When changing precache/logic, bump VERSION in SW (e.g., v4).
Offline fallback: /public/offline.html.

## Troubleshooting

Tailwind classes not applied:
      Ensure astro.config.mjs has @astrojs/tailwind.
      tailwind.config.cjs is in root.
      src/styles/tailwind.css imports @tailwind base; components; utilities;
Icons not visible in Manifest:
      Check direct URLs (/android-chrome-512x512.png).
      DevTools → Application → Manifest → verify sizes.
PWA not installable:
Check HTTPS, site.webmanifest headers, and that SW is registered (DevTools → Application → Service Workers).


