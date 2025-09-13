/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // << هذا السطر مهم جداً!!
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // فرض ألوان أساسية أبيض وأسود فقط
        black: '#000',
        white: '#fff',
        // تعريف ألوان مخصصة
        primary: {
          DEFAULT: '#000',
        },
        secondary: {
          DEFAULT: '#fff',
        },
        background: {
          DEFAULT: '#fff',
        },
        foreground: {
          DEFAULT: '#000',
        },
      },
    },
  },
  plugins: [],
};