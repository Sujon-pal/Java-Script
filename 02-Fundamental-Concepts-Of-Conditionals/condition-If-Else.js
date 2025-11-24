let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

// 🤷‍♂️ if...else (Two-Way Condition)
let num = 5;

if (num > 0) {
  console.log("Positive number");
} else {
  console.log("Negative number");
}

// 🤷‍♂️ if...else if...else (Multi-way Condition)
let marks = 75;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else {
  console.log("Fail");
}

// 🤷‍♂️

console.log(5 == "5"); // true (values same)
console.log(5 === "5"); // false (type different)

// 🤷‍♂️ Logical Operators
let age2 = 20;
let hasNID = true;

if (age2 >= 18 && hasNID) {
  console.log("You can vote");
}

// 🤷‍♂️ OR – ||
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("You can relax!");
}

// 🤷‍♂️ NOT – !
let rain = false;

if (!rain) {
  console.log("Go outside");
}

// 🤷‍♂️ Nested If (If inside If)
let user = "admin";
let pass = "1234";

if (user === "admin") {
  if (pass === "1234") {
    console.log("Login Successful");
  } else {
    console.log("Wrong Password");
  }
}

// 🤷‍♂️ Ternary Operator
let age3 = 20;

let result = age3 >= 18 ? "Adult" : "Minor";
console.log(result);

let price = 300;
const isLeader = false;

price = isLeader === true ? 0 : price + 100;

console.log(price)

// 🤷‍♂️ Conditions with Truthy & Falsy
/* 
❌ Falsy values:

false
0
""
null
undefined
NaN

*/

let name = "";

if (name) {
  console.log("Has name");
} else {
  console.log("Name not found");
}

// 🤷‍♂️
// 🤷‍♂️
// 🤷‍♂️
