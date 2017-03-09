var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: [
    './server/index'
  ],
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'bundle.js',
    publicPath: '/static/',
    libraryTarget: 'commonjs2'
  },
  externals: [/^[a-z\-0-9\/]+$/, /^lodash/],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel']
    }, {
      test: /\.scss$/,
      loaders: ['ignore']
    }]
  }
};
