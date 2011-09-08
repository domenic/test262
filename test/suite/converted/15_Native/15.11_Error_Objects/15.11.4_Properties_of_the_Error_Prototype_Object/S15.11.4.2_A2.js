// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The initial value of Error.prototype.name is "Error"
 *
 * @section: 15.11.4.2, 16;
 * @path: 15_Native/15.11_Error_Objects/15.11.4_Properties_of_the_Error_Prototype_Object/S15.11.4.2_A2.js;
 * @description: Checking value of Error.prototype.name;
 */

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (Error.prototype.name!=="Error") {
	$ERROR('#1: Error.prototype.name==="Error". Actual: '+Error.prototype.name);
}
//
//////////////////////////////////////////////////////////////////////////////
