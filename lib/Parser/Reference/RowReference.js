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
 * Class RowReference.
 *
 * @param {CLIParser} reader
 *   The CLI reader.
 * @param {Array<number>} tableIndexes
 *   The table indexes.
 *
 * @constructor
 * @struct
 */
function RowReference (reader, tableIndexes) {

  /**
   * The table index.
   *
   * @type {number}
   */
  this.tableIndex = -1;

  /**
   * The row index.
   *
   * @type {number}
   */
  this.rowIndex = -1;

  // Initialize the object.
  (function (object, reader, tableIndexes) {

    var bc = 1, bv, size = 2, tables = reader.readTables();

    // Determine how many bits are required to represent the table index.
    while ((bv = Math.pow(2, bc - 1)) < tableIndexes.length) {
      bc++;
    }

    // Determine if the index is represented as a 16-bit or 32-bit integer.
    for (var i = 0; i < tableIndexes.length; i++) {
      if ((tables[tableIndexes[i]]) &&
        (tables[tableIndexes[i]].length > 0xFFFF)) {
        size = 4;
        break;
      }
    }

    // Read the integer that contains both the table index and the row index.
    var tableRowIndex = reader.readUInt(size);

    // Split the integer into two separate values and update the properties.
    object.tableIndex = tableIndexes[tableRowIndex & (bv - 1)];
    object.rowIndex = tableRowIndex >> bc;

  }(this, reader, tableIndexes));

}

module.exports = RowReference;
