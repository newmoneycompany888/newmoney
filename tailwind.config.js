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
          DEFAULT: '#5D2E8A',
          50: '#f0e6f3',
          100: '#dbc0e4',
          200: '#c498d2',
          300: '#ad71c0',
          400: '#9c55b2',
          500: '#8b3ea4',
          600: '#7e399d',
          700: '#6d3394',
          800: '#5e2e8a',
          900: '#422577',
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
