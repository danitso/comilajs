/*!
 * ComilaJS v0.3.0
 * Copyright (c) 2018 Danitso
 * http://www.comilajs.org/
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
		define("comilajs", [], factory);
	else if(typeof exports === 'object')
		exports["comilajs"] = factory();
	else
		root["comilajs"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class TableIndexes.
 *
 * @constructor
 * @struct
 */
function TableIndexes () {

  'use strict';

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class RowReference.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {Array<number>} tableIndexes
 *   The table indexes.
 *
 * @constructor
 * @struct
 */
function RowReference (parser, tableIndexes) {

  'use strict';

  /**
   * The row index.
   *
   * @type {number}
   */
  this.rowIndex = -1;

  /**
   * The table index.
   *
   * @type {number}
   */
  this.tableIndex = -1;

  // Initialize the object.
  (function (object, parser, tableIndexes) {

    if (tableIndexes.length === 0) {
      object.rowIndex = parser.readUInt(3) - 1;
      object.tableIndex = parser.readUInt(1);
    }
    else {
      var bc = 1, bv, size = 2, tables = parser.readTables();

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
      var tableRowIndex = parser.readUInt(size);

      // Split the integer into two separate values and update the properties.
      object.tableIndex = tableIndexes[tableRowIndex & (bv - 1)];
      object.rowIndex = tableRowIndex >> bc;
    }

  }(this, parser, tableIndexes));

}

module.exports = RowReference;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class MethodOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @struct
 */
function MethodOperation (parser, code, name) {

  'use strict';

  /**
   * The operation code.
   *
   * @type {number}
   */
  this.code = code;

  /**
   * The operation name.
   *
   * @type {string}
   */
  this.name = name;

}

module.exports = MethodOperation;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var CustomException = __webpack_require__(10);
var Extend = __webpack_require__(2);

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

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new CustomException(message, 'ParserException'));

}

module.exports = ParserException;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class OpCodes.
 *
 * @constructor
 * @struct
 */
