//Match numbers and letters from Alphabets

let quoteSample = "The 3.1474774 are delicious.";

let regex = /[2-6h-s]/ig; //Match the range of numbers and string

let result  = quoteSample.match(regex)

console.log(result);  // => Array of all range of numbers and string