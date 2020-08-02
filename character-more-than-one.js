//Match Character that occurs more the one time

let difficultSpelling =  'Mississippi';

let myRegex = /s+/g; //Print s

let result = difficultSpelling.match(myRegex);

console.log(result); // => [ 'ss', 'ss' ]