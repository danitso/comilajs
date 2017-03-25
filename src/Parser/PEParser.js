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

var BinaryParser = require('./BinaryParser');
var COFFHeader = require('./Header/COFFHeader');
var DOSHeader = require('./Header/DOSHeader');
var Extend = require('extend');
var ImageAttributes = require('./Constant/ImageAttributes');
var ParserException = require('./Exception/ParserException');
var OptionalHeader = require('./Header/OptionalHeader');
var ResourceDirectory = require('./Directory/ResourceDirectory');
var SectionHeader = require('./Header/SectionHeader');

/**
 * Class PEParser.
 *
 * @param {string} path
 *   The file path.
 * @param {ArrayBuffer} [data]
 *   The file contents.
 *
 * @constructor
 * @extends {BinaryParser}
 */
function PEParser (path, data) {

  "use strict";

  // Invoke the parent constructor.
  Extend(true, this, new BinaryParser(path, data));

  /**
   * The COFF header.
   *
   * @type {COFFHeader}
   *
   * @protected
   */
  this._coffHeader = null;

  /**
   * The DOS header.
   *
   * @type {DOSHeader}
   *
   * @protected
   */
  this._dosHeader = null;

  /**
   * The optional header.
   *
   * @type {OptionalHeader}
   *
   * @protected
   */
  this._optionalHeader = null;

  /**
   * The resource directory.
   *
   * @type {ResourceDirectory}
   *
   * @protected
   */
  this._resourceDirectory = null;

  /**
   * The resource directory file offset.
   *
   * @type {number}
   *
   * @protected
   */
  this._resourceDirectoryFileOffset = null;

  /**
   * The section headers.
   *
   * @type {Array<SectionHeader>}
   *
   * @protected
   */
  this._sectionHeaders = null;

  /**
   * Calculates the file offset for a relative virtual address.
   *
   * @param {number} rva
   *   The relative virtual address.
   *
   * @return {number}
   *   Returns a file offset.
   */
  this.getFileOffset = function (rva) {
    // Determine which section the address belongs to and convert it to a file
    // offset.
    var sectionHeaders = this.readSectionHeaders();

    for (var i = 0; i < sectionHeaders.length; i++) {
      if ((rva >= sectionHeaders[i].virtualAddress) &&
        (rva <= sectionHeaders[i].virtualAddress +
        sectionHeaders[i].sizeOfRawData)) {
        return sectionHeaders[i].pointerToRawData +
          (rva - sectionHeaders[i].virtualAddress);
      }
    }

    return -1;
  };

  /**
   * Retrieves the resource directory file offset.
   *
   * @return {number}
   *   Returns the file offset or -1 if the resource directory is empty.
   */
  this.getResourceDirectoryFileOffset = function() {
    if (!this._resourceDirectoryFileOffset) {
      // Locate the resource section in order to determine the file offset.
      var sectionHeaders = this.readSectionHeaders();
      var sectionHeader = null;

      for (var i = 0; i < sectionHeaders.length; i++) {
        if (sectionHeaders[i].name === '.rsrc') {
          sectionHeader = sectionHeaders[i];
          break;
        }
      }

      if (sectionHeader) {
        this._resourceDirectoryFileOffset = sectionHeader.pointerToRawData;
      }
      else {
        this._resourceDirectoryFileOffset = -1;
      }
    }

    return this._resourceDirectoryFileOffset;
  };

  /**
   * Reads the COFF header.
   *
   * @return {COFFHeader}
   *   Returns the header as an object.
   *
   * @throws {ParserException}
   *   Thrown if the header is invalid.
   */
  this.readCOFFHeader = function () {
    if (!this._coffHeader) {
      // Move the stream cursor to the position of the COFF header as specified
      // by the DOS header.
      this.setPosition(this.readDOSHeader().lfanew);

      // Read the header and throw an exception if the header seems to be
      // invalid.
      this._coffHeader = new COFFHeader(this);

      if (this._coffHeader.signature !== ImageAttributes.IMAGE_NT_SIGNATURE) {
        throw new ParserException('Invalid COFF header');
      }
    }

    return this._coffHeader;
  };

  /**
   * Reads the DOS header.
   *
   * @return {DOSHeader}
   *   Returns the header as an object.
   *
   * @throws {ParserException}
   *   Thrown if the header is invalid.
   */
  this.readDOSHeader = function () {
    if (!this._dosHeader) {
      // Reset the position to the beginning of the stream.
      this.setPosition(0);

      // Read the header from the buffer and throw an exception if the header is
      // invalid.
      this._dosHeader = new DOSHeader(this);

      if (this._dosHeader.magic !== ImageAttributes.IMAGE_DOS_SIGNATURE) {
        throw new ParserException('Invalid DOS header');
      }
    }

    return this._dosHeader;
  };

  /**
   * Reads the optional header.
   *
   * @return {OptionalHeader}
   *   Returns the header values.
   *
   * @throws {ParserException}
   *   Thrown if the header is invalid.
   */
  this.readOptionalHeader = function () {
    if ((!this._optionalHeader) &&
      (this.readCOFFHeader().sizeOfOptionalHeader > 0)) {
      // Move the stream cursor to the position of the optional header as
      // specified by the DOS header and the size of the COFF header.
      this.setPosition(this.readDOSHeader().lfanew + 24);

      // Read the entire header including the data directories.
      this._optionalHeader = new OptionalHeader(this);

      if ((this._optionalHeader.magic !==
        ImageAttributes.IMAGE_NT_OPTIONAL_HDR64_MAGIC) &&
        (this._optionalHeader.magic !==
        ImageAttributes.IMAGE_NT_OPTIONAL_HDR32_MAGIC) &&
        (this._optionalHeader.magic !==
        ImageAttributes.IMAGE_ROM_OPTIONAL_HDR_MAGIC)) {
        throw new ParserException('Invalid optional header');
      }
    }

    return this._optionalHeader;
  };

  /**
   * Reads the resource directory.
   *
   * @return {ResourceDirectory}
   *   Returns the resource directory.
   */
  this.readResourceDirectory = function() {
    if (this.getResourceDirectoryFileOffset() < 1) {
      return this._resourceDirectory;
    }

    this.setPosition(this.getResourceDirectoryFileOffset());
    this._resourceDirectory = new ResourceDirectory(this);
    return this._resourceDirectory;
  };

  /**
   * Reads the section headers.
   *
   * @return {Array<SectionHeader>}
   *   Returns an array of section headers.
   */
  this.readSectionHeaders = function () {
    if (!this._sectionHeaders) {
      // Move the stream cursor to the position of the section headers.
      this.setPosition(this.readDOSHeader().lfanew + 24 +
        this.readCOFFHeader().sizeOfOptionalHeader);

      // Read each of the section headers.
      this._sectionHeaders = new Array(this.readCOFFHeader().numberOfSections);

      for (var i = 0; i < this._sectionHeaders.length; i++) {
        this._sectionHeaders[i] = new SectionHeader(this);
      }
    }

    return this._sectionHeaders;
  };

}

module.exports = PEParser;
