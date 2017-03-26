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
 * Class TypeDefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function TypeDefRow (reader) {

  'use strict';

  /**
   * The flags.
   *
   * @type {number}
   */
  this.flags = reader.readUInt(4);

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

  /**
   * The reference to the type information row.
   *
   * @type {RowReference}
   */
  this.extends = new RowReference(reader, [
    TableIndexes.TYPE_DEF,
    TableIndexes.TYPE_REF,
    TableIndexes.TYPE_SPEC
  ]);

  /**
   * The reference to the field information row.
   *
   * @type {RowReference}
   */
  this.fieldList = new RowReference(reader, [
    TableIndexes.FIELD
  ]);

  /**
   * The reference to the method information row.
   *
   * @type {RowReference}
   */
  this.methodList = new RowReference(reader, [
    TableIndexes.METHOD_DEF
  ]);

}

module.exports = TypeDefRow;
