/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'index.html',
    'code.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

