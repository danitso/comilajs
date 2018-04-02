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

var RowReference = require('./../Reference/RowReference');
var TableIndexes = require('./../Constant/TableIndexes');

/**
 * Class MemberRefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MemberRefRow (reader) {

  'use strict';

  /**
   * The reference to the class definition row.
   *
   * @type {RowReference}
   */
  this.class = new RowReference(reader, [
    TableIndexes.TYPE_DEF,
    TableIndexes.TYPE_REF,
    TableIndexes.MODULE_REF,
    TableIndexes.METHOD_DEF,
    TableIndexes.TYPE_SPEC
  ]);

  /**
   * The name as an index into the string heap.
   *
   * @type {number}
   */
  this.name = reader.readStringIndex();

  /**
   * The signature as an index into the blob heap.
   *
   * @type {number}
   */
  this.signature = reader.readBlobIndex();

}

module.exports = MemberRefRow;
