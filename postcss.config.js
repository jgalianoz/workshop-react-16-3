var autoprefixer = require('autoprefixer');
var tailwindcss = require('tailwindcss');
var imports = require('postcss-import');

module.exports = {
  plugins: [
    imports(),
    require('postcss-flexbugs-fixes'),
    tailwindcss('./tailwind.js'),
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
  ]
}