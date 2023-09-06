/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '25/9': '25 / 9',
      },
      gridTemplateRows: {
        '0fr': '0fr',
        '1fr': '1fr'
      },
      gridColumn: {
        'swiper-layout': 'left-start / right-end'
      }
    },
  },
  plugins: [],
}
