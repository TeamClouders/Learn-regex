//Check email Validation




let email  = "abcd@mai.com.uk";

let emailRegex = /^[a-z\d-]+\@[a-z\d-]+(\.[a-z]{2,8}){1,2}$/  ///^([a-zA-Z0-9\.-]+)@([a-z\d-]+)\.([a-z]{2.8})(\.[a-z]{2,8})?$/

let result =  emailRegex.test(email);

console.log(result); //true