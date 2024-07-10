import localAverage from ".";

const start = performance.now();

const [ average, add ] = localAverage( "foo", { sampleSize: 50 });

add( performance.now() - start );

alert( average( "medianAbsoluteDeviation" ));
