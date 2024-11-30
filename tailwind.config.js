/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update this to include the paths do wszystkich Twoich komponentów.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-regular": ["Montserrat_400Regular", "sans-serif"],
        "montserrat-semibold": ["Montserrat_600SemiBold", "sans-serif"],
        "montserrat-bold": ["Montserrat_700Bold", "sans-serif"],
        "montserrat-extrabold": ["Montserrat_800ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
