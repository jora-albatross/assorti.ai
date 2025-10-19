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

===========================================================================================================

2025-10-17

===================

# Assorti.ai

Curated AI recipes — ready-to-use workflows for creators, marketers and entrepreneurs.  
Built with [Astro](https://astro.build), styled with [Tailwind CSS](https://tailwindcss.com).

---

## 📦 Install

```bash
git clone https://github.com/jora-albatross/assorti.ai.git
cd assorti.ai
npm install

🛠 Dev Server
npm run dev

Runs at http://localhost:4321

🏗 Build
npm run build
Output goes to /dist.

🚀 Manual Deploy (CLI)
Помимо авто-деплоя из GitHub/Cloudflare Pages, проект можно деплоить вручную через CLI.
Это удобно для превью веток или для продакшн-билда «своими руками».

## Требования

        Node.js + npm
        Git установлен и доступен в PATH
        Wrangler CLI (можно запускать через npx wrangler)

# Первый запуск
Один раз залогинься в Cloudflare:

npx wrangler login

Скрипт Bash (deploy.sh)
# превью-деплой для feature-ветки
./deploy.sh preview feature/my-card

# продакшн-деплой (ветка main)
git checkout main
git pull origin main
./deploy.sh prod

Скрипт PowerShell (deploy.ps1)
# превью
.\deploy.ps1 -Mode preview -Branch feature/my-card

# прод
git checkout main
git pull origin main
.\deploy.ps1 -Mode prod

# Частые ошибки
        project not found → проверь имя проекта в Cloudflare Pages (CF_PROJECT в скрипте).
        not logged in → выполни npx wrangler login.
        branch mismatch → если деплоишь прод, убедись что branch совпадает с продакшн-веткой в настройках Pages (обычно main).
        working tree not clean → для прод скрипт требует чистый git (commit/stash сначала).

📖 Docs
        /projects/Assorti AI/docs/strategy-master.md → стратегия
        /projects/Assorti AI/doc
        /projects/Assorti AI/docs/distribution.md → каналы продвижения
        /projects/Assorti AI/agents/ → роли и задачи агентов

🧑‍💻 Contributing

Пока только для internal use. Guidelines будут добавлены позже в CONTRIBUTING.md.

📌 Объяснение:

git status → проверяешь, что изменено
git add . → добавляешь все изменения
git commit -m "feat: update" → делаешь коммит (сообщение меняешь по задаче: feat, fix, chore и т.д.)
git push origin main → отправляешь на GitHub
##  Quick Git Flow
                    git status && git add . && git commit -m "feat: update" && git push origin main

## 🚀 Git Quick Reference

### 🔹 Основные команды
| Команда | Что делает |
|---------|------------|
| `git status` | Проверка статуса репозитория (изменения, staged, untracked) |
| `git add .` | Добавить все изменённые файлы в staged |
| `git commit -m "msg"` | Зафиксировать изменения с сообщением |
| `git push origin main` | Отправить изменения в GitHub (ветка main) |
| `git pull origin main` | Подтянуть свежие изменения с GitHub |
| `git log --oneline` | История коммитов в кратком виде |

---

### 🔹 Статусы файлов (в VS Code и Git)
| Буква | Значение |
|-------|-----------|
| `U` | Untracked — новый файл, Git ещё не отслеживает |
| `A` | Added — добавлен в staged, готов к коммиту |
| `M` | Modified — изменён |
| `D` | Deleted — удалён |
| `R` | Renamed — переименован |
| `C` | Copied — скопирован |
| `??` | Новый файл (аналог U) |

---

### 🔹 Стиль commit messages (Conventional Commits)
| Тип | Для чего использовать |
|-----|------------------------|
| `feat:` | Новая фича (функция, компонент, страница) |
| `fix:` | Исправление бага |
| `chore:` | Технические задачи (настройки, конфиги, .gitignore) |
| `docs:` | Документация |
| `style:` | Изменения в стилях, без логики |
| `refactor:` | Рефакторинг кода (без изменения функционала) |
| `test:` | Добавление или изменение тестов |
| `perf:` | Оптимизация производительности |
| `ci:` | Изменения в CI/CD пайплайне |

**Примеры:**
```bash
git commit -m "feat: add recipe grid layout"
git commit -m "fix: wrong OG image path"
git commit -m "chore: update .gitignore rules"

🔹 Полезные шорткаты в VS Code
| Shortcut           | Действие                                  |
| ------------------ | ----------------------------------------- |
| `CTRL + S`         | Сохранить файл                            |
| `CTRL + W`         | Закрыть вкладку                           |
| `CTRL + P`         | Быстрый поиск файлов                      |
| `CTRL + Shift + P` | Командная палитра                         |
| `CTRL + /`         | Закомментировать строку                   |
| `CTRL + B`         | Показать/скрыть боковую панель            |
| `CTRL + ``         | Встроенный терминал                       |
| `CTRL + Tab`       | Переключение вкладок                      |
| `CTRL + K + C`     | Закомментировать выделенное               |
| `CTRL + K + U`     | Убрать комментарий                        |
| `CTRL + Shift + L` | Выделить все вхождения выделенного текста |
------------------------------------------------------------------

# 🚀 AssortiAI — Curated AI Recipes

## 🎯 Суть проекта

**AssortiAI** — это платформа-каталог с готовыми AI-рецептами (playbooks, workflows), которые решают реальные задачи.
Формат: «рецепт» = задача → пошаговое решение → инструменты → промпты → результат.

---

## 🗂 Структура проекта

* **Frontend (Astro + Tailwind)** → сайт assorti.ai
* **Content** → рецепты (Markdown + OG картинки)
* **Infrastructure** → GitHub + Cloudflare Pages (CI/CD)
* **Agents** → роли внутри проекта (Brain, Marketer, Designer, Coder, Content)
* **Docs** → стратегия, монетизация, UI-гайд

---

## 📌 План развития

1. **MVP (P0–P1)**

   * Чистая структура кода (Layout, Hero, RecipeCard, 404).
   * Грид-листинг рецептов.
   * OG-картинки для соцсетей.
   * Минималистичный дизайн (новая палитра, hover-эффекты).

2. **P2 — UI & UX**

   * Полный дизайн-слой (Hero с иллюстрацией, карточки с hover-тенью, кнопки).
   * Mobile-friendly адаптив.
   * SEO-мета, sitemap, robots.txt, _headers.

3. **P3 — Контент**

   * 10+ базовых рецептов (YouTube Shorts, Marketing, Automation).
   * OG-превью для каждой категории.
   * Disclosure + affiliate-ссылки.

4. **P4 — Маркетинг**

   * Трафик с Telegram-канала **AI Profit Hub**.
   * SEO + LinkedIn/Reddit посты.
   * E-mail capture (подписка).

5. **P5 — Монетизация**

   * Партнёрки (AI-сервисы, SaaS).
   * Платный доступ к Premium-рецептам.
   * Курсы / PDF / подписка.

---

## 🔮 Вектор развития

* Масштабирование: библиотека из сотен рецептов.
* Автоматизация: CMS или Notion → GitHub sync.
* AI-агенты: Content-бот для генерации и валидации рецептов.
* Сообщество: открытый вклад от пользователей (PR + ревью).

---

👉 **Миссия:**
Сделать AssortiAI точкой входа в AI-мир: быстро, практично, экспертно.

