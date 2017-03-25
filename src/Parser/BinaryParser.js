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

  "use strict";

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
    request.onreadystatechange = function(reader) {
      return function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            // Store the data as an UInt8 array and reset the position.
            reader._data = new Uint8Array(request.response);
            reader._position = 0;

            // Invoke the success callback in order for the invoker to proceed.
            success(reader);
          }
          else {
            error(reader);
          }
        }
      };
    }(this);
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
        (s.endsWith("\0"))) {
        break;
      }
    }

    if ((terminate) && ((i = s.indexOf("\0")) > -1)) {
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
      else if (s.endsWith("\0\0")) {
        break;
      }
    }

    if ((terminate) && ((i = s.indexOf("\0\0")) > -1)) {
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
