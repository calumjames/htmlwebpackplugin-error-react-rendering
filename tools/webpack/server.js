const path = require('path');

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.config.js');

const compiler = Webpack(webpackConfig);

let bundleStartTime;

compiler.plugin('compile', () => {
  console.log('Change detected. Compiling project...');
  bundleStartTime = Date.now();
});

compiler.plugin('done', () => {
  console.log('Compile complete in ' + (Date.now() - bundleStartTime) + 'ms.');
});

const server = new WebpackDevServer(compiler, {
  contentBase: './dist',
  publicPath: '/',
  hot: true,
  quiet: false,
  stats: { colors: true }
});

server.listen(3001, 'localhost', () => {
  console.log('Listening at localhost:3001');
});
