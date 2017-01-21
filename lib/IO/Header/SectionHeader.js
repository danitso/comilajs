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
 * Class SectionHeader.
 *
 * @param {BinaryReader} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function SectionHeader (reader) {

  /**
   * The section name.
   *
   * @type {string}
   */
  this.name = reader.readUTF8String(8, true);

  /**
   * The file address or the total size of the section when loaded into memory,
   * in bytes.
   *
   * @type {number}
   */
  this.misc = reader.readUInt(4);

  /**
   * The address of the first byte of the section when loaded into memory,
   * relative to the image base.
   *
   * @type {number}
   */
  this.virtualAddress = reader.readUInt(4);

  /**
   * The size of the initialized data on disk, in bytes.
   *
   * @type {number}
   */
  this.sizeOfRawData = reader.readUInt(4);

  /**
   * A file pointer to the first page within the COFF file.
   *
   * @type {number}
   */
  this.pointerToRawData = reader.readUInt(4);

  /**
   * A file pointer to the beginning of the relocation entries for the section.
   *
   * @type {number}
   */
  this.pointerToRelocations = reader.readUInt(4);

  /**
   * A file pointer to the beginning of the line-number entries for the section.
   *
   * @type {number}
   */
  this.pointerToLinenumbers = reader.readUInt(4);

  /**
   * The number of relocation entries for the section.
   *
   * @type {number}
   */
  this.numberOfRelocations = reader.readUInt(2);

  /**
   * The number of line-number entries for the section.
   *
   * @type {number}
   */
  this.numberOfLinenumbers = reader.readUInt(2);

  /**
   * The characteristics of the image.
   *
   * @type {number}
   */
  this.characteristics = reader.readUInt(4);

}

module.exports = SectionHeader;
