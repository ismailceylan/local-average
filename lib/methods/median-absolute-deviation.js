import { median } from ".";

export default function medianAbsoluteDeviation( numbers )
{
	return median( 
		numbers.map( num =>
			Math.abs( num - median( numbers ))
		)
	);
}
