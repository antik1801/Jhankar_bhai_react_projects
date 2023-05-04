/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'bebus': ['Bebas Neue', 'cursive'],
    }
  },
  plugins: [require("daisyui","flowbite/plugin")],
}

