#!/usr/bin/env bash
set -euo pipefail

BRANCH="${1:-main}"                         # можно передать ветку (по умолчанию main)
MSG="${2:-chore: quick deploy}"             # можно передать сообщение коммита

echo "→ Git add…"
git add -A

echo "→ Commit…"
git commit -m "$MSG" || echo "ℹ No changes to commit."

echo "→ Pull --rebase (чтобы забрать свежие изменения)…"
git pull --rebase origin "$BRANCH" || true

echo "→ Push…"
git push origin "$BRANCH"

echo "✓ Done. (Только пуш без билда Cloudflare)"
