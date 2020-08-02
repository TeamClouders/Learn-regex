//Match a Literal String with Different Possibilities 

let petString =  'James has a pet cat.'

let petRegex = /cat|dog|fish/;

let result = petRegex.test(petString);

console.log(result);  //true