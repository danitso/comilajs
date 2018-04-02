/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Module = require('./Module');
var NotImplementedException = require('./../Exception/NotImplementedException');

/**
 * Class Compiler.
 *
 * @param {CILParser} parser
 *   The CLR parser.
 *
 * @constructor
 */
function Compiler (parser) {

  'use strict';

  /**
   * Compiles CIL to JavaScript.
   *
   * @return {Module}
   *   Returns the compiled module object.
   *
   * @throws {NotImplementedException}
   *   Thrown as long as the function has not been fully implemented.
   */
  this.compile = function () {
    // Log some information about the executable.
    console.log(parser.readDOSHeader());
    console.log(parser.readCOFFHeader());
    console.log(parser.readOptionalHeader());
    console.log(parser.readSectionHeaders());
    console.log(parser.readResourceDirectory());
    console.log(parser.readCORHeader());
    console.log(parser.readMetadataHeader());
    console.log(parser.readTablesHeader());
    console.log(parser.readTables());
    console.log(parser.readMethodBodies());

    // Throw an exception as the compiler has not been fully implemented.
    throw new NotImplementedException(
      'The compile() function has not been fully implemented');
  };

}

module.exports = Compiler;
