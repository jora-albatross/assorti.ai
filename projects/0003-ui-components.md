# 0003 – UI Components (Hero & RecipeCard)

**Date:** 2025-10-14  
**Owner:** @jora-albatross

## Overview
Базовые UI-компоненты вынесены из страниц, чтобы ускорить работу с дизайном и не дублировать код.

src/
    components/
      Hero.astro
      RecipeCard.astro
    layouts/
      Layout.astro
    pages/
      index.astro


---

## `Hero.astro`
**Путь:** `src/components/Hero.astro`  
**Назначение:** крупный хиро-блок на главной с акцентным градиентом и CTA.

**Props**
```ts
title?: string  // заголовок (часть "Ready to Ship" подсвечивается градиентом)
subtitle?: string // подзаголовок

    Быстрый пример
    <Hero
        title="Curated AI Recipes, Ready to Ship"
        subtitle="Playbooks that actually save time. No fluff — just repeatable workflows."
    />

Где редактировать стили:
    Цвета/градиенты: Tailwind (from-gradientStart to-gradientEnd)
    Шрифты: font-display (Playfair Display), font-sans (Inter)
    Кнопки: классы bg-accent text-white (Primary), border-slate-300 hover:bg-slate-50 (Secondary)

Идеи улучшений:
    Вставить мини-иллюстрацию (узлы/связи) справа/снизу
    Добавить небольшую анимацию появления
    Вариант темного херо для экспериментов

RecipeCard.astro
    Путь: src/components/RecipeCard.astro
    Назначение: карточка рецепта для списков и гридов.

Ожидаемые данные:
    import type { CollectionEntry } from "astro:content";
    type RecipeEntry = CollectionEntry<"recipes">;
    <RecipeCard recipe={r} />

Отображаемые поля:
    recipe.data.preview → картинка (fallback: /img/placeholder.png)
    recipe.data.title → заголовок
    recipe.data.summary → краткое описание
    recipe.data.category → бейдж
    recipe.data.eta → минуты

Ключевые классы:
    Карточка: border border-slate-200 rounded-2xl hover:shadow-md
    Изображение: aspect-[16/9] object-cover
    Текст: text-secondary, ссылки: text-primary

Идеи улучшений:
    Добавить маленькие иконки категорий
    Скелетон-лоадер для изображений
    Теги/фильтры по категориям


Где подключено:
    src/pages/index.astro

    import Hero from "../components/Hero.astro";
    import RecipeCard from "../components/RecipeCard.astro";
    import { getCollection } from "astro:content";

    const recipes = await getCollection("recipes");

    <Layout {title} {description}>
      <Hero />
      <section class="py-10">
        <div class="max-w-6xl mx-auto px-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => <RecipeCard recipe={r} />)}
        </div>
      </section>
    </Layout>

Кастомизация цветов/шрифтов:
    tailwind.config.cjs

    extend: {
            colors: {
            primary: "#5B6CFF",
            secondary: "#1E293B",
            accent: "#FF6B6B",
            background: "#FFFFFF",
            gradientStart: "#5B6CFF",
            gradientEnd: "#9B5BFF"
            },
    fontFamily: {
            sans: ["Inter", "ui-sans-serif", "system-ui"],
            display: ["Playfair Display", "serif"]
            }
    }


Применение:
        тексты: text-secondary
        фон: bg-background
        кнопки: bg-accent text-white
        градиенты: from-gradientStart to-gradientEnd




