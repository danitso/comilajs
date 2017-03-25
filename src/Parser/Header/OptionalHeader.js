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
var ImageAttributes = require('./../Constant/ImageAttributes');

/**
 * Class OptionalHeader.
 *
 * @param {BinaryParser} reader
 *   The binary reader.
 *
 * @constructor
 * @struct
 */
function OptionalHeader (reader) {

  "use strict";

  /**
   * The state of the image file.
   *
   * @type {number}
   */
  this.magic = reader.readUInt(2);

  /**
   * The major version number of the linker.
   *
   * @type {number}
   */
  this.majorLinkerVersion = reader.readUInt(1);

  /**
   * The minor version number of the linker.
   *
   * @type {number}
   */
  this.minorLinkerVersion = reader.readUInt(1);

  /**
   * The size of the code section, in bytes, or the sum of all such sections if
   * there are multiple code sections.
   *
   * @type {number}
   */
  this.sizeOfCode = reader.readUInt(4);

  /**
   * The size of the initialized data section, in bytes, or the sum of all such
   * sections if there are multiple initialized data sections.
   *
   * @type {number}
   */
  this.sizeOfInitializedData = reader.readUInt(4);

  /**
   * The size of the uninitialized data section, in bytes, or the sum of all
   * such sections if there are multiple uninitialized data sections.
   *
   * @type {number}
   */
  this.sizeOfUninitializedData = reader.readUInt(4);

  /**
   * A pointer to the entry point function, relative to the image base address.
   *
   * @type {number}
   */
  this.addressOfEntryPoint = reader.readUInt(4);

  /**
   * A pointer to the beginning of the code section, relative to the image base.
   *
   * @type {number}
   */
  this.baseOfCode = reader.readUInt(4);

  /**
   * A pointer to the beginning of the data section, relative to the image base.
   *
   * @type {number}
   */
  this.baseOfData = reader.readUInt(
    (this.magic === ImageAttributes.IMAGE_NT_OPTIONAL_HDR64_MAGIC) ? 0 : 4);

  /**
   * The preferred address of the first byte of the image when it is loaded in
   * memory.
   *
   * @type {number}
   */
  this.imageBase = reader.readUInt(
    (this.magic === ImageAttributes.IMAGE_NT_OPTIONAL_HDR64_MAGIC) ? 8 : 4);

  /**
   * The alignment of sections loaded in memory, in bytes.
   *
   * @type {number}
   */
  this.sectionAlignment = reader.readUInt(4);

  /**
   * The alignment of the raw data of sections in the image file, in bytes.
   *
   * @type {number}
   */
  this.fileAlignment = reader.readUInt(4);

  /**
   * The major version number of the required operating system.
   *
   * @type {number}
   */
  this.majorOperatingSystemVersion = reader.readUInt(2);

  /**
   * The minor version number of the required operating system.
   *
   * @type {number}
   */
  this.minorOperatingSystemVersion = reader.readUInt(2);

  /**
   * The major version number of the image.
   *
   * @type {number}
   */
  this.majorImageVersion = reader.readUInt(2);

  /**
   * The minor version number of the image.
   *
   * @type {number}
   */
  this.minorImageVersion = reader.readUInt(2);

  /**
   * The major version number of the subsystem.
   *
   * @type {number}
   */
  this.majorSubsystemVersion = reader.readUInt(2);

  /**
   * The minor version number of the subsystem.
   *
   * @type {number}
   */
  this.minorSubsystemVersion = reader.readUInt(2);

  /**
   * This member is reserved and must be 0.
   *
   * @type {number}
   */
  this.win32VersionValue = reader.readUInt(4);

  /**
   * The size of the image, in bytes, including all headers.
   *
   * @type {number}
   */
  this.sizeOfImage = reader.readUInt(4);

  /**
   * The combined size of the following items, rounded to a multiple of the
   * value specified in the fileAlignment member.
   *
   * @type {number}
   */
  this.sizeOfHeaders = reader.readUInt(4);

  /**
   * The image file checksum.
   *
   * @type {number}
   */
  this.checkSum = reader.readUInt(4);

  /**
   * The subsystem required to run this image.
   *
   * @type {number}
   */
  this.subsystem = reader.readUInt(2);

  /**
   * The DLL characteristics of the image.
   *
   * @type {number}
   */
  this.dllCharacteristics = reader.readUInt(2);

  /**
   * The number of bytes to reserve for the stack.
   *
   * @type {number}
   */
  this.sizeOfStackReserve = reader.readUInt(
    (this.magic === ImageAttributes.IMAGE_NT_OPTIONAL_HDR64_MAGIC) ? 8 : 4);

  /**
   * The number of bytes to commit for the stack.
   *
   * @type {number}
   */
  this.sizeOfStackCommit = reader.readUInt(
    (this.magic === ImageAttributes.IMAGE_NT_OPTIONAL_HDR64_MAGIC) ? 8 : 4);

  /**
   * The number of bytes to reserve for the local heap.
   *
   * @type {number}
   */
  this.sizeOfHeapReserve = reader.readUInt(
    (this.magic === ImageAttributes.IMAGE_NT_OPTIONAL_HDR64_MAGIC) ? 8 : 4);

  /**
   * The number of bytes to commit for the local heap.
   *
   * @type {number}
   */
  this.sizeOfHeapCommit = reader.readUInt(
    (this.magic === ImageAttributes.IMAGE_NT_OPTIONAL_HDR64_MAGIC) ? 8 : 4);

  /**
   * This member is obsolete.
   *
   * @type {number}
   */
  this.loaderFlags = reader.readUInt(4);

  /**
   * The number of directory entries in the remainder of the optional header.
   *
   * @type {number}
   */
  this.numberOfRvaAndSizes = reader.readUInt(4);

  /**
   * The array of data directory headers.
   *
   * @type {Array<DataDirectoryHeader>}
   */
  this.dataDirectory = new Array(this.numberOfRvaAndSizes);

  // Read the data directory headers.
  for (var i = 0; i < this.dataDirectory.length; i++) {
    this.dataDirectory[i] = new DataDirectoryHeader(reader);
  }

}

module.exports = OptionalHeader;
