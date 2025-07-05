
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#facc15', // Vàng gà đặc trưng
        secondary: '#fef9c3',
      },
    },
  },
  plugins: [],
}
