// 🤷‍♂️ var example (old style)
var city = "Dhaka";        // first declaration
city = "Khulna";           // value changed
console.log(city)
var city = "sylhet";       // re-declare (var allows this)
console.log(city);         // prints: sylhet


// 🤷‍♂️ let example
let name = "Sujon"; // string value
let age = 20; // number value

// let name = 'Sujon' // ❌ error

console.log(name); // prints: Sujon
console.log(age); // prints: 20
// let example (recommended)
let country = "Bangladesh";
country = "India"; // can change value

// 🤷‍♂️ const example (fixed value)
const PI = 3.14;
// PI = 3.99;          // ❌ error: cannot change value


// 🤷‍♂️ Valid & Invalid Variable Names

let userName = "Sujon";  // ✔ correct
let $price = 500;        // ✔ correct
let _value = 10;         // ✔ correct

// let 1name = "Hi";     // ❌ cannot start with number
// let my name = "Hi";   // ❌ no space or gap in variable name  
// let false = 45       // ❌ no keyword in variable name



// 🤷‍♂️ Data Types
let text = "Hello";           // string
let number = 100;             // number
let isLogin = true;           // boolean
let emptyValue = null;        // null
let notDefined;               // undefined

let person = {                // object
  name: "Sujon",
  age: 20
};

let numbers = [1, 2, 3];      // array


// 🤷‍♂️ Scope (Global vs Block)
// global scope
let a = 10;

{
  // block scope
  let b = 20;
  var x = 90;
  console.log(b); // works
}

console.log(a); // works
console.log(x)  // var can allow this 
// console.log(b); // ❌ error: b is not outside block


// 🤷‍♂️ Hoisting Example
console.log(x); // prints: undefined (because var is hoisted)
var x = 10;

// console.log(y); // ❌ error (let is hoisted but not usable)
let y = 20;


// 🤷‍♂️ Re-declare & Re-assign
var p = 5;
var p = 10;    // ✔ var can re-declare

let q = 7;
// let q = 9;  // ❌ let cannot re-declare
q = 9;         // ✔ but can re-assign

const r = 15;
// r = 20;     // ❌ cannot change const


// 🤷‍♂️ Primitive Copy vs Reference Copy
// primitive type (copy value)
let a1 = 10;
let a2 = a1;
a2 = 20;

console.log(a1); // 10 (not changed)
console.log(a2); // 20

// reference type (copy address)
let obj1 = { x: 10 };
let obj2 = obj1;

obj2.x = 50;

console.log(obj1.x); // 50 (changed)
console.log(obj2.x); // 50


// 🤷‍♂️ Dynamic Typing
let data = 100;         
data = "Hello";         // JS allows type change

console.log(data);      // prints: Hello

// 🤷‍♂️ case-sensitive example

// Different variable nameslet city = "Dhaka";
let City = "Khulna";

console.log(city); // Dhaka
console.log(City); // Khulna
// 👉 city and City are NOT the same.

let userName2 = "Sujon";
console.log(username2); // ❌ error (wrong case)


// Function
function hello() {
  console.log("Hello!");
}

hello();   // works
Hello();   // ❌ error (H is capital)


// Object
let person1 = {
  name: "Sujon"
};

console.log(person.name); // Sujon
console.log(person.Name); // ❌ undefined
