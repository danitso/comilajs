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

const FileHeader = require('./src/FileHeader');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Webpack = require('webpack');

// Export the webpack configuration.
module.exports = function (env, options) {
  'use strict';

  return {
    'devServer': {
      'contentBase': __dirname + '/demo',
      'lazy': true,
      'open': false,
      'openPage': '',
      'port': 4768
    },
    'entry': {
      'comla': __dirname + '/src/Main.js',
      'comla.min': __dirname + '/src/Main.js'
    },
    'mode': 'production',
    'module': {
      'rules': [
        {
          'enforce': 'pre',
          'exclude': /node_modules/,
          'loader': 'jscs-loader',
          'test': /\.js$/
        },
        {
          'enforce': 'pre',
          'exclude': /node_modules/,
          'loader': 'jshint-loader',
          'test': /\.js$/
        }
      ]
    },
    'optimization': {
      'minimize': true,
      'minimizer': [
        new UglifyJSPlugin({
          'include': /\.min\.js$/,
          'uglifyOptions': {
            'compress': {
              'warnings': false
            },
            'mangle': true,
            'mangle.properties': {
              'regex': /^_/
            },
            'sourceMap': true
          }
        })
      ]
    },
    'output': {
      'filename': '[name].js',
      'library': 'comlajs',
      'libraryTarget': 'umd',
      'path': __dirname + '/' + (options.mode === 'production' ? 'dist' :
        'build'),
      'publicPath': '/assets/',
      'sourceMapFilename': '[file].map',
      'umdNamedDefine': true
    },
    'performance': {
      'hints': false
    },
    'plugins': [
      new Webpack.BannerPlugin(FileHeader.text),
      new Webpack.LoaderOptionsPlugin({options: {}}),
      new Webpack.SourceMapDevToolPlugin({
        'filename': '[file].map',
        'include': /\.min\.js$/
      })
    ]
  }
};
