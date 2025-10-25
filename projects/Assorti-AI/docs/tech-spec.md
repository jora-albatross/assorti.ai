# Assorti.ai — Tech Spec (MVP UI System)

## 1. Goal
Ship a clean, responsive Astro + Tailwind UI for “AI Recipes” with stable PWA, SEO/OG, and content model for recipes.
Source of truth: GitHub repo. All changes via PRs. Cloudflare Pages for previews & prod.

## 2. Non-goals
- Complex backend.
- Vendor lock-in scripts. Keep it portable Astro.

## 3. Stack
- Astro + TailwindCSS (no UI kits).
- Content Collections for recipes (MD/MDX).
- PWA: manifest + SW, icons.
- Deploy: Cloudflare Pages (PR previews + production).

## 4. Pages
- Home (/): Hero, short pitch, CTA to /recipes.
- Recipes (/recipes): grid layout 1/2/3 cols, cards.
- Recipe (/recipes/[slug]): title, summary, tools, steps, prompts, video (optional).
- About (/about)
- Disclosure (/disclosure)
- 404: CTA back home.

## 5. Components
- Hero: two-line title, subtitle, 2 buttons, SVG illustration (no libs), smooth fade/slide-in on load (motion-safe), optional shine on hover (only desktop).
- RecipeCard: image 16:9, badges (category, ETA), title, summary line-clamp-2, CTA.
- NavLink, SiteHeader, SiteFooter (можно позже).

## 6. Design tokens (Tailwind)
- Colors (already in tailwind.config): 
  primary #5B6CFF, accent #FF6B6B, gradientStart #5B6CFF, gradientEnd #9B5BFF, background #FFFFFF, secondary #1E293B.
- Fonts: Inter (sans), Playfair Display (display).
- Spacing: container max-w-6xl, px-4 sm:px-5.

## 7. SEO & OG
- Layout injects `<title>`, `<meta name="description">`.
- OG auto-logic by pathname: /img/og/recipe.png | recipes.png | about.png | disclosure.png | default.png.
- Per-recipe `ogImage` from frontmatter overrides default.
- Twitter card: summary_large_image.

## 8. PWA
- /site.webmanifest valid, icons set, theme-color.
- SW registered (no aggressive caching for HTML).

## 9. Accessibility & Performance
- Lighthouse (Mobile): Perf ≥ 90, A11y ≥ 95, SEO ≥ 95.
- Focus states, tap targets ≥ 44px.

## 10. Content model (Astro content)
- `src/content/config.ts` schema (already exists): title, summary, category (lowercase), eta, preview, ogImage?, outcome[], tools[], steps[], prompts[], youtube_id?, cost_note?.
- Provide one complete sample recipe (youtube-shorts-10-min) as reference.

## 11. Acceptance Criteria
- All pages responsive and consistent with tokens.
- No layout shift on hero; text doesn’t “scroll/marquee”.
- OG tags correct on each page; per-recipe OG works.
- PWA passes manifest/icons checks in DevTools.
- No console errors; build succeeds on CI.

## 12. Delivery format
- Only via GitHub Pull Requests.
- Each PR must include:
  - Summary of changes,
  - Screenshots (desktop & mobile),
  - Lighthouse (mobile) scores (screenshot),
  - Notes if any trade-offs.

## 13. Nice-to-have (if time remains)
- Simple mobile menu (burger → off-canvas).

# 2)Добавляем шаблоны для Issues & PR

Файл: .github/ISSUE_TEMPLATE/feature_request.md

---
name: "Feature Request"
about: Propose a feature for Assorti.ai
labels: enhancement
---

## Summary
(What do we need? Why?)

## Acceptance Criteria
- [ ] …

## Design / References
(links, screenshots)

## Notes
(Constraints, risks)

Файл: .github/pull_request_template.md

## Summary
(What this PR changes and why)

## Screenshots
- Desktop:
- Mobile:

## Lighthouse (Mobile)
Perf: __ / A11y: __ / SEO: __

## Checklist
- [ ] Build passes locally
- [ ] OG tags verified
- [ ] PWA manifest valid
- [ ] No console errors

# 3) Настраиваем CI (автоматические проверки) 
Если Cloudflare Pages уже привязан к репо, превью для PR будет автоматически.
Дополнительно можно добавить базовую сборку в Actions (опционально):

