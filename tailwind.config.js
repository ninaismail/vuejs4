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
        "primary": "#F2780B",
        "bgcolor": "#1E1E1E",
        "offwhite": "#FDF1F5"
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

