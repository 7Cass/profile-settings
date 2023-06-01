/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#38343D',
        'gray-200': '#686071',
        'gray-300': '#797085',
        'gray-400': '#f4effa',
        'gray-500': '#fdfcfe',
        'red'     : '#aa2222'
      }
    },
  },
  plugins: [],
}
