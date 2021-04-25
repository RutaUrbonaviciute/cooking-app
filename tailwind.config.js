module.exports = {
  purge: [
    // remove any unused classes for the smallest file size on prod
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      yellow: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '##F5F3F1',
        light: '#e0e6ed',
        lightest: '#F5F3F1',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
