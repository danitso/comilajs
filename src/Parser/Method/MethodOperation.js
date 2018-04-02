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

/**
 * Class MethodOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @struct
 */
function MethodOperation (parser, code, name) {

  'use strict';

  /**
   * The operation code.
   *
   * @type {number}
   */
  this.code = code;

  /**
   * The operation name.
   *
   * @type {string}
   */
  this.name = name;

}

module.exports = MethodOperation;
