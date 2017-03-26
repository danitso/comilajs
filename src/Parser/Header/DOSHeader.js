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
 * Class DOSHeader.
 *
 * @param {BinaryParser} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function DOSHeader (reader) {

  'use strict';

  /**
   * The magic number.
   *
   * @type {number}
   */
  this.magic = reader.readUInt(2);

  /**
   * The number of bytes on the last page in the file.
   *
   * @type {number}
   */
  this.cblp = reader.readUInt(2);

  /**
   * The number of pages in the file.
   *
   * @type {number}
   */
  this.cp = reader.readUInt(2);

  /**
   * The number of relocations.
   *
   * @type {number}
   */
  this.crlc = reader.readUInt(2);

  /**
   * The size of the header in paragraphs.
   *
   * @type {number}
   */
  this.cparhdr = reader.readUInt(2);

  /**
   * The minimum number of extra paragraphs which are needed.
   *
   * @type {number}
   */
  this.minAlloc = reader.readUInt(2);

  /**
   * The maximum number of extra paragraphs which are needed.
   *
   * @type {number}
   */
  this.maxAlloc = reader.readUInt(2);

  /**
   * The initial (relative) SS value.
   *
   * @type {number}
   */
  this.ss = reader.readUInt(2);

  /**
   * The initial SP value.
   *
   * @type {number}
   */
  this.sp = reader.readUInt(2);

  /**
   * The checksum.
   *
   * @type {number}
   */
  this.csum = reader.readUInt(2);

  /**
   * The initial IP value.
   *
   * @type {number}
   */
  this.ip = reader.readUInt(2);

  /**
   * The initial (relative) CS value.
   *
   * @type {number}
   */
  this.cs = reader.readUInt(2);

  /**
   * The file address of the relocation table.
   *
   * @type {number}
   */
  this.lfarlc = reader.readUInt(2);

  /**
   * The overlay number.
   *
   * @type {number}
   */
  this.ovno = reader.readUInt(2);

  /**
   * The first reserved words.
   *
   * @type {Array<number>}
   */
  this.res1 = reader.readUIntArray(2, 4);

  /**
   * The OEM identifier.
   *
   * @type {number}
   */
  this.oemid = reader.readUInt(2);

  /**
   * The OEM information.
   *
   * @type {number}
   */
  this.oeminfo = reader.readUInt(2);

  /**
   * The second reserved words.
   *
   * @type {Array<number>}
   */
  this.res2 = reader.readUIntArray(2, 10);

  /**
   * The file address of the new EXE header.
   *
   * @type {number}
   */
  this.lfanew = reader.readUInt(4);

}

module.exports = DOSHeader;
