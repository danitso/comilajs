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

var DataDirectoryHeader = require('./DataDirectoryHeader');

/**
 * Class CORHeader.
 *
 * @param {BinaryParser} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function CORHeader (reader) {

  /**
   * The size of the header, in bytes.
   *
   * @type {number}
   */
  this.sizeOfHeader = reader.readUInt(4);

  /**
   * The major runtime version.
   *
   * @type {number}
   */
  this.majorRuntimeVersion = reader.readUInt(2);

  /**
   * The minor runtime version.
   *
   * @type {number}
   */
  this.minorRuntimeVersion = reader.readUInt(2);

  /**
   * The metadata directory header.
   *
   * @type {DataDirectoryHeader}
   */
  this.metadata = new DataDirectoryHeader(reader);

  /**
   * The runtime flags.
   *
   * @type {number}
   */
  this.flags = reader.readUInt(4);

  /**
   * The entry point address or token.
   *
   * @type {number}
   */
  this.entryPoint = reader.readUInt(4);

  /**
   * The resources directory header.
   *
   * @type {DataDirectoryHeader}
   */
  this.resources = new DataDirectoryHeader(reader);

  /**
   * The strong name signature directory header.
   *
   * @type {DataDirectoryHeader}
   */
  this.strongNameSignature = new DataDirectoryHeader(reader);

  /**
   * The code manager table directory header.
   *
   * @type {DataDirectoryHeader}
   */
  this.codeManagerTable = new DataDirectoryHeader(reader);

  /**
   * The VTable fix-ups directory header.
   *
   * @type {DataDirectoryHeader}
   */
  this.vTableFixups = new DataDirectoryHeader(reader);

  /**
   * The exported address table jumps directory header.
   *
   * @type {DataDirectoryHeader}
   */
  this.exportAddressTableJumps = new DataDirectoryHeader(reader);

  /**
   * The managed native header directory header.
   *
   * @type {DataDirectoryHeader}
   */
  this.managedNativeHeader = new DataDirectoryHeader(reader);

}

module.exports = CORHeader;
