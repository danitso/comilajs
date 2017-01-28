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
 * Class ConstantRow.
 *
 * @param {CLIParser} reader
 *   The CLI reader.
 *
 * @constructor
 * @struct
 */
function CustomAttributeRow (reader) {

  /**
   * The reference to the parent row.
   *
   * @type {RowReference}
   */
  this.parent = new RowReference(reader, [
    TableIndexes.METHOD_DEF,
    TableIndexes.FIELD,
    TableIndexes.TYPE_REF,
    TableIndexes.TYPE_DEF,
    TableIndexes.PARAM,
    TableIndexes.INTERFACE_IMPL,
    TableIndexes.MEMBER_REF,
    TableIndexes.MODULE,
    -1,
    TableIndexes.PROPERTY,
    TableIndexes.EVENT,
    TableIndexes.STAND_ALONE_SIG,
    TableIndexes.MODULE_REF,
    TableIndexes.TYPE_SPEC,
    TableIndexes.ASSEMBLY,
    TableIndexes.ASSEMBLY_REF,
    TableIndexes.FILE,
    TableIndexes.EXPORTED_TYPE,
    TableIndexes.MANIFEST_RESOURCE
  ]);

  /**
   * The reference to the type row.
   *
   * @type {RowReference}
   */
  this.type = new RowReference(reader, [
    -1,
    -1,
    TableIndexes.METHOD_DEF,
    TableIndexes.MEMBER_REF,
    -1
  ]);

  /**
   * The value as an index into the blob heap.
   *
   * @type {number}
   */
  this.value = reader.readBlobIndex();

}

module.exports = CustomAttributeRow;
