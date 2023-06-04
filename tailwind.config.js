/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '490px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1536px',
    },
    extend: {
      colors: {
        main: '#0A0908',
        second: '#d90429',

        'tx-main': '#fff',
        'tx-second': '#000',

        'hv-main': '#9a031e',
        'hv-second': '#007200',
      },
    },
  },
  plugins: [],
}
