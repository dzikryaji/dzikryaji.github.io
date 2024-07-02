/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bone: "#FFFCF8"
      },
      fontFamily: {
        nfl: ["NFL", 'sans-serif'],
        roboto: ["Roboto", 'sans-serif'],
        goulong: ["Goulong", 'sans-serif'],
        arcade: ["Arcade", 'sans-serif'],
        arcade_n: ["Arcade-N", 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-transparent': 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
      },
    },
  },
  plugins: [],
}

