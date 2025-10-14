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
Просто вставить перенос строки в тексте:
    <h1 class="text-5xl font-display font-bold leading-tight">
      Curated AI Recipes,<br />
      <span class="text-gradient">Ready to Ship</span>
    </h1>

🔹 Вариант 2: 
сделать каждую часть в отдельном блоке:
    <h1 class="text-5xl font-display font-bold leading-tight">
      <span>Curated AI Recipes,</span>
      <span class="block text-gradient">Ready to Ship</span>
    </h1>
    
👉 Отличие:

            В варианте 1 браузер отрисует «как будто Enter», но будет воспринимать это как один заголовок.
            В варианте 2 ты можешь давать разные стили каждой строке (block, mt-2 и т. д.), это гибче.

💡 Совет:   лучше вариант 2, он даёт больше контроля над дизайном.

