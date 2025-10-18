#!/usr/bin/env bash
set -euo pipefail

# подгружаем .env (не коммитим его)
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

if [ -z "${CF_DEPLOY_HOOK:-}" ]; then
  echo "❌ CF_DEPLOY_HOOK not found in .env"
  echo "Add: CF_DEPLOY_HOOK=https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/XXXX"
  exit 1
fi

echo "🚀 Triggering Cloudflare Pages via Deploy Hook…"
curl -s -X POST "$CF_DEPLOY_HOOK" && echo "✓ Hook fired" || echo "⚠ Hook failed"
