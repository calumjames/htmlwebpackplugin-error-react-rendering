const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const currentDirectory = path.resolve(__dirname, '..');
const srcPath = path.resolve(currentDirectory, '..', 'src');
const entryPoint = path.resolve(srcPath, 'Index.js');
const buildPath = path.resolve(currentDirectory, '..', 'dist');
const nodeModulesPath = path.resolve(currentDirectory, '..', 'node_modules');
const webpackToolsPath = path.resolve(currentDirectory, 'webpack');
const indexRendererPath = path.resolve(webpackToolsPath, 'indexRenderer');

const config = {
  devtool: 'source-map',
  entry: {
    application: [entryPoint]
  },
  output: {
    path: buildPath,
    filename: 'App.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: indexRendererPath,
      inject: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  }
};

module.exports = config;
