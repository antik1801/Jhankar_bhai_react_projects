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
          
          "primary": "#b2ffef",
                   
          "secondary": "#db414e",
                   
          "accent": "#55a522",
                   
          "neutral": "#281E2F",
                   
          "base-100": "#F0F1F4",
                   
          "info": "#7FAAEB",
                   
          "success": "#52EBD4",
                   
          "warning": "#925A0C",
                   
          "error": "#F85044",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],plugins: [require("daisyui")],
}

