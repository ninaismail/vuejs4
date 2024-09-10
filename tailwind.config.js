/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Barlow']
      },
      colors : {
        "primary": "#f2780b",
        "bgcolor": "#1e1e1e",
      },
      backgroundOpacity: {
        10: '0.1',
        77: '0.77',
      },
      aspectRatio: {
        '3.97/1': '3.97 / 1',
      },      
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      }
    }
  },
  plugins: [],
}

