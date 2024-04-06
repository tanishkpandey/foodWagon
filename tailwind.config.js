/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', "sans-serif"],
      },
      filter: {
        'grayscale-50': 'grayscale(50%)',
      },
    },
  },
  plugins: [],
};
