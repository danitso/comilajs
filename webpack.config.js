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

var webpack = require('webpack');

// Generate the copyright notice to use as the file header.
var pkg = require('./package.json');

pkg.name = pkg.name.substring(0, 1).toUpperCase() +
  pkg.name.substring(1, pkg.name.length - 2) +
  pkg.name.substring(pkg.name.length - 2).toUpperCase();

var banner = pkg.name + ' v' + pkg.version + "\n" + 'Copyright (c) ' +
  new Date().getFullYear() + ' ' + pkg.author.name + "\n" + pkg.homepage +
  "\n\n" +
  'This program is free software: you can redistribute it and/or modify it ' +
  "\n" +
  'under the terms of the GNU Lesser General Public License as published by' +
  "\n" +
  'the Free Software Foundation, either version 3 of the License, or' +
  "\n" +
  '(at your option) any later version.' + "\n\n" +
  'This program is distributed in the hope that it will be useful,' + "\n" +
  'but WITHOUT ANY WARRANTY; without even the implied warranty of' + "\n" +
  'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the' + "\n" +
  'GNU Lesser General Public License for more details.' + "\n\n" +
  'You should have received a copy of the GNU Lesser General Public License' +
  "\n" +
  'along with this program. If not, see <http://www.gnu.org/licenses/>.';

// Export the webpack configuration.
module.exports = {
  "entry": "./lib/Main.js",
  "output": {
    "filename": "comla.js",
    "library": "comlajs",
    "libraryTarget": "umd",
    "path": "./build",
    "umdNamedDefine": true
  },
  "plugins": [
    new webpack.BannerPlugin(banner)
  ]
};