function OpCodes () {

  'use strict';

  /**
   * The op-code for the 'add' instruction.
   *
   * Add two values, returning a new value.
   *
   * @const {number}
   */
  this.ADD = 0x58;

  /**
   * The op-code for the 'add.ovf' instruction.
   *
   * Add signed integer values with overflow check.
   *
   * @const {number}
   */
  this.ADD_OVF = 0xD6;

  /**
   * The op-code for the 'add.ovf.un' instruction.
   *
   * Add unsigned integer values with overflow check.
   *
   * @const {number}
   */
  this.ADD_OVF_UN = 0xD7;

  /**
   * The op-code for the 'arglist' instruction.
   *
   * Return argument list handle for the current method.
   *
   * @const {number}
   */
  this.ARGLIST = 0xFE00;

  /**
   * The op-code for the 'and' instruction.
   *
   * Bitwise AND of two integral values, returns an integral value.
   *
   * @const {number}
   */
  this.AND = 0x5F;

  /**
   * The op-code for the 'beq' instruction.
   *
   * Branch to target if equal.
   *
   * @const {number}
   */
  this.BEQ = 0x3B;

  /**
   * The op-code for the 'beq.s' instruction.
   *
   * Branch to target if equal, short form.
   *
   * @const {number}
   */
  this.BEQ_S = 0x2E;

  /**
   * The op-code for the 'bge' instruction.
   *
   * Branch to target if greater than or equal to.
   *
   * @const {number}
   */
  this.BGE = 0x3C;

  /**
   * The op-code for the 'bge.s' instruction.
   *
   * Branch to target if greater than or equal to, short form.
   *
   * @const {number}
   */
  this.BGE_S = 0x2F;

  /**
   * The op-code for the 'bge.un' instruction.
   *
   * Branch to target if greater than or equal to, short form.
   *
   * @const {number}
   */
  this.BGE_UN = 0x41;

  /**
   * The op-code for the 'bge.un.s' instruction.
   *
   * Branch to target if greater than or equal to (unsigned or unordered), short
   * form.
   *
   * @const {number}
   */
  this.BGE_UN_S = 0x34;

  /**
   * The op-code for the 'bgt' instruction.
   *
   * Branch to target if greater than.
   *
   * @const {number}
   */
  this.BGT = 0x3D;

  /**
   * The op-code for the 'bgt.s' instruction.
   *
   * Branch to target if greater than, short form.
   *
   * @const {number}
   */
  this.BGT_S = 0x30;

  /**
   * The op-code for the 'bgt.un' instruction.
   *
   * Branch to target if greater than (unsigned or unordered).
   *
   * @const {number}
   */
  this.BGT_UN = 0x42;

  /**
   * The op-code for the 'bgt.un.s' instruction.
   *
   * Branch to target if greater than (unsigned or unordered), short form.
   *
   * @const {number}
   */
  this.BGT_UN_S = 0x35;

  /**
   * The op-code for the 'ble' instruction.
   *
   * Branch to target if less than or equal to.
   *
   * @const {number}
   */
  this.BLE = 0x3E;

  /**
   * The op-code for the 'ble.s' instruction.
   *
   * Branch to target if less than or equal to, short form.
   *
   * @const {number}
   */
  this.BLE_S = 0x31;

  /**
   * The op-code for the 'ble.un' instruction.
   *
   * Branch to target if less than or equal to (unsigned or unordered).
   *
   * @const {number}
   */
  this.BLE_UN = 0x43;

  /**
   * The op-code for the 'ble.un.s' instruction.
   *
   * Branch to target if less than or equal to (unsigned or unordered), short
   * form.
   *
   * @const {number}
   */
  this.BLE_UN_S = 0x36;

  /**
   * The op-code for the 'blt' instruction.
   *
   * Branch to target if less than.
   *
   * @const {number}
   */
  this.BLT = 0x3F;

  /**
   * The op-code for the 'blt.s' instruction.
   *
   * Branch to target if less than, short form.
   *
   * @const {number}
   */
  this.BLT_S = 0x32;

  /**
   * The op-code for the 'blt.un' instruction.
   *
   * Branch to target if less than (unsigned or unordered).
   *
   * @const {number}
   */
  this.BLT_UN = 0x44;

  /**
   * The op-code for the 'blt.un.s' instruction.
   *
   * Branch to target if less than (unsigned or unordered), short form.
   *
   * @const {number}
   */
  this.BLT_UN_S = 0x37;

  /**
   * The op-code for the 'bne.un' instruction.
   *
   * Branch to target if unequal or unordered.
   *
   * @const {number}
   */
  this.BNE_UN = 0x40;

  /**
   * The op-code for the 'bne.un.s' instruction.
   *
   * Branch to target if unequal or unordered, short form.
   *
   * @const {number}
   */
  this.BNE_UN_S = 0x33;

  /**
   * The op-code for the 'box' instruction.
   *
   * Convert a boxable value to its boxed form.
   *
   * @const {number}
   */
  this.BOX = 0x8C;

  /**
   * The op-code for the 'br' instruction.
   *
   * Branch to target.
   *
   * @const {number}
   */
  this.BR = 0x38;

  /**
   * The op-code for the 'br.s' instruction.
   *
   * Branch to target, short form.
   *
   * @const {number}
   */
  this.BR_S = 0x2B;

  /**
   * The op-code for the 'break' instruction.
   *
   * Inform a debugger that a breakpoint has been reached.
   *
   * @const {number}
   */
  this.BREAK = 0x01;

  /**
   * The op-code for the 'brfalse' instruction.
   *
   * Branch to target if value is zero (false).
   *
   * @const {number}
   */
  this.BRFALSE = 0x39;

  /**
   * The op-code for the 'brfalse.s' instruction.
   *
   * Branch to target if value is zero (false), short form.
   *
   * @const {number}
   */
  this.BRFALSE_S = 0x2C;

  /**
   * The op-code for the 'brinst' instruction.
   *
   * Branch to target if value is a non-null object reference (alias for
   * brtrue).
   *
   * @const {number}
   */
  this.BRINST = 0x3A;

  /**
   * The op-code for the 'brinst.s' instruction.
   *
   * Branch to target if value is a non-null object reference, short form (alias
   * for brtrue.s).
   *
   * @const {number}
   */
  this.BRINST_S = 0x2D;

  /**
   * The op-code for the 'brnull' instruction.
   *
   * Branch to target if value is null (alias for brfalse).
   *
   * @const {number}
   */
  this.BRNULL = 0x39;

  /**
   * The op-code for the 'brnull.s' instruction.
   *
   * Branch to target if value is null (alias for brfalse.s), short form.
   *
   * @const {number}
   */
  this.BRNULL_S = 0x2C;

  /**
   * The op-code for the 'brtrue' instruction.
   *
   * Branch to target if value is non-zero (true).
   *
   * @const {number}
   */
  this.BRTRUE = 0x3A;

  /**
   * The op-code for the 'brtrue.s' instruction.
   *
   * Branch to target if value is non-zero (true), short form.
   *
   * @const {number}
   */
  this.BRTRUE_S = 0x2D;

  /**
   * The op-code for the 'brzero' instruction.
   *
   * Branch to target if value is zero (alias for brfalse).
   *
   * @const {number}
   */
  this.BRZERO = 0x39;

  /**
   * The op-code for the 'brzero.s' instruction.
   *
   * Branch to target if value is zero (alias for brfalse.s), short form.
   *
   * @const {number}
   */
  this.BRZERO_S = 0x2C;

  /**
   * The op-code for the 'call' instruction.
   *
   * Call method described by method.
   *
   * @const {number}
   */
  this.CALL = 0x28;

  /**
   * The op-code for the 'calli' instruction.
   *
   * Call method indicated on the stack with arguments described by
   * callsitedescr.
   *
   * @const {number}
   */
  this.CALLI = 0x29;

  /**
   * The op-code for the 'callvirt' instruction.
   *
   * Call a method associated with an object.
   *
   * @const {number}
   */
  this.CALLVIRT = 0x6F;

  /**
   * The op-code for the 'castclass' instruction.
   *
   * Cast obj to class.
   *
   * @const {number}
   */
  this.CASTCLASS = 0x74;

  /**
   * The op-code for the 'ceq' instruction.
   *
   * Push 1 (of type int32) if value1 equals value2, else push 0.
   *
   * @const {number}
   */
  this.CEQ = 0xFE01;

  /**
   * The op-code for the 'cgt' instruction.
   *
   * Push 1 (of type int32) if value1 > value2, else push 0.
   *
   * @const {number}
   */
  this.CGT = 0xFE02;

  /**
   * The op-code for the 'cgt.un' instruction.
   *
   * Push 1 (of type int32) if value1 > value2, unsigned or unordered, else push
   * 0.
   *
   * @const {number}
   */
  this.CGT_UN = 0xFE03;

  /**
   * The op-code for the 'ckfinite' instruction.
   *
   * Throw ArithmeticException if value is not a finite number.
   *
   * @const {number}
   */
  this.CKFINITE = 0xC3;

  /**
   * The op-code for the 'clt' instruction.
   *
   * Push 1 (of type int32) if value1 < value2, else push 0.
   *
   * @const {number}
   */
  this.CLT = 0xFE04;

  /**
   * The op-code for the 'clt.un' instruction.
   *
   * Push 1 (of type int32) if value1 < value2, unsigned or unordered, else push
   * 0.
   *
   * @const {number}
   */
  this.CLT_UN = 0xFE05;

  /**
   * The op-code for the 'constrained' instruction.
   *
   * Call a virtual method on a type constrained to be type T.
   *
   * @const {number}
   */
  this.CONSTRAINED = 0xFE16;

  /**
   * The op-code for the 'conv.i' instruction.
   *
   * Convert to native int, pushing native int on stack.
   *
   * @const {number}
   */
  this.CONV_I = 0xD3;

  /**
   * The op-code for the 'conv.i1' instruction.
   *
   * Convert to int8, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_I1 = 0x67;

  /**
   * The op-code for the 'conv.i2' instruction.
   *
   * Convert to int16, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_I2 = 0x68;

  /**
   * The op-code for the 'conv.i4' instruction.
   *
   * Convert to int32, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_I4 = 0x69;

  /**
   * The op-code for the 'conv.i8' instruction.
   *
   * Convert to int64, pushing int64 on stack.
   *
   * @const {number}
   */
  this.CONV_I8 = 0x6A;

  /**
   * The op-code for the 'conv.ovf.i' instruction.
   *
   * Convert to a native int (on the stack as native int) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I = 0xD4;

  /**
   * The op-code for the 'conv.ovf.i.un' instruction.
   *
   * Convert unsigned to a native int (on the stack as native int) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I_UN = 0x8A;

  /**
   * The op-code for the 'conv.ovf.i1' instruction.
   *
   * Convert to an int8 (on the stack as int32) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I1 = 0xB3;

  /**
   * The op-code for the 'conv.ovf.i1.un' instruction.
   *
   * Convert unsigned to an int8 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I1_UN = 0x82;

  /**
   * The op-code for the 'conv.ovf.i2' instruction.
   *
   * Convert to an int16 (on the stack as int32) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I2 = 0xB5;

  /**
   * The op-code for the 'conv.ovf.i2.un' instruction.
   *
   * Convert unsigned to an int16 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I2_UN = 0x83;

  /**
   * The op-code for the 'conv.ovf.i4' instruction.
   *
   * Convert to an int32 (on the stack as int32) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I4 = 0xB7;

  /**
   * The op-code for the 'conv.ovf.i4.un' instruction.
   *
   * Convert unsigned to an int32 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I4_UN = 0x84;

  /**
   * The op-code for the 'conv.ovf.i8' instruction.
   *
   * Convert to an int64 (on the stack as int64) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I8 = 0xB7;

  /**
   * The op-code for the 'conv.ovf.i8.un' instruction.
   *
   * Convert unsigned to an int64 (on the stack as int64) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I8_UN = 0x84;

  /**
   * The op-code for the 'conv.ovf.u' instruction.
   *
   * Convert to a native unsigned int (on the stack as native int) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U = 0xD5;

  /**
   * The op-code for the 'conv.ovf.u.un' instruction.
   *
   * Convert unsigned to a native unsigned int (on the stack as native int) and
   * throw an exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U_UN = 0x8B;

  /**
   * The op-code for the 'conv.ovf.u1' instruction.
   *
   * Convert to an unsigned int8 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U1 = 0xB4;

  /**
   * The op-code for the 'conv.ovf.u1.un' instruction.
   *
   * Convert unsigned to an unsigned int8 (on the stack as int32) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U1_UN = 0x86;

  /**
   * The op-code for the 'conv.ovf.u2' instruction.
   *
   * Convert to an unsigned int16 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U2 = 0xB6;

  /**
   * The op-code for the 'conv.ovf.u2.un' instruction.
   *
   * Convert unsigned to an unsigned int16 (on the stack as int32) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U2_UN = 0x87;

  /**
   * The op-code for the 'conv.ovf.u4' instruction.
   *
   * Convert to an unsigned int32 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U4 = 0xB8;

  /**
   * The op-code for the 'conv.ovf.u4.un' instruction.
   *
   * Convert unsigned to an unsigned int32 (on the stack as int32) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U4_UN = 0x88;

  /**
   * The op-code for the 'conv.ovf.u8' instruction.
   *
   * Convert to an unsigned int64 (on the stack as int64) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U8 = 0xBA;

  /**
   * The op-code for the 'conv.ovf.u8.un' instruction.
   *
   * Convert unsigned to an unsigned int64 (on the stack as int64) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U8_UN = 0x89;

  /**
   * The op-code for the 'conv.r.un' instruction.
   *
   * Convert unsigned integer to floating-point, pushing F on stack.
   *
   * @const {number}
   */
  this.CONV_R_UN = 0x76;

  /**
   * The op-code for the 'conv.r4' instruction.
   *
   * Convert to float32, pushing F on stack.
   *
   * @const {number}
   */
  this.CONV_R4 = 0x6B;

  /**
   * The op-code for the 'conv.r8' instruction.
   *
   * Convert to float64, pushing F on stack.
   *
   * @const {number}
   */
  this.CONV_R8 = 0x6C;

  /**
   * The op-code for the 'conv.u' instruction.
   *
   * Convert to native unsigned int, pushing native int on stack.
   *
   * @const {number}
   */
  this.CONV_U = 0xE0;

  /**
   * The op-code for the 'conv.u1' instruction.
   *
   * Convert to unsigned int8, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_U1 = 0xD2;

  /**
   * The op-code for the 'conv.u2' instruction.
   *
   * Convert to unsigned int16, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_U2 = 0xD1;

  /**
   * The op-code for the 'conv.u4' instruction.
   *
   * Convert to unsigned int32, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_U4 = 0x6D;

  /**
   * The op-code for the 'conv.u8' instruction.
   *
   * Convert to unsigned int64, pushing int64 on stack.
   *
   * @const {number}
   */
  this.CONV_U8 = 0x6E;

  /**
   * The op-code for the 'cpblk' instruction.
   *
   * Copy data from memory to memory.
   *
   * @const {number}
   */
  this.CPBLK = 0xFE17;

  /**
   * The op-code for the 'cpobj' instruction.
   *
   * Copy a value type from src to dest.
   *
   * @const {number}
   */
  this.CPOBJ = 0x70;

  /**
   * The op-code for the 'div' instruction.
   *
   * Divide two values to return a quotient or floating-point result.
   *
   * @const {number}
   */
  this.DIV = 0x5B;

  /**
   * The op-code for the 'div.un' instruction.
   *
   * Divide two values, unsigned, returning a quotient.
   *
   * @const {number}
   */
  this.DIV_UN = 0x5C;

  /**
   * The op-code for the 'dup' instruction.
   *
   * Duplicate the value on the top of the stack.
   *
   * @const {number}
   */
  this.DUP = 0x25;

  /**
   * The op-code for the 'endfault' instruction.
   *
   * End fault clause of an exception block.
   *
   * @const {number}
   */
  this.ENDFAULT = 0xDC;

  /**
   * The op-code for the 'endfilter' instruction.
   *
   * End an exception handling filter clause.
   *
   * @const {number}
   */
  this.ENDFILTER = 0xFE11;

  /**
   * The op-code for the 'endfinally' instruction.
   *
   * End an exception handling filter clause.
   *
   * @const {number}
   */
  this.ENDFINALLY = 0xDC;

  /**
   * The op-code for the 'initblk' instruction.
   *
   * Initialize the value at address dest.
   *
   * @const {number}
   */
  this.INITBLK = 0xFE18;

  /**
   * The op-code for the 'initobj' instruction.
   *
   * Initialize the value at address dest.
   *
   * @const {number}
   */
  this.INITOBJ = 0xFE15;

  /**
   * The op-code for the 'isinst' instruction.
   *
   * Test if obj is an instance of class, returning null or an instance of that
   * class or interface.
   *
   * @const {number}
   */
  this.ISINST = 0x75;

  /**
   * The op-code for the 'jmp' instruction.
   *
   * Exit current method and jump to the specified method.
   *
   * @const {number}
   */
  this.JMP = 0x75;

  /**
   * The op-code for the 'ldarg' instruction.
   *
   * Load argument numbered num onto the stack.
   *
   * @const {number}
   */
  this.LDARG = 0xFE09;

  /**
   * The op-code for the 'ldarg.0' instruction.
   *
   * Load argument 0 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_0 = 0x02;

  /**
   * The op-code for the 'ldarg.1' instruction.
   *
   * Load argument 1 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_1 = 0x03;

  /**
   * The op-code for the 'ldarg.2' instruction.
   *
   * Load argument 2 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_2 = 0x04;

  /**
   * The op-code for the 'ldarg.3' instruction.
   *
   * Load argument 3 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_3 = 0x05;

  /**
   * The op-code for the 'ldarg.s' instruction.
   *
   * Load argument numbered num onto the stack, short form.
   *
   * @const {number}
   */
  this.LDARG_S = 0x0E;

  /**
   * The op-code for the 'ldarga' instruction.
   *
   * Fetch the address of argument argNum.
   *
   * @const {number}
   */
  this.LDARGA = 0xFE0A;

  /**
   * The op-code for the 'ldarga.s' instruction.
   *
   * Fetch the address of argument argNum, short form.
   *
   * @const {number}
   */
  this.LDARGA_S = 0x0F;

  /**
   * The op-code for the 'ldc.i4' instruction.
   *
   * Push num of type int32 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4 = 0x20;

  /**
   * The op-code for the 'ldc.i4.0' instruction.
   *
   * Push 0 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_0 = 0x16;

  /**
   * The op-code for the 'ldc.i4.1' instruction.
   *
   * Push 1 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_1 = 0x17;

  /**
   * The op-code for the 'ldc.i4.2' instruction.
   *
   * Push 2 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_2 = 0x18;

  /**
   * The op-code for the 'ldc.i4.3' instruction.
   *
   * Push 3 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_3 = 0x19;

  /**
   * The op-code for the 'ldc.i4.4' instruction.
   *
   * Push 4 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_4 = 0x1A;

  /**
   * The op-code for the 'ldc.i4.5' instruction.
   *
   * Push 5 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_5 = 0x1B;

  /**
   * The op-code for the 'ldc.i4.6' instruction.
   *
   * Push 6 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_6 = 0x1C;

  /**
   * The op-code for the 'ldc.i4.7' instruction.
   *
   * Push 7 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_7 = 0x1D;

  /**
   * The op-code for the 'ldc.i4.8' instruction.
   *
   * Push 8 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_8 = 0x1E;

  /**
   * The op-code for the 'ldc.i4.m1' instruction.
   *
   * Push -1 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_M1 = 0x15;

  /**
   * The op-code for the 'ldc.i4.s' instruction.
   *
   * Push num onto the stack as int32, short form.
   *
   * @const {number}
   */
  this.LDC_I4_S = 0x1F;

  /**
   * The op-code for the 'ldc.i8' instruction.
   *
   * Push num of type int64 onto the stack as int64.
   *
   * @const {number}
   */
  this.LDC_I8 = 0x21;

  /**
   * The op-code for the 'ldc.r4' instruction.
   *
   * Push num of type float32 onto the stack as F.
   *
   * @const {number}
   */
  this.LDC_R4 = 0x22;

  /**
   * The op-code for the 'ldc.r8' instruction.
   *
   * Push num of type float64 onto the stack as F.
   *
   * @const {number}
   */
  this.LDC_R8 = 0x23;

  /**
   * The op-code for the 'ldelem' instruction.
   *
   * Load the element at index onto the top of the stack.
   *
   * @const {number}
   */
  this.LDELEM = 0xA3;

  /**
   * The op-code for the 'ldelem.i' instruction.
   *
   * Load the element with type native int at index onto the top of the stack as
   * a native int.
   *
   * @const {number}
   */
  this.LDELEM_I = 0x97;

  /**
   * The op-code for the 'ldelem.i1' instruction.
   *
   * Load the element with type int8 at index onto the top of the stack as an
   * int32.
   *
   * @const {number}
   */
  this.LDELEM_I1 = 0x90;

  /**
   * The op-code for the 'ldelem.i2' instruction.
   *
   * Load the element with type int16 at index onto the top of the stack as an
   * int32.
   *
   * @const {number}
   */
  this.LDELEM_I2 = 0x92;

  /**
   * The op-code for the 'ldelem.i4' instruction.
   *
   * Load the element with type int32 at index onto the top of the stack as an
   * int32.
   *
   * @const {number}
   */
  this.LDELEM_I4 = 0x94;

  /**
   * The op-code for the 'ldelem.i8' instruction.
   *
   * Load the element with type int64 at index onto the top of the stack as an
   * int64.
   *
   * @const {number}
   */
  this.LDELEM_I8 = 0x96;

  /**
   * The op-code for the 'ldelem.r4' instruction.
   *
   * Load the element with type float32 at index onto the top of the stack as an
   * F.
   *
   * @const {number}
   */
  this.LDELEM_R4 = 0x98;

  /**
   * The op-code for the 'ldelem.r8' instruction.
   *
   * Load the element with type float64 at index onto the top of the stack as an
   * F.
   *
   * @const {number}
   */
  this.LDELEM_R8 = 0x99;

  /**
   * The op-code for the 'ldelem.ref' instruction.
   *
   * Load the element at index onto the top of the stack as an O. The type of
   * the O is the same as the element type of the array pushed on the CIL stack.
   *
   * @const {number}
   */
  this.LDELEM_REF = 0x9A;

  /**
   * The op-code for the 'ldelem.u1' instruction.
   *
   * Load the element with type unsigned int8 at index onto the top of the stack
   * as an int32.
   *
   * @const {number}
   */
  this.LDELEM_U1 = 0x91;

  /**
   * The op-code for the 'ldelem.u2' instruction.
   *
   * Load the element with type unsigned int16 at index onto the top of the
   * stack as an int32.
   *
   * @const {number}
   */
  this.LDELEM_U2 = 0x93;

  /**
   * The op-code for the 'ldelem.u4' instruction.
   *
   * Load the element with type unsigned int32 at index onto the top of the
   * stack as an int32.
   *
   * @const {number}
   */
  this.LDELEM_U4 = 0x95;

  /**
   * The op-code for the 'ldelem.u8' instruction.
   *
   * Load the element with type unsigned int64 at index onto the top of the
   * stack as an int64 (alias for ldelem.i8).
   *
   * @const {number}
   */
  this.LDELEM_U8 = 0x96;

  /**
   * The op-code for the 'ldelema' instruction.
   *
   * Load the address of element at index onto the top of the stack.
   *
   * @const {number}
   */
  this.LDELEMA = 0x8F;

  /**
   * The op-code for the 'ldfld' instruction.
   *
   * Push the value of field of object (or value type) obj, onto the stack.
   *
   * @const {number}
   */
  this.LDFLD = 0x7B;

  /**
   * The op-code for the 'ldflda' instruction.
   *
   * Push the address of field of object obj on the stack.
   *
   * @const {number}
   */
  this.LDFLDA = 0x7C;

  /**
   * The op-code for the 'ldftn' instruction.
   *
   * Push a pointer to a method referenced by method, on the stack.
   *
   * @const {number}
   */
  this.LDFTN = 0xFE06;

  /**
   * The op-code for the 'ldind.i' instruction.
   *
   * Indirect load value of type native int as native int on the stack.
   *
   * @const {number}
   */
  this.LDIND_I = 0x4D;

  /**
   * The op-code for the 'ldind.i1' instruction.
   *
   * Indirect load value of type int8 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I1 = 0x46;

  /**
   * The op-code for the 'ldind.i2' instruction.
   *
   * Indirect load value of type int16 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I2 = 0x48;

  /**
   * The op-code for the 'ldind.i4' instruction.
   *
   * Indirect load value of type int32 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I4 = 0x4A;

  /**
   * The op-code for the 'ldind.i8' instruction.
   *
   * Indirect load value of type int64 as int64 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I8 = 0x4C;

  /**
   * The op-code for the 'ldind.r4' instruction.
   *
   * Indirect load value of type float32 as F on the stack.
   *
   * @const {number}
   */
  this.LDIND_R4 = 0x4E;

  /**
   * The op-code for the 'ldind.r8' instruction.
   *
   * Indirect load value of type float64 as F on the stack.
   *
   * @const {number}
   */
  this.LDIND_R8 = 0x4F;

  /**
   * The op-code for the 'ldind.ref' instruction.
   *
   * Indirect load value of type object ref as O on the stack.
   *
   * @const {number}
   */
  this.LDIND_REF = 0x50;

  /**
   * The op-code for the 'ldind.u1' instruction.
   *
   * Indirect load value of type unsigned int8 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_U1 = 0x47;

  /**
   * The op-code for the 'ldind.u2' instruction.
   *
   * Indirect load value of type unsigned int16 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_U2 = 0x49;

  /**
   * The op-code for the 'ldind.u4' instruction.
   *
   * Indirect load value of type unsigned int32 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_U4 = 0x4B;

  /**
   * The op-code for the 'ldind.u8' instruction.
   *
   * Indirect load value of type unsigned int64 as int64 on the stack (alias for
   * ldind.i8).
   *
   * @const {number}
   */
  this.LDIND_U8 = 0x4C;

  /**
   * The op-code for the 'ldlen' instruction.
   *
   * Push the length (of type native unsigned int) of array on the stack.
   *
   * @const {number}
   */
  this.LDLEN = 0x8E;

  /**
   * The op-code for the 'ldloc' instruction.
   *
   * Load local variable of index indx onto stack.
   *
   * @const {number}
   */
  this.LDLOC = 0xFE0C;

  /**
   * The op-code for the 'ldloc.0' instruction.
   *
   * Load local variable 0 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_0 = 0x06;

  /**
   * The op-code for the 'ldloc.1' instruction.
   *
   * Load local variable 1 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_1 = 0x07;

  /**
   * The op-code for the 'ldloc.2' instruction.
   *
   * Load local variable 2 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_1 = 0x08;

  /**
   * The op-code for the 'ldloc.3' instruction.
   *
   * Load local variable 3 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_1 = 0x09;

  /**
   * The op-code for the 'ldloc.s' instruction.
   *
   * Load local variable of index indx onto stack, short form.
   *
   * @const {number}
   */
  this.LDLOC_S = 0x11;

  /**
   * The op-code for the 'ldloca' instruction.
   *
   * Load address of local variable with index indx.
   *
   * @const {number}
   */
  this.LDLOCA = 0xFE0D;

  /**
   * The op-code for the 'ldloca' instruction.
   *
   * Load address of local variable with index indx, short form.
   *
   * @const {number}
   */
  this.LDLOCA_S = 0x12;

  /**
   * The op-code for the 'ldnull' instruction.
   *
   * Push a null reference on the stack.
   *
   * @const {number}
   */
  this.LDNULL = 0x14;

  /**
   * The op-code for the 'ldobj' instruction.
   *
   * Copy the value stored at address src to the stack.
   *
   * @const {number}
   */
  this.LDOBJ = 0x71;

  /**
   * The op-code for the 'ldsfld' instruction.
   *
   * Push the value of the static field on the stack.
   *
   * @const {number}
   */
  this.LDSFLD = 0x7E;

  /**
   * The op-code for the 'ldsflda' instruction.
   *
   * Push the address of the static field, field, on the stack.
   *
   * @const {number}
   */
  this.LDSFLDA = 0x7F;

  /**
   * The op-code for the 'ldstr' instruction.
   *
   * Push a string object for the literal string.
   *
   * @const {number}
   */
  this.LDSTR = 0x72;

  /**
   * The op-code for the 'ldtoken' instruction.
   *
   * Convert metadata token to its runtime representation.
   *
   * @const {number}
   */
  this.LDTOKEN = 0xD0;

  /**
   * The op-code for the 'ldvirtftn' instruction.
   *
   * Push address of virtual method on the stack.
   *
   * @const {number}
   */
  this.LDVIRTFTN = 0xFE07;

  /**
   * The op-code for the 'leave' instruction.
   *
   * Exit a protected region of code.
   *
   * @const {number}
   */
  this.LEAVE = 0xDD;

  /**
   * The op-code for the 'leave.s' instruction.
   *
   * Exit a protected region of code, short form.
   *
   * @const {number}
   */
  this.LEAVE_S = 0xDE;

  /**
   * The op-code for the 'localloc' instruction.
   *
   * Allocate space from the local memory pool.
   *
   * @const {number}
   */
  this.LOCALLOC = 0xFE0F;

  /**
   * The op-code for the 'mkrefany' instruction.
   *
   * Push a typed reference to ptr of type class onto the stack.
   *
   * @const {number}
   */
  this.MKREFANY = 0xC6;

  /**
   * The op-code for the 'mul' instruction.
   *
   * Multiply values.
   *
   * @const {number}
   */
  this.MUL = 0x5A;

  /**
   * The op-code for the 'mul.ovf' instruction.
   *
   * Multiply signed integer values. Signed result shall fit in same size.
   *
   * @const {number}
   */
  this.MUL_OVF = 0xD8;

  /**
   * The op-code for the 'mul.ovf.un' instruction.
   *
   * Multiply unsigned integer values. Unsigned result shall fit in same size.
   *
   * @const {number}
   */
  this.MUL_OVF_UN = 0xD9;

  /**
   * The op-code for the 'neg' instruction.
   *
   * Negate value.
   *
   * @const {number}
   */
  this.NEG = 0x65;

  /**
   * The op-code for the 'newarr' instruction.
   *
   * Create a new array with elements of type etype.
   *
   * @const {number}
   */
  this.NEWARR = 0x8D;

  /**
   * The op-code for the 'newobj' instruction.
   *
   * Allocate an uninitialized object or value type and call ctor.
   *
   * @const {number}
   */
  this.NEWOBJ = 0x73;

  /**
   * The op-code for the 'newobj' instruction.
   *
   * The specified fault check(s) normally performed as part of the execution of
   * the subsequent instruction can/shall be skipped.
   *
   * @const {number}
   */
  this.NO_TYPE_RANGE_NULL_CHECK = 0xFE19;

  /**
   * The op-code for the 'nop' instruction.
   *
   * Do nothing (No operation).
   *
   * @const {number}
   */
  this.NOP = 0x00;

  /**
   * The op-code for the 'not' instruction.
   *
   * Bitwise complement (logical not).
   *
   * @const {number}
   */
  this.NOT = 0x66;

  /**
   * The op-code for the 'or' instruction.
   *
   * Bitwise OR of two integer values, returns an integer.
   *
   * @const {number}
   */
  this.OR = 0x60;

  /**
   * The op-code for the 'pop' instruction.
   *
   * Pop value from the stack.
   *
   * @const {number}
   */
  this.POP = 0x26;

  /**
   * The op-code for the 'readonly' instruction.
   *
   * Specify that the subsequent array address operation performs no type check
   * at runtime, and that it returns a controlled-mutability managed pointer
   *
   * @const {number}
   */
  this.READONLY = 0xFE1E;

  /**
   * The op-code for the 'refanytype' instruction.
   *
   * Push the type token stored in a typed reference.
   *
   * @const {number}
   */
  this.REFANYTYPE = 0xFE1D;

  /**
   * The op-code for the 'refanyval' instruction.
   *
   * Push the address stored in a typed reference.
   *
   * @const {number}
   */
  this.REFANYVAL = 0xC2;

  /**
   * The op-code for the 'rem' instruction.
   *
   * Remainder when dividing one value by another.
   *
   * @const {number}
   */
  this.REM = 0x5D;

  /**
   * The op-code for the 'rem.un' instruction.
   *
   * Remainder when dividing one unsigned value by another.
   *
   * @const {number}
   */
  this.REM_UN = 0x5E;

  /**
   * The op-code for the 'ret' instruction.
   *
   * Return from method, possibly with a value.
   *
   * @const {number}
   */
  this.RET = 0x2A;

  /**
   * The op-code for the 'rethrow' instruction.
   *
   * Rethrow the current exception.
   *
   * @const {number}
   */
  this.RETHROW = 0xFE1A;

  /**
   * The op-code for the 'shl' instruction.
   *
   * Shift an integer left (shifting in zeros), return an integer.
   *
   * @const {number}
   */
  this.SHL = 0x62;

  /**
   * The op-code for the 'shr' instruction.
   *
   * Shift an integer right (shift in sign), return an integer.
   *
   * @const {number}
   */
  this.SHR = 0x63;

  /**
   * The op-code for the 'shr.un' instruction.
   *
   * Shift an integer right (shift in zero), return an integer.
   *
   * @const {number}
   */
  this.SHR_UN = 0x64;

  /**
   * The op-code for the 'sizeof' instruction.
   *
   * Push the size, in bytes, of a type as an unsigned int32.
   *
   * @const {number}
   */
  this.SIZEOF = 0xFE1C;

  /**
   * The op-code for the 'starg' instruction.
   *
   * Store value to the argument numbered num.
   *
   * @const {number}
   */
  this.STARG = 0xFE0B;

  /**
   * The op-code for the 'starg.s' instruction.
   *
   * Store value to the argument numbered num, short form.
   *
   * @const {number}
   */
  this.STARG_S = 0x10;

  /**
   * The op-code for the 'stelem' instruction.
   *
   * Replace array element at index with the value on the stack.
   *
   * @const {number}
   */
  this.STELEM = 0xA4;

  /**
   * The op-code for the 'stelem.i' instruction.
   *
   * Replace array element at index with the i value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I = 0x9B;

  /**
   * The op-code for the 'stelem.i1' instruction.
   *
   * Replace array element at index with the int8 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I1 = 0x9C;

  /**
   * The op-code for the 'stelem.i2' instruction.
   *
   * Replace array element at index with the int16 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I2 = 0x9D;

  /**
   * The op-code for the 'stelem.i4' instruction.
   *
   * Replace array element at index with the int32 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I4 = 0x9E;

  /**
   * The op-code for the 'stelem.i8' instruction.
   *
   * Replace array element at index with the int64 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I8 = 0x9F;

  /**
   * The op-code for the 'stelem.r4' instruction.
   *
   * Replace array element at index with the float32 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_R4 = 0xA0;

  /**
   * The op-code for the 'stelem.r8' instruction.
   *
   * Replace array element at index with the float64 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_R8 = 0xA1;

  /**
   * The op-code for the 'stelem.ref' instruction.
   *
   * Replace array element at index with the ref value on the stack.
   *
   * @const {number}
   */
  this.STELEM_REF = 0xA2;

  /**
   * The op-code for the 'stfld' instruction.
   *
   * Replace the value of field of the object obj with value.
   *
   * @const {number}
   */
  this.STFLD = 0x7D;

  /**
   * The op-code for the 'stind.i' instruction.
   *
   * Store value of type native int into memory at address.
   *
   * @const {number}
   */
  this.STIND_I = 0xDF;

  /**
   * The op-code for the 'stind.i1' instruction.
   *
   * Store value of type int8 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I1 = 0x52;

  /**
   * The op-code for the 'stind.i2' instruction.
   *
   * Store value of type int16 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I2 = 0x53;

  /**
   * The op-code for the 'stind.i4' instruction.
   *
   * Store value of type int32 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I4 = 0x54;

  /**
   * The op-code for the 'stind.i8' instruction.
   *
   * Store value of type int64 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I8 = 0x55;

  /**
   * The op-code for the 'stind.r4' instruction.
   *
   * Store value of type float32 into memory at address.
   *
   * @const {number}
   */
  this.STIND_R4 = 0x56;

  /**
   * The op-code for the 'stind.r8' instruction.
   *
   * Store value of type float64 into memory at address.
   *
   * @const {number}
   */
  this.STIND_R8 = 0x57;

  /**
   * The op-code for the 'stind.ref' instruction.
   *
   * Store value of type object ref (type O) into memory at address.
   *
   * @const {number}
   */
  this.STIND_REF = 0x51;

  /**
   * The op-code for the 'stloc' instruction.
   *
   * Pop a value from stack into local variable indx.
   *
   * @const {number}
   */
  this.STLOC = 0xFE0E;

  /**
   * The op-code for the 'stloc.0' instruction.
   *
   * Pop a value from stack into local variable 0.
   *
   * @const {number}
   */
  this.STLOC_0 = 0x0A;

  /**
   * The op-code for the 'stloc.1' instruction.
   *
   * Pop a value from stack into local variable 1.
   *
   * @const {number}
   */
  this.STLOC_1 = 0x0B;

  /**
   * The op-code for the 'stloc.2' instruction.
   *
   * Pop a value from stack into local variable 2.
   *
   * @const {number}
   */
  this.STLOC_2 = 0x0C;

  /**
   * The op-code for the 'stloc.3' instruction.
   *
   * Pop a value from stack into local variable 3.
   *
   * @const {number}
   */
  this.STLOC_3 = 0x0D;

  /**
   * The op-code for the 'stloc.s' instruction.
   *
   * Pop a value from stack into local variable indx, short form.
   *
   * @const {number}
   */
  this.STLOC_S = 0x13;

  /**
   * The op-code for the 'stobj' instruction.
   *
   * Store a value of type typeTok at an address.
   *
   * @const {number}
   */
  this.STOBJ = 0x81;

  /**
   * The op-code for the 'stsfld' instruction.
   *
   * Replace the value of the static field with val.
   *
   * @const {number}
   */
  this.STSFLD = 0x80;

  /**
   * The op-code for the 'sub' instruction.
   *
   * Subtract value2 from value1, returning a new value.
   *
   * @const {number}
   */
  this.SUB = 0x59;

  /**
   * The op-code for the 'sub.ovf' instruction.
   *
   * Subtract native int from a native int. Signed result shall fit in same
   * size.
   *
   * @const {number}
   */
  this.SUB_OVF = 0xDA;

  /**
   * The op-code for the 'sub.ovf.un' instruction.
   *
   * Subtract native unsigned int from a native unsigned int. Unsigned result
   * shall fit in same size.
   *
   * @const {number}
   */
  this.SUB_OVF_UN = 0xDB;

  /**
   * The op-code for the 'switch' instruction.
   *
   * Jump to one of n values.
   *
   * @const {number}
   */
  this.SWITCH = 0x45;

  /**
   * The op-code for the 'tail' instruction.
   *
   * Subsequent call terminates current method.
   *
   * @const {number}
   */
  this.TAIL = 0xFE14;

  /**
   * The op-code for the 'throw' instruction.
   *
   * Throw an exception.
   *
   * @const {number}
   */
  this.THROW = 0x7A;

  /**
   * The op-code for the 'unaligned' instruction.
   *
   * Subsequent pointer instruction might be unaligned.
   *
   * @const {number}
   */
  this.UNALIGNED = 0xFE12;

  /**
   * The op-code for the 'unbox' instruction.
   *
   * Extract a value-type from obj, its boxed representation.
   *
   * @const {number}
   */
  this.UNBOX = 0x79;

  /**
   * The op-code for the 'unbox.any' instruction.
   *
   * Extract a value-type from obj, its boxed representation.
   *
   * @const {number}
   */
  this.UNBOX_ANY = 0xA5;

  /**
   * The op-code for the 'volatile' instruction.
   *
   * Subsequent pointer reference is volatile.
   *
   * @const {number}
   */
  this.VOLATILE = 0xFE13;

  /**
   * The op-code for the 'xor' instruction.
   *
   * Bitwise XOR of integer values, returns an integer.
   *
   * @const {number}
   */
  this.XOR = 0x61;

}

