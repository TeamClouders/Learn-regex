//Match Single Character with Multiple Possibilities

let bgRegex= /b[aiu]g/;

let quote = "Beware of the bugs in above code;";

let vowelRegx = /[aeiou]/ig;

let result = quote.match(vowelRegx);

console.log(result); // => [ 'e', 'a', 'e', 'o', 'e', 'u', 'i', 'a', 'o', 'e', 'o', 'e' ]