// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "toString" is 0
 *
 * @section: 15.9.5.2;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.2_Date.prototype.toString/S15.9.5.2_A2_T1.js;
 * @description: The "length" property of the "toString" is 0;
 */

if(Date.prototype.toString.hasOwnProperty("length") !== true){
  $ERROR('#1: The toString has a "length" property');
}

if(Date.prototype.toString.length !== 0){
  $ERROR('#2: The "length" property of the toString is 0');
}

