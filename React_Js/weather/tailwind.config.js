/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'mainImg':"url('./media/MicrosoftTeams-image.png')",
        'leftImg':"url('./media/MicrosoftTeams-image (3) (1).png')"      
      }
    },
  },
  plugins: [],
}

