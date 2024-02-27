/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*.jsx",
    "./src/*.jsx",
    "./src/*.js",
    "./src/*.html",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "rgba(53, 158, 255, 1)",
        mainBlueFade: "rgba(53, 158, 255, 0.1)",
        textBlue: "rgba(1, 62, 141, 1)",
        paleBlue: "rgba(245, 247, 255, 1)",
        textGray: "rgba(143, 148, 163, 1)",
      },
    },
  },
  plugins: [],
};
