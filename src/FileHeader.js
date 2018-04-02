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

var Pkg = require('../package.json');

/**
 * Class Banner.
 *
 * @constructor
 * @final
 */
function FileHeader () {

  'use strict';

  /**
   * The file header.
   *
   * @type {string}
   */
  this.text = Pkg.name + ' v' + Pkg.version +
    String.fromCharCode(10) +
    'Copyright (c) ' + new Date().getFullYear() + ' ' + Pkg.author.name +
    String.fromCharCode(10) +
    Pkg.homepage +
    String.fromCharCode(10).repeat(2) +
    'This program is free software: you can redistribute it and/or modify it ' +
    String.fromCharCode(10) +
    'under the terms of the GNU Lesser General Public License as published by' +
    String.fromCharCode(10) +
    'the Free Software Foundation, either version 3 of the License, or' +
    String.fromCharCode(10) +
    '(at your option) any later version.' +
    String.fromCharCode(10).repeat(2) +
    'This program is distributed in the hope that it will be useful,' +
    String.fromCharCode(10) +
    'but WITHOUT ANY WARRANTY; without even the implied warranty of' +
    String.fromCharCode(10) +
    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the' +
    String.fromCharCode(10) +
    'GNU Lesser General Public License for more details.' +
    String.fromCharCode(10).repeat(2) +
    'You should have received a copy of the GNU Lesser General Public License' +
    String.fromCharCode(10) +
    'along with this program. If not, see <http://www.gnu.org/licenses/>.';

}

module.exports = new FileHeader();