module.exports = new OpCodes();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var CustomException = __webpack_require__(10);
var Extend = __webpack_require__(2);

/**
 * Class NotImplementedException.
 *
 * @param {string} message
 *   The message.
 *
 * @constructor
 * @extends {CustomException}
 */
function NotImplementedException (message) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new CustomException(message, 'NotImplementedException'));

}

module.exports = NotImplementedException;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

var ResourceDirectoryEntry = __webpack_require__(23);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class ImageAttributes.
 *
 * @constructor
 * @struct
 */
function ImageAttributes () {

  'use strict';

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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Extend = __webpack_require__(2);
var MethodOperation = __webpack_require__(3);
var RowReference = __webpack_require__(1);

/**
 * Class TokenOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @extends {MethodOperation}
 */
function TokenOperation (parser, code, name) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new MethodOperation(parser, code, name));

  /**
   * The token.
   *
   * @type {number}
   */
  this.token = new RowReference(parser, []);

}

module.exports = TokenOperation;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var NotImplementedException = __webpack_require__(6);

/**
 * Class Module.
 *
 * @param {CILParser} reader
 *   The CLR reader.
 *
 * @constructor
 */
function Module (reader) {

  'use strict';

  /**
   * The blobs.
   *
   * @type {Object<number, Blob>}
   *
   * @protected
   */
  this._blob = {};

  /**
   * The GUIDs.
   *
   * @type {Object<number, string>}
   *
   * @protected
   */
  this._guid = {};

  /**
   * The ANSI strings.
   *
   * @type {Object<number, string>}
   *
   * @protected
   */
  this._strings = {};

  /**
   * The tables.
   *
   * @type {Object<number, *>}
   *
   * @protected
   */
  this._tables = {};

  /**
   * The unicode strings.
   *
   * @type {Object<number, string>}
   *
   * @protected
   */
  this._unicodeStrings = {};

  /**
   * Runs the module.
   */
  this.run = function () {
    throw new NotImplementedException(
      'The run() function has not been implemented');
  };

}

