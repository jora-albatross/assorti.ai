# Версионирование UI

  Когда меняете визуал компонента (могут сломаться отступы/шрифты):
  создайте 000x-ui-change.md и кратко опишите изменения,
  добавьте скриншот «до/после» (по желанию),
  не забывайте Purge Everything в Cloudflare после деплоя.
  
# Кастомизация

     ## Текст/CTA меняются пропсами:
          <Hero
          title="Assorti.ai — Curated AI, Sorted for You"
          subtitle="Workflows that ship faster."
          primaryHref="/recipes" secondaryHref="/about"
          />

Интенсивность анимации можно ослабить: в @keyframes снизить амплитуду translateY или увеличить duration. 
      src/components/Hero.astro

      
<img width="1483" height="614" alt="image" src="https://github.com/user-attachments/assets/7df248a6-b79d-448d-b4ff-d818f9c61fab" />
какой параметр изменить чтобы например "Curated AI Recipes, " было в одной строке и "Ready to Ship" на второй?

Смотри: заголовок сейчас идёт одной строкой, потому что браузер сам переносит только если не хватает ширины.
Чтобы жёстко управлять разбиением, есть 2 варианта:

🔹 Вариант 1: <br />
## Просто вставить перенос строки в тексте:
    <h1 class="text-5xl font-display font-bold leading-tight">
      Curated AI Recipes,<br />
      <span class="text-gradient">Ready to Ship</span>
    </h1>

🔹 Вариант 2: 
## сделать каждую часть в отдельном блоке:
    <h1 class="text-5xl font-display font-bold leading-tight">
      <span>Curated AI Recipes,</span>
      <span class="block text-gradient">Ready to Ship</span>
    </h1>
    
👉 Отличие:

            В варианте 1 браузер отрисует «как будто Enter», но будет воспринимать это как один заголовок.
            В варианте 2 ты можешь давать разные стили каждой строке (block, mt-2 и т. д.), это гибче.

💡 Совет:   лучше вариант 2, он даёт больше контроля над дизайном.

## Как настроить текст потом
            Теперешний заголовок задаётся двумя пропсами, так что можно переопределять:
            <Hero
                titleLine1="Curated AI Recipes,"
                titleLine2="That Actually Ship"
            />

# UI Change Log

## Почему обрезается «y»

Это классическая история: у заголовка слишком плотный line-height (у нас стоит leading-tight), поэтому «хвостик» у букв с нижними выносными (y, g, p) подсрезается краем строки. При выделении браузер перерисовывает глифы чуть иначе — поэтому «y» видно целиком.

## Если вдруг «y» всё равно подрезается

Увеличь line-height ещё чуть-чуть: leading-[1.14] (или только на md: md:leading-[1.1]).
Оставь pb-[2px] на второй строке — он помогает на некоторых рендерах.
Убедись, что нигде вокруг нет overflow-hidden на самом <h1> или родителе строки (в секции можно).
После замены: коммит → деплой → Purge Everything → проверка в инкогнито.

## 0001 — Hero Title Line-Height Fix
**Date:** 2025-10-14  
**File:** `src/components/Hero.astro`  
**Issue:**  
В заголовке `"Curated AI Recipes, Ready to Ship"` буква `y` в слове **Ready** обрезалась снизу (line-height слишком маленький).  

**Fix Applied:**  
- Добавил класс `leading-tight` → заменил на `leading-snug` (или увеличил `line-height` вручную в Tailwind).  
- При необходимости можно использовать padding-bottom (`pb-1`) как локальный фикс.  

**Before:**  
Хвостик буквы `y` обрезан, видно только при выделении текста.  

**After:**  
Хвостик отображается полностью, расстояние между строками стало чуть больше.  

**Lessons Learned:**  
- Для заголовков с большими шрифтами всегда проверять `line-height`.  
- Если буквы с хвостиком (y, g, p, q) обрезаются, увеличивать `leading`.  
- Tailwind классы для line-height:  
  - `leading-none` (0.9)  
  - `leading-tight` (1.1)  
  - `leading-snug` (1.3) ← хороший баланс  
  - `leading-normal` (1.5)  

---

## Шаблон для будущих изменений
**Date:** YYYY-MM-DD  
**File:** `<файл>`  
**Issue:** Опиши проблему простыми словами.  
**Fix Applied:** Какой класс или стиль добавили/заменили.  
**Before/After:** В чём была разница.  
**Lessons Learned:** Что стоит помнить на будущее.  

