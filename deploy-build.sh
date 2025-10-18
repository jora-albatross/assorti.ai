#!/usr/bin/env bash
set -euo pipefail

BRANCH="${1:-main}"
MSG="${2:-chore: deploy + trigger}"

# 1) Git
echo "→ Git add…"
git add -A

echo "→ Commit…"
git commit -m "$MSG" || echo "ℹ No changes to commit."

echo "→ Pull --rebase…"
git pull --rebase origin "$BRANCH" || true

echo "→ Push…"
git push origin "$BRANCH"

# 2) Deploy Hook
# загружаем .env (не коммитим его)
if [ -f .env ]; then
  # берём только строки вида KEY=VALUE (без комментариев)
  export $(grep -v '^#' .env | xargs) || true
fi

if [[ -z "${CF_DEPLOY_HOOK:-}" ]]; then
  echo "ℹ CF_DEPLOY_HOOK не найден. Добавь в .env строку:"
  echo "   CF_DEPLOY_HOOK=https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/XXX"
  echo "   (или создай Deploy Hook в Cloudflare Pages → Settings → Build & Deploy → Deploy Hooks)"
  exit 0
fi

echo "→ Trigger Cloudflare Deploy Hook…"
if curl -fsS -X POST "$CF_DEPLOY_HOOK" > /dev/null; then
  echo "✓ Cloudflare build triggered!"
else
  echo "⚠ Не удалось вызвать Deploy Hook. Проверь URL/доступ."
fi