Файл: .github/workflows/build.yml

        name: Build (Astro)
        on:
          pull_request:
          push:
            branches: [ main ]
        
        jobs:
          build:
            runs-on: ubuntu-latest
            steps:
              - uses: actions/checkout@v4
              - uses: actions/setup-node@v4
                with:
                  node-version: 20
              - run: npm ci
              - run: npm run build

Cloudflare Pages всё равно делает свой билд, но локальная проверка ловит ошибки раньше.

# 4) Правила веток (Branch protection)

В настройках GitHub (Settings → Branches):
    Protect main:
    Require PR,
    Require at least 1 review,

(Опционально) Require status checks to pass (наш Build (Astro)).
- Basic IntersectionObserver for reveal-on-scroll (motion-safe).

# 5) Как делегировать «в одни руки»

Создаём Issue: “Implement MVP UI per Tech Spec” (label: agent).

В описании прикладываем ссылку на tech-spec.md и список подзадач (Hero, RecipeCard, Recipes grid, About, Disclosure, 404).
Даем доступ агенту/сервису на уровне Pull Requests (напр., через GitHub App/Collaborator с правами PR).
Агент делает PRы по частям:
    PR#1: Hero + Header/Footer,
    PR#2: Recipes grid + Card,
    PR#3: Recipe page polish + OG per recipe,
    PR#4: PWA/A11y/SEO.

Мы ревьюим, комментим, агент вносит правки → merge.

# 6) Где работать нам (контент, монетизация, ТГ)
    Контент — в src/content/recipes/… по шаблону (у тебя уже есть).
    Лонгриды/доки — в projects/Assorti-AI/docs/….
    Маркетинг/дистрибуция — через projects/Assorti-AI/agents/0002-marketer.md (мы уже заложили основы и tasklists).

# Summary
Implement the first version of the Assorti.ai frontend according to `projects/Assorti-AI/docs/tech-spec.md`.
This issue covers the full scope: layout, hero, cards, recipes grid, recipe details, static pages, SEO/OG, and PWA.
All work must be delivered via Pull Requests to `main`. Each PR should include screenshots (desktop + mobile) and Lighthouse (mobile) scores.

---

## Subtasks
- [ ] PR#1: Hero section + SiteHeader + SiteFooter
- [ ] PR#2: Recipes grid layout + RecipeCard component
- [ ] PR#3: Recipe details page polish + OG per-recipe image
- [ ] PR#4: Static pages (About, Disclosure, 404)
- [ ] PR#5: PWA/SEO checks (manifest, SW, theme-color, OG tags)

---

## Acceptance Criteria
- Responsive layout across desktop/mobile.
- Hero does not shift or scroll; includes fade-in animation and hover shine on title (desktop).
- Recipes list is a grid (1 col mobile, 2 col tablet, 3 col desktop).
- Recipe page supports all content fields (title, summary, outcome, tools, steps, prompts, YouTube embed).
- Per-recipe OG image works if `ogImage` is set, else fallback.
- Manifest/icons pass DevTools checks.
- Lighthouse (mobile): Perf ≥ 90, A11y ≥ 95, SEO ≥ 95.

# 📌 Checklist for PR#1 (Hero + Header/Footer)
Summary: Build Hero component and global layout structure.

## Scope
- Implement `Hero.astro` with:
  - Two-line title (gradient text).
  - Subtitle.
  - Two buttons (primary/secondary).
  - SVG illustration (placeholder OK).
  - Fade-in animation on load (motion-safe).
  - Shine effect on hover for desktop only.

- Create `SiteHeader.astro`:
  - Logo placeholder (A).
  - Nav links: Recipes, About, Disclosure.
  - Sticky top, backdrop-blur, border bottom.

- Create `SiteFooter.astro`:
  - © {year} Assorti.ai
  - Tagline: “Curated AI, Sorted for You”.

## Deliverables
- Screenshots: Desktop + Mobile.
- Lighthouse (mobile) scores.

## Acceptance
- No layout shift on hero load.
- Header sticky on scroll.
- Buttons have hover/focus states.

<img width="797" height="482" alt="image" src="https://github.com/user-attachments/assets/7828d026-d0d2-4bfb-b9cb-b6b10b1eefbb" />

assorti.ai/  
│
├── projects/Assorti-AI/         # твоя бизнес-архитектура, агенты, таски, доки
│
├── src/                         # Astro проект
│
├── public/                      # статика
│
└── .github/                     # служебные файлы GitHub
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        ├── feature_request.md
        └── config.yml           # (опционально, для кастомизации меню)

