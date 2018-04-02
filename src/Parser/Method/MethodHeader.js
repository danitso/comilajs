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

var MethodFlags = require('../Constant/MethodFlags');

/**
 * Class MethodHeader.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 *
 * @constructor
 * @struct
 */
function MethodHeader (parser) {

  'use strict';

  // Retrieve the first one or two bytes specifying the flags and header size.
  var flagsAndSize = parser.readUInt(1);
  var thin = true;

  if ((flagsAndSize & MethodFlags.TINY_FORMAT) === 0) {
    parser.setPosition(parser.getPosition() - 1);
    flagsAndSize = parser.readUInt(2);
    thin = false;
  }

  /**
   * The flags.
   *
   * @type {number}
   */
  this.flags = thin ? flagsAndSize & 0x03 : flagsAndSize & 0xFFF;

  /**
   * The header size.
   *
   * @type {number}
   */
  this.headerSize = thin ? 1 : flagsAndSize >> 12;

  /**
   * The maximum number of items on the operand stack.
   *
   * @return {number}
   */
  this.maxStack = thin ? 8 : parser.readUInt(2);

  /**
   * The size in bytes of the operations.
   *
   * @return {number}
   */
  this.operationsSize = thin ? flagsAndSize >> 2 : parser.readUInt(4);

  /**
   * The metadata token for a signature describing the layout of the local
   * variables for the method
   *
   * @return {number}
   */
  this.localVarSigTok = thin ? 0 : parser.readUInt(4);

  /**
   * The file offset to the operations.
   *
   * @type {number}
   */
  this.operationsOffset = parser.getPosition();

}

module.exports = MethodHeader;
