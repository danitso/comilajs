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
 * Class ModuleRow.
 *
 * @param {CLIReader} reader
 *   The CLI reader.
 *
 * @constructor
 * @struct
 */
function ModuleRow (reader) {

  /**
   * The generation.
   *
   * This value should always be zero.
   *
   * @type {number}
   */
  this.generation = reader.readUInt(2);

  /**
   * The name as an index into the string heap.
   *
   * @type {number}
   */
  this.name = reader.readStringIndex();

  /**
   * The module id as an index into the GUID heap.
   *
   * @type {number}
   */
  this.mvid = reader.readGUIDIndex();

  /**
   * The encryption id as an index into the GUID heap.
   *
   * This value should always be zero.
   *
   * @type {number}
   */
  this.encId = reader.readGUIDIndex();

  /**
   * The base encryption id as an index into the GUID heap.
   *
   * This value should always be zero.
   *
   * @type {number}
   */
  this.encBaseId = reader.readGUIDIndex();

}

module.exports = ModuleRow;
