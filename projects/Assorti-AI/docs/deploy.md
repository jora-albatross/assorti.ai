# 🚀 Deploy Guide — Assorti AI

## 1. Куда класть проект
Лучше держать все Git-репозитории в одном месте:

C:\Users\Serge\Documents\GitHub\assorti.ai
или
C:\Users\Serge\Dev\assorti.ai


---

## 2. Первый запуск
```bash
# перейти в папку
cd /c/Users/Serge/Documents/GitHub/assorti.ai

# проверить удалённый репозиторий
git remote -v

3. Базовые команды
# Проверить статус
git status

# Забрать последние изменения
git pull

# Добавить все изменения
git add -A

# Сделать коммит с сообщением
git commit -m "feat: update hero section"

# Отправить изменения в GitHub
git push origin main

---
4. Быстрый деплой (шорткат)
Создай файл deploy.sh в корне:

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

Запуск:
        bash deploy.sh main "feat: new recipe card"

5. В Cloudflare Pages

        Если включён автоматический деплой → пуш = релиз.
        Если включён ручной деплой → после пуша заходи в Cloudflare и жми Trigger deploy.




