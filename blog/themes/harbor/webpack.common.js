const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// let copyLibs = [
//   {
//       from: `${__dirname}/static/libs/**.*`,
//       to: `${__dirname}/static/js`
//   }
// ];

module.exports = {
  entry: {
    main: ['./static/src/main.js', './static/src/theme.js'],
    search: './static/src/search.js',
  },
  output: {
    path: `${__dirname}/static/js/`,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset',
      },
    ]
  },
  plugins: [
    // new CopyWebpackPlugin(copyLibs),
  ]
};
