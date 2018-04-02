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
 * Class OpCodes.
 *
 * @constructor
 * @struct
 */
function OpCodes () {

  'use strict';

  /**
   * The op-code for the 'add' instruction.
   *
   * Add two values, returning a new value.
   *
   * @const {number}
   */
  this.ADD = 0x58;

  /**
   * The op-code for the 'add.ovf' instruction.
   *
   * Add signed integer values with overflow check.
   *
   * @const {number}
   */
  this.ADD_OVF = 0xD6;

  /**
   * The op-code for the 'add.ovf.un' instruction.
   *
   * Add unsigned integer values with overflow check.
   *
   * @const {number}
   */
  this.ADD_OVF_UN = 0xD7;

  /**
   * The op-code for the 'arglist' instruction.
   *
   * Return argument list handle for the current method.
   *
   * @const {number}
   */
  this.ARGLIST = 0xFE00;

  /**
   * The op-code for the 'and' instruction.
   *
   * Bitwise AND of two integral values, returns an integral value.
   *
   * @const {number}
   */
  this.AND = 0x5F;

  /**
   * The op-code for the 'beq' instruction.
   *
   * Branch to target if equal.
   *
   * @const {number}
   */
  this.BEQ = 0x3B;

  /**
   * The op-code for the 'beq.s' instruction.
   *
   * Branch to target if equal, short form.
   *
   * @const {number}
   */
  this.BEQ_S = 0x2E;

  /**
   * The op-code for the 'bge' instruction.
   *
   * Branch to target if greater than or equal to.
   *
   * @const {number}
   */
  this.BGE = 0x3C;

  /**
   * The op-code for the 'bge.s' instruction.
   *
   * Branch to target if greater than or equal to, short form.
   *
   * @const {number}
   */
  this.BGE_S = 0x2F;

  /**
   * The op-code for the 'bge.un' instruction.
   *
   * Branch to target if greater than or equal to, short form.
   *
   * @const {number}
   */
  this.BGE_UN = 0x41;

  /**
   * The op-code for the 'bge.un.s' instruction.
   *
   * Branch to target if greater than or equal to (unsigned or unordered), short
   * form.
   *
   * @const {number}
   */
  this.BGE_UN_S = 0x34;

  /**
   * The op-code for the 'bgt' instruction.
   *
   * Branch to target if greater than.
   *
   * @const {number}
   */
  this.BGT = 0x3D;

  /**
   * The op-code for the 'bgt.s' instruction.
   *
   * Branch to target if greater than, short form.
   *
   * @const {number}
   */
  this.BGT_S = 0x30;

  /**
   * The op-code for the 'bgt.un' instruction.
   *
   * Branch to target if greater than (unsigned or unordered).
   *
   * @const {number}
   */
  this.BGT_UN = 0x42;

  /**
   * The op-code for the 'bgt.un.s' instruction.
   *
   * Branch to target if greater than (unsigned or unordered), short form.
   *
   * @const {number}
   */
  this.BGT_UN_S = 0x35;

  /**
   * The op-code for the 'ble' instruction.
   *
   * Branch to target if less than or equal to.
   *
   * @const {number}
   */
  this.BLE = 0x3E;

  /**
   * The op-code for the 'ble.s' instruction.
   *
   * Branch to target if less than or equal to, short form.
   *
   * @const {number}
   */
  this.BLE_S = 0x31;

  /**
   * The op-code for the 'ble.un' instruction.
   *
   * Branch to target if less than or equal to (unsigned or unordered).
   *
   * @const {number}
   */
  this.BLE_UN = 0x43;

  /**
   * The op-code for the 'ble.un.s' instruction.
   *
   * Branch to target if less than or equal to (unsigned or unordered), short
   * form.
   *
   * @const {number}
   */
  this.BLE_UN_S = 0x36;

  /**
   * The op-code for the 'blt' instruction.
   *
   * Branch to target if less than.
   *
   * @const {number}
   */
  this.BLT = 0x3F;

  /**
   * The op-code for the 'blt.s' instruction.
   *
   * Branch to target if less than, short form.
   *
   * @const {number}
   */
  this.BLT_S = 0x32;

  /**
   * The op-code for the 'blt.un' instruction.
   *
   * Branch to target if less than (unsigned or unordered).
   *
   * @const {number}
   */
  this.BLT_UN = 0x44;

  /**
   * The op-code for the 'blt.un.s' instruction.
   *
   * Branch to target if less than (unsigned or unordered), short form.
   *
   * @const {number}
   */
  this.BLT_UN_S = 0x37;

  /**
   * The op-code for the 'bne.un' instruction.
   *
   * Branch to target if unequal or unordered.
   *
   * @const {number}
   */
  this.BNE_UN = 0x40;

  /**
   * The op-code for the 'bne.un.s' instruction.
   *
   * Branch to target if unequal or unordered, short form.
   *
   * @const {number}
   */
  this.BNE_UN_S = 0x33;

  /**
   * The op-code for the 'box' instruction.
   *
   * Convert a boxable value to its boxed form.
   *
   * @const {number}
   */
  this.BOX = 0x8C;

  /**
   * The op-code for the 'br' instruction.
   *
   * Branch to target.
   *
   * @const {number}
   */
  this.BR = 0x38;

  /**
   * The op-code for the 'br.s' instruction.
   *
   * Branch to target, short form.
   *
   * @const {number}
   */
  this.BR_S = 0x2B;

  /**
   * The op-code for the 'break' instruction.
   *
   * Inform a debugger that a breakpoint has been reached.
   *
   * @const {number}
   */
  this.BREAK = 0x01;

  /**
   * The op-code for the 'brfalse' instruction.
   *
   * Branch to target if value is zero (false).
   *
   * @const {number}
   */
  this.BRFALSE = 0x39;

  /**
   * The op-code for the 'brfalse.s' instruction.
   *
   * Branch to target if value is zero (false), short form.
   *
   * @const {number}
   */
  this.BRFALSE_S = 0x2C;

  /**
   * The op-code for the 'brinst' instruction.
   *
   * Branch to target if value is a non-null object reference (alias for
   * brtrue).
   *
   * @const {number}
   */
  this.BRINST = 0x3A;

  /**
   * The op-code for the 'brinst.s' instruction.
   *
   * Branch to target if value is a non-null object reference, short form (alias
   * for brtrue.s).
   *
   * @const {number}
   */
  this.BRINST_S = 0x2D;

  /**
   * The op-code for the 'brnull' instruction.
   *
   * Branch to target if value is null (alias for brfalse).
   *
   * @const {number}
   */
  this.BRNULL = 0x39;

  /**
   * The op-code for the 'brnull.s' instruction.
   *
   * Branch to target if value is null (alias for brfalse.s), short form.
   *
   * @const {number}
   */
  this.BRNULL_S = 0x2C;

  /**
   * The op-code for the 'brtrue' instruction.
   *
   * Branch to target if value is non-zero (true).
   *
   * @const {number}
   */
  this.BRTRUE = 0x3A;

  /**
   * The op-code for the 'brtrue.s' instruction.
   *
   * Branch to target if value is non-zero (true), short form.
   *
   * @const {number}
   */
  this.BRTRUE_S = 0x2D;

  /**
   * The op-code for the 'brzero' instruction.
   *
   * Branch to target if value is zero (alias for brfalse).
   *
   * @const {number}
   */
  this.BRZERO = 0x39;

  /**
   * The op-code for the 'brzero.s' instruction.
   *
   * Branch to target if value is zero (alias for brfalse.s), short form.
   *
   * @const {number}
   */
  this.BRZERO_S = 0x2C;

  /**
   * The op-code for the 'call' instruction.
   *
   * Call method described by method.
   *
   * @const {number}
   */
  this.CALL = 0x28;

  /**
   * The op-code for the 'calli' instruction.
   *
   * Call method indicated on the stack with arguments described by
   * callsitedescr.
   *
   * @const {number}
   */
  this.CALLI = 0x29;

  /**
   * The op-code for the 'callvirt' instruction.
   *
   * Call a method associated with an object.
   *
   * @const {number}
   */
  this.CALLVIRT = 0x6F;

  /**
   * The op-code for the 'castclass' instruction.
   *
   * Cast obj to class.
   *
   * @const {number}
   */
  this.CASTCLASS = 0x74;

  /**
   * The op-code for the 'ceq' instruction.
   *
   * Push 1 (of type int32) if value1 equals value2, else push 0.
   *
   * @const {number}
   */
  this.CEQ = 0xFE01;

  /**
   * The op-code for the 'cgt' instruction.
   *
   * Push 1 (of type int32) if value1 > value2, else push 0.
   *
   * @const {number}
   */
  this.CGT = 0xFE02;

  /**
   * The op-code for the 'cgt.un' instruction.
   *
   * Push 1 (of type int32) if value1 > value2, unsigned or unordered, else push
   * 0.
   *
   * @const {number}
   */
  this.CGT_UN = 0xFE03;

  /**
   * The op-code for the 'ckfinite' instruction.
   *
   * Throw ArithmeticException if value is not a finite number.
   *
   * @const {number}
   */
  this.CKFINITE = 0xC3;

  /**
   * The op-code for the 'clt' instruction.
   *
   * Push 1 (of type int32) if value1 < value2, else push 0.
   *
   * @const {number}
   */
  this.CLT = 0xFE04;

  /**
   * The op-code for the 'clt.un' instruction.
   *
   * Push 1 (of type int32) if value1 < value2, unsigned or unordered, else push
   * 0.
   *
   * @const {number}
   */
  this.CLT_UN = 0xFE05;

  /**
   * The op-code for the 'constrained' instruction.
   *
   * Call a virtual method on a type constrained to be type T.
   *
   * @const {number}
   */
  this.CONSTRAINED = 0xFE16;

  /**
   * The op-code for the 'conv.i' instruction.
   *
   * Convert to native int, pushing native int on stack.
   *
   * @const {number}
   */
  this.CONV_I = 0xD3;

  /**
   * The op-code for the 'conv.i1' instruction.
   *
   * Convert to int8, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_I1 = 0x67;

  /**
   * The op-code for the 'conv.i2' instruction.
   *
   * Convert to int16, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_I2 = 0x68;

  /**
   * The op-code for the 'conv.i4' instruction.
   *
   * Convert to int32, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_I4 = 0x69;

  /**
   * The op-code for the 'conv.i8' instruction.
   *
   * Convert to int64, pushing int64 on stack.
   *
   * @const {number}
   */
  this.CONV_I8 = 0x6A;

  /**
   * The op-code for the 'conv.ovf.i' instruction.
   *
   * Convert to a native int (on the stack as native int) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I = 0xD4;

  /**
   * The op-code for the 'conv.ovf.i.un' instruction.
   *
   * Convert unsigned to a native int (on the stack as native int) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I_UN = 0x8A;

  /**
   * The op-code for the 'conv.ovf.i1' instruction.
   *
   * Convert to an int8 (on the stack as int32) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I1 = 0xB3;

  /**
   * The op-code for the 'conv.ovf.i1.un' instruction.
   *
   * Convert unsigned to an int8 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I1_UN = 0x82;

  /**
   * The op-code for the 'conv.ovf.i2' instruction.
   *
   * Convert to an int16 (on the stack as int32) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I2 = 0xB5;

  /**
   * The op-code for the 'conv.ovf.i2.un' instruction.
   *
   * Convert unsigned to an int16 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I2_UN = 0x83;

  /**
   * The op-code for the 'conv.ovf.i4' instruction.
   *
   * Convert to an int32 (on the stack as int32) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I4 = 0xB7;

  /**
   * The op-code for the 'conv.ovf.i4.un' instruction.
   *
   * Convert unsigned to an int32 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I4_UN = 0x84;

  /**
   * The op-code for the 'conv.ovf.i8' instruction.
   *
   * Convert to an int64 (on the stack as int64) and throw an exception on
   * overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I8 = 0xB7;

  /**
   * The op-code for the 'conv.ovf.i8.un' instruction.
   *
   * Convert unsigned to an int64 (on the stack as int64) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_I8_UN = 0x84;

  /**
   * The op-code for the 'conv.ovf.u' instruction.
   *
   * Convert to a native unsigned int (on the stack as native int) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U = 0xD5;

  /**
   * The op-code for the 'conv.ovf.u.un' instruction.
   *
   * Convert unsigned to a native unsigned int (on the stack as native int) and
   * throw an exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U_UN = 0x8B;

  /**
   * The op-code for the 'conv.ovf.u1' instruction.
   *
   * Convert to an unsigned int8 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U1 = 0xB4;

  /**
   * The op-code for the 'conv.ovf.u1.un' instruction.
   *
   * Convert unsigned to an unsigned int8 (on the stack as int32) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U1_UN = 0x86;

  /**
   * The op-code for the 'conv.ovf.u2' instruction.
   *
   * Convert to an unsigned int16 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U2 = 0xB6;

  /**
   * The op-code for the 'conv.ovf.u2.un' instruction.
   *
   * Convert unsigned to an unsigned int16 (on the stack as int32) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U2_UN = 0x87;

  /**
   * The op-code for the 'conv.ovf.u4' instruction.
   *
   * Convert to an unsigned int32 (on the stack as int32) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U4 = 0xB8;

  /**
   * The op-code for the 'conv.ovf.u4.un' instruction.
   *
   * Convert unsigned to an unsigned int32 (on the stack as int32) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U4_UN = 0x88;

  /**
   * The op-code for the 'conv.ovf.u8' instruction.
   *
   * Convert to an unsigned int64 (on the stack as int64) and throw an exception
   * on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U8 = 0xBA;

  /**
   * The op-code for the 'conv.ovf.u8.un' instruction.
   *
   * Convert unsigned to an unsigned int64 (on the stack as int64) and throw an
   * exception on overflow.
   *
   * @const {number}
   */
  this.CONV_OVF_U8_UN = 0x89;

  /**
   * The op-code for the 'conv.r.un' instruction.
   *
   * Convert unsigned integer to floating-point, pushing F on stack.
   *
   * @const {number}
   */
  this.CONV_R_UN = 0x76;

  /**
   * The op-code for the 'conv.r4' instruction.
   *
   * Convert to float32, pushing F on stack.
   *
   * @const {number}
   */
  this.CONV_R4 = 0x6B;

  /**
   * The op-code for the 'conv.r8' instruction.
   *
   * Convert to float64, pushing F on stack.
   *
   * @const {number}
   */
  this.CONV_R8 = 0x6C;

  /**
   * The op-code for the 'conv.u' instruction.
   *
   * Convert to native unsigned int, pushing native int on stack.
   *
   * @const {number}
   */
  this.CONV_U = 0xE0;

  /**
   * The op-code for the 'conv.u1' instruction.
   *
   * Convert to unsigned int8, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_U1 = 0xD2;

  /**
   * The op-code for the 'conv.u2' instruction.
   *
   * Convert to unsigned int16, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_U2 = 0xD1;

  /**
   * The op-code for the 'conv.u4' instruction.
   *
   * Convert to unsigned int32, pushing int32 on stack.
   *
   * @const {number}
   */
  this.CONV_U4 = 0x6D;

  /**
   * The op-code for the 'conv.u8' instruction.
   *
   * Convert to unsigned int64, pushing int64 on stack.
   *
   * @const {number}
   */
  this.CONV_U8 = 0x6E;

  /**
   * The op-code for the 'cpblk' instruction.
   *
   * Copy data from memory to memory.
   *
   * @const {number}
   */
  this.CPBLK = 0xFE17;

  /**
   * The op-code for the 'cpobj' instruction.
   *
   * Copy a value type from src to dest.
   *
   * @const {number}
   */
  this.CPOBJ = 0x70;

  /**
   * The op-code for the 'div' instruction.
   *
   * Divide two values to return a quotient or floating-point result.
   *
   * @const {number}
   */
  this.DIV = 0x5B;

  /**
   * The op-code for the 'div.un' instruction.
   *
   * Divide two values, unsigned, returning a quotient.
   *
   * @const {number}
   */
  this.DIV_UN = 0x5C;

  /**
   * The op-code for the 'dup' instruction.
   *
   * Duplicate the value on the top of the stack.
   *
   * @const {number}
   */
  this.DUP = 0x25;

  /**
   * The op-code for the 'endfault' instruction.
   *
   * End fault clause of an exception block.
   *
   * @const {number}
   */
  this.ENDFAULT = 0xDC;

  /**
   * The op-code for the 'endfilter' instruction.
   *
   * End an exception handling filter clause.
   *
   * @const {number}
   */
  this.ENDFILTER = 0xFE11;

  /**
   * The op-code for the 'endfinally' instruction.
   *
   * End an exception handling filter clause.
   *
   * @const {number}
   */
  this.ENDFINALLY = 0xDC;

  /**
   * The op-code for the 'initblk' instruction.
   *
   * Initialize the value at address dest.
   *
   * @const {number}
   */
  this.INITBLK = 0xFE18;

  /**
   * The op-code for the 'initobj' instruction.
   *
   * Initialize the value at address dest.
   *
   * @const {number}
   */
  this.INITOBJ = 0xFE15;

  /**
   * The op-code for the 'isinst' instruction.
   *
   * Test if obj is an instance of class, returning null or an instance of that
   * class or interface.
   *
   * @const {number}
   */
  this.ISINST = 0x75;

  /**
   * The op-code for the 'jmp' instruction.
   *
   * Exit current method and jump to the specified method.
   *
   * @const {number}
   */
  this.JMP = 0x75;

  /**
   * The op-code for the 'ldarg' instruction.
   *
   * Load argument numbered num onto the stack.
   *
   * @const {number}
   */
  this.LDARG = 0xFE09;

  /**
   * The op-code for the 'ldarg.0' instruction.
   *
   * Load argument 0 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_0 = 0x02;

  /**
   * The op-code for the 'ldarg.1' instruction.
   *
   * Load argument 1 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_1 = 0x03;

  /**
   * The op-code for the 'ldarg.2' instruction.
   *
   * Load argument 2 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_2 = 0x04;

  /**
   * The op-code for the 'ldarg.3' instruction.
   *
   * Load argument 3 onto the stack.
   *
   * @const {number}
   */
  this.LDARG_3 = 0x05;

  /**
   * The op-code for the 'ldarg.s' instruction.
   *
   * Load argument numbered num onto the stack, short form.
   *
   * @const {number}
   */
  this.LDARG_S = 0x0E;

  /**
   * The op-code for the 'ldarga' instruction.
   *
   * Fetch the address of argument argNum.
   *
   * @const {number}
   */
  this.LDARGA = 0xFE0A;

  /**
   * The op-code for the 'ldarga.s' instruction.
   *
   * Fetch the address of argument argNum, short form.
   *
   * @const {number}
   */
  this.LDARGA_S = 0x0F;

  /**
   * The op-code for the 'ldc.i4' instruction.
   *
   * Push num of type int32 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4 = 0x20;

  /**
   * The op-code for the 'ldc.i4.0' instruction.
   *
   * Push 0 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_0 = 0x16;

  /**
   * The op-code for the 'ldc.i4.1' instruction.
   *
   * Push 1 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_1 = 0x17;

  /**
   * The op-code for the 'ldc.i4.2' instruction.
   *
   * Push 2 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_2 = 0x18;

  /**
   * The op-code for the 'ldc.i4.3' instruction.
   *
   * Push 3 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_3 = 0x19;

  /**
   * The op-code for the 'ldc.i4.4' instruction.
   *
   * Push 4 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_4 = 0x1A;

  /**
   * The op-code for the 'ldc.i4.5' instruction.
   *
   * Push 5 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_5 = 0x1B;

  /**
   * The op-code for the 'ldc.i4.6' instruction.
   *
   * Push 6 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_6 = 0x1C;

  /**
   * The op-code for the 'ldc.i4.7' instruction.
   *
   * Push 7 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_7 = 0x1D;

  /**
   * The op-code for the 'ldc.i4.8' instruction.
   *
   * Push 8 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_8 = 0x1E;

  /**
   * The op-code for the 'ldc.i4.m1' instruction.
   *
   * Push -1 onto the stack as int32.
   *
   * @const {number}
   */
  this.LDC_I4_M1 = 0x15;

  /**
   * The op-code for the 'ldc.i4.s' instruction.
   *
   * Push num onto the stack as int32, short form.
   *
   * @const {number}
   */
  this.LDC_I4_S = 0x1F;

  /**
   * The op-code for the 'ldc.i8' instruction.
   *
   * Push num of type int64 onto the stack as int64.
   *
   * @const {number}
   */
  this.LDC_I8 = 0x21;

  /**
   * The op-code for the 'ldc.r4' instruction.
   *
   * Push num of type float32 onto the stack as F.
   *
   * @const {number}
   */
  this.LDC_R4 = 0x22;

  /**
   * The op-code for the 'ldc.r8' instruction.
   *
   * Push num of type float64 onto the stack as F.
   *
   * @const {number}
   */
  this.LDC_R8 = 0x23;

  /**
   * The op-code for the 'ldelem' instruction.
   *
   * Load the element at index onto the top of the stack.
   *
   * @const {number}
   */
  this.LDELEM = 0xA3;

  /**
   * The op-code for the 'ldelem.i' instruction.
   *
   * Load the element with type native int at index onto the top of the stack as
   * a native int.
   *
   * @const {number}
   */
  this.LDELEM_I = 0x97;

  /**
   * The op-code for the 'ldelem.i1' instruction.
   *
   * Load the element with type int8 at index onto the top of the stack as an
   * int32.
   *
   * @const {number}
   */
  this.LDELEM_I1 = 0x90;

  /**
   * The op-code for the 'ldelem.i2' instruction.
   *
   * Load the element with type int16 at index onto the top of the stack as an
   * int32.
   *
   * @const {number}
   */
  this.LDELEM_I2 = 0x92;

  /**
   * The op-code for the 'ldelem.i4' instruction.
   *
   * Load the element with type int32 at index onto the top of the stack as an
   * int32.
   *
   * @const {number}
   */
  this.LDELEM_I4 = 0x94;

  /**
   * The op-code for the 'ldelem.i8' instruction.
   *
   * Load the element with type int64 at index onto the top of the stack as an
   * int64.
   *
   * @const {number}
   */
  this.LDELEM_I8 = 0x96;

  /**
   * The op-code for the 'ldelem.r4' instruction.
   *
   * Load the element with type float32 at index onto the top of the stack as an
   * F.
   *
   * @const {number}
   */
  this.LDELEM_R4 = 0x98;

  /**
   * The op-code for the 'ldelem.r8' instruction.
   *
   * Load the element with type float64 at index onto the top of the stack as an
   * F.
   *
   * @const {number}
   */
  this.LDELEM_R8 = 0x99;

  /**
   * The op-code for the 'ldelem.ref' instruction.
   *
   * Load the element at index onto the top of the stack as an O. The type of
   * the O is the same as the element type of the array pushed on the CIL stack.
   *
   * @const {number}
   */
  this.LDELEM_REF = 0x9A;

  /**
   * The op-code for the 'ldelem.u1' instruction.
   *
   * Load the element with type unsigned int8 at index onto the top of the stack
   * as an int32.
   *
   * @const {number}
   */
  this.LDELEM_U1 = 0x91;

  /**
   * The op-code for the 'ldelem.u2' instruction.
   *
   * Load the element with type unsigned int16 at index onto the top of the
   * stack as an int32.
   *
   * @const {number}
   */
  this.LDELEM_U2 = 0x93;

  /**
   * The op-code for the 'ldelem.u4' instruction.
   *
   * Load the element with type unsigned int32 at index onto the top of the
   * stack as an int32.
   *
   * @const {number}
   */
  this.LDELEM_U4 = 0x95;

  /**
   * The op-code for the 'ldelem.u8' instruction.
   *
   * Load the element with type unsigned int64 at index onto the top of the
   * stack as an int64 (alias for ldelem.i8).
   *
   * @const {number}
   */
  this.LDELEM_U8 = 0x96;

  /**
   * The op-code for the 'ldelema' instruction.
   *
   * Load the address of element at index onto the top of the stack.
   *
   * @const {number}
   */
  this.LDELEMA = 0x8F;

  /**
   * The op-code for the 'ldfld' instruction.
   *
   * Push the value of field of object (or value type) obj, onto the stack.
   *
   * @const {number}
   */
  this.LDFLD = 0x7B;

  /**
   * The op-code for the 'ldflda' instruction.
   *
   * Push the address of field of object obj on the stack.
   *
   * @const {number}
   */
  this.LDFLDA = 0x7C;

  /**
   * The op-code for the 'ldftn' instruction.
   *
   * Push a pointer to a method referenced by method, on the stack.
   *
   * @const {number}
   */
  this.LDFTN = 0xFE06;

  /**
   * The op-code for the 'ldind.i' instruction.
   *
   * Indirect load value of type native int as native int on the stack.
   *
   * @const {number}
   */
  this.LDIND_I = 0x4D;

  /**
   * The op-code for the 'ldind.i1' instruction.
   *
   * Indirect load value of type int8 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I1 = 0x46;

  /**
   * The op-code for the 'ldind.i2' instruction.
   *
   * Indirect load value of type int16 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I2 = 0x48;

  /**
   * The op-code for the 'ldind.i4' instruction.
   *
   * Indirect load value of type int32 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I4 = 0x4A;

  /**
   * The op-code for the 'ldind.i8' instruction.
   *
   * Indirect load value of type int64 as int64 on the stack.
   *
   * @const {number}
   */
  this.LDIND_I8 = 0x4C;

  /**
   * The op-code for the 'ldind.r4' instruction.
   *
   * Indirect load value of type float32 as F on the stack.
   *
   * @const {number}
   */
  this.LDIND_R4 = 0x4E;

  /**
   * The op-code for the 'ldind.r8' instruction.
   *
   * Indirect load value of type float64 as F on the stack.
   *
   * @const {number}
   */
  this.LDIND_R8 = 0x4F;

  /**
   * The op-code for the 'ldind.ref' instruction.
   *
   * Indirect load value of type object ref as O on the stack.
   *
   * @const {number}
   */
  this.LDIND_REF = 0x50;

  /**
   * The op-code for the 'ldind.u1' instruction.
   *
   * Indirect load value of type unsigned int8 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_U1 = 0x47;

  /**
   * The op-code for the 'ldind.u2' instruction.
   *
   * Indirect load value of type unsigned int16 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_U2 = 0x49;

  /**
   * The op-code for the 'ldind.u4' instruction.
   *
   * Indirect load value of type unsigned int32 as int32 on the stack.
   *
   * @const {number}
   */
  this.LDIND_U4 = 0x4B;

  /**
   * The op-code for the 'ldind.u8' instruction.
   *
   * Indirect load value of type unsigned int64 as int64 on the stack (alias for
   * ldind.i8).
   *
   * @const {number}
   */
  this.LDIND_U8 = 0x4C;

  /**
   * The op-code for the 'ldlen' instruction.
   *
   * Push the length (of type native unsigned int) of array on the stack.
   *
   * @const {number}
   */
  this.LDLEN = 0x8E;

  /**
   * The op-code for the 'ldloc' instruction.
   *
   * Load local variable of index indx onto stack.
   *
   * @const {number}
   */
  this.LDLOC = 0xFE0C;

  /**
   * The op-code for the 'ldloc.0' instruction.
   *
   * Load local variable 0 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_0 = 0x06;

  /**
   * The op-code for the 'ldloc.1' instruction.
   *
   * Load local variable 1 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_1 = 0x07;

  /**
   * The op-code for the 'ldloc.2' instruction.
   *
   * Load local variable 2 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_1 = 0x08;

  /**
   * The op-code for the 'ldloc.3' instruction.
   *
   * Load local variable 3 onto stack.
   *
   * @const {number}
   */
  this.LDLOC_1 = 0x09;

  /**
   * The op-code for the 'ldloc.s' instruction.
   *
   * Load local variable of index indx onto stack, short form.
   *
   * @const {number}
   */
  this.LDLOC_S = 0x11;

  /**
   * The op-code for the 'ldloca' instruction.
   *
   * Load address of local variable with index indx.
   *
   * @const {number}
   */
  this.LDLOCA = 0xFE0D;

  /**
   * The op-code for the 'ldloca' instruction.
   *
   * Load address of local variable with index indx, short form.
   *
   * @const {number}
   */
  this.LDLOCA_S = 0x12;

  /**
   * The op-code for the 'ldnull' instruction.
   *
   * Push a null reference on the stack.
   *
   * @const {number}
   */
  this.LDNULL = 0x14;

  /**
   * The op-code for the 'ldobj' instruction.
   *
   * Copy the value stored at address src to the stack.
   *
   * @const {number}
   */
  this.LDOBJ = 0x71;

  /**
   * The op-code for the 'ldsfld' instruction.
   *
   * Push the value of the static field on the stack.
   *
   * @const {number}
   */
  this.LDSFLD = 0x7E;

  /**
   * The op-code for the 'ldsflda' instruction.
   *
   * Push the address of the static field, field, on the stack.
   *
   * @const {number}
   */
  this.LDSFLDA = 0x7F;

  /**
   * The op-code for the 'ldstr' instruction.
   *
   * Push a string object for the literal string.
   *
   * @const {number}
   */
  this.LDSTR = 0x72;

  /**
   * The op-code for the 'ldtoken' instruction.
   *
   * Convert metadata token to its runtime representation.
   *
   * @const {number}
   */
  this.LDTOKEN = 0xD0;

  /**
   * The op-code for the 'ldvirtftn' instruction.
   *
   * Push address of virtual method on the stack.
   *
   * @const {number}
   */
  this.LDVIRTFTN = 0xFE07;

  /**
   * The op-code for the 'leave' instruction.
   *
   * Exit a protected region of code.
   *
   * @const {number}
   */
  this.LEAVE = 0xDD;

  /**
   * The op-code for the 'leave.s' instruction.
   *
   * Exit a protected region of code, short form.
   *
   * @const {number}
   */
  this.LEAVE_S = 0xDE;

  /**
   * The op-code for the 'localloc' instruction.
   *
   * Allocate space from the local memory pool.
   *
   * @const {number}
   */
  this.LOCALLOC = 0xFE0F;

  /**
   * The op-code for the 'mkrefany' instruction.
   *
   * Push a typed reference to ptr of type class onto the stack.
   *
   * @const {number}
   */
  this.MKREFANY = 0xC6;

  /**
   * The op-code for the 'mul' instruction.
   *
   * Multiply values.
   *
   * @const {number}
   */
  this.MUL = 0x5A;

  /**
   * The op-code for the 'mul.ovf' instruction.
   *
   * Multiply signed integer values. Signed result shall fit in same size.
   *
   * @const {number}
   */
  this.MUL_OVF = 0xD8;

  /**
   * The op-code for the 'mul.ovf.un' instruction.
   *
   * Multiply unsigned integer values. Unsigned result shall fit in same size.
   *
   * @const {number}
   */
  this.MUL_OVF_UN = 0xD9;

  /**
   * The op-code for the 'neg' instruction.
   *
   * Negate value.
   *
   * @const {number}
   */
  this.NEG = 0x65;

  /**
   * The op-code for the 'newarr' instruction.
   *
   * Create a new array with elements of type etype.
   *
   * @const {number}
   */
  this.NEWARR = 0x8D;

  /**
   * The op-code for the 'newobj' instruction.
   *
   * Allocate an uninitialized object or value type and call ctor.
   *
   * @const {number}
   */
  this.NEWOBJ = 0x73;

  /**
   * The op-code for the 'newobj' instruction.
   *
   * The specified fault check(s) normally performed as part of the execution of
   * the subsequent instruction can/shall be skipped.
   *
   * @const {number}
   */
  this.NO_TYPE_RANGE_NULL_CHECK = 0xFE19;

  /**
   * The op-code for the 'nop' instruction.
   *
   * Do nothing (No operation).
   *
   * @const {number}
   */
  this.NOP = 0x00;

  /**
   * The op-code for the 'not' instruction.
   *
   * Bitwise complement (logical not).
   *
   * @const {number}
   */
  this.NOT = 0x66;

  /**
   * The op-code for the 'or' instruction.
   *
   * Bitwise OR of two integer values, returns an integer.
   *
   * @const {number}
   */
  this.OR = 0x60;

  /**
   * The op-code for the 'pop' instruction.
   *
   * Pop value from the stack.
   *
   * @const {number}
   */
  this.POP = 0x26;

  /**
   * The op-code for the 'readonly' instruction.
   *
   * Specify that the subsequent array address operation performs no type check
   * at runtime, and that it returns a controlled-mutability managed pointer
   *
   * @const {number}
   */
  this.READONLY = 0xFE1E;

  /**
   * The op-code for the 'refanytype' instruction.
   *
   * Push the type token stored in a typed reference.
   *
   * @const {number}
   */
  this.REFANYTYPE = 0xFE1D;

  /**
   * The op-code for the 'refanyval' instruction.
   *
   * Push the address stored in a typed reference.
   *
   * @const {number}
   */
  this.REFANYVAL = 0xC2;

  /**
   * The op-code for the 'rem' instruction.
   *
   * Remainder when dividing one value by another.
   *
   * @const {number}
   */
  this.REM = 0x5D;

  /**
   * The op-code for the 'rem.un' instruction.
   *
   * Remainder when dividing one unsigned value by another.
   *
   * @const {number}
   */
  this.REM_UN = 0x5E;

  /**
   * The op-code for the 'ret' instruction.
   *
   * Return from method, possibly with a value.
   *
   * @const {number}
   */
  this.RET = 0x2A;

  /**
   * The op-code for the 'rethrow' instruction.
   *
   * Rethrow the current exception.
   *
   * @const {number}
   */
  this.RETHROW = 0xFE1A;

  /**
   * The op-code for the 'shl' instruction.
   *
   * Shift an integer left (shifting in zeros), return an integer.
   *
   * @const {number}
   */
  this.SHL = 0x62;

  /**
   * The op-code for the 'shr' instruction.
   *
   * Shift an integer right (shift in sign), return an integer.
   *
   * @const {number}
   */
  this.SHR = 0x63;

  /**
   * The op-code for the 'shr.un' instruction.
   *
   * Shift an integer right (shift in zero), return an integer.
   *
   * @const {number}
   */
  this.SHR_UN = 0x64;

  /**
   * The op-code for the 'sizeof' instruction.
   *
   * Push the size, in bytes, of a type as an unsigned int32.
   *
   * @const {number}
   */
  this.SIZEOF = 0xFE1C;

  /**
   * The op-code for the 'starg' instruction.
   *
   * Store value to the argument numbered num.
   *
   * @const {number}
   */
  this.STARG = 0xFE0B;

  /**
   * The op-code for the 'starg.s' instruction.
   *
   * Store value to the argument numbered num, short form.
   *
   * @const {number}
   */
  this.STARG_S = 0x10;

  /**
   * The op-code for the 'stelem' instruction.
   *
   * Replace array element at index with the value on the stack.
   *
   * @const {number}
   */
  this.STELEM = 0xA4;

  /**
   * The op-code for the 'stelem.i' instruction.
   *
   * Replace array element at index with the i value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I = 0x9B;

  /**
   * The op-code for the 'stelem.i1' instruction.
   *
   * Replace array element at index with the int8 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I1 = 0x9C;

  /**
   * The op-code for the 'stelem.i2' instruction.
   *
   * Replace array element at index with the int16 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I2 = 0x9D;

  /**
   * The op-code for the 'stelem.i4' instruction.
   *
   * Replace array element at index with the int32 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I4 = 0x9E;

  /**
   * The op-code for the 'stelem.i8' instruction.
   *
   * Replace array element at index with the int64 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_I8 = 0x9F;

  /**
   * The op-code for the 'stelem.r4' instruction.
   *
   * Replace array element at index with the float32 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_R4 = 0xA0;

  /**
   * The op-code for the 'stelem.r8' instruction.
   *
   * Replace array element at index with the float64 value on the stack.
   *
   * @const {number}
   */
  this.STELEM_R8 = 0xA1;

  /**
   * The op-code for the 'stelem.ref' instruction.
   *
   * Replace array element at index with the ref value on the stack.
   *
   * @const {number}
   */
  this.STELEM_REF = 0xA2;

  /**
   * The op-code for the 'stfld' instruction.
   *
   * Replace the value of field of the object obj with value.
   *
   * @const {number}
   */
  this.STFLD = 0x7D;

  /**
   * The op-code for the 'stind.i' instruction.
   *
   * Store value of type native int into memory at address.
   *
   * @const {number}
   */
  this.STIND_I = 0xDF;

  /**
   * The op-code for the 'stind.i1' instruction.
   *
   * Store value of type int8 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I1 = 0x52;

  /**
   * The op-code for the 'stind.i2' instruction.
   *
   * Store value of type int16 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I2 = 0x53;

  /**
   * The op-code for the 'stind.i4' instruction.
   *
   * Store value of type int32 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I4 = 0x54;

  /**
   * The op-code for the 'stind.i8' instruction.
   *
   * Store value of type int64 into memory at address.
   *
   * @const {number}
   */
  this.STIND_I8 = 0x55;

  /**
   * The op-code for the 'stind.r4' instruction.
   *
   * Store value of type float32 into memory at address.
   *
   * @const {number}
   */
  this.STIND_R4 = 0x56;

  /**
   * The op-code for the 'stind.r8' instruction.
   *
   * Store value of type float64 into memory at address.
   *
   * @const {number}
   */
  this.STIND_R8 = 0x57;

  /**
   * The op-code for the 'stind.ref' instruction.
   *
   * Store value of type object ref (type O) into memory at address.
   *
   * @const {number}
   */
  this.STIND_REF = 0x51;

  /**
   * The op-code for the 'stloc' instruction.
   *
   * Pop a value from stack into local variable indx.
   *
   * @const {number}
   */
  this.STLOC = 0xFE0E;

  /**
   * The op-code for the 'stloc.0' instruction.
   *
   * Pop a value from stack into local variable 0.
   *
   * @const {number}
   */
  this.STLOC_0 = 0x0A;

  /**
   * The op-code for the 'stloc.1' instruction.
   *
   * Pop a value from stack into local variable 1.
   *
   * @const {number}
   */
  this.STLOC_1 = 0x0B;

  /**
   * The op-code for the 'stloc.2' instruction.
   *
   * Pop a value from stack into local variable 2.
   *
   * @const {number}
   */
  this.STLOC_2 = 0x0C;

  /**
   * The op-code for the 'stloc.3' instruction.
   *
   * Pop a value from stack into local variable 3.
   *
   * @const {number}
   */
  this.STLOC_3 = 0x0D;

  /**
   * The op-code for the 'stloc.s' instruction.
   *
   * Pop a value from stack into local variable indx, short form.
   *
   * @const {number}
   */
  this.STLOC_S = 0x13;

  /**
   * The op-code for the 'stobj' instruction.
   *
   * Store a value of type typeTok at an address.
   *
   * @const {number}
   */
  this.STOBJ = 0x81;

  /**
   * The op-code for the 'stsfld' instruction.
   *
   * Replace the value of the static field with val.
   *
   * @const {number}
   */
  this.STSFLD = 0x80;

  /**
   * The op-code for the 'sub' instruction.
   *
   * Subtract value2 from value1, returning a new value.
   *
   * @const {number}
   */
  this.SUB = 0x59;

  /**
   * The op-code for the 'sub.ovf' instruction.
   *
   * Subtract native int from a native int. Signed result shall fit in same
   * size.
   *
   * @const {number}
   */
  this.SUB_OVF = 0xDA;

  /**
   * The op-code for the 'sub.ovf.un' instruction.
   *
   * Subtract native unsigned int from a native unsigned int. Unsigned result
   * shall fit in same size.
   *
   * @const {number}
   */
  this.SUB_OVF_UN = 0xDB;

  /**
   * The op-code for the 'switch' instruction.
   *
   * Jump to one of n values.
   *
   * @const {number}
   */
  this.SWITCH = 0x45;

  /**
   * The op-code for the 'tail' instruction.
   *
   * Subsequent call terminates current method.
   *
   * @const {number}
   */
  this.TAIL = 0xFE14;

  /**
   * The op-code for the 'throw' instruction.
   *
   * Throw an exception.
   *
   * @const {number}
   */
  this.THROW = 0x7A;

  /**
   * The op-code for the 'unaligned' instruction.
   *
   * Subsequent pointer instruction might be unaligned.
   *
   * @const {number}
   */
  this.UNALIGNED = 0xFE12;

  /**
   * The op-code for the 'unbox' instruction.
   *
   * Extract a value-type from obj, its boxed representation.
   *
   * @const {number}
   */
  this.UNBOX = 0x79;

  /**
   * The op-code for the 'unbox.any' instruction.
   *
   * Extract a value-type from obj, its boxed representation.
   *
   * @const {number}
   */
  this.UNBOX_ANY = 0xA5;

  /**
   * The op-code for the 'volatile' instruction.
   *
   * Subsequent pointer reference is volatile.
   *
   * @const {number}
   */
  this.VOLATILE = 0xFE13;

  /**
   * The op-code for the 'xor' instruction.
   *
   * Bitwise XOR of integer values, returns an integer.
   *
   * @const {number}
   */
  this.XOR = 0x61;

}

module.exports = new OpCodes();
