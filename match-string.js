//Match Single Characters not Specified

let example = "3 bind mice";
let unRegex = /[^0-9aeiou]/ig; //retuns everything except the vowels and the numbers

let result =  example.match(unRegex);

console.log(result); //[ ' ', 'b', 'n', 'd', ' ', 'm', 'c' ]