const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    // remove any unused classes for the smallest file size on prod
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      purple: colors.purple,
      gray: {
        darkest: '#2C2C2C',
      },
      yellow: {
        darkest: '#7F5539',
        dark: '#B08968',
        DEFAULT: '#F5F3F1',
        // light: '#DDB892',
        // light: '#f1e0d0',
        light: '#efdbc8',
        lightest: '#F5F3F1',
      },
    },
    extend: {
      fontFamily: { comic: ['Comic Sans', 'Arial', 'sans-serif'] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
