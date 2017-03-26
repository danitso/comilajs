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

var StreamHeader = require('./StreamHeader');

/**
 * Class MetadataHeader.
 *
 * @param {BinaryParser} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function MetadataHeader (reader) {

  'use strict';

  var i;

  /**
   * The file offset to the header relative to the beginning of the stream.
   *
   * @type {number}
   */
  this.offset = reader.getPosition();

  /**
   * The signature.
   *
   * This value should always equal 0x424A5342.
   *
   * @type {number}
   */
  this.signature = reader.readUInt(4);

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
   * A reserved value.
   *
   * This value should always equal 0x00.
   *
   * @type {number}
   */
  this.reserved = reader.readUInt(4);

  /**
   * The length of the version string.
   *
   * @type {number}
   */
  this.versionLength = (i = (i = reader.readUInt(4)) + (i % 4));

  /**
   * The version string.
   *
   * @type {string}
   */
  this.version = reader.readUTF8String(i, true);

  /**
   * The flags.
   *
   * This value should always equal 0x00.
   *
   * @type {number}
   */
  this.flags = reader.readUInt(2);

  /**
   * The number of streams.
   *
   * @type {number}
   */
  this.streams = reader.readUInt(2);

  /**
   * The stream headers.
   *
   * @type {Array<StreamHeader>}
   */
  this.streamHeaders = new Array(this.streams);

  // Read the stream headers.
  for (i = 0; i < this.streamHeaders.length; i++) {
    this.streamHeaders[i] = new StreamHeader(reader);
  }

}

module.exports = MetadataHeader;
