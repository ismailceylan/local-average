/**
 * Calculates the average of a series of values stored in the local storage.
 *
 * @param {string} localStorageKeyName - The name of the key in the local storage
 * where the series of values is stored.
 * @param {Object} [options] - Optional parameters.
 * @param {number} [options.sampleSize=10] - The number of values to consider when calculating
 * the average.
 * @param {LocalAverageMethods} [options.method="arithmetic"] - The method to use for calculating the average.
 * @return {Function[]} The calculated average.
 */
export default function localAverage( localStorageKeyName,
{
	sampleSize = 10,
	method = "arithmetic"
} = {})
{

}

/**
 * @typedef {"arithmetic"|"geometric"|"harmonic"|"median"|"mode"|"sample"|"sum"|"variance"|"standardDeviation"|"min"|"max"|"medianAbsoluteDeviation"} LocalAverageMethods
 */
