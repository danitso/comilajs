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

var CILParser = require('./Parser/CILParser');
var Compiler = require('./Compiler/Compiler');

/**
 * Class Main.
 *
 * @constructor
 * @final
 */
function Main () {

  'use strict';

  /**
   * Runs an executable.
   *
   * @param {string} path
   *   The path.
   *
   * @return {Main}
   *   Returns this instance.
   */
  this.run = function (path) {
    console.info('Downloading application \'' + path + '\'');

    (new CILParser(path)).loadFile(function (parser) {
      console.info('Compiling application \'' + parser.getPath() + '\'');

      var compiler;
      var module;

      try {
        compiler = new Compiler(parser);
        module = compiler.compile();
      }
      catch (ex) {
        console.error('Failed to compile application \'' +
          parser.getPath() + '\': ' + ex.getMessage());
        return;
      }

      console.info('Running application \'' + parser.getPath() + '\'');

      try {
        module.run();
      }
      catch (ex) {
        console.error('Failed to run application \'' +
          parser.getPath() + '\': ' + ex.getMessage());
      }
    }, function (parser, status) {
      console.error('Failed to download application \'' + parser.getPath() +
        '\' (HTTP ' + status + ')');
    });

    return this;
  };

}

module.exports = new Main();
