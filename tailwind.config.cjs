/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B6CFF",        // основной tech-синий
        secondary: "#1E293B",      // тёмный navy для текста
        accent: "#FF6B6B",         // коралловый для кнопок
        background: "#FFFFFF",     // базовый фон
        gradientStart: "#5B6CFF",  // начало градиента
        gradientEnd: "#9B5BFF"     // конец градиента
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}