module.exports = Module;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Module = __webpack_require__(12);
var NotImplementedException = __webpack_require__(6);

/**
 * Class Compiler.
 *
 * @param {CILParser} parser
 *   The CLR parser.
 *
 * @constructor
 */
function Compiler (parser) {

  'use strict';

  /**
   * Compiles CIL to JavaScript.
   *
   * @return {Module}
   *   Returns the compiled module object.
   *
   * @throws {NotImplementedException}
   *   Thrown as long as the function has not been fully implemented.
   */
  this.compile = function () {
    // Log some information about the executable.
    console.log(parser.readDOSHeader());
    console.log(parser.readCOFFHeader());
    console.log(parser.readOptionalHeader());
    console.log(parser.readSectionHeaders());
    console.log(parser.readResourceDirectory());
    console.log(parser.readCORHeader());
    console.log(parser.readMetadataHeader());
    console.log(parser.readTablesHeader());
    console.log(parser.readTables());
    console.log(parser.readMethodBodies());

    // Throw an exception as the compiler has not been fully implemented.
    throw new NotImplementedException(
      'The compile() function has not been fully implemented');
  };

}

module.exports = Compiler;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class TypeSpecRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function TypeSpecRow (reader) {

  'use strict';

  /**
   * The signature as an index into the blob heap.
   *
   * @type {number}
   */
  this.signature = reader.readBlobIndex();

}

