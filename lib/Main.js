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

var CLIParser = require('./Parser/CLIParser');

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
      console.log(reader.readMethodHeaders());
    }, function() {
      console.log('Failed to load the file');
    });
  };

}

module.exports = new Main();
