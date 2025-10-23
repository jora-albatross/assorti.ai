# Для CI-деплоя через GitHub нам нужен минимальный токен с правами:

    Cloudflare Pages: Edit
    Account: Read (или Account Settings: Read — название может отличаться в UI)

## Вот как его создать в Cloudflare:
1. Войдите: My Profile → API Tokens → Create Custom Token (Get started).
2. В блоке Permissions добавьте два пункта:
    Account → Cloudflare Pages → Edit
    Account → Account Settings → Read (иногда просто Account → Read)
3. В блоке Account Resources выберите:
    Include → Specific accounts → ваш аккаунт (важно! Не “All accounts”).
4. Zone Resources оставьте пустым (Pages работает на уровне аккаунта).
5. Нажмите Continue to summary → Create Token, скопируйте значение.

## Куда положить токен в GitHub
### В репозитории: Settings → Secrets and variables → Actions → New repository secret
Добавьте:

        1.  CF_API_TOKEN = ваш токен
        2.  CF_ACCOUNT_ID = ваш Account ID (см. Workers & Pages → Overview или Account Home)
        3.  CF_PROJECT_NAME = имя проекта Pages (например, assorti-ai), если используете action/скрипт, где это требуется.

### Если в списке Permissions вы не видите “Cloudflare Pages”:
    Проверьте, что создаёте Custom Token, а не выбираете готовый шаблон (типа “Edit Cloudflare Workers”).
    Разверните выпадашку Account — иногда пункт называется просто Pages.
    UI Cloudflare меняется: бывает “Cloudflare Pages (Account) → Edit”. Ищите именно раздел Account, не Zone.

### Когда нужны доп. права (пока не добавляйте, только при необходимости)
    Используете KV/R2/Queues в Pages Functions → добавятся:
    Workers KV: Edit, R2: Edit, Queues: Edit (всё в разделе Account).
    Нужен доступ к логам/аналитике (редко) → Analytics: Read.
    Этого достаточно, чтобы GitHub workflow мог деплоить на Cloudflare Pages и при этом не имел излишних прав.

Теперь у тебя по сути настроен CI/CD pipeline:
    Каждый пуш → GitHub Actions → деплой в Cloudflare. 🚀


