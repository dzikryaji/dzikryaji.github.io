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
        goulong: ["Goulong", 'sans-serif']
      }
    },
  },
  plugins: [],
}

