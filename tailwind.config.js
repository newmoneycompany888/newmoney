const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.violet[800],
          ...colors.violet,
        },
        secondary: {
          DEFAULT: '#FBD11B',
          50: '#fffce5',
          100: '#fff7c0',
          200: '#fef296',
          300: '#fdec6b',
          400: '#fce747',
          500: '#f9e21b',
          600: '#fbd21b',
          700: '#faba13',
          800: '#f8a108',
          900: '#f67600',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen lg': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },
        },
      })
    },
  ],
}
