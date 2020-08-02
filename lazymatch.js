// lazy matching 

let text = "<h1>Winter is coming</h1>";

let regex = /<.*?>/;

let result = text.match(regex);

console.log(result); // => <h1>