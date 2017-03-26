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
 * Class TypeRefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function TypeRefRow (reader) {

  'use strict';

  /**
   * The reference to the type information row.
   *
   * @type {RowReference}
   */
  this.resolutionScope = new RowReference(reader, [
    TableIndexes.MODULE,
    TableIndexes.MODULE_REF,
    TableIndexes.ASSEMBLY_REF,
    TableIndexes.TYPE_REF
  ]);

  /**
   * The type name as an index into the string heap.
   *
   * @type {number}
   */
  this.typeName = reader.readStringIndex();

  /**
   * The type namespace as an index into the string heap.
   *
   * @type {number}
   */
  this.typeNamespace = reader.readStringIndex();

}

module.exports = TypeRefRow;
