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

var ResourceDataEntry = require('./ResourceDataEntry');
var ResourceDirectory = require('./../Directory/ResourceDirectory');

/**
 * Class ResourceDirectoryEntry.
 *
 * @param {PEParser} reader
 *   The PE reader.
 *
 * @constructor
 * @struct
 */
function ResourceDirectoryEntry (reader) {

  "use strict";

  /**
   * The name.
   *
   * @type {number}
   */
  this.name = reader.readUInt(4);

  /**
   * The file offset to the raw data.
   *
   * @type {number}
   */
  this.offsetToData = reader.readUInt(4);

  /**
   * The data entry.
   *
   * @type {ResourceDataEntry}
   */
  this.data = null;

  /**
   * The resource directory.
   *
   * @type {ResourceDirectory}
   *   The resource directory or NULL if this entry does not point to one.
   */
  this.directory = null;

  // Read either a resource directory or a data entry.
  if (this.offsetToData >>> 31 === 1) {
    this.offsetToData = reader.getResourceDirectoryFileOffset() +
      (this.offsetToData << 1 >>> 1);
    reader.setPosition(this.offsetToData);
    this.directory = new ResourceDirectory(reader);
  }
  else {
    this.offsetToData = reader.getResourceDirectoryFileOffset() +
      this.offsetToData;
    reader.setPosition(this.offsetToData);
    this.data = new ResourceDataEntry(reader);
  }

}

module.exports = ResourceDirectoryEntry;
