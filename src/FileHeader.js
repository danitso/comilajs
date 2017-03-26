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
    "\n" +
    'Copyright (c) ' + new Date().getFullYear() + ' ' + Pkg.author.name +
    "\n" +
    Pkg.homepage +
    "\n\n" +
    'This program is free software: you can redistribute it and/or modify it ' +
    "\n" +
    'under the terms of the GNU Lesser General Public License as published by' +
    "\n" +
    'the Free Software Foundation, either version 3 of the License, or' +
    "\n" +
    '(at your option) any later version.' + "\n\n" +
    'This program is distributed in the hope that it will be useful,' + "\n" +
    'but WITHOUT ANY WARRANTY; without even the implied warranty of' + "\n" +
    'MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the' + "\n" +
    'GNU Lesser General Public License for more details.' + "\n\n" +
    'You should have received a copy of the GNU Lesser General Public License' +
    "\n" +
    'along with this program. If not, see <http://www.gnu.org/licenses/>.';

}

module.exports = new FileHeader();
