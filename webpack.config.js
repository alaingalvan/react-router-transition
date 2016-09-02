'use strict';

var path = require('path');

var src = path.join(__dirname, 'src');

module.exports = {
  devtool: 'sourcemap',
  entry: path.join(src, 'index.ts'),
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-router-transition.js',
    sourceMapFilename: 'react-router-transition.map',
    library: 'ReactRouterTransition',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      include: src
    }]
  },
  resolve: {
    root: src,
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  }
};
