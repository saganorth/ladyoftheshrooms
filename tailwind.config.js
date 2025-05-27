/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        'custom-red': '#FF0000', // You can adjust this hex value
      },
    },
  },
  plugins: [],
}