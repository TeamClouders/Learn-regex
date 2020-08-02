// Ignore Case While Matching

let mystring = 'freeCodeCamp';

let fccRegex =  /freecodecamp/i; //I means ignore the case

let result  = fccRegex.test(mystring);

console.log(result); //true
