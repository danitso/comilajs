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

/**
 * Class COFFHeader.
 *
 * @param {BinaryReader} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function COFFHeader (reader) {

  /**
   * The signature.
   *
   * @type {string}
   */
  this.signature = reader.readString(4);

  /**
   * The architecture type of the computer.
   *
   * @type {number}
   */
  this.Machine = reader.readUInt(2);

  /**
   * The number of sections.
   *
   * @type {number}
   */
  this.NumberOfSections = reader.readUInt(2);

  /**
   * The low 32 bits of the time stamp of the image.
   *
   * @type {number}
   */
  this.TimeDateStamp = reader.readUInt(4);

  /**
   * The offset of the symbol table, in bytes, or zero if no COFF symbol table
   * exists.
   *
   * @type {number}
   */
  this.PointerToSymbolTable = reader.readUInt(4);

  /**
   * The number of symbols in the symbol table.
   *
   * @type {number}
   */
  this.NumberOfSymbols = reader.readUInt(4);

  /**
   * The size of the optional header, in bytes. This value should be 0 for
   * object files.
   *
   * @type {number}
   */
  this.SizeOfOptionalHeader = reader.readUInt(2);

  /**
   * The characteristics of the image. This member can be one or more of the
   * following values.
   *
   * @type {number}
   */
  this.characteristics = reader.readUInt(2);

}

module.exports = COFFHeader;
