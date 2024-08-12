/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fae9e8",
          200: "#f5d3d1",
          300: "#f0bdbb",
          400: "#eba7a4",
          500: "#e07b76",
          600: "#db655f",
          700: "#d13932",
          800: "#cc231b",
          900: "#b82018",
          950: "#7a1510",
        },
        secondary: {
          100: "#fbf1f0",
          200: "#f7e3e1",
          300: "#f2d6d1",
          400: "#eec8c2",
          500: "#eabab3",
          600: "#e6aca4",
          700: "#e29e95",
          800: "#dd9185",
          900: "#d98376",
          950: "#d57567",
        },
        black: {
          100: "#e8e7e6",
          200: "#d0cecd",
          300: "#b9b6b5",
          400: "#a19d9c",
          500: "#8a8583",
          600: "#736c6a",
          700: "#5b5451",
          800: "#443b39",
          900: "#2c2320",
          950: "#150a07",
        },
      },
    },
  },
  plugins: [],
};
