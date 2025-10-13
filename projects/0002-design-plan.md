# 0002 – Design Plan (UI/UX for Assorti.ai)

## 📌 Current State
- MVP работает: favicon, manifest, service worker, offline.html.
- Но дизайн выглядит сыро:
  - базовая структура без стиля,
  - placeholder-иконки,
  - простая типографика,
  - нет фирменных цветов и айдентики.

---

## 🎯 Goals
- Создать уникальный визуальный стиль для **Assorti.ai**:
  - современный, технологичный, но лёгкий и дружелюбный,
  - чтобы выделяться среди AI-хабов,
  - вызывать доверие и интерес у широкой аудитории,
  - при этом сохранять экспертность и профессионализм.

---

## 🖼 References
- [Vercel](https://vercel.com/) — минимализм и анимации.
- [Notion](https://notion.so) — чистота, нейтральные цвета.
- [Canva](https://canva.com) — дружелюбие, креативность.
- [OpenAI](https://openai.com) — tech vibe, крупные блоки, чёткая типографика.

---

## 🎨 Color Palette (v1)
- **Primary:** `#5B6CFF` (синий tech — экспертность).  
- **Secondary (text):** `#1E293B` (тёмный navy для читаемости).  
- **Background:** `#FFFFFF` (светлый, дружелюбный фон).  
- **Accent:** `#FF6B6B` (коралловый — внимание на кнопки, хайп).  
- **Optional Gradient:** `#5B6CFF → #9B5BFF` (для hero-блоков, заголовков).  

---

## ✅ Design Tasks
1. **Цветовая палитра** — внедрить выбранную схему в Tailwind config.
2. **Шрифты**
   - Sans-serif для UI (Inter, Poppins).
   - Дополнительный для заголовков (Playfair Display).
3. **Лейаут**
   - Hero section (короткий пич проекта).
   - Recipe cards (грид с hover-эффектами).
   - Sticky header, footer с ссылками.
4. **Компоненты**
   - Primary / Secondary buttons.
   - Recipe cards.
   - Mobile nav.
   - Error/Offline states.
5. **Иконки / логотип**
   - Обновить favicon.
   - Сделать фирменный логотип.

---

## 🔜 Next Steps
- Настроить Tailwind с новой палитрой.  
- Прототип дизайна в Figma / Nano-banana.  
- Проверить вид в реальных карточках рецептов.  
- Итеративно менять (accent color можно заменить, если coral не зайдёт).  

---

## 🗂 История
- **2025-10-13** – создан план по дизайну, зафиксирована стартовая палитра (v1).
