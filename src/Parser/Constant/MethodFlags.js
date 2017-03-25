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
 * Class MethodFlags.
 *
 * @constructor
 * @struct
 */
function MethodFlags () {

  "use strict";

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