module.exports = TypeSpecRow;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class TypeRefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function TypeRefRow (reader) {

  'use strict';

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


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class TypeDefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function TypeDefRow (reader) {

  'use strict';

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


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class StandAloneSigRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function StandAloneSigRow (reader) {

  'use strict';

  /**
   * The signature as an index into the blob heap.
   *
   * @type {number}
   */
  this.signature = reader.readBlobIndex();

}

module.exports = StandAloneSigRow;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class PropertyRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function PropertyRow (reader) {

  'use strict';

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


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class PropertyMapRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function PropertyMapRow (reader) {

  'use strict';

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


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var ResourceDataEntry = __webpack_require__(22);
var ResourceDirectory = __webpack_require__(7);

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

  'use strict';

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


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var DataDirectoryHeader = __webpack_require__(11);
var ImageAttributes = __webpack_require__(8);

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

  'use strict';

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


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var ParserException = __webpack_require__(4);

/**
 * Class BinaryParser.
 *
 * @param {string} path
 *   The file path.
 * @param {ArrayBuffer} [data]
 *   The file contents.
 *
 * @constructor
 */
function BinaryParser (path, data) {

  'use strict';

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
    request.onreadystatechange = (function (parser) {
      return function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            // Store the data as an UInt8 array and reset the position.
            parser._data = new Uint8Array(request.response);
            parser._position = 0;

            // Invoke the success callback in order for the invoker to proceed.
            success(parser);
          }
          else {
            error(parser, request.status);
          }
        }
      };
    })(this);
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
        (s.endsWith(String.fromCharCode(0)))) {
        break;
      }
    }

    if ((terminate) && ((i = s.indexOf(String.fromCharCode(0))) > -1)) {
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
      else if (s.endsWith(String.fromCharCode(0, 0))) {
        break;
      }
    }

    if ((terminate) && ((i = s.indexOf(String.fromCharCode(0, 0))) > -1)) {
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


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var BinaryParser = __webpack_require__(27);
var COFFHeader = __webpack_require__(26);
var DOSHeader = __webpack_require__(25);
var Extend = __webpack_require__(2);
var ImageAttributes = __webpack_require__(8);
var ParserException = __webpack_require__(4);
var OptionalHeader = __webpack_require__(24);
var ResourceDirectory = __webpack_require__(7);
var SectionHeader = __webpack_require__(21);

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

  'use strict';

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
  this.getResourceDirectoryFileOffset = function () {
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
  this.readResourceDirectory = function () {
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


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class ParamRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ParamRow (reader) {

  'use strict';

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


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class ModuleRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ModuleRow (reader) {

  'use strict';

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


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class ModuleRefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ModuleRefRow (reader) {

  'use strict';

  /**
   * The name as an index into the string heap.
   *
   * @type {number}
   */
  this.name = reader.readStringIndex();

}

module.exports = ModuleRefRow;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class MethodSemanticsRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MethodSemanticsRow (reader) {

  'use strict';

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


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class MethodImplRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MethodImplRow (reader) {

  'use strict';

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


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Extend = __webpack_require__(2);
var MethodOperation = __webpack_require__(3);

/**
 * Class ReturnOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @extends {MethodOperation}
 */
function ReturnOperation (parser, code, name) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new MethodOperation(parser, code, name));

}

module.exports = ReturnOperation;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Extend = __webpack_require__(2);
var MethodOperation = __webpack_require__(3);

/**
 * Class NoOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @extends {MethodOperation}
 */
function NoOperation (parser, code, name) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new MethodOperation(parser, code, name));

}

module.exports = NoOperation;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Extend = __webpack_require__(2);
var TokenOperation = __webpack_require__(9);

/**
 * Class LoadStringOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @extends {TokenOperation}
 */
function LoadStringOperation (parser, code, name) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new TokenOperation(parser, code, name));

}

module.exports = LoadStringOperation;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Extend = __webpack_require__(2);
var MethodOperation = __webpack_require__(3);
var OpCodes = __webpack_require__(5);

/**
 * Class LoadArgumentOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @extends {MethodOperation}
 */
function LoadArgumentOperation (parser, code, name) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new MethodOperation(parser, code, name));

  /**
   * The argument index.
   *
   * @type {number}
   */
  this.index = (
    (code >= OpCodes.LDARG_0) && (code <= OpCodes.LDARG_3) ?
      code - OpCodes.LDARG_0 : (
        (code === OpCodes.LDARG) ?
          parser.readUInt(2) : (
            (code === OpCodes.LDARG_S) ?
              parser.readUInt(1) :
              -1
          )
      )
  );

}

