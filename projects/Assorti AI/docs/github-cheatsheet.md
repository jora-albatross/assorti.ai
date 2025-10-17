# ✅ Чек-лист: практика с preview.yml и deploy.yml

## 1. Preview (ветка/PR)
  1. В GitHub создай новую ветку:

      git checkout -b feature/test-preview

  2. Измени любой файл (например, добавь комментарий в README.md).
  3. Закоммить и запушь:

     git add .
     git commit -m "test: preview deploy"
     git push origin feature/test-preview

  4. В репо появится кнопка Compare & Pull Request → открой PR.
  5. GitHub Actions должен автоматически запустить preview.yml.

     Вкладка Actions → увидишь workflow run.
     Внизу PR появится ссылка «Preview deployment».

👉 Так проверишь, что превью реально собирается.

## 2. Deploy (релиз в прод)
  1. Вернись на main:
     git checkout main

  2. Создай новый тег (например, v0.1.0):
     git tag v0.1.0
     git push origin v0.1.0

  3. GitHub Actions должен автоматически запустить deploy.yml.
     Смотри вкладку Actions → workflow run.
     После завершения → смотри production сайт (Cloudflare Pages).

👉 Так проверишь, что только теги запускают прод.

## 3. Дополнительно
    Закрытие PR → превью автоматически удалится (если в preview.yml добавим on: pull_request: closed).
    Изменения в ветке → превью перезапишется.
    Никакого автодеплоя из main → контроль только через теги.

# 📘 GitHub Cheatsheet (Assorti.ai)

## 🔀 Работа с ветками
    # создать новую ветку и переключиться на неё
    git checkout -b feature/my-branch

    # переключиться обратно на main
    git checkout main

    # отправить ветку на GitHub
    git push origin feature/my-branch

## 📦 Pull Requests (PR)
   1. Создай новую ветку (feature/...).
   2. Запушь изменения.
   3. На GitHub появится кнопка Compare & Pull Request → жми.
   4. Вкладка Pull requests → смотри превью, ревьюй и мёрджи.

👉 В нашем проекте PR запускает preview.yml (деплой на временный URL).

🚀 Релизы через теги
    # создать тег
    git tag v0.1.0

    # пушнуть тег на GitHub
    git push origin v0.1.0

👉 Теги запускают deploy.yml (деплой на production).
👉 Версию выбираем по семантике:

    v0.1.0 — первая версия
    v0.2.0 — новые фичи
    v1.0.0 — стабильный релиз

# 🔧 Полезные команды
    # посмотреть все ветки
    git branch -a
    
    # посмотреть все теги
    git tag
    
    # удалить локальную ветку
    git branch -d feature/my-branch
    
    # удалить ветку на GitHub
    git push origin --delete feature/my-branch
    
    # отменить последний коммит (без удаления файлов)
    git reset --soft HEAD~1

# 🛠 Workflow Summary

    preview.yml → запускается при Pull Request
    deploy.yml → запускается при создании git tag
    main → не деплоится напрямую (ручной контроль)






