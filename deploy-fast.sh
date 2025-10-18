#!/usr/bin/env bash
set -e

BRANCH=${1:-main}
MSG=${2:-"chore: quick deploy"}

git status
git add -A
git commit -m "$MSG" || echo "No changes to commit."
git pull --rebase origin "$BRANCH" || true
git push origin "$BRANCH"

echo "✔ Deploy script done. Trigger manual deploy in Cloudflare Pages if auto is off."

if [[ -n "${CF_PAGES_HOOK_URL:-}" ]]; then
  echo "→ Trigger Cloudflare Pages build via Deploy Hook…"
  curl -s -X POST "$CF_PAGES_HOOK_URL" \
    && echo "✓ Hook fired" \
    || echo "⚠ Hook call failed"
else
  echo "ℹ CF_PAGES_HOOK_URL is not set. Open Deploy Hook URL manually to build."
fi
