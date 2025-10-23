🧱 Assorti.ai — CI/CD Workflow Guide
GitHub Actions → Cloudflare Pages
⚙️ 1. Общая схема

Цель:
Автоматическая сборка и деплой проекта assorti.ai (Astro) через GitHub Actions в Cloudflare Pages.

Основной pipeline:
GitHub Push → GitHub Actions CI → Cloudflare Pages Preview → Production Deployment

Файлы:

.github/workflows/preview.yml — основной workflow для CI/CD

package-lock.json — фиксирует версии npm-зависимостей

.gitignore — исключает ненужные файлы

🔑 2. Секреты и токены
| Секрет                  | Где хранится                             | Назначение                                                  |
| ----------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | GitHub → Settings → Secrets → Actions    | Авторизация деплоя на Cloudflare Pages                      |
| `CLOUDFLARE_ACCOUNT_ID` | Туда же                                  | Идентификатор аккаунта Cloudflare                           |
| `GITHUB_TOKEN`          | Автоматический системный токен (Actions) | Используется для доступа к репо, комментирования PR, деплоя |

🧩 3. Права токена
🟡 Проблема

По умолчанию GITHUB_TOKEN имеет только read-права.
Из-за этого Cloudflare Action не может:

создать deployment,

добавить комментарий в PR.

✅ Решение

GitHub → Repository → Settings → Actions → General → Workflow Permissions:

✔ Read and write permissions
☑ Allow GitHub Actions to create and approve pull requests (опционально)

А также в .github/workflows/preview.yml:

permissions:
  contents: read
  deployments: write
  pull-requests: write

🔄 5. Основные команды DevOps-инженера

| Цель                                | Команда                                             |                          |
| ----------------------------------- | --------------------------------------------------- | ------------------------ |
| Проверить статус изменений          | `git status`                                        |                          |
| Добавить файлы в коммит             | `git add .`                                         |                          |
| Создать коммит                      | `git commit -m "ci: message"`                       |                          |
| Отправить на GitHub                 | `git push`                                          |                          |
| Проверить запуски workflow          | `gh run list --event pull_request --limit 5`        |                          |
| Просмотреть лог конкретного job     | `gh run view <RUN_ID> --log`                        |                          |
| Найти ошибки в логе                 | `gh run view <RUN_ID> --log                         | findstr /i "error fail"` |
| Перезапустить CI без изменений кода | `git commit --allow-empty -m "ci: re-run workflow"` |                          |

🚀 6. Workflow структура (.github/workflows/preview.yml)

name: PR Preview to Cloudflare Pages

on:
  pull_request:
    branches: [ main, readme-setup-branch--1-2-1306 ]

permissions:
  contents: read
  deployments: write
  pull-requests: write

jobs:
  build-and-preview:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build (Astro → dist/)
        run: npm run build

      - name: Publish Preview to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: assorti-ai
          directory: ./dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}


🧰 7. Диагностика проблем
Ошибка:
Resource not accessible by integration

Причина: у GITHUB_TOKEN нет прав write.
Решение: включить “Read and write permissions” и добавить permissions: в workflow.

projectName: assorti-ai

Ошибка:
Failed to get Pages project, API returned non-200

Причина: некорректный accountId или apiToken.
Решение: проверить значения в Secrets Cloudflare.

✅ 8. Пример успешного билда

GitHub Actions:
✓ Build Project — completed in 33s
✓ PR Preview to Cloudflare Pages — completed in 43s

Cloudflare Pages:
✅ Success: Deployment complete
Preview URL: https://assorti-ai-<branch>.pages.dev

🧾 9. Что будет дальше

После merge → GitHub Actions запустит production build.

Cloudflare Pages обновит основной домен assorti.ai.

Все preview-версии удаляются автоматически.