module.exports = LoadArgumentOperation;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var Extend = __webpack_require__(2);
var TokenOperation = __webpack_require__(9);

/**
 * Class CallOperation.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 * @param {number} code
 *   The operation code.
 * @param {string} name
 *   The operation name.
 *
 * @constructor
 * @extends {TokenOperation}
 */
function CallOperation (parser, code, name) {

  'use strict';

  // Invoke the parent constructor.
  Extend(true, this, new TokenOperation(parser, code, name));

}

module.exports = CallOperation;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var CallOperation = __webpack_require__(38);
var LoadArgumentOperation = __webpack_require__(37);
var LoadStringOperation = __webpack_require__(36);
var MethodOperation = __webpack_require__(3);
var NoOperation = __webpack_require__(35);
var OpCodes = __webpack_require__(5);
var ParserException = __webpack_require__(4);
var ReturnOperation = __webpack_require__(34);

/**
 * Class MethodOperationFactory.
 *
 * @constructor
 * @struct
 */
function MethodOperationFactory () {

  'use strict';

  /**
   * The registered operation classes.
   *
   * @type {Array<MethodOperation>}
   */
  this._classes = [];

  /**
   * Parses an operation.
   *
   * @param {CILParser} parser
   *   The CIL parser.
   * @param {number} code
   *   The operation code.
   * @param {string} name
   *   The operation name.
   */
  this.parse = function (parser, code, name) {
    if (!this._classes[code]) {
      throw new ParserException('Unsupported IL operation \'' + name +
        '\' (0x' + code.toString(16).toUpperCase() + ')');
    }

    return new this._classes[code](parser, code, name);
  };

  /**
   * Registers a constructor for a specific operation.
   *
   * @param {number} code
   *   The operation code.
   * @param {MethodOperation} constructor
   *   The operation constructor.
   */
  this.register = function (code, constructor) {
    this._classes[code] = constructor;
  };

  // Register the supported operations.
  this.register(OpCodes.CALL, CallOperation);
  this.register(OpCodes.LDARG, LoadArgumentOperation);
  this.register(OpCodes.LDARG_0, LoadArgumentOperation);
  this.register(OpCodes.LDARG_1, LoadArgumentOperation);
  this.register(OpCodes.LDARG_2, LoadArgumentOperation);
  this.register(OpCodes.LDARG_3, LoadArgumentOperation);
  this.register(OpCodes.LDARG_S, LoadArgumentOperation);
  this.register(OpCodes.LDSTR, LoadStringOperation);
  this.register(OpCodes.NOP, NoOperation);
  this.register(OpCodes.RET, ReturnOperation);
}

