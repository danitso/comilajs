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
 * Class ResourceDataEntry.
 *
 * @param {PEParser} reader
 *   The PE reader.
 *
 * @constructor
 * @struct
 */
function ResourceDataEntry (reader) {

  'use strict';

  /**
   * The file offset to the raw data.
   *
   * @type {number}
   */
  this.offsetToData = reader.getFileOffset(reader.readUInt(4));

  /**
   * The data size.
   *
   * @type {number}
   */
  this.size = reader.readUInt(4);

  /**
   * The code page.
   *
   * @type {number}
   */
  this.codePage = reader.readUInt(4);

  /**
   * The reserved value.
   *
   * @type {number}
   */
  this.reserved = reader.readUInt(4);

}

module.exports = ResourceDataEntry;
