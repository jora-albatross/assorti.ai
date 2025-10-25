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
        /projects/Assorti-AI/docs/strategy-master.md → стратегия
        /projects/Assorti-AI/doc
        /projects/Assorti-AI/docs/distribution.md → каналы продвижения
        /projects/Assorti-AI/agents/ → роли и задачи агентов

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

# 🧠 AssortiAI — AI Recipes Hub

**AI‑хаб с готовыми рецептами для автоматизаций, маркетинга и креативных задач.**
Быстро находи и применяй готовые AI‑решения без лишнего шума.

---

## Оглавление

* [О проекте](#о-проекте)
* [Цель](#цель)
* [Стек](#стек)
* [Быстрый старт](#быстрый-старт)
* [Структура проекта](#структура-проекта)
* [Модель контента (рецепт)](#модель-контента-рецепт)
* [Деплой (Cloudflare Pages)](#деплой-cloudflare-pages)
* [Roadmap](#roadmap)
* [Готово](#готово)
* [Следующие шаги](#следующие-шаги)
* [Контрибьюция](#контрибьюция)
* [Контакты](#контакты)
* [Лицензия](#лицензия)
* [Приложение A: Шпаргалка VS Code + Git](#приложение-a-шпаргалка-vs-code--git)

---

## О проекте

AssortiAI — это коллекция **AI‑рецептов** (prompts, workflows, интеграции), которые помогают предпринимателям, маркетологам и креаторам решать конкретные задачи:

* Маркетинг и контент
* Автоматизации (Make, n8n, ChatGPT)
* Видео и соцсети
* Бизнес‑инструменты
* Крипто и финансы

## Цель

Создать открытый каталог AI‑рецептов и платформу, которая превращает идеи в рабочие сценарии.
Основной источник трафика — Telegram‑канал **AI Profit Hub (AI Projects | AlexAI)**.

## Стек

* **Astro + TailwindCSS** — фронтенд и дизайн
* **Markdown Content Collections** — хранение рецептов
* **Cloudflare Pages** — хостинг
* **GitHub** — контроль версий и коллаборация

---

## Быстрый старт

**Требования**: Node.js ≥ 18, npm или pnpm, Git.

```bash
# 1) Клонирование
git clone https://github.com/<your-org>/assorti.ai.git
cd assorti.ai

# 2) Установка зависимостей
npm install         # или: pnpm install / bun install

# 3) Локальная разработка
npm run dev         # открыть http://localhost:4321

# 4) Сборка и предпросмотр
npm run build
npm run preview
```

> Подсказка: переменные окружения для интеграций хранить в `.env` и **не коммитить**.

---

## Структура проекта

```
/projects/Assorti-AI/
│
├── agents/               # Роли-агенты (brain, marketer, designer, coder, content)
│   ├── 0001-brain.md
│   ├── 0002-marketer.md
│   ├── 0003-designer.md
│   ├── 0004-coder.md
│   └── 0005-content.md
│
├── tasks/                # Планирование
│   ├── backlog.md
│   ├── roadmap.md
│   └── daily.md
│
├── ui/                   # Компоненты и дизайн
│   ├── components.md
│   ├── hero.md
│   └── style-guide.md
│
├── docs/                 # Стратегия и монетизация
│   ├── strategy-master.md
│   ├── monetization.md
│   └── distribution.md
│
├── recipes/              # Готовые AI-рецепты (Markdown)
│
├── public/               # Картинки, иконки, og-images
│
├── src/                  # Код (Astro, компоненты)
│
├── README.md             # Этот файл
└── CONTRIBUTING.md       # Правила (опционально)
```

---

## Модель контента (рецепт)

Каждый рецепт — Markdown‑файл в `recipes/` с фронтматтером:

```yaml
---
id: shorts-youtube-001
slug: youtube-shorts-auto
title: Автогенерация YouTube Shorts из статьи
description: Конвертируем статью в короткое видео с голосом и субтитрами.
category: video            # video | text | image | audio | business | automation
eta: 30m                   # примерное время
outcome: "Готовое вертикальное видео 9:16 (≤60 сек)"
cover: /public/og/youtube-shorts.png
tools:
  - name: CapCut
    affiliate_url: https://...
  - name: ElevenLabs
    affiliate_url: https://...
steps:
  - "Собери тезисы: ..."
  - "Сгенерируй скрипт: ..."
prompts:
  - label: "Сценарий для озвучки"
    content: |
      Ты актёр‑диктор. Прочитай...
---

## Содержимое рецепта
Подробные шаги, альтернативы инструментам, QA, лайфхаки
```

---

## Деплой (Cloudflare Pages)

1. Подключите репозиторий GitHub к Cloudflare Pages.
2. Build‑команда: `npm run build`
3. Output: `dist`
4. Каждый `git push` в `main` → автоматический деплой.

> Опционально: добавить hook/скрипт ручного деплоя. Заголовки и кеш — через `_headers` в `public/`.

---

## Roadmap

| Этап | Название    | Цель                                            |
| :--: | ----------- | ----------------------------------------------- |
|  P0  | MVP         | Сетка рецептов + Hero + деплой                  |
|  P1  | Контент     | Первые 3 рецепта (YouTube/Marketing/Automation) |
|  P2  | Дизайн      | Анимации, адаптив, стиль карточек               |
|  P3  | Маркетинг   | Telegram, SEO, OG‑превью                        |
|  P4  | Монетизация | Affiliate, реклама, Pro Recipes                 |

## Готово

* Репозиторий и деплой настроены
* Базовая структура проекта
* Hero и layout
* Добавлены первые файлы рецептов

## Следующие шаги

* [ ] Добавить новые рецепты и OG‑превью
* [ ] Доработать UI (Hero + адаптив)
* [ ] Заполнить `tasks/backlog.md`
* [ ] Настроить Telegram‑интеграцию

---

## Контрибьюция

1. Создайте ветку:

   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Коммиты по правилу Conventional Commits (рекомендуется):

   * `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `chore:`
3. Откройте Pull Request в `main`.
4. Внесённые изменения отражайте в `tasks/backlog.md`.

---

## Контакты

* Telegram: **AI Profit Hub (AI Projects | AlexAI)**
* Основатель: **Alex B.**
* Партнерство/вопросы: *placeholder* `contact@assorti.ai`

## Лицензия

MIT (или укажите другую при необходимости).

---

## Приложение A: Шпаргалка VS Code + Git

### 1) VS Code (Windows)

* **Командная палитра**: `Ctrl + Shift + P`
* **Поиск в проекте**: `Ctrl + Shift + F`
* **Открыть терминал**: `` Ctrl + ` ``
* **Быстро открыть файл**: `Ctrl + P`
* **Мультикурсор**: `Alt + Click` / `Ctrl + Alt + ↑/↓`
* **Форматировать документ**: `Shift + Alt + F`
* **Переименовать символ**: `F2`
* **Показать Git (Source Control)**: `Ctrl + Shift + G`
* **Открыть Markdown‑превью**: `Ctrl + Shift + V`
* **Открыть соседнее превью**: `Ctrl + K` затем `V`

**Полезные расширения**: Astro, Tailwind CSS IntelliSense, ESLint, Prettier, GitLens, Markdown All in One.

---

### 2) Git — базовый флоу

```bash
# Настройка
git config --global user.name "Alex B"
git config --global user.email "you@example.com"

# Инициализация / клон
git init
git clone https://github.com/<your-org>/assorti.ai.git

# Статус и изменения
git status
git add .
git commit -m "feat: initial recipes grid"

# Работа с удалённым репозиторием
git branch -M main
git remote add origin https://github.com/<your-org>/assorti.ai.git
git push -u origin main

# Обновление локальной копии
git pull --rebase origin main

# Ветки
git checkout -b feature/recipes-grid
git switch main

# Pull Request — через GitHub UI
```

---

### 3) Git — повседневные команды

```bash
# Просмотр истории
git log --oneline --graph --decorate --all

# Частичный коммит (интерактивный)
git add -p

# Исправление последнего коммита (без изменения истории в удалённом репо)
git commit --amend

# Временное сохранение изменений
git stash
git stash list
git stash pop

# Отмена/восстановление
git restore <file>             # вернуть файл из последнего коммита
git checkout -- <file>         # старая форма (аналогично)
# Жёсткий откат ветки на конкретный коммит (ОСТОРОЖНО)
git reset --hard <commit-sha>

# Работа с тегами (релизы)
git tag v0.1.0
git push origin --tags
```

---

### 4) NPM‑скрипты (Astro)

```bash
npm run dev       # локальный сервер разработки
npm run build     # сборка в /dist
npm run preview   # предпросмотр собранного
```

---

### 5) Работа с файлами через терминал (Windows PowerShell / Git Bash)

```bash
# Переходы
cd "C:/projects/Assorti-AI"

# Список файлов
ls -la               # PowerShell: ls; Git Bash: ls -la

# Создание папок/файлов
mkdir recipes
ni recipes/first-recipe.md     # PowerShell: ni; Git Bash: touch recipes/first-recipe.md

# Удаление
rm recipes/first-recipe.md     # осторожно! без корзины

# Поиск по содержимому (PowerShell)
Select-String -Path "**/*.md" -Pattern "title:"
```

---

### 6) Мини‑гайд по Conventional Commits

```
feat: добавляет новую функциональность
fix: исправляет баг
docs: только документация
style: форматирование, точки/запятые
refactor: переработка без изменения поведения
perf: улучшение производительности
chore: сопутствующие задачи (скрипты, зависимости)
```

---

### 7) Типичные сценарии

**Создание новой фичи**

```bash
git checkout -b feature/hero-animation
# правки кода
git add .
git commit -m "feat: hero animation and CTA buttons"
git push -u origin feature/hero-animation
# открыть PR в GitHub
```

**Синхронизация с main**

```bash
git switch main
git pull --rebase origin main
git switch feature/hero-animation
git rebase main
```

**Горячее исправление (hotfix)**

```bash
git checkout -b fix/og-image-path
# правки, затем
git commit -m "fix: correct og-image path in recipe"
git push -u origin fix/og-image-path
```

---

**Готово для печати.** Если нужно — вынесу шпаргалку в отдельный PDF.

