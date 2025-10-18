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
