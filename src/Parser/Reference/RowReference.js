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
 * Class RowReference.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {Array<number>} tableIndexes
 *   The table indexes.
 *
 * @constructor
 * @struct
 */
function RowReference (parser, tableIndexes) {

  'use strict';

  /**
   * The row index.
   *
   * @type {number}
   */
  this.rowIndex = -1;

  /**
   * The table index.
   *
   * @type {number}
   */
  this.tableIndex = -1;

  // Initialize the object.
  (function (object, parser, tableIndexes) {

    if (tableIndexes.length === 0) {
      object.rowIndex = parser.readUInt(3) - 1;
      object.tableIndex = parser.readUInt(1);
    }
    else {
      var bc = 1, bv, size = 2, tables = parser.readTables();

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
      var tableRowIndex = parser.readUInt(size);

      // Split the integer into two separate values and update the properties.
      object.tableIndex = tableIndexes[tableRowIndex & (bv - 1)];
      object.rowIndex = tableRowIndex >> bc;
    }

  }(this, parser, tableIndexes));

}

module.exports = RowReference;
