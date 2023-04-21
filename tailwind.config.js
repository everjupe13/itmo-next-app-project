const plugin = require('tailwindcss/plugin')

const toPX = values => Object.fromEntries(values.map(v => [+v, `${v}px`]))
const object0to100px = toPX(Array.from({ length: 101 }).map((_, i) => +i))

const fallbackSansSerifFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif'
]

const typography = {
  '.text-bold-30': {
    fontSize: '30px',
    lineHeight: '42px',
    fontWeight: 700
  },
  '.text-medium-24': {
    fontSize: '24px',
    lineHeight: '34px',
    fontWeight: 500
  },
  '.text-regular-24': {
    fontSize: '24px',
    lineHeight: '34px',
    fontWeight: 400
  },
  '.text-medium-15': {
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: 500
  },
  '.text-regular-15': {
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: 400
  }
}

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(typography)
    })
  ],

  content: ['./src/**/*.{js,jsx}'],

  prefix: 'tw-',

  theme: {
    fontSize: false,

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#F8F8F8'
    },

    spacing: object0to100px,

    fontFamily: {
      sans: ['Mulish', ...fallbackSansSerifFonts]
    }
  }
}
