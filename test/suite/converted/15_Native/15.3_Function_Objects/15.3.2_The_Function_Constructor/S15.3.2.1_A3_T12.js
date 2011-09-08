// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the Function constructor is called with arguments p, body the following steps are taken:
 * i) Let Result(i) be the first argument
 * ii) Let P be ToString(Result(i))
 * iii) Call ToString(body)
 * iv) If P is not parsable as a FormalParameterList_opt then throw a SyntaxError exception
 * v) If body is not parsable as FunctionBody then throw a SyntaxError exception
 * vi) Create a new Function object as specified in 13.2 with parameters specified by parsing P as a FormalParameterListopt and body specified by parsing body as a FunctionBody
 * Pass in a scope chain consisting of the global object as the Scope parameter
 * vii) Return Result(vi)
 *
 * @section: 15.3.2.1, 13.2;
 * @path: 15_Native/15.3_Function_Objects/15.3.2_The_Function_Constructor/S15.3.2.1_A3_T12.js;
 * @description: Values of the function constructor arguments are "a,b,c" and "undefined";
 */

var p = "a,b,c";

//CHECK#1
try {
  var f = new Function(p, undefined);
} catch (e) {
  $FAIL('#1: test failed with error '+e);
}

//CHECK#2
if (f.constructor !== Function) {
  $ERROR('#2: When the Function constructor is called with arguments p, body creates a new Function object as specified in 13.2');
}

//CHECK#3
if (f()!==undefined) {
  $ERROR('#3: When the Function constructor is called with arguments p, body the following steps are taken...');
}
