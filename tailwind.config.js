/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "outline-orange": "0 0 0 2px #f90, 0 0 0 3px rgba(255,153,0,.5)",
      },
      colors: {
        amazonclone: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};
