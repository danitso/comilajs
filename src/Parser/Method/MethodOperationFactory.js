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

var CallOperation = require('./Operation/CallOperation');
var LoadArgument0Operation = require('./Operation/LoadArgument0Operation');
var LoadStringOperation = require('./Operation/LoadStringOperation');
var MethodOperation = require('./MethodOperation');
var NoOperation = require('./Operation/NoOperation');
var OpCodes = require('../Constant/OpCodes');
var ParserException = require('../Exception/ParserException');
var ReturnOperation = require('./Operation/ReturnOperation');

/**
 * Class MethodOperationFactory.
 *
 * @constructor
 * @struct
 */
function MethodOperationFactory () {

  'use strict';

  /**
   * The registered operation classes.
   *
   * @type {Array<MethodOperation>}
   */
  this._classes = [];

  /**
   * Parses an operation.
   *
   * @param {CILParser} parser
   *   The CIL parser.
   * @param {number} code
   *   The operation code.
   * @param {string} name
   *   The operation name.
   */
  this.parse = function (parser, code, name) {
    if (!this._classes[code]) {
      throw new ParserException('Unsupported IL operation \'' + name +
        '\' (0x' + code.toString(16).toUpperCase() + ')');
    }

    return new this._classes[code](parser, code, name);
  };

  /**
   * Registers a constructor for a specific operation.
   *
   * @param {number} code
   *   The operation code.
   * @param {MethodOperation} constructor
   *   The operation constructor.
   */
  this.register = function (code, constructor) {
    this._classes[code] = constructor;
  };

  // Register the supported operations.
  this.register(OpCodes.CALL, CallOperation);
  this.register(OpCodes.LDSTR, LoadStringOperation);
  this.register(OpCodes.LDARG_0, LoadArgument0Operation);
  this.register(OpCodes.NOP, NoOperation);
  this.register(OpCodes.RET, ReturnOperation);
}

module.exports = new MethodOperationFactory();
