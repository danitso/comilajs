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

var RowReference = require('./../Reference/RowReference');
var TableIndexes = require('./../Constant/TableIndexes');

/**
 * Class AssemblyRefOSRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyRefOSRow (reader) {

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

  /**
   * The reference to the assembly reference row.
   *
   * @type {RowReference}
   */
  this.assemblyRef = new RowReference(reader, [
    TableIndexes.ASSEMBLY_REF
  ]);

}

module.exports = AssemblyRefOSRow;
