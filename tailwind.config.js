/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#000000',
      
     }),
    
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      xxl:'64px',
      36:'36px',
      32:'30px',
      20:'20px',
      15:'15px',
      
      
    },

    
    
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    // fontFamily: {
    //   display: ['Gilroy', 'sans-serif'],
    //   body: ['Graphik', 'sans-serif, '],

    // },
    
    colors:{
      grass:'#2ecc71',
      black_light:'#2c3e50',
      orange:'#F97316',
      black:'#000000',
      white:'#FFFFFF',
      blue:'#3498DB',
      

    },
    
  },
  plugins: [],
}