module.exports = new MethodOperationFactory();


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class MethodFlags.
 *
 * @constructor
 * @struct
 */
function MethodFlags () {

  'use strict';

  /**
   * The fat format flag.
   *
   * @const {number}
   */
  this.FAT_FORMAT = 0x3;

  /**
   * The initialize locals flag.
   *
   * @const {number}
   */
  this.INITIALIZE_LOCALS = 0x10;

  /**
   * The more sections flag.
   *
   * @const {number}
   */
  this.MORE_SECTIONS = 0x8;

  /**
   * The tiny format flag.
   *
   * @const {number}
   */
  this.TINY_FORMAT = 0x2;

}

module.exports = new MethodFlags();


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var MethodFlags = __webpack_require__(40);

/**
 * Class MethodHeader.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 *
 * @constructor
 * @struct
 */
function MethodHeader (parser) {

  'use strict';

  // Retrieve the first one or two bytes specifying the flags and header size.
  var flagsAndSize = parser.readUInt(1);
  var thin = true;

  if ((flagsAndSize & MethodFlags.TINY_FORMAT) === 0) {
    parser.setPosition(parser.getPosition() - 1);
    flagsAndSize = parser.readUInt(2);
    thin = false;
  }

  /**
   * The flags.
   *
   * @type {number}
   */
  this.flags = thin ? flagsAndSize & 0x03 : flagsAndSize & 0xFFF;

  /**
   * The header size.
   *
   * @type {number}
   */
  this.headerSize = thin ? 1 : flagsAndSize >> 12;

  /**
   * The maximum number of items on the operand stack.
   *
   * @return {number}
   */
  this.maxStack = thin ? 8 : parser.readUInt(2);

  /**
   * The size in bytes of the operations.
   *
   * @return {number}
   */
  this.operationsSize = thin ? flagsAndSize >> 2 : parser.readUInt(4);

  /**
   * The metadata token for a signature describing the layout of the local
   * variables for the method
   *
   * @return {number}
   */
  this.localVarSigTok = thin ? 0 : parser.readUInt(4);

  /**
   * The file offset to the operations.
   *
   * @type {number}
   */
  this.operationsOffset = parser.getPosition();

}

module.exports = MethodHeader;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var MethodHeader = __webpack_require__(41);
var MethodOperation = __webpack_require__(3);
var MethodOperationFactory = __webpack_require__(39);
var OpCodes = __webpack_require__(5);
var ParserException = __webpack_require__(4);

/**
 * Class MethodBody.
 *
 * @param {CILParser} parser
 *   The CIL parser.
 *
 * @constructor
 * @struct
 */
function MethodBody (parser) {

  'use strict';

  /**
   * The header.
   *
   * @type {MethodHeader}
   */
  this.header = new MethodHeader(parser);

  /**
   * The operations.
   *
   * @type {Array<MethodOperation>}
   */
  this.operations = [];

  // Read the operations.
  while (parser.getPosition() < this.header.operationsOffset +
    this.header.operationsSize) {
    var name = null;
    var code = parser.readUInt(1);

    if (code === 0xFE) {
      parser.setPosition(parser.getPosition() - 1);
      code = parser.readUInt(2);
    }

    for (var property in OpCodes) {
      if (OpCodes.hasOwnProperty(property)) {
        if (OpCodes[property] === code) {
          name = property.toLowerCase().replace('_', '.');
        }
      }
    }

    if (!name) {
      throw new ParserException('Invalid IL operation 0x' +
        code.toString(16).toUpperCase());
    }

    this.operations.push(MethodOperationFactory.parse(parser, code, name));
  }
}

