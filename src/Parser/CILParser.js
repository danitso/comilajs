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

var AssemblyOSRow = require('./Row/AssemblyOSRow');
var AssemblyProcessorRow = require('./Row/AssemblyProcessorRow');
var AssemblyRefOSRow = require('./Row/AssemblyRefOSRow');
var AssemblyRefProcessorRow = require('./Row/AssemblyRefProcessorRow');
var AssemblyRefRow = require('./Row/AssemblyRefRow');
var AssemblyRow = require('./Row/AssemblyRow');
var ClassLayoutRow = require('./Row/ClassLayoutRow');
var ConstantRow = require('./Row/ConstantRow');
var CORHeader = require('./Header/CORHeader');
var CustomAttributeRow = require('./Row/CustomAttributeRow');
var DeclSecurityRow = require('./Row/DeclSecurityRow');
var EventMapRow = require('./Row/EventMapRow');
var EventRow = require('./Row/EventRow');
var ExportedTypeRow = require('./Row/ExportedTypeRow');
var Extend = require('extend');
var FieldRow = require('./Row/FieldRow');
var FieldRVARow = require('./Row/FieldRVARow');
var FieldLayoutRow = require('./Row/FieldLayoutRow');
var FieldMarshalRow = require('./Row/FieldMarshalRow');
var FileRow = require('./Row/FileRow');
var GenericParamRow = require('./Row/GenericParamRow');
var GenericParamConstraintRow = require('./Row/GenericParamConstraintRow');
var ImplMapRow = require('./Row/ImplMapRow');
var InterfaceImplRow = require('./Row/InterfaceImplRow');
var ParserException = require('./Exception/ParserException');
var ManifestResourceRow = require('./Row/ManifestResourceRow');
var MetadataHeader = require('./Header/MetadataHeader');
var MemberRefRow = require('./Row/MemberRefRow');
var NestedClassRow = require('./Row/NestedClassRow');
var MethodDefRow = require('./Row/MethodDefRow');
var MethodHeader = require('./Header/MethodHeader');
var MethodImplRow = require('./Row/MethodImplRow');
var MethodSemanticsRow = require('./Row/MethodSemanticsRow');
var ModuleRefRow = require('./Row/ModuleRefRow');
var ModuleRow = require('./Row/ModuleRow');
var ParamRow = require('./Row/ParamRow');
var PEParser = require('./PEParser');
var PropertyMapRow = require('./Row/PropertyMapRow');
var PropertyRow = require('./Row/PropertyRow');
var StandAloneSigRow = require('./Row/StandAloneSigRow');
var TableIndexes = require('./Constant/TableIndexes');
var TablesHeader = require('./Header/TablesHeader');
var TypeDefRow = require('./Row/TypeDefRow');
var TypeRefRow = require('./Row/TypeRefRow');
var TypeSpecRow = require('./Row/TypeSpecRow');

/**
 * Class CILParser.
 *
 * @param {string} path
 *   The file path.
 * @param {ArrayBuffer} [data]
 *   The file contents.
 *
 * @constructor
 * @extends {PEParser}
 */
