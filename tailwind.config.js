module.exports = {
  darkMode: 'selector',
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xl: '1440px',
      // x2lg: '1920px',
      // pageMaxWidth: '1440px',
    },
    extend: {
      colors:{
        primary: "#FFD400",
        secondary: "#EDF0F5",
        darkBg: "#282929",
        darkText : "#Fbfbfb",
        info: "#833471"
      },
      fontFamily : {
        Montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