module.exports = MethodBody;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class MethodDefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MethodDefRow (reader) {

  'use strict';

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


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class NestedClassRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function NestedClassRow (reader) {

  'use strict';

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


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class MemberRefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function MemberRefRow (reader) {

  'use strict';

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


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
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

  'use strict';

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


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var StreamHeader = __webpack_require__(46);

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


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class ManifestResourceRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ManifestResourceRow (reader) {

  'use strict';

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


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class InterfaceImplRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function InterfaceImplRow (reader) {

  'use strict';

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


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class ImplMapRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ImplMapRow (reader) {

  'use strict';

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


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class GenericParamConstraintRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function GenericParamConstraintRow (reader) {

  'use strict';

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


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class GenericParamRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function GenericParamRow (reader) {

  'use strict';

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


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class FileRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function FileRow (reader) {

  'use strict';

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


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class FieldMarshalRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function FieldMarshalRow (reader) {

  'use strict';

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


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class FieldLayoutRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function FieldLayoutRow (reader) {

  'use strict';

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


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class FieldRVARow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function FieldRVARow (reader) {

  'use strict';

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


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class FieldRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function FieldRow (reader) {

  'use strict';

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


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class ExportedTypeRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ExportedTypeRow (reader) {

  'use strict';

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


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class EventRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function EventRow (reader) {

  'use strict';

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


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class EventMapRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function EventMapRow (reader) {

  'use strict';

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


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class DeclSecurityRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function DeclSecurityRow (reader) {

  'use strict';

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


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class ConstantRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function CustomAttributeRow (reader) {

  'use strict';

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


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var DataDirectoryHeader = __webpack_require__(11);

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

  'use strict';

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


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class ConstantRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ConstantRow (reader) {

  'use strict';

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


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class ClassLayoutRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function ClassLayoutRow (reader) {

  'use strict';

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


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class AssemblyRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyRow (reader) {

  'use strict';

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


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class AssemblyRefRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyRefRow (reader) {

  'use strict';

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


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class AssemblyRefProcessorRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyRefProcessorRow (reader) {

  'use strict';

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


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var RowReference = __webpack_require__(1);
var TableIndexes = __webpack_require__(0);

/**
 * Class AssemblyRefOSRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyRefOSRow (reader) {

  'use strict';

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


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class AssemblyProcessorRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyProcessorRow (reader) {

  'use strict';

  /**
   * The processor type.
   *
   * @type {number}
   */
  this.processor = reader.readUInt(4);

}

module.exports = AssemblyProcessorRow;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class AssemblyOSRow.
 *
 * @param {CILParser} reader
 *   The CIL reader.
 *
 * @constructor
 * @struct
 */
function AssemblyOSRow (reader) {

  'use strict';

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


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var AssemblyOSRow = __webpack_require__(71);
var AssemblyProcessorRow = __webpack_require__(70);
var AssemblyRefOSRow = __webpack_require__(69);
var AssemblyRefProcessorRow = __webpack_require__(68);
var AssemblyRefRow = __webpack_require__(67);
var AssemblyRow = __webpack_require__(66);
var ClassLayoutRow = __webpack_require__(65);
var ConstantRow = __webpack_require__(64);
var CORHeader = __webpack_require__(63);
var CustomAttributeRow = __webpack_require__(62);
var DeclSecurityRow = __webpack_require__(61);
var EventMapRow = __webpack_require__(60);
var EventRow = __webpack_require__(59);
var ExportedTypeRow = __webpack_require__(58);
var Extend = __webpack_require__(2);
var FieldRow = __webpack_require__(57);
var FieldRVARow = __webpack_require__(56);
var FieldLayoutRow = __webpack_require__(55);
var FieldMarshalRow = __webpack_require__(54);
var FileRow = __webpack_require__(53);
var GenericParamRow = __webpack_require__(52);
var GenericParamConstraintRow = __webpack_require__(51);
var ImplMapRow = __webpack_require__(50);
var InterfaceImplRow = __webpack_require__(49);
var ParserException = __webpack_require__(4);
var ManifestResourceRow = __webpack_require__(48);
var MetadataHeader = __webpack_require__(47);
var MemberRefRow = __webpack_require__(45);
var NestedClassRow = __webpack_require__(44);
var MethodDefRow = __webpack_require__(43);
var MethodBody = __webpack_require__(42);
var MethodImplRow = __webpack_require__(33);
var MethodSemanticsRow = __webpack_require__(32);
var ModuleRefRow = __webpack_require__(31);
var ModuleRow = __webpack_require__(30);
var ParamRow = __webpack_require__(29);
var PEParser = __webpack_require__(28);
var PropertyMapRow = __webpack_require__(20);
var PropertyRow = __webpack_require__(19);
var StandAloneSigRow = __webpack_require__(18);
var TableIndexes = __webpack_require__(0);
var TablesHeader = __webpack_require__(17);
var TypeDefRow = __webpack_require__(16);
var TypeRefRow = __webpack_require__(15);
var TypeSpecRow = __webpack_require__(14);

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
   * @type {Array<MethodBody>}
   *
   * @protected
   */
  this._methodBodies = null;

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
        throw new ParserException('Invalid COR header (size: ' +
          this._corHeader.sizeOfHeader  + ' - expected: 72)');
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
      throw new ParserException('The #GUID stream is missing');
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
        throw new ParserException('Invalid metadata header (signature: 0x' +
          this._metadataHeader.signature.toString(16).toUpperCase() +
          ' - expected: 0x424A5342)');
      }
    }

    return this._metadataHeader;
  };

  /**
   * Reads the CLR method bodies.
   *
   * @return {Array<MethodBody>}
   *   Returns an array of method bodies.
   */
  this.readMethodBodies = function () {
    if (!this._methodBodies) {
      var tables = this.readTables();

      // Initialize the array of method headers.
      this._methodBodies = new Array(tables[TableIndexes.METHOD_DEF].length);

      // Parse the method headers referenced by the MethodDef table.
      for (var i = 0; i < tables[TableIndexes.METHOD_DEF].length; i++) {
        this.setPosition(this.getFileOffset(tables[TableIndexes.METHOD_DEF][i]
          .rva));
        this._methodBodies[i] = new MethodBody(this);
      }
    }

    return this._methodBodies;
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
      throw new ParserException('The #Strings stream is missing');
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
        throw new ParserException('The #~ stream is missing');
      }

      // Move the stream cursor to the position of the tables header.
      this.setPosition(this.readMetadataHeader().offset + streamHeader.offset);

      // Read the header and throw an exception if it is invalid.
      this._tablesHeader = new TablesHeader(this);

      if ((this._tablesHeader.majorVersion !== 2) ||
        (this._tablesHeader.minorVersion !== 0)) {
        throw new ParserException('Invalid tables header (version: ' +
          this._tablesHeader.majorVersion + '.' +
          this._tablesHeader.minorVersion + ' - expected: 2.0)');
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


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is part of ComilaJS.
 *
 * ComilaJS is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ComilaJS is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ComilaJS. If not, see <http://www.gnu.org/licenses/>.
 */

var CILParser = __webpack_require__(72);
var Compiler = __webpack_require__(13);

/**
 * Class Main.
 *
 * @constructor
 * @final
 */
function Main () {

  'use strict';

  /**
   * Runs an executable.
   *
   * @param {string} path
   *   The path.
   *
   * @return {Main}
   *   Returns this instance.
   */
  this.run = function (path) {
    console.info('Downloading application \'' + path + '\'');

    (new CILParser(path)).loadFile(function (parser) {
      console.info('Compiling application \'' + parser.getPath() + '\'');

      var compiler;
      var module;

      try {
        compiler = new Compiler(parser);
        module = compiler.compile();
      }
      catch (ex) {
        console.error('Failed to compile application \'' +
          parser.getPath() + '\': ' + ex.getMessage());
        return;
      }

      console.info('Running application \'' + parser.getPath() + '\'');

      try {
        module.run();
      }
      catch (ex) {
        console.error('Failed to run application \'' +
          parser.getPath() + '\': ' + ex.getMessage());
      }
    }, function (parser, status) {
      console.error('Failed to download application \'' + parser.getPath() +
        '\' (HTTP ' + status + ')');
    });

    return this;
  };

}

module.exports = new Main();


/***/ })
/******/ ]);
});