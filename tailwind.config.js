/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#02aab0",
      },
      screens: {
        // Mobile (sm)
        sm: "640px", // => @media (min-width: 640px) { ... }

        // Mobile landscape, small tablets (md)
        md: "768px", // => @media (min-width: 768px) { ... }

        // Larger tablets, small laptops (lg)
        lg: "1024px", // => @media (min-width: 1024px) { ... }

        // Most laptops, desktops (xl)
        xl: "1280px", // => @media (min-width: 1280px) { ... }

        // Large desktops, high-res displays (2xl)
        "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
