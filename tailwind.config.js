/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      xs: "320px",
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
    
    colors:{
      "primary-main": "#EA4227",
      secondary: "#1C2437",
      "text-color" : "#EBDDBA",
      card1 : "#FEEAB7",
      card2 : "#C2FAF8",
      card3 : "#CCE0FF",
      card4 : "#E0C8FF",
      card5 : "#FDAFAF",
      transparent : "transparent"
    },
    extend: {
      rotate: {
        '80': '80deg',
      }
    }
  },
  plugins: [],
}

