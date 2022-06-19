// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      spacing: {
        '18': '72px',
        '0auto': '0 auto',
      }
    },
  },
  plugins: [],
}
