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
 * Class Module.
 *
 * @param {CILParser} reader
 *   The CLR reader.
 *
 * @constructor
 */
function Module (reader) {

  "use strict";

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

}

module.exports = Module;