📌 Таким образом:
    В projects/Assorti-AI/ ты хранишь внутренние рабочие материалы.
    В .github/ISSUE_TEMPLATE/ лежат шаблоны для GitHub Issues, чтобы агент (или разработчик) мог сразу создать задачу нужного типа.

<img width="834" height="411" alt="image" src="https://github.com/user-attachments/assets/c7fa4ef9-df65-4c46-a766-0d097d52f776" />

.github/
│
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   ├── feature_request.md
│   └── config.yml
│
├── workflows/
│   └── build.yml
│
└── pull_request_template.md

Всё верно ✅
    ISSUE_TEMPLATE/ — для шаблонов Issues (и у тебя там всё на месте).
    workflows/ — для GitHub Actions (build, деплой и т.д.).
    pull_request_template.md — общий шаблон для PR.

🔹 Когда кто-то будет создавать Issue, GitHub автоматически предложит меню: Bug Report или Feature Request.
🔹 При создании Pull Request будет подтягиваться твой шаблон.
🔹 workflows/build.yml GitHub Actions автоматически триггерит CI/CD (например билд на Cloudflare).

📝 Что такое PR (Pull Request)

Pull Request (PR) — это запрос на слияние твоих изменений (коммитов) из одной ветки (обычно feature/... или fix/...) в основную ветку проекта (main или dev).

🔑 Основная идея:
    Ты делаешь изменения в коде → коммитишь → пушишь в отдельную ветку.
    Создаёшь Pull Request в GitHub.
    GitHub показывает, что именно изменилось (diff).
    Другие участники (или ты сам, если работаешь один) могут проверить, оставить комментарии.

Когда всё ок → PR мёржится (сливается) в основную ветку.

🚀 Пример процесса
    1. Создаёшь новую ветку:
          git checkout -b feature/hero-shine

    2. Вносишь изменения (например, анимация shine).
    3. Делаешь коммит и пушишь:
          git add .
          git commit -m "✨ Add shine animation to Hero"
          git push origin feature/hero-shine

    4. GitHub предложит создать Pull Request.

✅ Зачем нужен PR?
    📋 Документация изменений — видно, кто и зачем поменял код.
    🔍 Код-ревью — возможность проверить код перед слиянием.
    🤝 Коллаборация — удобно обсуждать изменения прямо в GitHub.
    🔒 Безопасность — правки не ломают main, пока PR не одобрен.

🔒 Как выглядит контроль при деплое через PR
 1. ✍️ Ты создаёшь PR (например, ветка feature/hero-shine).
 2. 🤖 GitHub Actions (наш build.yml) автоматически запускает сборку и деплой на preview-среду (например: https://preview-hero-shine.assorti-ai.pages.dev).
 3. ✅ Ты смотришь результат на preview (ничего не ломает main!)
 4. 🧐 Если всё нравится → жмёшь Merge (или Squash & Merge).
 5. 🚀 Только тогда изменения попадают в main и деплоятся на основной сайт.

# Готовая схема “PR → preview, main → production” через GitHub Actions + Cloudflare Pages.

## 1) Что подготовить в секретах репо
В GitHub → Settings → Secrets and variables → Actions добавь три репозиторных секрета:

        CF_ACCOUNT_ID — ID аккаунта Cloudflare
        CF_API_TOKEN — API Token с правами: Pages:Edit, Account:Read
        CF_PROJECT_NAME — имя проекта Pages (у тебя оно видно в дашборде Pages)

Подсказка: в Cloudflare → Pages → твой проект → Settings → Project info — там и account_id, и project name.

## 2) Workflow-файл
Создай/обнови файл .github/workflows/pages.yml
    Как это работает:
    PR → собираем, выкатываем preview (уникальный URL)
    push в main → выкатываем production (основной домен)

## 3) Советы по контролю (чтобы “руль” оставался у нас)
Включи правило ветки: Settings → Branches → Branch protection rules → main
    Require status checks to pass (выбери наш workflow)
    (Опционально) Require pull request reviews before merging
В PR GitHub покажет preview URL от Cloudflare Pages — смотри, тестируй, и только потом Merge.

## 4) Примечание: у Cloudflare Pages есть нативные PR previews
Если проект уже подключён к Pages через Git, можно обойтись без Actions и просто включить Preview deployments for pull requests в настройках проекта. 
Но с Actions мы держим полный контроль в GitHub (история сборок, статусы, права, правила).



