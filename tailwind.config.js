/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "biru-utama": "#38446D",
        "cok-daycare": "#9B6B53",
        "ijomuda-daycare": "#ACDCDD",
        "ijotosca-daycare": "#24A5A9",
        "pink-daycare": "#F9888E",
        "kuning-daycare": "#F6DC66",
        "Ijolime-daycare": "#BCC35A",
      },
    },
  },
  plugins: [],
};
