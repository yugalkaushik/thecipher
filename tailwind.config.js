/** @type {import('tailwindcss').Config} */
// Custom fonts and brand colours for The Cipher newspaper layout
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand accent — deep red used in masthead
        themeOrange: "#B93C12",
      },
      fontFamily: {
        OldLondon: ["OldLondon", "serif"],
        TimesNewRoman: ["TimesNewRoman", "serif"],
        Impact: ["Impact", "sans-serif"],
        Canopee: ["Canopee", "sans-serif"],
        EditorialNew: ["EditorialNew", "sans-serif"],
        Helvetica: ["Helvetica", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
