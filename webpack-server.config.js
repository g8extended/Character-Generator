var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: [
    './server/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/static/',
    libraryTarget: 'commonjs2'
  },
  externals: [/^[a-z\-0-9\/]+$/, /^lodash/],
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
