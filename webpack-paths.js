"use strict";

const path = require('path');
// We define some paths to be used throughout the webpack config
module.exports = {
  src: path.join(__dirname, 'client/src'),
  static: path.join(__dirname, 'client/static'),
  css: path.join(__dirname, 'client/static/css'),  
};