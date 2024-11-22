/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          500: '#ff6b6b',
          600: '#ff5252',
        },
      },
    },
  },
  plugins: [],
};