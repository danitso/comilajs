"use strict";

/**
 * This file is part of ComlaJS.
 *
 * ComlaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComlaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComlaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var FileHeader = require('./src/FileHeader');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var Webpack = require('webpack');

// Export the webpack configuration.
module.exports = {
  "devServer": {
    "contentBase": __dirname + "/demo"
  },
  "entry": {
    "comla": __dirname + "/src/Main.js",
    "comla.min": __dirname + "/src/Main.js"
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "exclude": /node_modules/,
        "loader": "jshint-loader",
        "test": /\.js$/
      }
    ]
  },
  "output": {
    "filename": "[name].js",
    "library": "comlajs",
    "libraryTarget": "umd",
    "path": __dirname + "/dist",
    "publicPath": "/assets/",
    "sourceMapFilename": '[file].map',
    "umdNamedDefine": true
  },
  "plugins": [
    new Webpack.BannerPlugin(FileHeader.text),
    new Webpack.optimize.UglifyJsPlugin({
      "compress": {
        "warnings": false
      },
      "include": /\.min\.js$/,
      "mangle.props": {
        "regex": /^_/
      },
      "sourceMap": true
    }),
    new OpenBrowserWebpackPlugin({}),
    new Webpack.SourceMapDevToolPlugin({
      "filename": '[file].map',
      "include": /\.min\.js$/
    })
  ]
};
