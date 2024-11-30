/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
