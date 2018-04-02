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
