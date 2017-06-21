const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  devtool: 'source-map',

  entry: [
    `${SRC_DIR}/index.jsx`,
  ],

  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/public/',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file' },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          { loader: 'file-loader',
            options: {
              query: { name: 'assets/[name].[ext]' },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
