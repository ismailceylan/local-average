export default function harmonic( numbers )
{
	return numbers.length / numbers.reduce(( a, b ) =>
		a + ( 1 / b ), 0
	);
}
