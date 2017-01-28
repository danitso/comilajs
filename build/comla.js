/*!
 * ComlaJS v0.1.0
 * Copyright (c) 2017 Danitso
 * http://www.comlajs.org/
 * 
 * This program is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("comlajs", [], factory);
	else if(typeof exports === 'object')
		exports["comlajs"] = factory();
	else
		root["comlajs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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

	var CLIParser = __webpack_require__(1);

	/**
	 * Class Main.
	 *
	 * @constructor
	 * @final
	 */
	function Main () {

	  /**
	   * Runs an executable.
	   *
	   * @param {string} path
	   *   The path.
	   */
	  this.run = function (path) {
	    console.log('#### This library is not yet able to run applications ####');
	    console.log('----------------------------------------------------------');
	    console.log('Dumping information about the executable:');

	    var reader = new CLIParser(path);

	    reader.loadFile(function() {
	      console.log(reader.readDOSHeader());
	      console.log(reader.readCOFFHeader());
	      console.log(reader.readOptionalHeader());
	      console.log(reader.readSectionHeaders());
	      console.log(reader.readResourceDirectory());
	      console.log(reader.readCORHeader());
	      console.log(reader.readMetadataHeader());
	      console.log(reader.readTablesHeader());
	      console.log(reader.readTables());
	    }, function() {
	      console.log('Failed to load the file');
	    });
	  };

	}

	module.exports = new Main();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

	var AssemblyOSRow = __webpack_require__(2);
	var AssemblyProcessorRow = __webpack_require__(3);
	var AssemblyRefOSRow = __webpack_require__(4);
	var AssemblyRefProcessorRow = __webpack_require__(7);
	var AssemblyRefRow = __webpack_require__(8);
	var AssemblyRow = __webpack_require__(9);
	var ClassLayoutRow = __webpack_require__(10);
	var ConstantRow = __webpack_require__(11);
	var CORHeader = __webpack_require__(12);
	var CustomAttributeRow = __webpack_require__(14);
	var DeclSecurityRow = __webpack_require__(15);
	var EventMapRow = __webpack_require__(16);
	var EventRow = __webpack_require__(17);
	var ExportedTypeRow = __webpack_require__(18);
	var Extend = __webpack_require__(19);
	var FieldRow = __webpack_require__(20);
	var FieldRVARow = __webpack_require__(21);
	var FieldLayoutRow = __webpack_require__(22);
	var FieldMarshalRow = __webpack_require__(23);
	var FileRow = __webpack_require__(24);
	var GenericParamRow = __webpack_require__(25);
	var GenericParamConstraintRow = __webpack_require__(26);
	var ImplMapRow = __webpack_require__(27);
	var InterfaceImplRow = __webpack_require__(28);
	var ParserException = __webpack_require__(29);
	var ManifestResourceRow = __webpack_require__(31);
	var MetadataHeader = __webpack_require__(32);
	var MemberRefRow = __webpack_require__(34);
	var NestedClassRow = __webpack_require__(35);
	var MethodDefRow = __webpack_require__(36);
	var MethodImplRow = __webpack_require__(37);
	var MethodSemanticsRow = __webpack_require__(38);
	var ModuleRefRow = __webpack_require__(39);
	var ModuleRow = __webpack_require__(40);
	var ParamRow = __webpack_require__(41);
	var PEParser = __webpack_require__(42);
	var PropertyMapRow = __webpack_require__(52);
	var PropertyRow = __webpack_require__(53);
	var StandAloneSigRow = __webpack_require__(54);
	var TableIndexes = __webpack_require__(6);
	var TablesHeader = __webpack_require__(55);
	var TypeDefRow = __webpack_require__(56);
	var TypeRefRow = __webpack_require__(57);
	var TypeSpecRow = __webpack_require__(58);

	/**
	 * Class CLIParser.
	 *
	 * @param {string} path
	 *   The file path.
	 * @param {ArrayBuffer} data
	 *   The file contents.
	 *
	 * @constructor
	 * @extends {PEParser}
	 */
	function CLIParser (path, data) {

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
	          this._tables[i][r] = new rowClass(this);
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

	module.exports = CLIParser;


/***/ },
/* 2 */
/***/ function(module, exports) {

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
	 * Class AssemblyOSRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function AssemblyOSRow (reader) {

	  /**
	   * The OS platform id.
	   *
	   * @type {number}
	   */
	  this.osPlatformID = reader.readUInt(4);

	  /**
	   * The OS major version.
	   *
	   * @type {number}
	   */
	  this.osMajorVersion = reader.readUInt(4);

	  /**
	   * The OS minor version.
	   *
	   * @type {number}
	   */
	  this.osMinorVersion = reader.readUInt(4);

	}

	module.exports = AssemblyOSRow;


/***/ },
/* 3 */
/***/ function(module, exports) {

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
	 * Class AssemblyProcessorRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function AssemblyProcessorRow (reader) {

	  /**
	   * The processor type.
	   *
	   * @type {number}
	   */
	  this.processor = reader.readUInt(4);

	}

	module.exports = AssemblyProcessorRow;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class AssemblyRefOSRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function AssemblyRefOSRow (reader) {

	  /**
	   * The OS platform id.
	   *
	   * @type {number}
	   */
	  this.osPlatformID = reader.readUInt(4);

	  /**
	   * The OS major version.
	   *
	   * @type {number}
	   */
	  this.osMajorVersion = reader.readUInt(4);

	  /**
	   * The OS minor version.
	   *
	   * @type {number}
	   */
	  this.osMinorVersion = reader.readUInt(4);

	  /**
	   * The reference to the assembly reference row.
	   *
	   * @type {RowReference}
	   */
	  this.assemblyRef = new RowReference(reader, [
	    TableIndexes.ASSEMBLY_REF
	  ]);

	}

	module.exports = AssemblyRefOSRow;


/***/ },
/* 5 */
/***/ function(module, exports) {

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
	 * Class RowReference.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 * @param {Array<number>} tableIndexes
	 *   The table indexes.
	 *
	 * @constructor
	 * @struct
	 */
	function RowReference (reader, tableIndexes) {

	  /**
	   * The table index.
	   *
	   * @type {number}
	   */
	  this.tableIndex = -1;

	  /**
	   * The row index.
	   *
	   * @type {number}
	   */
	  this.rowIndex = -1;

	  // Initialize the object.
	  (function (object, reader, tableIndexes) {

	    var bc = 1, bv, size = 2, tables = reader.readTables();

	    // Determine how many bits are required to represent the table index.
	    while ((bv = Math.pow(2, bc - 1)) < tableIndexes.length) {
	      bc++;
	    }

	    // Determine if the index is represented as a 16-bit or 32-bit integer.
	    for (var i = 0; i < tableIndexes.length; i++) {
	      if ((tables[tableIndexes[i]]) &&
	        (tables[tableIndexes[i]].length > 0xFFFF)) {
	        size = 4;
	        break;
	      }
	    }

	    // Read the integer that contains both the table index and the row index.
	    var tableRowIndex = reader.readUInt(size);

	    // Split the integer into two separate values and update the properties.
	    object.tableIndex = tableIndexes[tableRowIndex & (bv - 1)];
	    object.rowIndex = tableRowIndex >> bc;

	  }(this, reader, tableIndexes));

	}

	module.exports = RowReference;


/***/ },
/* 6 */
/***/ function(module, exports) {

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
	 * Class TableIndexes.
	 *
	 * @constructor
	 * @struct
	 */
	function TableIndexes () {

	  /**
	   * The table index for the 'Assembly' table.
	   *
	   * @const {number}
	   */
	  this.ASSEMBLY = 32;

	  /**
	   * The table index for the 'AssemblyOS' table.
	   *
	   * @const {number}
	   */
	  this.ASSEMBLY_OS = 34;

	  /**
	   * The table index for the 'AssemblyProcessor' table.
	   *
	   * @const {number}
	   */
	  this.ASSEMBLY_PROCESSOR = 33;

	  /**
	   * The table index for the 'AssemblyRef' table.
	   *
	   * @const {number}
	   */
	  this.ASSEMBLY_REF = 35;

	  /**
	   * The table index for the 'AssemblyRefOS' table.
	   *
	   * @const {number}
	   */
	  this.ASSEMBLY_REF_OS = 37;

	  /**
	   * The table index for the 'AssemblyRefProcessor' table.
	   *
	   * @const {number}
	   */
	  this.ASSEMBLY_REF_PROCESSOR = 36;

	  /**
	   * The table index for the 'ClassLayout' table.
	   *
	   * @const {number}
	   */
	  this.CLASS_LAYOUT = 15;

	  /**
	   * The table index for the 'Constant' table.
	   *
	   * @const {number}
	   */
	  this.CONSTANT = 11;

	  /**
	   * The table index for the 'CustomAttribute' table.
	   *
	   * @const {number}
	   */
	  this.CUSTOM_ATTRIBUTE = 12;

	  /**
	   * The table index for the 'DeclSecurity' table.
	   *
	   * @const {number}
	   */
	  this.DECL_SECURITY = 14;

	  /**
	   * The table index for the 'Event' table.
	   *
	   * @const {number}
	   */
	  this.EVENT = 20;

	  /**
	   * The table index for the 'EventMap' table.
	   *
	   * @const {number}
	   */
	  this.EVENT_MAP = 18;

	  /**
	   * The table index for the 'ExportedType' table.
	   *
	   * @const {number}
	   */
	  this.EXPORTED_TYPE = 39;

	  /**
	   * The table index for the 'Field' table.
	   *
	   * @const {number}
	   */
	  this.FIELD = 4;

	  /**
	   * The table index for the 'FieldLayout' table.
	   *
	   * @const {number}
	   */
	  this.FIELD_LAYOUT = 16;

	  /**
	   * The table index for the 'FieldMarshal' table.
	   *
	   * @const {number}
	   */
	  this.FIELD_MARSHAL = 13;

	  /**
	   * The table index for the 'FieldRVA' table.
	   *
	   * @const {number}
	   */
	  this.FIELD_RVA = 29;

	  /**
	   * The table index for the 'File' table.
	   *
	   * @const {number}
	   */
	  this.FILE = 38;

	  /**
	   * The table index for the 'GenericParam' table.
	   *
	   * @const {number}
	   */
	  this.GENERIC_PARAM = 42;

	  /**
	   * The table index for the 'GenericParamConstraint' table.
	   *
	   * @const {number}
	   */
	  this.GENERIC_PARAM_CONSTRAINT = 44;

	  /**
	   * The table index for the 'ImplMap' table.
	   *
	   * @const {number}
	   */
	  this.IMPL_MAP = 28;

	  /**
	   * The table index for the 'InterfaceImpl' table.
	   *
	   * @const {number}
	   */
	  this.INTERFACE_IMPL = 9;

	  /**
	   * The table index for the 'ManifestResource' table.
	   *
	   * @const {number}
	   */
	  this.MANIFEST_RESOURCE = 40;

	  /**
	   * The table index for the 'MemberRef' table.
	   *
	   * @const {number}
	   */
	  this.MEMBER_REF = 10;

	  /**
	   * The table index for the 'MethodDef' table.
	   *
	   * @const {number}
	   */
	  this.METHOD_DEF = 6;

	  /**
	   * The table index for the 'MethodImpl' table.
	   *
	   * @const {number}
	   */
	  this.METHOD_IMPL = 25;

	  /**
	   * The table index for the 'MethodSemantics' table.
	   *
	   * @const {number}
	   */
	  this.METHOD_SEMANTICS = 24;

	  /**
	   * The table index for the 'Module' table.
	   *
	   * @const {number}
	   */
	  this.MODULE = 0;

	  /**
	   * The table index for the 'ModuleRef' table.
	   *
	   * @const {number}
	   */
	  this.MODULE_REF = 26;

	  /**
	   * The table index for the 'NestedClass' table.
	   *
	   * @const {number}
	   */
	  this.NESTED_CLASS = 41;

	  /**
	   * The table index for the 'Param' table.
	   *
	   * @const {number}
	   */
	  this.PARAM = 8;

	  /**
	   * The table index for the 'Property' table.
	   *
	   * @const {number}
	   */
	  this.PROPERTY = 23;

	  /**
	   * The table index for the 'PropertyMap' table.
	   *
	   * @const {number}
	   */
	  this.PROPERTY_MAP = 21;

	  /**
	   * The table index for the 'StandAloneSig' table.
	   *
	   * @const {number}
	   */
	  this.STAND_ALONE_SIG = 17;

	  /**
	   * The table index for the 'TypeRef' table.
	   *
	   * @const {number}
	   */
	  this.TYPE_REF = 1;

	  /**
	   * The table index for the 'TypeDef' table.
	   *
	   * @const {number}
	   */
	  this.TYPE_DEF = 2;

	  /**
	   * The table index for the 'TypeSpec' table.
	   *
	   * @const {number}
	   */
	  this.TYPE_SPEC = 27;

	}

	module.exports = new TableIndexes();


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class AssemblyRefProcessorRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function AssemblyRefProcessorRow (reader) {

	  /**
	   * The processor type.
	   *
	   * @type {number}
	   */
	  this.processor = reader.readUInt(4);

	  /**
	   * The reference to the assembly reference row.
	   *
	   * @type {RowReference}
	   */
	  this.assemblyRef = new RowReference(reader, [
	    TableIndexes.ASSEMBLY_REF
	  ]);

	}

	module.exports = AssemblyRefProcessorRow;


/***/ },
/* 8 */
/***/ function(module, exports) {

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
	 * Class AssemblyRefRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function AssemblyRefRow (reader) {

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
	   * The public key or token as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.publicKeyOrToken = reader.readBlobIndex();

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

	  /**
	   * The hash value as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.hashValue = reader.readBlobIndex();

	}

	module.exports = AssemblyRefRow;


/***/ },
/* 9 */
/***/ function(module, exports) {

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
	 * Class AssemblyRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function AssemblyRow (reader) {

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


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class ClassLayoutRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ClassLayoutRow (reader) {

	  /**
	   * The packing size.
	   *
	   * @type {number}
	   */
	  this.packingSize = reader.readUInt(2);

	  /**
	   * The class size.
	   *
	   * @type {number}
	   */
	  this.classSize = reader.readUInt(4);

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.parent = new RowReference(reader, [
	    TableIndexes.TYPE_DEF
	  ]);

	}

	module.exports = ClassLayoutRow;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class ConstantRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ConstantRow (reader) {

	  /**
	   * The type.
	   *
	   * @type {number}
	   */
	  this.type = reader.readUInt(1) + reader.readUInt(1);

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.parent = new RowReference(reader, [
	    TableIndexes.FIELD,
	    TableIndexes.PARAM,
	    TableIndexes.PROPERTY
	  ]);

	  /**
	   * The value as an index into the Blob heap.
	   *
	   * @type {number}
	   */
	  this.value = reader.readBlobIndex();

	}

	module.exports = ConstantRow;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

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

	var DataDirectoryHeader = __webpack_require__(13);

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


/***/ },
/* 13 */
/***/ function(module, exports) {

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
	 * Class DataDirectoryHeader.
	 *
	 * @param {BinaryParser} reader
	 *   The binary reader.
	 *
	 * @constructor
	 * @struct
	 */
	function DataDirectoryHeader (reader) {

	  /**
	   * The relative virtual address of the table.
	   *
	   * @type {number}
	   */
	  this.virtualAddress = reader.readUInt(4);

	  /**
	   * The size of the table, in bytes.
	   *
	   * @type {number}
	   */
	  this.size = reader.readUInt(4);

	}

	module.exports = DataDirectoryHeader;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class ConstantRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function CustomAttributeRow (reader) {

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.parent = new RowReference(reader, [
	    TableIndexes.METHOD_DEF,
	    TableIndexes.FIELD,
	    TableIndexes.TYPE_REF,
	    TableIndexes.TYPE_DEF,
	    TableIndexes.PARAM,
	    TableIndexes.INTERFACE_IMPL,
	    TableIndexes.MEMBER_REF,
	    TableIndexes.MODULE,
	    -1,
	    TableIndexes.PROPERTY,
	    TableIndexes.EVENT,
	    TableIndexes.STAND_ALONE_SIG,
	    TableIndexes.MODULE_REF,
	    TableIndexes.TYPE_SPEC,
	    TableIndexes.ASSEMBLY,
	    TableIndexes.ASSEMBLY_REF,
	    TableIndexes.FILE,
	    TableIndexes.EXPORTED_TYPE,
	    TableIndexes.MANIFEST_RESOURCE
	  ]);

	  /**
	   * The reference to the type row.
	   *
	   * @type {RowReference}
	   */
	  this.type = new RowReference(reader, [
	    -1,
	    -1,
	    TableIndexes.METHOD_DEF,
	    TableIndexes.MEMBER_REF,
	    -1
	  ]);

	  /**
	   * The value as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.value = reader.readBlobIndex();

	}

	module.exports = CustomAttributeRow;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class DeclSecurityRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function DeclSecurityRow (reader) {

	  /**
	   * The action.
	   *
	   * @type {number}
	   */
	  this.action = reader.readUInt(2);

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.parent = new RowReference(reader, [
	    TableIndexes.TYPE_DEF,
	    TableIndexes.METHOD_DEF,
	    TableIndexes.ASSEMBLY
	  ]);

	  /**
	   * The native type as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.permissionSet = reader.readBlobIndex();

	}

	module.exports = DeclSecurityRow;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class EventMapRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function EventMapRow (reader) {

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.parent = new RowReference(reader, [
	    TableIndexes.TYPE_DEF
	  ]);

	  /**
	   * The reference to the first event row.
	   *
	   * @type {RowReference}
	   */
	  this.eventList = new RowReference(reader, [
	    TableIndexes.EVENT
	  ]);

	}

	module.exports = EventMapRow;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class EventRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function EventRow (reader) {

	  /**
	   * The event flags.
	   *
	   * @type {number}
	   */
	  this.eventFlags = reader.readUInt(2);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The event type as a reference to a TypeDef, TypeRef or TypeSpec row.
	   *
	   * @type {RowReference}
	   */
	  this.eventType = new RowReference(reader, [
	    TableIndexes.TYPE_DEF,
	    TableIndexes.TYPE_REF,
	    TableIndexes.TYPE_SPEC
	  ]);

	}

	module.exports = EventRow;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class ExportedTypeRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ExportedTypeRow (reader) {

	  /**
	   * The flags.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(4);

	  /**
	   * The type definition id.
	   *
	   * @type {number}
	   */
	  this.typeDefId = reader.readUInt(4);

	  /**
	   * The type name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.typeName = reader.readStringIndex();

	  /**
	   * The type namespace as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.typeNamespace = reader.readStringIndex();

	  /**
	   * The reference to the type information row.
	   *
	   * @type {RowReference}
	   */
	  this.implementation = new RowReference(reader, [
	    TableIndexes.FILE,
	    TableIndexes.EXPORTED_TYPE
	  ]);

	}

	module.exports = ExportedTypeRow;


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};



/***/ },
/* 20 */
/***/ function(module, exports) {

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
	 * Class FieldRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function FieldRow (reader) {

	  /**
	   * The flags.
	   *
	   * @type {number}
	   */
	  this.type = reader.readUInt(2);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The signature as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.signature = reader.readBlobIndex();

	}

	module.exports = FieldRow;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class FieldRVARow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function FieldRVARow (reader) {

	  /**
	   * The relative virtual address of the initial value.
	   *
	   * @type {number}
	   */
	  this.rva = reader.readUInt(4);

	  /**
	   * The field as a reference to a Field row.
	   *
	   * @type {RowReference}
	   */
	  this.field = new RowReference(reader, [
	    TableIndexes.FIELD
	  ]);

	}

	module.exports = FieldRVARow;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class FieldLayoutRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function FieldLayoutRow (reader) {

	  /**
	   * The offset.
	   *
	   * @type {number}
	   */
	  this.offset = reader.readUInt(4);

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.field = new RowReference(reader, [
	    TableIndexes.FIELD
	  ]);

	}

	module.exports = FieldLayoutRow;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class FieldMarshalRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function FieldMarshalRow (reader) {

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.parent = new RowReference(reader, [
	    TableIndexes.FIELD,
	    TableIndexes.PARAM
	  ]);

	  /**
	   * The native type as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.nativeType = reader.readBlobIndex();

	}

	module.exports = FieldMarshalRow;


/***/ },
/* 24 */
/***/ function(module, exports) {

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
	 * Class FileRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function FileRow (reader) {

	  /**
	   * The OS platform id.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(4);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The hash value as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.hashValue = reader.readBlobIndex();

	}

	module.exports = FileRow;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class GenericParamRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function GenericParamRow (reader) {

	  /**
	   * The index of the generic parameter.
	   *
	   * @type {number}
	   */
	  this.number = reader.readUInt(2);

	  /**
	   * The flags.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(2);

	  /**
	   * The reference to the owner of the generic parameter.
	   *
	   * @type {RowReference}
	   */
	  this.owner = new RowReference(reader, [
	    TableIndexes.TYPE_DEF,
	    TableIndexes.METHOD_DEF
	  ]);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	}

	module.exports = GenericParamRow;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class GenericParamConstraintRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function GenericParamConstraintRow (reader) {

	  /**
	   * The reference to the owner row.
	   *
	   * @type {RowReference}
	   */
	  this.owner = new RowReference(reader, [
	    TableIndexes.GENERIC_PARAM
	  ]);

	  /**
	   * The reference to the class row.
	   *
	   * @type {RowReference}
	   */
	  this.constraint = new RowReference(reader, [
	    TableIndexes.TYPE_DEF,
	    TableIndexes.TYPE_REF,
	    TableIndexes.TYPE_SPEC
	  ]);

	}

	module.exports = GenericParamConstraintRow;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class ImplMapRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ImplMapRow (reader) {

	  /**
	   * The mapping flags.
	   *
	   * @type {number}
	   */
	  this.mappingFlags = reader.readUInt(2);

	  /**
	   * The forwarded member as a reference to a Field or MethodDef row.
	   *
	   * @type {RowReference}
	   */
	  this.memberForwarded = new RowReference(reader, [
	    TableIndexes.FIELD,
	    TableIndexes.METHOD_DEF
	  ]);

	  /**
	   * The import name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.importName = reader.readStringIndex();

	  /**
	   * The import scope as a reference to a ModuleRef row.
	   *
	   * @type {RowReference}
	   */
	  this.importScope = new RowReference(reader, [
	    TableIndexes.MODULE
	  ]);

	}

	module.exports = ImplMapRow;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class InterfaceImplRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function InterfaceImplRow (reader) {

	  /**
	   * The reference to the class definition row.
	   *
	   * @type {RowReference}
	   */
	  this.class = new RowReference(reader, [
	    TableIndexes.TYPE_DEF
	  ]);

	  /**
	   * The reference to the interface definition row.
	   *
	   * @type {RowReference}
	   */
	  this.interface = new RowReference(reader, [
	    TableIndexes.TYPE_DEF,
	    TableIndexes.TYPE_REF,
	    TableIndexes.TYPE_SPEC
	  ]);

	}

	module.exports = InterfaceImplRow;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

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

	var CustomException = __webpack_require__(30);
	var Extend = __webpack_require__(19);

	/**
	 * Class ParserException.
	 *
	 * @param {string} message
	 *   The message.
	 *
	 * @constructor
	 * @extends {CustomException}
	 */
	function ParserException (message) {

	  // Invoke the parent constructor.
	  Extend(true, this, new CustomException(message, 'ParserException'));

	}

	module.exports = ParserException;


/***/ },
/* 30 */
/***/ function(module, exports) {

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
	 * Class CustomException.
	 *
	 * @param {string} message
	 *   The message.
	 * @param {string} type
	 *   The type of exception.
	 *
	 * @constructor
	 */
	function CustomException (message, type) {

	  /**
	   * The exception message.
	   *
	   * @type {string}
	   *
	   * @private
	   */
	  this._message = message;

	  /**
	   * The exception type.
	   *
	   * @type {string}
	   *
	   * @private
	   */
	  this._type = (typeof type !== 'undefined') ? type : 'CustomException';

	  /**
	   * Retrieves the exception message.
	   *
	   * @return {string}
	   */
	  this.getMessage = function () {
	    return this._message;
	  };

	  /**
	   * Retrieves the exception type.
	   *
	   * @return {string}
	   */
	  this.getType = function () {
	    return this._type;
	  };

	  /**
	   * Converts the exception to a string.
	   *
	   * @return {string}
	   */
	  this.toString = function () {
	    return this.getMessage();
	  };

	}

	module.exports = CustomException;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class ManifestResourceRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ManifestResourceRow (reader) {

	  /**
	   * The offset.
	   *
	   * @type {number}
	   */
	  this.offset = reader.readUInt(4);

	  /**
	   * The flags.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(4);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The reference to the type information row.
	   *
	   * @type {RowReference}
	   */
	  this.implementation = new RowReference(reader, [
	    TableIndexes.FILE,
	    TableIndexes.ASSEMBLY_REF,
	    TableIndexes.EXPORTED_TYPE
	  ]);

	}

	module.exports = ManifestResourceRow;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

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

	var StreamHeader = __webpack_require__(33);

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


/***/ },
/* 33 */
/***/ function(module, exports) {

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
	 * @param {BinaryParser} reader
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


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class MemberRefRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function MemberRefRow (reader) {

	  /**
	   * The reference to the class definition row.
	   *
	   * @type {RowReference}
	   */
	  this.class = new RowReference(reader, [
	    TableIndexes.TYPE_DEF,
	    TableIndexes.TYPE_REF,
	    TableIndexes.MODULE_REF,
	    TableIndexes.METHOD_DEF,
	    TableIndexes.TYPE_SPEC
	  ]);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The signature as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.signature = reader.readBlobIndex();

	}

	module.exports = MemberRefRow;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class NestedClassRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function NestedClassRow (reader) {

	  /**
	   * The reference to the nested class information row.
	   *
	   * @type {RowReference}
	   */
	  this.nestedClass = new RowReference(reader, [
	    TableIndexes.TYPE_DEF
	  ]);

	  /**
	   * The reference to the enclosing class information row.
	   *
	   * @type {RowReference}
	   */
	  this.enclosingClass = new RowReference(reader, [
	    TableIndexes.TYPE_DEF
	  ]);

	}

	module.exports = NestedClassRow;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class MethodDefRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function MethodDefRow (reader) {

	  /**
	   * The relative virtual address.
	   *
	   * @type {number}
	   */
	  this.rva = reader.readUInt(4);

	  /**
	   * The implementation flags.
	   *
	   * @type {number}
	   */
	  this.implFlags = reader.readUInt(2);

	  /**
	   * The method flags.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(2);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The signature as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.signature = reader.readBlobIndex();

	  /**
	   * The reference to the param definition row.
	   *
	   * @type {RowReference}
	   */
	  this.paramList = new RowReference(reader, [
	    TableIndexes.PARAM
	  ]);

	}

	module.exports = MethodDefRow;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class MethodImplRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function MethodImplRow (reader) {

	  /**
	   * The reference to the class definition row.
	   *
	   * @type {RowReference}
	   */
	  this.class = new RowReference(reader, [
	    TableIndexes.TYPE_DEF
	  ]);

	  /**
	   * The reference to the method body row.
	   *
	   * @type {RowReference}
	   */
	  this.methodBody = new RowReference(reader, [
	    TableIndexes.METHOD_DEF,
	    TableIndexes.MEMBER_REF
	  ]);

	  /**
	   * The reference to the method declaration row.
	   *
	   * @type {RowReference}
	   */
	  this.methodDeclaration = new RowReference(reader, [
	    TableIndexes.METHOD_DEF,
	    TableIndexes.MEMBER_REF
	  ]);

	}

	module.exports = MethodImplRow;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class MethodSemanticsRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function MethodSemanticsRow (reader) {

	  /**
	   * The semantics.
	   *
	   * @type {number}
	   */
	  this.semantics = reader.readUInt(2);

	  /**
	   * The reference to the method row.
	   *
	   * @type {RowReference}
	   */
	  this.method = new RowReference(reader, [
	    TableIndexes.METHOD_DEF
	  ]);

	  /**
	   * The reference to the associated row.
	   *
	   * @type {RowReference}
	   */
	  this.association = new RowReference(reader, [
	    TableIndexes.EVENT,
	    TableIndexes.PROPERTY
	  ]);

	}

	module.exports = MethodSemanticsRow;


/***/ },
/* 39 */
/***/ function(module, exports) {

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
	 * Class ModuleRefRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ModuleRefRow (reader) {

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	}

	module.exports = ModuleRefRow;


/***/ },
/* 40 */
/***/ function(module, exports) {

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
	 * Class ModuleRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ModuleRow (reader) {

	  /**
	   * The generation.
	   *
	   * This value should always be zero.
	   *
	   * @type {number}
	   */
	  this.generation = reader.readUInt(2);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The module id as an index into the GUID heap.
	   *
	   * @type {number}
	   */
	  this.mvid = reader.readGUIDIndex();

	  /**
	   * The encryption id as an index into the GUID heap.
	   *
	   * This value should always be zero.
	   *
	   * @type {number}
	   */
	  this.encId = reader.readGUIDIndex();

	  /**
	   * The base encryption id as an index into the GUID heap.
	   *
	   * This value should always be zero.
	   *
	   * @type {number}
	   */
	  this.encBaseId = reader.readGUIDIndex();

	}

	module.exports = ModuleRow;


/***/ },
/* 41 */
/***/ function(module, exports) {

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
	 * Class ParamRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ParamRow (reader) {

	  /**
	   * The flags.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(2);

	  /**
	   * The sequence.
	   *
	   * @type {number}
	   */
	  this.sequence = reader.readUInt(2);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	}

	module.exports = ParamRow;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

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

	var BinaryParser = __webpack_require__(43);
	var COFFHeader = __webpack_require__(44);
	var DOSHeader = __webpack_require__(45);
	var Extend = __webpack_require__(19);
	var ImageAttributes = __webpack_require__(46);
	var ParserException = __webpack_require__(29);
	var OptionalHeader = __webpack_require__(47);
	var ResourceDirectory = __webpack_require__(48);
	var SectionHeader = __webpack_require__(51);

	/**
	 * Class PEParser.
	 *
	 * @param {string} path
	 *   The file path.
	 * @param {ArrayBuffer} data
	 *   The file contents.
	 *
	 * @constructor
	 * @extends {BinaryParser}
	 */
	function PEParser (path, data) {

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


/***/ },
/* 43 */
/***/ function(module, exports) {

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
	 * Class BinaryParser.
	 *
	 * @param {string} path
	 *   The file path.
	 * @param {ArrayBuffer} data
	 *   The file contents.
	 *
	 * @constructor
	 */
	function BinaryParser (path, data) {

	  /**
	   * The file contents.
	   *
	   * @type {ArrayBuffer}
	   *
	   * @protected
	   */
	  this._data = (typeof data !== 'undefined') ? new Uint8Array(data) : null;

	  /**
	   * The file path.
	   *
	   * @type {string}
	   *
	   * @protected
	   */
	  this._path = path;

	  /**
	   * The file position.
	   *
	   * @type {number}
	   *
	   * @protected
	   */
	  this._position = 0;

	  /**
	   * Retrieves the file path.
	   *
	   * @return {string}
	   *   Returns a path.
	   */
	  this.getPath = function () {
	    return this._path;
	  };

	  /**
	   * Retrieves the buffer position.
	   *
	   * @return {number}
	   *   Returns the buffer position.
	   */
	  this.getPosition = function () {
	    return this._position;
	  };

	  /**
	   * Retrieves the buffer size.
	   *
	   * @return {number}
	   *   Returns the buffer size.
	   */
	  this.getSize = function () {
	    return this._data.byteLength;
	  };

	  /**
	   * Loads the file contents.
	   *
	   * @param {Function} success
	   *   The success callback.
	   * @param {Function} error
	   *   The error callback.
	   *
	   * @return {BinaryParser}
	   *   Returns this instance.
	   */
	  this.loadFile = function (success, error) {
	    var request = new XMLHttpRequest();
	    request.open('GET', this.getPath(), true);
	    request.responseType = 'arraybuffer';
	    request.onreadystatechange = function(reader) {
	      return function() {
	        if (request.readyState === XMLHttpRequest.DONE) {
	          if (request.status === 200) {
	            // Store the data as an UInt8 array and reset the position.
	            reader._data = new Uint8Array(request.response);
	            reader._position = 0;

	            // Invoke the success callback in order for the invoker to proceed.
	            success(reader);
	          }
	          else {
	            error(reader);
	          }
	        }
	      };
	    }(this);
	    request.send(null);
	    return this;
	  };

	  /**
	   * Reads the next bytes from the buffer.
	   *
	   * @param {number} count
	   *   The number of bytes to read.
	   *
	   * @return {Array<number>}
	   *   Returns an array of bytes.
	   */
	  this.readBytes = function (count) {
	    var bytes = [];

	    for (var i = 0; i < count; i++) {
	      if (this._position >= this.getSize()) {
	        break;
	      }

	      bytes.push(this._data[this._position++]);
	    }

	    return bytes;
	  };

	  /**
	   * Reads an ASCII string from the buffer.
	   *
	   * @param {number} length
	   *   The length of the string. Specify 0 to have the function look for a NULL
	   *   terminator.
	   * @param {boolean} terminate
	   *   Whether to look for a NULL terminator after the string has been read in
	   *   which case the string will be terminated.
	   * @param {number} boundary
	   *   The string boundary in bytes.
	   *
	   * @return {string}
	   *   Returns an ASCII string.
	   */
	  this.readString = function (length, terminate, boundary) {
	    var i, s = '';

	    while ((i = this.readUInt(1)) !== null) {
	      s += String.fromCharCode(i);

	      if (length > 0) {
	        if (s.length === length) {
	          break;
	        }
	      }
	      else if (((!boundary) || (s.length % boundary === 0)) &&
	        (s.endsWith("\0"))) {
	        break;
	      }
	    }

	    if ((terminate) && ((i = s.indexOf("\0")) > -1)) {
	      s = s.substring(0, i);
	    }

	    return s;
	  };

	  /**
	   * Reads the next unsigned integer from the buffer.
	   *
	   * @param {number} size
	   *   The integer size in bytes.
	   *
	   * @return {number|null}
	   *   Returns the integer or NULL if the end is reached.
	   */
	  this.readUInt = function (size) {
	    var bytes = this.readBytes(size);
	    var integer = 0;

	    if (bytes.length != size) {
	      return null;
	    }

	    for (var i = size - 1; i > -1; i--) {
	      integer |= (bytes[i] << (8 * i));
	    }

	    return integer;
	  };

	  /**
	   * Reads the next unsigned integers.
	   *
	   * @param {number} size
	   *   The integer size in bytes.
	   * @param {number} count
	   *   The number of integers to read.
	   *
	   * @return {Array<number>}
	   *   Returns an array of integers.
	   */
	  this.readUIntArray = function (size, count) {
	    var integers = [];

	    for (var i = 0; i < count; i++) {
	      var integer = this.readUInt(size);

	      if (integer === null) {
	        break;
	      }

	      integers.push(integer);
	    }

	    return integers;
	  };

	  /**
	   * Reads a UTF-8 string from the buffer.
	   *
	   * @param {number} length
	   *   The length of the string. Specify 0 to have the function look for a
	   *   string terminator.
	   * @param {boolean} terminate
	   *   Whether to look for a string terminator after the string has been read in
	   *   which case the string will always be terminated.
	   *
	   * @return {string}
	   *   Returns a UTF-8 string.
	   */
	  this.readUTF8String = function (length, terminate) {
	    var i, s = '';

	    while ((i = this.readUInt(1)) !== null) {
	      s += String.fromCharCode(i);

	      if (length > 0) {
	        if (s.length === length) {
	          break;
	        }
	      }
	      else if (s.endsWith("\0\0")) {
	        break;
	      }
	    }

	    if ((terminate) && ((i = s.indexOf("\0\0")) > -1)) {
	      s = s.substring(0, i);
	    }

	    return decodeURI(encodeURIComponent(s));
	  };

	  /**
	   * Sets the file path.
	   *
	   * @param {string} path
	   *   The file path.
	   *
	   * @return {BinaryParser}
	   *   Returns this instance.
	   *
	   * @modifies {this}
	   */
	  this.setPath = function (path) {
	    this._path = path;
	    return this;
	  };

	  /**
	   * Sets the buffer position.
	   *
	   * @param {number} position
	   *   The new position.
	   *
	   * @return {BinaryParser}
	   *   Returns this instance.
	   *
	   * @modifies {this}
	   */
	  this.setPosition = function (position) {
	    this._position = position;
	    return this;
	  };

	}

	module.exports = BinaryParser;


/***/ },
/* 44 */
/***/ function(module, exports) {

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
	 * Class COFFHeader.
	 *
	 * @param {BinaryParser} reader
	 *   The binary reader.
	 *
	 * @constructor
	 * @struct
	 */
	function COFFHeader (reader) {

	  /**
	   * The signature.
	   *
	   * @type {number}
	   */
	  this.signature = reader.readUInt(4);

	  /**
	   * The architecture type of the computer.
	   *
	   * @type {number}
	   */
	  this.machine = reader.readUInt(2);

	  /**
	   * The number of sections.
	   *
	   * @type {number}
	   */
	  this.numberOfSections = reader.readUInt(2);

	  /**
	   * The low 32 bits of the time stamp of the image.
	   *
	   * @type {number}
	   */
	  this.timeDateStamp = reader.readUInt(4);

	  /**
	   * The offset of the symbol table, in bytes, or zero if no COFF symbol table
	   * exists.
	   *
	   * @type {number}
	   */
	  this.pointerToSymbolTable = reader.readUInt(4);

	  /**
	   * The number of symbols in the symbol table.
	   *
	   * @type {number}
	   */
	  this.numberOfSymbols = reader.readUInt(4);

	  /**
	   * The size of the optional header, in bytes. This value should be 0 for
	   * object files.
	   *
	   * @type {number}
	   */
	  this.sizeOfOptionalHeader = reader.readUInt(2);

	  /**
	   * The characteristics of the image. This member can be one or more of the
	   * following values.
	   *
	   * @type {number}
	   */
	  this.characteristics = reader.readUInt(2);

	}

	module.exports = COFFHeader;


/***/ },
/* 45 */
/***/ function(module, exports) {

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
	 * Class DOSHeader.
	 *
	 * @param {BinaryParser} reader
	 *   The binary reader.
	 *
	 * @constructor
	 * @struct
	 */
	function DOSHeader (reader) {

	  /**
	   * The magic number.
	   *
	   * @type {number}
	   */
	  this.magic = reader.readUInt(2);

	  /**
	   * The number of bytes on the last page in the file.
	   *
	   * @type {number}
	   */
	  this.cblp = reader.readUInt(2);

	  /**
	   * The number of pages in the file.
	   *
	   * @type {number}
	   */
	  this.cp = reader.readUInt(2);

	  /**
	   * The number of relocations.
	   *
	   * @type {number}
	   */
	  this.crlc = reader.readUInt(2);

	  /**
	   * The size of the header in paragraphs.
	   *
	   * @type {number}
	   */
	  this.cparhdr = reader.readUInt(2);

	  /**
	   * The minimum number of extra paragraphs which are needed.
	   *
	   * @type {number}
	   */
	  this.minAlloc = reader.readUInt(2);

	  /**
	   * The maximum number of extra paragraphs which are needed.
	   *
	   * @type {number}
	   */
	  this.maxAlloc = reader.readUInt(2);

	  /**
	   * The initial (relative) SS value.
	   *
	   * @type {number}
	   */
	  this.ss = reader.readUInt(2);

	  /**
	   * The initial SP value.
	   *
	   * @type {number}
	   */
	  this.sp = reader.readUInt(2);

	  /**
	   * The checksum.
	   *
	   * @type {number}
	   */
	  this.csum = reader.readUInt(2);

	  /**
	   * The initial IP value.
	   *
	   * @type {number}
	   */
	  this.ip = reader.readUInt(2);

	  /**
	   * The initial (relative) CS value.
	   *
	   * @type {number}
	   */
	  this.cs = reader.readUInt(2);

	  /**
	   * The file address of the relocation table.
	   *
	   * @type {number}
	   */
	  this.lfarlc = reader.readUInt(2);

	  /**
	   * The overlay number.
	   *
	   * @type {number}
	   */
	  this.ovno = reader.readUInt(2);

	  /**
	   * The first reserved words.
	   *
	   * @type {Array<number>}
	   */
	  this.res1 = reader.readUIntArray(2, 4);

	  /**
	   * The OEM identifier.
	   *
	   * @type {number}
	   */
	  this.oemid = reader.readUInt(2);

	  /**
	   * The OEM information.
	   *
	   * @type {number}
	   */
	  this.oeminfo = reader.readUInt(2);

	  /**
	   * The second reserved words.
	   *
	   * @type {Array<number>}
	   */
	  this.res2 = reader.readUIntArray(2, 10);

	  /**
	   * The file address of the new EXE header.
	   *
	   * @type {number}
	   */
	  this.lfanew = reader.readUInt(4);

	}

	module.exports = DOSHeader;


/***/ },
/* 46 */
/***/ function(module, exports) {

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
	 * Class ImageAttributes.
	 *
	 * @constructor
	 * @struct
	 */
	function ImageAttributes () {

	  /**
	   * The DOS header signature.
	   *
	   * @const {number}
	   */
	  this.IMAGE_DOS_SIGNATURE = 0x5a4d;

	  /**
	   * The file is an executable image.
	   *
	   * @const {number}
	   */
	  this.IMAGE_NT_OPTIONAL_HDR64_MAGIC = 0x20b;

	  /**
	   * The file is an executable image.
	   *
	   * @const {number}
	   */
	  this.IMAGE_NT_OPTIONAL_HDR32_MAGIC = 0x10b;

	  /**
	   * The NT header signature.
	   *
	   * @const {number}
	   */
	  this.IMAGE_NT_SIGNATURE = 0x4550;

	  /**
	   * The file is a ROM image.
	   *
	   * @const {number}
	   */
	  this.IMAGE_ROM_OPTIONAL_HDR_MAGIC = 0x107;

	}

	module.exports = new ImageAttributes();


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

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

	var DataDirectoryHeader = __webpack_require__(13);
	var ImageAttributes = __webpack_require__(46);

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


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

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

	var ResourceDirectoryEntry = __webpack_require__(49);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

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

	var ResourceDataEntry = __webpack_require__(50);
	var ResourceDirectory = __webpack_require__(48);

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


/***/ },
/* 50 */
/***/ function(module, exports) {

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
	 * Class ResourceDataEntry.
	 *
	 * @param {PEParser} reader
	 *   The PE reader.
	 *
	 * @constructor
	 * @struct
	 */
	function ResourceDataEntry (reader) {

	  /**
	   * The file offset to the raw data.
	   *
	   * @type {number}
	   */
	  this.offsetToData = reader.getFileOffset(reader.readUInt(4));

	  /**
	   * The data size.
	   *
	   * @type {number}
	   */
	  this.size = reader.readUInt(4);

	  /**
	   * The code page.
	   *
	   * @type {number}
	   */
	  this.codePage = reader.readUInt(4);

	  /**
	   * The reserved value.
	   *
	   * @type {number}
	   */
	  this.reserved = reader.readUInt(4);

	}

	module.exports = ResourceDataEntry;


/***/ },
/* 51 */
/***/ function(module, exports) {

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
	 * @param {BinaryParser} reader
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


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class PropertyMapRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function PropertyMapRow (reader) {

	  /**
	   * The reference to the parent row.
	   *
	   * @type {RowReference}
	   */
	  this.parent = new RowReference(reader, [
	    TableIndexes.TYPE_DEF
	  ]);

	  /**
	   * The reference to the first property row.
	   *
	   * @type {RowReference}
	   */
	  this.propertyList = new RowReference(reader, [
	    TableIndexes.PROPERTY
	  ]);

	}

	module.exports = PropertyMapRow;


/***/ },
/* 53 */
/***/ function(module, exports) {

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
	 * Class PropertyRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function PropertyRow (reader) {

	  /**
	   * The property flags.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(2);

	  /**
	   * The name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.name = reader.readStringIndex();

	  /**
	   * The type as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.type = reader.readBlobIndex();

	}

	module.exports = PropertyRow;


/***/ },
/* 54 */
/***/ function(module, exports) {

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
	 * Class StandAloneSigRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function StandAloneSigRow (reader) {

	  /**
	   * The signature as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.signature = reader.readBlobIndex();

	}

	module.exports = StandAloneSigRow;


/***/ },
/* 55 */
/***/ function(module, exports) {

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
	 * Class TablesHeader.
	 *
	 * @param {BinaryParser} reader
	 *   The binary reader.
	 *
	 * @constructor
	 * @struct
	 */
	function TablesHeader (reader) {

	  var i1, i2;

	  /**
	   * The first reserved value.
	   *
	   * @type {number}
	   */
	  this.reserved1 = reader.readUInt(4);

	  /**
	   * The major version.
	   *
	   * @type {number}
	   */
	  this.majorVersion = reader.readUInt(1);

	  /**
	   * The minor version.
	   *
	   * @type {number}
	   */
	  this.minorVersion = reader.readUInt(1);

	  /**
	   * The size of the indexes into the different streams.
	   *
	   * @type {number}
	   */
	  this.heapOffsetSizes = reader.readUInt(1);

	  /**
	   * The second reserved value.
	   *
	   * @type {number}
	   */
	  this.reserved2 = reader.readUInt(1);

	  /**
	   * The bit-mask that indicates which of the tables that are present.
	   *
	   * @type {Array<number>}
	   */
	  this.maskValidArray = [
	    (i1 = reader.readUInt(4)),
	    (i2 = reader.readUInt(4))
	  ];

	  /**
	   * The bit-mask that indicates which of the tables that are present.
	   *
	   * @type {number}
	   */
	  this.maskValid = (i2 << 32) | i1;

	  /**
	   * The bit-mask that indicates which of the tables that are sorted.
	   *
	   * @type {Array<number>}
	   */
	  this.maskSortedArray = [
	    (i1 = reader.readUInt(4)),
	    (i2 = reader.readUInt(4))
	  ];

	  /**
	   * The bit-mask that indicates which of the tables that are sorted.
	   *
	   * @type {number}
	   */
	  this.maskSorted = (i2 << 32) | i1;

	  /**
	   * The file offset to the tables relative to the beginning of the stream.
	   *
	   * @type {number}
	   */
	  this.tablesOffset = reader.getPosition();

	}

	module.exports = TablesHeader;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class TypeDefRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function TypeDefRow (reader) {

	  /**
	   * The flags.
	   *
	   * @type {number}
	   */
	  this.flags = reader.readUInt(4);

	  /**
	   * The type name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.typeName = reader.readStringIndex();

	  /**
	   * The type namespace as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.typeNamespace = reader.readStringIndex();

	  /**
	   * The reference to the type information row.
	   *
	   * @type {RowReference}
	   */
	  this.extends = new RowReference(reader, [
	    TableIndexes.TYPE_DEF,
	    TableIndexes.TYPE_REF,
	    TableIndexes.TYPE_SPEC
	  ]);

	  /**
	   * The reference to the field information row.
	   *
	   * @type {RowReference}
	   */
	  this.fieldList = new RowReference(reader, [
	    TableIndexes.FIELD
	  ]);

	  /**
	   * The reference to the method information row.
	   *
	   * @type {RowReference}
	   */
	  this.methodList = new RowReference(reader, [
	    TableIndexes.METHOD_DEF
	  ]);

	}

	module.exports = TypeDefRow;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

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

	var RowReference = __webpack_require__(5);
	var TableIndexes = __webpack_require__(6);

	/**
	 * Class TypeRefRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function TypeRefRow (reader) {

	  /**
	   * The reference to the type information row.
	   *
	   * @type {RowReference}
	   */
	  this.resolutionScope = new RowReference(reader, [
	    TableIndexes.MODULE,
	    TableIndexes.MODULE_REF,
	    TableIndexes.ASSEMBLY_REF,
	    TableIndexes.TYPE_REF
	  ]);

	  /**
	   * The type name as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.typeName = reader.readStringIndex();

	  /**
	   * The type namespace as an index into the string heap.
	   *
	   * @type {number}
	   */
	  this.typeNamespace = reader.readStringIndex();

	}

	module.exports = TypeRefRow;


/***/ },
/* 58 */
/***/ function(module, exports) {

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
	 * Class TypeSpecRow.
	 *
	 * @param {CLIParser} reader
	 *   The CLI reader.
	 *
	 * @constructor
	 * @struct
	 */
	function TypeSpecRow (reader) {

	  /**
	   * The signature as an index into the blob heap.
	   *
	   * @type {number}
	   */
	  this.signature = reader.readBlobIndex();

	}

	module.exports = TypeSpecRow;


/***/ }
/******/ ])
});
;