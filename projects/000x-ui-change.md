# Версионирование UI

  Когда меняете визуал компонента (могут сломаться отступы/шрифты):
  создайте 000x-ui-change.md и кратко опишите изменения,
  добавьте скриншот «до/после» (по желанию),
  не забывайте Purge Everything в Cloudflare после деплоя.
  
# Кастомизация

  Текст/CTA меняются пропсами:
      <Hero
      title="Assorti.ai — Curated AI, Sorted for You"
      subtitle="Workflows that ship faster."
      primaryHref="/recipes" secondaryHref="/about"
      />

Интенсивность анимации можно ослабить: в @keyframes снизить амплитуду translateY или увеличить duration. 
      src/components/Hero.astro

      
