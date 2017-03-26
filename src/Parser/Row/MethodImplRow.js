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

var RowReference = require('./../Reference/RowReference');
var TableIndexes = require('./../Constant/TableIndexes');

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
