/** @type {import('tailwindcss').Config} */
export default {
  content:  [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors : {
        primary_green : "#93fcca",
        secondary_green : "#56e5a1",
        primary_black : "#000f08",
        secondary_black : "#171717",
        primary_blue: "#3665f3"
      },
      backgroundColor : {
        primary_green : "#56e5a1",
        primary_gray : "#171717",
        secondary_gray:"#202020"
      },
      fontFamily : {
        heading : "Montserrat, sans-serif"
      },
      borderRadius : {
        curl : '10rem'
      }
    },
  },
  plugins: [],
}

