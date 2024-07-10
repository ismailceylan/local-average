export default function median( numbers )
{
	const sorted = [ ...numbers ].sort( ( a, b ) => a - b );
	const middle = Math.floor( numbers.length / 2 );

	if( numbers.length % 2 === 0 )
	{
		return ( sorted[ middle - 1 ] + sorted[ middle ]) / 2;
	}
	else
	{
		return sorted[ middle ];
	}
}
