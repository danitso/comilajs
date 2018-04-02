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
 * Class TableIndexes.
 *
 * @constructor
 * @struct
 */
function TableIndexes () {

  'use strict';

  /**
   * The table index for the 'Assembly' table.
   *
   * @const {number}
   */
  this.ASSEMBLY = 32;

  /**
   * The table index for the 'AssemblyOS' table.
   *
   * @const {number}
   */
  this.ASSEMBLY_OS = 34;

  /**
   * The table index for the 'AssemblyProcessor' table.
   *
   * @const {number}
   */
  this.ASSEMBLY_PROCESSOR = 33;

  /**
   * The table index for the 'AssemblyRef' table.
   *
   * @const {number}
   */
  this.ASSEMBLY_REF = 35;

  /**
   * The table index for the 'AssemblyRefOS' table.
   *
   * @const {number}
   */
  this.ASSEMBLY_REF_OS = 37;

  /**
   * The table index for the 'AssemblyRefProcessor' table.
   *
   * @const {number}
   */
  this.ASSEMBLY_REF_PROCESSOR = 36;

  /**
   * The table index for the 'ClassLayout' table.
   *
   * @const {number}
   */
  this.CLASS_LAYOUT = 15;

  /**
   * The table index for the 'Constant' table.
   *
   * @const {number}
   */
  this.CONSTANT = 11;

  /**
   * The table index for the 'CustomAttribute' table.
   *
   * @const {number}
   */
  this.CUSTOM_ATTRIBUTE = 12;

  /**
   * The table index for the 'DeclSecurity' table.
   *
   * @const {number}
   */
  this.DECL_SECURITY = 14;

  /**
   * The table index for the 'Event' table.
   *
   * @const {number}
   */
  this.EVENT = 20;

  /**
   * The table index for the 'EventMap' table.
   *
   * @const {number}
   */
  this.EVENT_MAP = 18;

  /**
   * The table index for the 'ExportedType' table.
   *
   * @const {number}
   */
  this.EXPORTED_TYPE = 39;

  /**
   * The table index for the 'Field' table.
   *
   * @const {number}
   */
  this.FIELD = 4;

  /**
   * The table index for the 'FieldLayout' table.
   *
   * @const {number}
   */
  this.FIELD_LAYOUT = 16;

  /**
   * The table index for the 'FieldMarshal' table.
   *
   * @const {number}
   */
  this.FIELD_MARSHAL = 13;

  /**
   * The table index for the 'FieldRVA' table.
   *
   * @const {number}
   */
  this.FIELD_RVA = 29;

  /**
   * The table index for the 'File' table.
   *
   * @const {number}
   */
  this.FILE = 38;

  /**
   * The table index for the 'GenericParam' table.
   *
   * @const {number}
   */
  this.GENERIC_PARAM = 42;

  /**
   * The table index for the 'GenericParamConstraint' table.
   *
   * @const {number}
   */
  this.GENERIC_PARAM_CONSTRAINT = 44;

  /**
   * The table index for the 'ImplMap' table.
   *
   * @const {number}
   */
  this.IMPL_MAP = 28;

  /**
   * The table index for the 'InterfaceImpl' table.
   *
   * @const {number}
   */
  this.INTERFACE_IMPL = 9;

  /**
   * The table index for the 'ManifestResource' table.
   *
   * @const {number}
   */
  this.MANIFEST_RESOURCE = 40;

  /**
   * The table index for the 'MemberRef' table.
   *
   * @const {number}
   */
  this.MEMBER_REF = 10;

  /**
   * The table index for the 'MethodDef' table.
   *
   * @const {number}
   */
  this.METHOD_DEF = 6;

  /**
   * The table index for the 'MethodImpl' table.
   *
   * @const {number}
   */
  this.METHOD_IMPL = 25;

  /**
   * The table index for the 'MethodSemantics' table.
   *
   * @const {number}
   */
  this.METHOD_SEMANTICS = 24;

  /**
   * The table index for the 'Module' table.
   *
   * @const {number}
   */
  this.MODULE = 0;

  /**
   * The table index for the 'ModuleRef' table.
   *
   * @const {number}
   */
  this.MODULE_REF = 26;

  /**
   * The table index for the 'NestedClass' table.
   *
   * @const {number}
   */
  this.NESTED_CLASS = 41;

  /**
   * The table index for the 'Param' table.
   *
   * @const {number}
   */
  this.PARAM = 8;

  /**
   * The table index for the 'Property' table.
   *
   * @const {number}
   */
  this.PROPERTY = 23;

  /**
   * The table index for the 'PropertyMap' table.
   *
   * @const {number}
   */
  this.PROPERTY_MAP = 21;

  /**
   * The table index for the 'StandAloneSig' table.
   *
   * @const {number}
   */
  this.STAND_ALONE_SIG = 17;

  /**
   * The table index for the 'TypeRef' table.
   *
   * @const {number}
   */
  this.TYPE_REF = 1;

  /**
   * The table index for the 'TypeDef' table.
   *
   * @const {number}
   */
  this.TYPE_DEF = 2;

  /**
   * The table index for the 'TypeSpec' table.
   *
   * @const {number}
   */
  this.TYPE_SPEC = 27;

}

module.exports = new TableIndexes();
