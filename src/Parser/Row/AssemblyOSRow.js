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
 * Class AssemblyOSRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyOSRow (reader) {

  'use strict';

  /**
   * The OS platform id.
   *
   * @type {number}
   */
  this.osPlatformID = reader.readUInt(4);

  /**
   * The OS major version.
   *
   * @type {number}
   */
  this.osMajorVersion = reader.readUInt(4);

  /**
   * The OS minor version.
   *
   * @type {number}
   */
  this.osMinorVersion = reader.readUInt(4);

}

module.exports = AssemblyOSRow;
