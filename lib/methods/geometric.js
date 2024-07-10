export default function geometric( numbers )
{
	return numbers.reduce(( a, b ) =>
		a * b, 1
	) ** ( 1 / numbers.length );
}
