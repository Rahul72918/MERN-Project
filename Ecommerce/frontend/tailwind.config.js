/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wood': {
          50: '#FEFBF7',
          100: '#F5F1E8',
          200: '#E8DFD0',
          300: '#D2B48C',
          400: '#D4A574',
          500: '#CD853F',
          600: '#8B7355',
          700: '#6B5B4F',
          800: '#3E2723',
          900: '#2C2C2C',
        },
      },
    },
  },
  plugins: [],
}