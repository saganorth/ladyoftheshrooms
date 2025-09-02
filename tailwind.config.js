/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['ui-sans-serif', 'system-ui'],
      },
      colors: {
        'brand-bg': '#132612',
        'brand-green': '#1d3b1a',
        'brand-accent': '#8b6b40',
        'brand-gold': '#e6d4a3',
        'brand-cream': '#f7f4eb',
      }
    },
  },
  plugins: [],
}