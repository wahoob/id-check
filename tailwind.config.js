/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Baloo Bhaijaan 2", "system-ui", "sans-serif"],
      },
      boxShadow: {
        custom: "0px -10px 29px 0px #5982AB1F",
      },
    },
  },
  plugins: [],
};
