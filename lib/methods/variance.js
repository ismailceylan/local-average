import { arithmetic } from ".";

export default function variance( numbers )
{
	return numbers
		.map( num =>
			Math.pow( num - arithmetic( numbers ), 2 )
		)
		.reduce(( a, b ) => a + b, 0 )
	/ numbers.length;
}
