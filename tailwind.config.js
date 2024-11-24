/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'diamond': {
          '50': '#ecfcff',
          '100': '#b9f2ff',
          '200': '#a3ebfe',
          '300': '#64dbfc',
          '400': '#1ec1f2',
          '500': '#02a3d8',
          '600': '#0481b6',
          '700': '#0b6893',
          '800': '#135577',
          '900': '#144765',
          '950': '#072e45',
        },
        'silver': {
          '50': '#f7f7f7',
          '100': '#f0f0f0',
          '200': '#e3e3e3',
          '300': '#d1d1d1',
          '400': '#c0c0c0',
          '500': '#aaaaaa',
          '600': '#969696',
          '700': '#818181',
          '800': '#6a6a6a',
          '900': '#585858',
          '950': '#333333',
        },
      },
      fontFamily : {
        'imperial' : ['Imperial Script'],
        'sans' : ['nunito'],
      }
    },
  },
  plugins: [],
}