/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-gray_6': '#EDECEE',
        'gray-3': '#5F5B62',
        'gray-2': '#3E3A40',
      },
    },
  },
  plugins: [],
}
