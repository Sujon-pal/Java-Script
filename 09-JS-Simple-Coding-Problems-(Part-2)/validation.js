function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: both values must be numbers!";
  }
  return a + b;
}

console.log(add(5, 10));     // 15
console.log(add(5, "Hello")); // Error


// Check if Name is a Valid String


function validateName(name) {
  if (typeof name !== "string") {
    return "Name must be a string!";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters long!";
  }

  return "Valid name.";
}

console.log(validateName("John"));
console.log(validateName("A "));
console.log(validateName(123));


// Check if Input is an Array

function checkArray(data) {
  if (Array.isArray(data)) {
    return "Yes, this is an array.";
  } else {
    return "Not an array!";
  }
}

console.log(checkArray([1, 2, 3]));
console.log(checkArray("Hello"));



// Check if Array is Empty

function isEmptyArray(arr) {
  if (!Array.isArray(arr)) return "Not an array!";

  if (arr.length === 0) {
    return "Array is empty";
  } else {
    return "Array has data";
  }
}

console.log(isEmptyArray([]));
console.log(isEmptyArray([10, 20]));


// Check if All Values Are Numbers

function validateNumbers(arr) {
  if (!Array.isArray(arr)) return "Input must be an array!";

  for (let item of arr) {
    if (typeof item !== "number") {
      return "Array contains non-number value!";
    }
  }

  return "All values are numbers.";
}

console.log(validateNumbers([10, 20, 30]));
console.log(validateNumbers([10, "Hello", 30]));


// Check Product List

function validateProducts(products) {
  if (!Array.isArray(products)) return "Products must be an array!";

  for (let product of products) {
    if (typeof product.title !== "string") {
      return "Invalid: product title must be a string!";
    }

    if (typeof product.price !== "number") {
      return "Invalid: product price must be a number!";
    }
  }

  return "All products are valid!";
}

let items = [
  { title: "Phone", price: 100 },
  { title: "Laptop", price: 500 },
];

console.log(validateProducts(items));
