/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-dark": "0px 0px 8px 1px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Setting Inter as the default sans font
      },
    },
  },
  plugins: [],
};
