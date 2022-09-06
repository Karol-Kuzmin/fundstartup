/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      screens: {
        // 'xs': "520px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // "3xl": "1792px",
      },
      // container: {
      //   screens: {
      //     'xs': "480px",
      //     'sm': '640px',
      //     'md': '768px',
      //     'lg': '1024px',
      //     'xl': '1536px',
      //     "3xl": "1792px",
      //   }
      // },
      backgroundImage: {
        home: "url('../public/assets/images/background1.png')",
        "home-a": "url('../public/assets/images/background2.png')",
        "home-b": "url('../public/assets/images/background3.png')",
        "upcoming-img": "url('../public/assets/images/upcoming-img.png')",
      },
      colors: {
        "yellow-dark": "#F6B432",
      },
      fontFamily: {
        Mont: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
