/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '480px',
        '3xl': '1792px'
      }
    },

  },
  plugins: [],
}
