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
 * @param {CLIParser} reader
 *   The CLI parser.
 *
 * @constructor
 * @struct
 */
function MethodHeader (reader) {

  // Retrieve the first one or two bytes specifying the flags and header size.
  var flags_and_size = reader.readUInt(1);

  if ((flags_and_size & MethodFlags.TINY_FORMAT) === 0) {
    reader.setPosition(reader.getPosition() - 1);
    flags_and_size = reader.readUInt(2);
  }

  /**
   * The flags.
   *
   * @type {number}
   */
  this.flags = ((flags_and_size & MethodFlags.TINY_FORMAT) !== 0) ?
    flags_and_size & 0x03 : flags_and_size & 0xFFF;

  /**
   * The header size.
   *
   * @type {number}
   */
  this.size = ((flags_and_size & MethodFlags.TINY_FORMAT) !== 0) ? 1 :
    flags_and_size >> 12;

  /**
   * The maximum number of items on the operand stack.
   *
   * @return {number}
   */
  this.maxStack = ((flags_and_size & MethodFlags.TINY_FORMAT) !== 0) ? 0 :
    reader.readUInt(2);

  /**
   * The size in bytes of the actual method body.
   *
   * @return {number}
   */
  this.codeSize = ((flags_and_size & MethodFlags.TINY_FORMAT) !== 0) ?
    flags_and_size >> 2 : reader.readUInt(4);

  /**
   * The metadata token for a signature describing the layout of the local
   * variables for the method
   *
   * @return {number}
   */
  this.localVarSigTok = ((flags_and_size & MethodFlags.TINY_FORMAT) !== 0) ? 0 :
    reader.readUInt(4);

  /**
   * The file offset to the code.
   *
   * @type {number}
   */
  this.codeOffset = reader.getPosition();

}

module.exports = MethodHeader;
