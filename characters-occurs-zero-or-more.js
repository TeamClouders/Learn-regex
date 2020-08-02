// Characters that occurs zero or more times

let chewCode = 'Aaaaaaaaaaaaarrrghhh!';

let chewRegex = /Aa*/;

let result = chewCode.match(chewRegex);

console.log(result);