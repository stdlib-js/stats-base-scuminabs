/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var abs = require( '@stdlib/math-base-special-abs' );


// MAIN //

/**
* Computes the cumulative minimum absolute value of single-precision floating-point strided array elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float32Array( x.length );
* var N = x.length;
*
* var v = scuminabs( N, x, 1, y, 1 );
* // returns <Float32Array>[ 1.0, 1.0, 1.0 ]
*/
function scuminabs( N, x, strideX, y, strideY ) {
	var min;
	var ix;
	var iy;
	var v;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	min = abs( x[ ix ] );
	y[ iy ] = min;

	iy += strideY;
	i = 1;
	if ( isnanf( min ) === false ) {
		for ( i; i < N; i++ ) {
			ix += strideX;
			v = abs( x[ ix ] );
			if ( isnanf( v ) ) {
				min = v;
				break;
			}
			if ( v < min ) {
				min = v;
			}
			y[ iy ] = min;
			iy += strideY;
		}
	}
	if ( isnanf( min ) ) {
		for ( i; i < N; i++ ) {
			y[ iy ] = min;
			iy += strideY;
		}
	}
	return y;
}


// EXPORTS //

module.exports = scuminabs;