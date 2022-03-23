module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sepia-50': '#f4f1ed',
        'sepia-100': '#e1dbce',
        'sepia-200': '#cfc4b0',
        'sepia-300': '#bcad91',
        'sepia-400': '#aa9773',
        'sepia-500': '#937f59',
        'sepia-600': '#746446',
        'sepia-700': '#564a34',
        'sepia-800': '#473d2b',
        'sepia-900': '#0a0806',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}
