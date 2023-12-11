/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        warmGray: "#1E1E1E",
        gradient: "#2d4571",
      },
    },
  },
  plugins: [],
};
