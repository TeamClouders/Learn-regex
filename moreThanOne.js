//Find More than the First Match

let testStr = "Repeat, Repeat, Repeat";

let ourRegex = /Repeat/;

testStr.match(ourRegex);


let twinkleStar = 'Twinkle, twinkle, little star';

let starRegex = /twinkle/ig;

let result = twinkleStar.match(starRegex);

console.log(result); //[Twinkle,twinkle]