export default function geometric( numbers )
{
	return numbers.length / numbers.reduce(( a, b ) =>
		a + ( 1 / b ), 0
	);
}
