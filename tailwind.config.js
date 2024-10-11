/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      'xs' : {'min': '10px', 'max': '767px'} ,
      'sm' : {'min': '768px', 'max': '1187px'} ,
      'cus': {'min': '10px', 'max': '1187px'},
      'cus2': {'min': '1188px', 'max': '1666px'},
      'cus3': {'min': '1667px', 'max': '5000px'}, 
      'cusT': {'min': '10px', 'max': '1310px'},
      '532' : {'min': '10px', 'max': '532px'},
      '960' : {'min': '10px', 'max': '960px'},
      '1188' : {'min': '533px', 'max': '1188px'},
      '1414' : {'min': '1189px', 'max': '1414px'},
      '1636' : {'min': '1415px', 'max': '1636px'},
      '1859' : {'min': '1637px', 'max': '1859px'},
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        r: '1px 0px 10px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
};
