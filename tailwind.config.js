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
      screens: {
        xs: '480px',
      },
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
        line: {
          DEFAULT: '#00b900',
          50: '#e6f7e4',
          100: '#c4eabe',
          200: '#9cdc94',
          300: '#6fcf65',
          400: '#47c43f',
          500: '#00b900',
          600: '#00aa00',
          700: '#009700',
          800: '#008600',
          900: '#006800',
        },
      },
      opacity: {
        85: '0.85',
      },
      spacing: {
        7.5: '1.875rem',
        26: '6.5rem',
        50: '12.5rem',
        89: '22.25rem',
        110: '27.5rem',
        122: '30.5rem',
        125: '31.25rem',
        132: '33rem',
      },
      minWidth: {
        80: '20rem',
        89: '22.25rem',
      },
      maxWidth: {
        80: '20rem',
        89: '22.25rem',
        96: '24rem',
      },
      minHeight: {
        89: '22.25rem',
      },
      gridTemplateRows: {
        '1fr-auto': '1fr auto',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        '1fr-auto-auto': '1fr auto auto',
      },
      boxShadow: {
        navbar: '0px 2px 15px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'coin-calculator': 'url(/backgrounds/bg-coins-calculator.jpeg)',
        'loan-calculator': 'url(/backgrounds/bg-loan-calculator.jpeg)',
        'customer-group': 'url(/backgrounds/bg-customer-group.png)',
        // TODO: change bg footer
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
