/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
import prettierPlugin from 'prettier-plugin-tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
        exo: ['"Exo 2"', "sans-serif"],
        animation: {
          'fade-in': 'fadeIn 0.3s ease-in',
          'fade-out': 'fadeOut 0.3s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': {opacity: '0'},
            '100%': {opacity: '1'},
          },
          fadeOut: {
            '0%': {opacity: '1'},
            '100%': {opacity: '0'},
          },
        },
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    'prettier-plugin-tailwindcss'
  ]
};