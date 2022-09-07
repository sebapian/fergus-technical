/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
