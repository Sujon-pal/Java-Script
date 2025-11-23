let a = 10; // integer number
let b = 10.5; // decimal number

// Basic Operations
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333...
console.log(x % y); // 1 (remainder)
console.log(x ** y); // 1000 (power)

// Number Convert
let Number1 = "42"; 
let Number2 = "3.14"; 
let Number3 = parseInt("abc"); // NaN
console.log(Number3);

let number4 = parseInt("42.9"); // 42
let number5 = parseFloat("42.9"); // 42.9
let number6 = parseInt("43.45"); // 43

// Floating Point Error
let num = 0.1;
let num2 = 0.2;

console.log(num + num2); // 0.30000000000000004
console.log((num + num2).toFixed(2)); // 0.30

// Checking Numbers
console.log(typeof 5);                   // "number"
console.log(Number.isInteger(5));        // true
console.log(Number.isInteger(5.5));      // false
console.log(Number.isNaN(Number3));      // true   
console.log(Number.isFinite(100));       // true
console.log(Number.isFinite(Infinity));  // false

// 🤷‍♂️ Special Values

console.log(10 / 0);   // Infinity
console.log(-10 / 0);  // -Infinity
console.log(Number("abc")); // NaN

// 🤷‍♂️ BigInt

let big1 = 9007199254740991n;
let big2 = 10n;

console.log(big1 + big2); // works
// console.log(big1 + 10); // ❌ ERROR (BigInt + Number not allowed)