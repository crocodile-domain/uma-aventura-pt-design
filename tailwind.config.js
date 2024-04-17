/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["docs/*.html"],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'orange': '#ff903e',
      'yellow': '#ffd450',
      'green': '#82c557',
      'red': '#a1334f',
      'bred': '#e40035',
      'bdred': '#ab3b30',
      'borange': '#e96800',
      'byellow': '#eddf0b',
      'bpink': '#e1588e',
      'bblue': '#009edb',
      'bgreen': '#6d9802',
      'blgreen': '#9dce59',
      'lgrey': '#efefef',
      },
    extend: {
      fontFamily: {
        brandfont: "'Outfit', sans-serif",
      },
      backgroundImage: {
        'angle-yellow': "url('/docs/img/angle-yellow.svg')",
        'angle-white': "url('/docs/img/angle-white.svg')",
      }
      
    },
  },
  plugins: [],
}

