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

var MethodFlags = require('../Constant/MethodFlags');

/**
 * Class MethodHeader.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MethodHeader (reader) {

  'use strict';

  // Retrieve the first one or two bytes specifying the flags and header size.
  var flagsAndSize = reader.readUInt(1);
  var tiny = true;

  if ((flagsAndSize & MethodFlags.TINY_FORMAT) === 0) {
    reader.setPosition(reader.getPosition() - 1);
    flagsAndSize = reader.readUInt(2);
    tiny = false;
  }

  /**
   * The flags.
   *
   * @type {number}
   */
  this.flags = tiny ? flagsAndSize & 0x03 : flagsAndSize & 0xFFF;

  /**
   * The header size.
   *
   * @type {number}
   */
  this.headerSize = tiny ? 1 : flagsAndSize >> 12;

  /**
   * The maximum number of items on the operand stack.
   *
   * @return {number}
   */
  this.maxStack = tiny ? 0 : reader.readUInt(2);

  /**
   * The size in bytes of the actual method body.
   *
   * @return {number}
   */
  this.codeSize = tiny ? flagsAndSize >> 2 : reader.readUInt(4);

  /**
   * The metadata token for a signature describing the layout of the local
   * variables for the method
   *
   * @return {number}
   */
  this.localVarSigTok = tiny ? 0 : reader.readUInt(4);

  /**
   * The file offset to the code.
   *
   * @type {number}
   */
  this.codeOffset = reader.getPosition();

}

module.exports = MethodHeader;
