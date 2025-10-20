[Uploading git-cheatsheet.md…]()
Напомни пожалуйста как запушить, git add package.json | git commit \-m дальше не помню, я не могу привыкнуть и путаюсь 😢  
ChatGPT said:

Ничего страшного 😊 — ты всё делаешь правильно, просто повторим пошагово, спокойно и по твоему стандарту.

💾 Твой путь проекта  
C:Users\\Serge\\Documents\\GitHub\\assorti.ai

🌿 Твоя ветка  
readme-setup-branch

🔧 Полная последовательность команд (всё с нуля)  
1️⃣ Перейди в проект  
cd "C:\\Users\\Serge\\Documents\\GitHub\\assorti.ai"

2️⃣ Убедись, что ты на нужной ветке  
git switch readme-setup-branch

3️⃣ Добавь изменённый файл (в твоём случае package.json)  
git add package.json

💡 Если хочешь добавить всё, что изменено, можно:

git add \-A

4️⃣ Сделай коммит

(в кавычках — описание, можно свое)

git commit \-m "chore: update package.json for Cloudflare build config"

5️⃣ Отправь изменения на GitHub  
git push \-u origin readme-setup-branch

✅ После этого GitHub автоматически пересобирает PR  
(Cloudflare Pages и GitHub Actions запустят билд).

**🧠 ШПАРГАЛКА GIT для проекта AssortiAI**

**📂 Путь проекта:**  
C:\\Users\\Serge\\Documents\\GitHub\\assorti.ai

**🌿 Текущая ветка:**  
readme-setup-branch

**⚙️ 1️⃣ Переход в проект**  
cd "C:\\Users\\Serge\\Documents\\GitHub\\assorti.ai"

**🧾 2️⃣ Проверка текущего состояния**  
git status

Показывает, какие файлы изменены (modified) или не добавлены (untracked).

**🪶 3️⃣ Добавление файлов в индекс**

Добавить один конкретный файл:

git add package.json

Добавить всё изменённое:

git add \-A

**🧱 4️⃣ Коммит (фиксация изменений)**  
git commit \-m "feat: обновление hero и навигации"

Сообщение пишем коротко, в настоящем времени (что делает коммит).

**☁️ 5️⃣ Отправка изменений на GitHub**  
git push \-u origin readme-setup-branch

**\-u** связывает локальную ветку с веткой на GitHub **(после этого можно писать просто git push)**.

**🔍 6️⃣ Проверка синхронизации с GitHub**  
git pull origin readme-setup-branch

Подтягивает свежие изменения с GitHub, если ты работаешь с двух устройств или после PR.

**🧩 7️⃣ Создание Pull Request (PR)**

Перейди в репозиторий GitHub.  
Появится кнопка Compare & pull request.  
Нажми → выбери main как base branch → Create pull request.  
После проверки нажми Merge pull request → Confirm merge.

**🧹 Вспомогательные команды**

Отменить последние изменения в файле (до коммита):  
git restore имя\_файла

Посмотреть историю коммитов:  
git log \--oneline

Проверить, в какой ветке ты сейчас:  
git branch

Создать новую ветку:  
git checkout \-b new-feature-branch

📘 Совет по практике:  
Комбинация, которую ты будешь использовать 90% времени:

git status  
git add \-A  
git commit \-m "chore: update files"  
git push

**📄 Файл для сохранения:**  
Путь:  
C:\\Users\\Serge\\Documents\\GitHub\\assorti.ai\\docs\\cheatsheet-git.md

⚙️ 1️⃣ Переход в проект  
cd "C:\\Users\\Serge\\Documents\\GitHub\\assorti.ai"

🧾 2️⃣ Проверка текущего состояния  
git status

Показывает, какие файлы изменены (modified), не добавлены (untracked) и что готово к коммиту.

🪶 3️⃣ Добавление файлов в индекс

Добавить один файл:  
git add package.json

Добавить все изменения:  
git add \-A

🧱 4️⃣ Коммит (фиксация изменений)  
git commit \-m "feat: обновление hero и навигации"

Комментарий пиши коротко и по сути, в настоящем времени.

☁️ 5️⃣ Отправка изменений на GitHub  
git push \-u origin readme-setup-branch

После первого пуша **\-u** можно опустить и писать просто **git push.**

🔍 6️⃣ Проверка синхронизации  
git pull origin readme-setup-branch

Подтягивает изменения с GitHub, если кто-то внёс правки или ты работаешь с другого ПК.

🧩 7️⃣ Создание Pull Request (PR)  
Зайди в репозиторий на GitHub.  
Нажми Compare & pull request.  
Проверь, что base — main, compare — readme-setup-branch.  
Нажми Create pull request → потом Merge pull request → Confirm merge.

🧹 ВСПОМОГАТЕЛЬНЫЕ КОМАНДЫ

Отменить изменения в файле (до коммита):  
git restore имя\_файла

Посмотреть историю коммитов:  
git log \--oneline

Проверить, где ты находишься:  
git branch

Создать новую ветку:  
git checkout \-b new-feature-branch

⚡ Чаще всего используемая комбинация  
git status  
git add \-A  
git commit \-m "chore: update files"  
git push
