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
 * Class MethodDefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MethodDefRow (reader) {

  'use strict';

  /**
   * The relative virtual address.
   *
   * @type {number}
   */
  this.rva = reader.readUInt(4);

  /**
   * The implementation flags.
   *
   * @type {number}
   */
  this.implFlags = reader.readUInt(2);

  /**
   * The method flags.
   *
   * @type {number}
   */
  this.flags = reader.readUInt(2);

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

  /**
   * The reference to the param definition row.
   *
   * @type {RowReference}
   */
  this.paramList = new RowReference(reader, [
    TableIndexes.PARAM
  ]);

}

module.exports = MethodDefRow;
