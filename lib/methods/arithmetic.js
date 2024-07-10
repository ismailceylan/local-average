export default function arithmetic( numbers )
{
	return numbers.reduce(( a, b ) =>
		a + b, 0
	) / numbers.length;
}
