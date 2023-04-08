/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e26374",

          "secondary": "#2cc15e",

          "accent": "#b4d847",

          "neutral": "#23282E",

          "base-100": "#F8FAFC",

          "info": "#1B69EE",

          "success": "#2FDA85",

          "warning": "#A95F0A",

          "error": "#E82640",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

