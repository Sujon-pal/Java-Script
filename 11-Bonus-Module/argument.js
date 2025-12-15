function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments); // not array ; array like object
  console.log(arguments[3]);
}

// add(12,22)
add(2, 3, 4, 5, 6);
