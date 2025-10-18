#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   bash deploy.sh                 # быстрый деплой в main с дефолтным сообщением
#   bash deploy.sh dev "feat: ..." # деплой в ветку dev с сообщением
#
BRANCH=${1:-main}
MSG=${2:-"chore: quick deploy"}

echo "→ Current branch: $(git rev-parse --abbrev-ref HEAD)"
echo "→ Target branch:  $BRANCH"
echo

# Показать статус
git status
echo

# Предложить застейджить все изменения
read -p "Stage ALL changes (git add -A)? [y/N] " yn
if [[ "$yn" =~ ^[Yy]$ ]]; then
  git add -A
fi

# Если нечего коммитить — пропускаем commit
if git diff --cached --quiet; then
  echo "No staged changes → skip commit."
else
  git commit -m "$MSG"
fi

# Подтянуть удалённые изменения и отправить
echo
echo "→ Pull (rebase) from origin/$BRANCH"
git pull --rebase origin "$BRANCH" || true

echo "→ Push to origin/$BRANCH"
git push origin "$BRANCH"

echo
echo "✔ Done. If Cloudflare Pages is manual, trigger deploy in the dashboard."

if [[ -n "${CF_PAGES_HOOK_URL:-}" ]]; then
  echo "→ Trigger Cloudflare Pages build via Deploy Hook…"
  curl -s -X POST "$CF_PAGES_HOOK_URL" \
    && echo "✓ Hook fired" \
    || echo "⚠ Hook call failed"
else
  echo "ℹ CF_PAGES_HOOK_URL is not set. Open Deploy Hook URL manually to build."
fi

