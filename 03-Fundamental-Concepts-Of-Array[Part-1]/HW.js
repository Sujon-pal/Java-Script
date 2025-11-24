/*1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array */

let fruits = ["Apple ", "Mango", "Banana", "Pinapel", "orange"];

console.log(fruits[2]);
fruits[2] = "jambura";
console.log(fruits);

/*2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output*/

// Create an array of 3 tourist destinations
let places = ["Dhaka", "Sylhet", "Khulna"];
console.log(places); // Output initial array

// Add one new destination (using push)
places.push("Habiganj");
console.log(places);

// Add two more destinations
places.push("Cox's Bazar");
places.push("Bandarban");
console.log(places);

// Remove the last added destination
places.pop();
console.log(places);

/*
3. Checking Array Membership with ‘includes’

Task:
1. Create an array of books.
2. Use includes() to check if a "JavaScript" book is in the array.
3. Print a message based on the result.
*/

let books = ["Math", "English", "JavaScript", "Physics"];

let hasJavaScript = books.includes("JavaScript");

console.log(hasJavaScript); // true or false

if (hasJavaScript) {
  console.log("Yes! The JavaScript book is available.");
} else {
  console.log("No, JavaScript book is not found.");
}

/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. */

let names = ["Sujon", "Rafi", "Hasan"]; // array
let age = 25; // number
let city = "Dhaka"; // string
let details = { name: "Sujon", age: 22 }; // object
let emptyList = []; // array
let isPassed = true; // boolean

console.log(
  Array.isArray(names) ? "names is an array" : "names is NOT an array"
);
console.log(Array.isArray(age) ? "age is an array" : "age is NOT an array");
console.log(Array.isArray(city) ? "city is an array" : "city is NOT an array");
console.log(
  Array.isArray(details) ? "details is an array" : "details is NOT an array"
);
console.log(
  Array.isArray(emptyList)
    ? "emptyList is an array"
    : "emptyList is NOT an array"
);
console.log(
  Array.isArray(isPassed) ? "isPassed is an array" : "isPassed is NOT an array"
);

/*
5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log(). */

let fruits1 = ["Apple", "Mango", "Banana"];
let drinks = ["Tea", "Coffee", "Juice"];

let combined = fruits1.concat(drinks);
console.log("Combined Array:", combined);
