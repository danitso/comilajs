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
 * Class AssemblyRefProcessorRow.
 *
 * @param {CLIParser} reader
 *   The CLI reader.
 *
 * @constructor
 * @struct
 */
function AssemblyRefProcessorRow (reader) {

  /**
   * The processor type.
   *
   * @type {number}
   */
  this.processor = reader.readUInt(4);

  /**
   * The reference to the assembly reference row.
   *
   * @type {RowReference}
   */
  this.assemblyRef = new RowReference(reader, [
    TableIndexes.ASSEMBLY_REF
  ]);

}

module.exports = AssemblyRefProcessorRow;
