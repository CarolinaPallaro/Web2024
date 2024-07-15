/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    screens: {
      'movil': '360px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    extend: {
      colors: {
        primaryFont:'rgb(212 212 212)' , //letra de la pagina
        primary: 'rgb(34 211 238)', //botones, texto importante
        secondary: 'rgb(2 132 199)', //azul obscuro 
        details: 'rgb(219 39 119)', // rosa para detalles fondo
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], // titulos
        sans: ['Helvetica', 'Arial', 'sans-serif'], 
        serif: ['Georgia', 'Times New Roman', 'serif'], 
        mono: ['Menlo', 'Monaco', 'monospace'], 
      },
    },
  },
  plugins: [],
}