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