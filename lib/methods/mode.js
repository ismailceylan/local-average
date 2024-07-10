import { arithmetic } from ".";

export default function mode( numbers )
{
	const freq = Object.create( null );
	let max = 0;
	let modes = [];

	numbers.forEach( num =>
	{
		if( freq[ num ])
		{
			freq[ num ]++;
		}
		else
		{
			freq[ num ] = 1;
		}

		if( freq[ num ] > max )
		{
			max = freq[ num ];
		}
	});

	for( const key in freq )
	{
		if( freq[ key ] === max )
		{
			modes.push( Number( key ));
		}
	}

	return arithmetic( modes );
}
