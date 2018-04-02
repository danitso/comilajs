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

var Extend = require('extend');
var MethodOperation = require('../MethodOperation');
var RowReference = require('../../Reference/RowReference');

/**
 * Class TokenOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @extends {MethodOperation}
 */
function TokenOperation (parser, code, name) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new MethodOperation(parser, code, name));

  /**
   * The token.
   *
   * @type {number}
   */
  this.token = new RowReference(parser, []);

}

module.exports = TokenOperation;
