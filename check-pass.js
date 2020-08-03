//Check strong password

/**
 *  Requirements 
 * 
 * 1) Password should be alteast 6 character long
 * 2) Password should not be greater than 8 characters
 * 3) Password Must have numbers
 * 4) Password must have atleast 1 Captital letter
 * 
 */


let password  = "abcd";

let pssRegex = /^[a-zA-Z0-9]{6,8}$/g

let result =  pssRegex.test(password);

console.log(result); //false