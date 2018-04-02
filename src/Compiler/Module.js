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

var NotImplementedException = require('./../Exception/NotImplementedException');

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
