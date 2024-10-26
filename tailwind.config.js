/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      screens: {
         xs: { min: '10px', max: '767px' },
         to600 : {min : '10px' , max : '600px'}
      },
      extend: {
         fontFamily: {
            Montserrat: ['Montserrat', 'sans-serif'],
            FrankRuhlLibre: ['FrankRuhlLibre', 'sans-serif'],
            Prata: ['Prata'],

         },
         boxShadow: {
            r: '1px 0px 10px rgba(0, 0, 0, 0.2)'
         }
      }
   },
   plugins: []
};
