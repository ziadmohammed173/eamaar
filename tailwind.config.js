/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // فرض ألوان أساسية أبيض وأسود فقط
        black: '#000',
        white: '#fff',
        // تعريف ألوان مخصصة
        primary: {
          DEFAULT: '#000',   // أسود لكل شيء أساسي (زر، عنوان...)
        },
        secondary: {
          DEFAULT: '#fff',   // أبيض لكل شيء ثانوي (خلفية، نص...)
        },
        background: {
          DEFAULT: '#fff',   // الخلفية الرئيسية بيضاء
        },
        foreground: {
          DEFAULT: '#000',   // النص الافتراضي أسود
        },
      },
    },
  },
  plugins: [],
};