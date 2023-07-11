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
      spacing: {
        7.5: '1.875rem',
        26: '6.5rem',
      },
      minWidth: {
        80: '20rem',
        89: '22.25rem',
      },
      maxWidth: {
        80: '20rem',
        89: '22.25rem',
      },
      typography: {
        lg: {
          css: {
            h1: {
              'font-size': '38px',
              'line-height': '40px',
            },
            h2: {
              'font-size': '30px',
              'line-height': '36px',
            },
          },
        },
      },
      gridTemplateRows: {
        '1fr-auto': '1fr auto',
      },
      gridTemplateColumns: {
        '1fr-auto-auto': '1fr auto auto',
      },
      boxShadow: {
        navbar: '0px 2px 15px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        footer: 'url(/backgrounds/bg-footer.jpeg)',
      },
      zIndex: {
        999: 999,
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
