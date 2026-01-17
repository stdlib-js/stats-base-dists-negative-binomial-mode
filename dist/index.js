/** @license Apache-2.0 */

'use strict';

/**
* Negative binomial distribution mode.
*
* @module @stdlib/stats-base-dists-negative-binomial-mode
*
* @example
* var mode = require( '@stdlib/stats-base-dists-negative-binomial-mode' );
*
* var v = mode( 100, 0.2 );
* // returns 396
*
* v = mode( 20, 0.5 );
* // returns 19
*/

// MODULES //

var mode = require( './main.js' );


// EXPORTS //

module.exports = mode;
