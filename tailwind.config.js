/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1140px'
    },
    extend: {
      colors:{
        brightRed:'hsl(12,80%,59%)',
      }
    },
  },
  plugins: [],
}

