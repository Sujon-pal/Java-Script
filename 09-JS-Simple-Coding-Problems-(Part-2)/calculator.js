function calculator(a, b, operation) {
  if (operation === "+") {
    return `Sum ${a + b}`;
  } else if (operation === "-") {
    return `Sub  ${a - b}`;
  } else if (operation === "*") {
    return `Sub  ${a * b}`;
  } else if (operation === "/") {
    if (b === 0) {
      return "Error: Cannot divide by zero!";
    }
    return `Division: ${a / b}`;
  } else if (operation === "%") {
    return `Modulus: ${a % b}`;
  } else {
    return "Error: Enter a valid operation (+, -, *, /, %)";
  }
}

let result = calculator(8, 4, "%");
console.log(result);
