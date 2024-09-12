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
        "offwhite": "#FDF1F5",
        "bgcolor2":"#646565"
      },
      backgroundOpacity: {
        10: '0.1',
        77: '0.77',
      },
      backgroundImage: {
        'hero':'url(images/landingpage/hero.png)',
        'footer':'url(images/landingpage/footer.png)',
        'values':'url(images/landingpage/values.png)',
        'pattern':'url(images/landingpage/pattern.svg)',
      },
      aspectRatio: {
        '2.27/1': '2.27 / 1', //hero
        '1.14/1': '1.14 / 1', //values
        '1.57/1': '1.57 / 1', //footer
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

