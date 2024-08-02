import transition from './src/components/frame_components/transitions'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svg,module.css}'],
  theme: {
    screens: {
      movil: '320px',
      inter: '760px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      colors: {
        primaryFont: 'rgb(212 212 212)', //letra de la pagina
        primary: '#22d3ee', //botones, texto importante
        secondary: '#0284c7', //azul obscuro
        details: '#db2777', // rosa para detalles fondo
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        about: "url('/imgs/about-dark.png')",
        skills: "url('/imgs/skills-dark.png')",
        portfolio: "url('/imgs/portfolio-dark.png')",
      },
      {
        transition:{
          
        }
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], // principal
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
};
