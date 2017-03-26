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
 * Class ResourceDirectory.
 *
 * @param {PEParser} reader
 *   The PE reader.
 *
 * @constructor
 * @struct
 */
function ResourceDirectory (reader) {

  'use strict';

  /**
   * The characteristics.
   *
   * @type {number}
   */
  this.characteristics = reader.readUInt(4);

  /**
   * The time/date stamp describing the creation time of the resource.
   *
   * @type {number}
   */
  this.timeDateStamp = reader.readUInt(4);

  /**
   * The major version number.
   *
   * @type {number}
   */
  this.majorVersion = reader.readUInt(2);

  /**
   * The minor version number.
   *
   * @type {number}
   */
  this.minorVersion = reader.readUInt(2);

  /**
   * The number of array elements that use names and that follow this structure.
   *
   * @type {number}
   */
  this.numberOfNamedEntries = reader.readUInt(2);

  /**
   * The number of array elements that use integer IDs, and which follow this
   * structure.
   *
   * @type {number}
   */
  this.numberOfIdEntries = reader.readUInt(2);

  /**
   * The resource directory entries.
   *
   * @type {Array<ResourceDirectoryEntry>}
   */
  this.entries = new Array(this.numberOfIdEntries + this.numberOfNamedEntries);

  // Parse the resource directory entries.
  var position = reader.getPosition();

  for (var i = 0; i < this.entries.length; i++) {
    reader.setPosition(position + (i * 8));
    this.entries[i] = new ResourceDirectoryEntry(reader);
  }

}

module.exports = ResourceDirectory;

var ResourceDirectoryEntry = require('./../Entry/ResourceDirectoryEntry');
