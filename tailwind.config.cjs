/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,ts,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: "#3AAFA9",
        coral: "#FF6B6B",
        navy: "#2A2D50",
        ink: "#111115",
        line: "#ECEFF3",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(20,25,40,.10)",
      },
      borderRadius: { xl: "16px" },
    },
  },
  plugins: [],
};
