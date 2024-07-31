import * as Methods from "./methods";

/**
 * Calculates the average of a series of values stored in the local storage.
 *
 * @param {string} localStorageKeyName - The name of the key in the local storage
 * where the series of values is stored.
 * @param {Object} [options] - Optional parameters.
 * @param {number} [options.sampleSize=10] - The number of values to consider when calculating
 * the average.
 * @return {[average,add]} The calculated average.
 */
export default function localAverage( localStorageKeyName, { sampleSize = 10 } = {})
{
	/**
	 * @type {number[]}
	 */
	let stack = localStorage.getItem( localStorageKeyName );

	stack = stack
		? JSON.parse( stack ).slice( - ( sampleSize - 1 ))
		: [];


	function add( value )
	{
		stack.push( value );

		stack = stack.slice( - ( sampleSize - 1 ));

		localStorage.setItem(
			localStorageKeyName,
			JSON.stringify( stack )
		);
	}

	function average( method = "arithmetic" )
	{
		if( ! ( method in Methods ))
		{
			throw new ReferenceError( `The "${ method }" method is not supported.` );
		}

		return Methods[ method ]( stack );
	}

	return [ average, add ];
}

/**
 * Adds a value to the old stack and updates the local storage accordingly.
 *
 * @callback add
 * @param {number} value - The number to be added to the stack.
 *//**
 * Calculates the average of a given array using the specified method.
 *
 * @callback average
 * @param {LocalAverageMethods} [method="arithmetic"] - The method to use for calculating the average.
 * @throws {ReferenceError} when the specified method is not supported.
 * @return {number} The calculated average.
 *//**
 * @typedef {"arithmetic"|"geometric"|"harmonic"|"median"|"mode"|"variance"|"standardDeviation"|"medianAbsoluteDeviation"} LocalAverageMethods
 */
