const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { Index } = require('../../src/Index');

const renderIndexDocument = htmlWebpackPluginOptions => `
  <!DOCTYPE html>
  ${renderToStaticMarkup(<Index {...htmlWebpackPluginOptions} />)}
`;

module.exports = webpackOptions => renderIndexDocument(webpackOptions.htmlWebpackPlugin.options);
