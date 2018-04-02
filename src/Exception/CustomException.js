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
