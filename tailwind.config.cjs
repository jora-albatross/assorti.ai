/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  safelist: [
    "text-secondary", "bg-background", "bg-accent",
    "from-gradientStart", "to-gradientEnd"
  ],
  theme: {
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
    },
  },
  plugins: [],
}
