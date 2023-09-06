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
      },
      width: {
        'col-5': `calc(calc((( 100vw - 2 * 72px - ( 5 - 1 ) * 24px ) / 5 ) / 0.66667) * 0.66667)`,
        'col-4': `calc(calc((( 100vw - 2 * 72px - ( 5 - 1 ) * 24px ) / 4 ) / 0.66667) * 0.66667)`,
        'col-3': `calc(calc((( 100vw - 2 * 72px - ( 5 - 1 ) * 24px ) / 3 ) / 0.66667) * 0.66667)`,
        'col-2': `calc(calc((( 100vw - 2 * 72px - ( 5 - 1 ) * 24px ) / 2 ) / 0.66667) * 0.66667)`,
        'col-1': `calc(calc((( 100vw - 2 * 72px - ( 5 - 1 ) * 24px ) / 1 ) / 0.66667) * 0.66667)`,
      }
    },
  },
  plugins: [],
}
