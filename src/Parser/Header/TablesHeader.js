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
 * Class TablesHeader.
 *
 * @param {BinaryParser} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function TablesHeader (reader) {

  'use strict';

  var i1, i2;

  /**
   * The first reserved value.
   *
   * @type {number}
   */
  this.reserved1 = reader.readUInt(4);

  /**
   * The major version.
   *
   * @type {number}
   */
  this.majorVersion = reader.readUInt(1);

  /**
   * The minor version.
   *
   * @type {number}
   */
  this.minorVersion = reader.readUInt(1);

  /**
   * The size of the indexes into the different streams.
   *
   * @type {number}
   */
  this.heapOffsetSizes = reader.readUInt(1);

  /**
   * The second reserved value.
   *
   * @type {number}
   */
  this.reserved2 = reader.readUInt(1);

  /**
   * The bit-mask that indicates which of the tables that are present.
   *
   * @type {Array<number>}
   */
  this.maskValidArray = [
    (i1 = reader.readUInt(4)),
    (i2 = reader.readUInt(4))
  ];

  /**
   * The bit-mask that indicates which of the tables that are present.
   *
   * @type {number}
   */
  this.maskValid = (i2 << 32) | i1;

  /**
   * The bit-mask that indicates which of the tables that are sorted.
   *
   * @type {Array<number>}
   */
  this.maskSortedArray = [
    (i1 = reader.readUInt(4)),
    (i2 = reader.readUInt(4))
  ];

  /**
   * The bit-mask that indicates which of the tables that are sorted.
   *
   * @type {number}
   */
  this.maskSorted = (i2 << 32) | i1;

  /**
   * The file offset to the tables relative to the beginning of the stream.
   *
   * @type {number}
   */
  this.tablesOffset = reader.getPosition();

}

module.exports = TablesHeader;
