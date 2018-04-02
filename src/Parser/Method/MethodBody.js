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

var MethodHeader = require('./MethodHeader');
var MethodOperation = require('./MethodOperation');
var MethodOperationFactory = require('./MethodOperationFactory');
var OpCodes = require('../Constant/OpCodes');
var ParserException = require('../Exception/ParserException');

/**
 * Class MethodBody.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 *
 * @constructor
 * @struct
 */
function MethodBody (parser) {

  'use strict';

  /**
   * The header.
   *
   * @type {MethodHeader}
   */
  this.header = new MethodHeader(parser);

  /**
   * The operations.
   *
   * @type {Array<MethodOperation>}
   */
  this.operations = [];

  // Read the operations.
  while (parser.getPosition() < this.header.operationsOffset +
    this.header.operationsSize) {
    var name = null;
    var code = parser.readUInt(1);

    if (code === 0xFE) {
      parser.setPosition(parser.getPosition() - 1);
      code = parser.readUInt(2);
    }

    for (var property in OpCodes) {
      if (OpCodes.hasOwnProperty(property)) {
        if (OpCodes[property] === code) {
          name = property.toLowerCase().replace('_', '.');
        }
      }
    }

    if (!name) {
      throw new ParserException('Invalid IL operation 0x' +
        code.toString(16).toUpperCase());
    }

    this.operations.push(MethodOperationFactory.parse(parser, code, name));
  }
}

module.exports = MethodBody;
