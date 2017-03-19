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
 * Class MethodSemanticsRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MethodSemanticsRow (reader) {

  /**
   * The semantics.
   *
   * @type {number}
   */
  this.semantics = reader.readUInt(2);

  /**
   * The reference to the method row.
   *
   * @type {RowReference}
   */
  this.method = new RowReference(reader, [
    TableIndexes.METHOD_DEF
  ]);

  /**
   * The reference to the associated row.
   *
   * @type {RowReference}
   */
  this.association = new RowReference(reader, [
    TableIndexes.EVENT,
    TableIndexes.PROPERTY
  ]);

}

module.exports = MethodSemanticsRow;
