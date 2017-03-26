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
 * Class ImplMapRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ImplMapRow (reader) {

  'use strict';

  /**
   * The mapping flags.
   *
   * @type {number}
   */
  this.mappingFlags = reader.readUInt(2);

  /**
   * The forwarded member as a reference to a Field or MethodDef row.
   *
   * @type {RowReference}
   */
  this.memberForwarded = new RowReference(reader, [
    TableIndexes.FIELD,
    TableIndexes.METHOD_DEF
  ]);

  /**
   * The import name as an index into the string heap.
   *
   * @type {number}
   */
  this.importName = reader.readStringIndex();

  /**
   * The import scope as a reference to a ModuleRef row.
   *
   * @type {RowReference}
   */
  this.importScope = new RowReference(reader, [
    TableIndexes.MODULE
  ]);

}

module.exports = ImplMapRow;
