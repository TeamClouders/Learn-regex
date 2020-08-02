//Find one or more criminals in a Hunt

let crowd = 'P1P2P3P4P5CCCP6P7P8P9';

let reCriminals= /C+/; //Match C one or more

let matchedCriminals = crowd.match(reCriminals);

console.log(matchedCriminals);