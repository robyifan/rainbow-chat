'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: 'signup.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'recovery-password.html',
      template: 'recovery-password.html'
    })
  ],
  devtool: 'inline-source-map',
};

module.exports = development;
