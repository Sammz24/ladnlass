/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gluten: ["Gluten", "sans-serif"],
        honken: ["Honken Grotesk", "sans-serif"],
      },
      colors: {
        "oren-utama-ll": "#FF6A29",
        "surface-ll": "#FFE1D4",
        "border-ll": "#FFCDB8",
        "hover-ll": "#AA471B",
        "pressed-ll": "#55230E",
        "focus-ll": "#FF6A29",
      },
    },
  },
  plugins: [],
};
