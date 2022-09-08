/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.jsx'],
  safelist: [
    {
      pattern: /text-(orange|blue|rose|green)-(500|600|900)/i,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
