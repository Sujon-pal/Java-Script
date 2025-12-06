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
