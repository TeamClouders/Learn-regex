// Match letters of the Alphabets

let quoteSample = "The quick brown fox jumps over the lazy dog.";

let regex = /[a-z]/ig; //every letter starting from a to z

let result  = quoteSample.match(regex)

console.log(result);  // => Array of all string