function CILParser (path, data) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new PEParser(path, data));

  /**
   * The COR header.
   *
   * @type {CORHeader}
   *
   * @protected
   */
  this._corHeader = null;

  /**
   * The metadata header.
   *
   * @type {MetadataHeader}
   *
   * @protected
   */
  this._metadataHeader = null;

  /**
   * The method headers.
   *
   * @type {Array<MethodHeader>}
   *
   * @protected
   */
  this._methodHeaders = null;

  /**
   * The metadata tables.
   *
   * @type {Array<Object>}
   *
   * @protected
   */
  this._tables = null;

  /**
   * The tables header.
   *
   * @type {TablesHeader}
   *
   * @protected
   */
  this._tablesHeader = null;

  /**
   * Retrieves a stream header.
   *
   * @param {string} name
   *   The stream name.
   *
   * @return {StreamHeader|null}
   *   Returns the stream header or NULL if not found.
   */
  this.getStreamHeader = function (name) {
    var streamHeaders = this.readMetadataHeader().streamHeaders;

    for (var i = 0; i < streamHeaders.length; i++) {
      if (streamHeaders[i].name === name) {
        return streamHeaders[i];
      }
    }

    return null;
  };

  /**
   * Reads a blob index from the stream.
   *
   * @return {number}
   *   Returns an index.
   */
  this.readBlobIndex = function () {
    if ((this.readTablesHeader().heapOffsetSizes & 0x04) !== 0) {
      return this.readUInt(4);
    }
    else {
      return this.readUInt(2);
    }
  };

  /**
   * Reads the COR header.
   *
   * @return {CORHeader}
   *   Returns the header as an object.
   *
   * @throws {ParserException}
   *   Thrown if the header is missing or is invalid.
   */
  this.readCORHeader = function () {
    if (!this._corHeader) {
      // Verify that the CLR (formerly COM) data directory is available.
      if ((this.readOptionalHeader().dataDirectory.length < 15) ||
        (this.readOptionalHeader().dataDirectory[14].size < 1)) {
        throw new ParserException('The CLR data directory is missing');
      }

      // Move the stream cursor to the position of the COR header.
      this.setPosition(this.getFileOffset(
        this.readOptionalHeader().dataDirectory[14].virtualAddress));

      // Read the the header and throw an exception if it is invalid.
      this._corHeader = new CORHeader(this);

      if (this._corHeader.sizeOfHeader !== 72) {
        throw new ParserException('Invalid COR header');
      }
    }

    return this._corHeader;
  };

  /**
   * Reads a GUID from the heap.
   *
   * @param {number} index
   *   The index into the heap.
   *
   * @return {string}
   *   Returns a 128-bit unique identifier.
   */
  this.readGUIDFromHeap = function (index) {
    // Locate the table stream and throw an exception if it is missing.
    var streamHeader = this.getStreamHeader('#GUID');

    if (!streamHeader) {
      throw new ParserException('The GUID stream is missing');
    }

    // Move the stream cursor to the position of the string.
    this.setPosition(this.readMetadataHeader().offset + streamHeader.offset +
      index);

    // Read the GUID from the stream and format it before returning it.
    var guid = '', s = this.readString(16);

    for (var i = 0; i < s.length; i++) {
      if ((i === 4) || (i === 6) || (i === 8) || (i === 10)) {
        guid += '-';
      }

      var hex = s.charCodeAt(i).toString(16);
      guid += (hex.length === 2) ? hex : '0' + hex;
    }

    return guid;
  };

  /**
   * Reads a GUID index from the stream.
   *
   * @return {number}
   *   Returns an index.
   */
  this.readGUIDIndex = function () {
    if ((this.readTablesHeader().heapOffsetSizes & 0x02) !== 0) {
      return this.readUInt(4);
    }
    else {
      return this.readUInt(2);
    }
  };

  /**
   * Reads the CLR metadata header.
   *
   * @return {MetadataHeader}
   *   Returns the header values.
   *
   * @throws {ParserException}
   *   Thrown if the header is missing or is invalid.
   */
  this.readMetadataHeader = function () {
    if (!this._metadataHeader) {
      // Verify that the metadata directory is available.
      if (this.readCORHeader().metadata.size < 1) {
        throw new ParserException('The metadata header is missing');
      }

      // Move the stream cursor to the position of the metadata header.
      this.setPosition(this.getFileOffset(
        this.readCORHeader().metadata.virtualAddress));

      // Read the header and throw an exception if it is invalid.
      this._metadataHeader = new MetadataHeader(this);

      if (this._metadataHeader.signature !== 0x424A5342) {
        throw new ParserException('Invalid metadata header');
      }
    }

    return this._metadataHeader;
  };

  /**
   * Reads the CLR method headers.
   *
   * @return {Array<MethodHeader>}
   *   Returns an array of headers.
   */
  this.readMethodHeaders = function () {
    if (!this._methodHeaders) {
      var tables = this.readTables();

      // Initialize the array of method headers.
      this._methodHeaders = new Array(tables[TableIndexes.METHOD_DEF].length);

      // Parse the method headers referenced by the MethodDef table.
      for (var i = 0; i < tables[TableIndexes.METHOD_DEF].length; i++) {
        this.setPosition(this.getFileOffset(tables[TableIndexes.METHOD_DEF][i]
          .rva));
        this._methodHeaders[i] = new MethodHeader(this);
      }
    }

    return this._methodHeaders;
  };

  /**
   * Reads the IL instructions for a method.
   *
   * @param {MethodHeader} header
   *   The method header.
   *
   * @return {Array<number>}
   *   Returns an array of bytes.
   */
  this.readMethodInstructions = function (header) {
    this.setPosition(header.codeOffset);
    return this.readBytes(header.codeSize);
  };

  /**
   * Reads a string from the heap.
   *
   * @param {number} index
   *   The index into the heap.
   *
   * @return {string}
   *   Returns a UTF-8 encoded string.
   */
  this.readStringFromHeap = function (index) {
    // Locate the table stream and throw an exception if it is missing.
    var streamHeader = this.getStreamHeader('#Strings');

    if (!streamHeader) {
      throw new ParserException('The string stream is missing');
    }

    // Move the stream cursor to the position of the string.
    this.setPosition(this.readMetadataHeader().offset + streamHeader.offset +
      index);

    // Read the NULL terminated string.
    return decodeURIComponent(encodeURIComponent(this.readString(0, true)));
  };

  /**
   * Reads a string index from the stream.
   *
   * @return {number}
   *   Returns an index.
   */
  this.readStringIndex = function () {
    if ((this.readTablesHeader().heapOffsetSizes & 0x01) !== 0) {
      return this.readUInt(4);
    }
    else {
      return this.readUInt(2);
    }
  };

  /**
   * Reads the metadata tables.
   *
   * @return {Object}
   *   Returns an array containing the tables.
   */
  this.readTables = function () {
    if (!this._tables) {
      // Ensure that the tables header has been read.
      var header = this.readTablesHeader();

      // Move the buffer cursor to the position of the tables.
      this.setPosition(header.tablesOffset);

      // Read the row count for each of the tables as we cannot read the rows
      // before this has been done.
      this._tables = [];

      for (var i = 0; i < 64; i++) {
        if (((i < 32) && (header.maskValidArray[0] & Math.pow(2, i)) === 0) ||
          ((i >= 32) && (header.maskValidArray[1] & Math.pow(2, i - 32)) ===
          0)) {
          continue;
        }

        this._tables[i] = new Array(this.readUInt(4));
      }

      // Now that the row counts have been read, go ahead reading all the rows
      // one table at a time.
      for (i = 0; i < 64; i++) {
        if (!this._tables[i]) {
          continue;
        }

        var rowClass = this._getTableRowClass(i);
        var rowCount = this._tables[i].length;

        for (var r = 0; r < rowCount; r++) {
          // jscs:disable requireCapitalizedConstructors
          this._tables[i][r] = new rowClass(this);
          // jscs:enable requireCapitalizedConstructors
        }
      }
    }

    return this._tables;
  };

  /**
   * Reads the metadata tables header.
   *
   * @return {TablesHeader}
   *   Returns the header as an object.
   *
   * @throws {ParserException}
   *   Thrown if the table stream is missing or if the header is invalid.
   */
  this.readTablesHeader = function () {
    if (!this._tablesHeader) {
      // Locate the table stream and throw an exception if it is missing.
      var streamHeader = this.getStreamHeader('#~');

      if (!streamHeader) {
        throw new ParserException('The stream for the tables is missing');
      }

      // Move the stream cursor to the position of the tables header.
      this.setPosition(this.readMetadataHeader().offset + streamHeader.offset);

      // Read the header and throw an exception if it is invalid.
      this._tablesHeader = new TablesHeader(this);

      if ((this._tablesHeader.reserved1 !== 0) ||
        (this._tablesHeader.reserved2 !== 1)) {
        throw new ParserException('Invalid tables header');
      }
    }

    return this._tablesHeader;
  };

  /**
   * Retrieves the constructor for a table row.
   *
   * @param {number} tableIndex
   *   The table index.
   *
   * @return {Function}
   *   Returns a constructor.
   *
   * @protected
   */
  this._getTableRowClass = function (tableIndex) {
    switch (tableIndex) {
      case TableIndexes.ASSEMBLY:
        return AssemblyRow;

      case TableIndexes.ASSEMBLY_OS:
        return AssemblyOSRow;

      case TableIndexes.ASSEMBLY_PROCESSOR:
        return AssemblyProcessorRow;

      case TableIndexes.ASSEMBLY_REF:
        return AssemblyRefRow;

      case TableIndexes.ASSEMBLY_REF_OS:
        return AssemblyRefOSRow;

      case TableIndexes.ASSEMBLY_REF_PROCESSOR:
        return AssemblyRefProcessorRow;

      case TableIndexes.CLASS_LAYOUT:
        return ClassLayoutRow;

      case TableIndexes.CONSTANT:
        return ConstantRow;

      case TableIndexes.CUSTOM_ATTRIBUTE:
        return CustomAttributeRow;

      case TableIndexes.DECL_SECURITY:
        return DeclSecurityRow;

      case TableIndexes.EVENT:
        return EventRow;

      case TableIndexes.EVENT_MAP:
        return EventMapRow;

      case TableIndexes.EXPORTED_TYPE:
        return ExportedTypeRow;

      case TableIndexes.FIELD:
        return FieldRow;

      case TableIndexes.FIELD_LAYOUT:
        return FieldLayoutRow;

      case TableIndexes.FIELD_MARSHAL:
        return FieldMarshalRow;

      case TableIndexes.FIELD_RVA:
        return FieldRVARow;

      case TableIndexes.FILE:
        return FileRow;

      case TableIndexes.GENERIC_PARAM:
        return GenericParamRow;

      case TableIndexes.GENERIC_PARAM_CONSTRAINT:
        return GenericParamConstraintRow;

      case TableIndexes.IMPL_MAP:
        return ImplMapRow;

      case TableIndexes.INTERFACE_IMPL:
        return InterfaceImplRow;

      case TableIndexes.MANIFEST_RESOURCE:
        return ManifestResourceRow;

      case TableIndexes.MEMBER_REF:
        return MemberRefRow;

      case TableIndexes.NESTED_CLASS:
        return NestedClassRow;

      case TableIndexes.METHOD_DEF:
        return MethodDefRow;

      case TableIndexes.METHOD_IMPL:
        return MethodImplRow;

      case TableIndexes.METHOD_SEMANTICS:
        return MethodSemanticsRow;

      case TableIndexes.MODULE:
        return ModuleRow;

      case TableIndexes.MODULE_REF:
        return ModuleRefRow;

      case TableIndexes.PARAM:
        return ParamRow;

      case TableIndexes.PROPERTY:
        return PropertyRow;

      case TableIndexes.PROPERTY_MAP:
        return PropertyMapRow;

      case TableIndexes.STAND_ALONE_SIG:
        return StandAloneSigRow;

      case TableIndexes.TYPE_DEF:
        return TypeDefRow;

      case TableIndexes.TYPE_REF:
        return TypeRefRow;

      case TableIndexes.TYPE_SPEC:
        return TypeSpecRow;

      default:
        throw new ParserException('Unsupported metadata table at index ' +
          tableIndex);
    }
  };

}

module.exports = CILParser;
