/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          1: "#9d392d",
          2: "#3fd0c9",
        },
      },
    },
  },
  plugins: [],
};
