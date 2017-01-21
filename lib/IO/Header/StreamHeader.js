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
 * Class StreamHeader.
 *
 * @param {BinaryReader} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function StreamHeader (reader) {

  /**
   * The file offset to the stream relative to the metadata header.
   *
   * @type {number}
   */
  this.offset = reader.readUInt(4);

  /**
   * The size of the stream, in bytes.
   *
   * @type {number}
   */
  this.size = reader.readUInt(4);

  /**
   * The name of the stream.
   *
   * @type {string}
   */
  this.name = reader.readString(0, true, 4);

}

module.exports = StreamHeader;
