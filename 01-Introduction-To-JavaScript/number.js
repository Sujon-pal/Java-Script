let a = 10; // integer number
let b = 10.5; // decimal number

// 🤷‍♂️ Basic Operations
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333...
console.log(x % y); // 1 (remainder)
console.log(x ** y); // 1000 (power)

// 🤷‍♂️ Number Convert

let Number = "42"; // 42
let Number2 = "3.14"; // 3.14
let Number3 = parseInt("abc");
console.log(Number3); // NaN (not a number)


let number4 = parseInt("42.9"); // 42
let number5 = parseFloat("42.9"); // 42.9
let number6 = parseInt("43.45"); // 43 (convert integer value)


// 🤷‍♂️ Floating Point Error

let num = 0.1 ;   
let num2 = 0.2 ;   

console.log(num + num2 ) // 0.30000000000000004

// Fix
console.log((num+num2).toFixed(2));  // 0.30
