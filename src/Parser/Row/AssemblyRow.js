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
 * Class AssemblyRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyRow (reader) {

  'use strict';

  /**
   * The id of the hashing algorithm.
   *
   * @type {number}
   */
  this.hashAlgId = reader.readUInt(4);

  /**
   * The major version.
   *
   * @type {number}
   */
  this.majorVersion = reader.readUInt(2);

  /**
   * The minor version.
   *
   * @type {number}
   */
  this.minorVersion = reader.readUInt(2);

  /**
   * The build number.
   *
   * @type {number}
   */
  this.buildNumber = reader.readUInt(2);

  /**
   * The revision number.
   *
   * @type {number}
   */
  this.revisionNumber = reader.readUInt(2);

  /**
   * The flags.
   *
   * @type {number}
   */
  this.flags = reader.readUInt(4);

  /**
   * The public key as an index into the blob heap.
   *
   * @type {number}
   */
  this.publicKey = reader.readBlobIndex();

  /**
   * The name as an index into the string heap.
   *
   * @type {number}
   */
  this.name = reader.readStringIndex();

  /**
   * The culture as an index into the string heap.
   *
   * @type {number}
   */
  this.culture = reader.readStringIndex();

}

module.exports = AssemblyRow;
