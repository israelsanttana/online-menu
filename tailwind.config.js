/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',  // Inclui todos os arquivos HTML
    './!(node_modules)/**/*.js',  // Inclui todos os arquivos JS, exceto node_modules
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        home: "url('/assets/bg.png')",
      }
    },
  },
  plugins: [],
}

