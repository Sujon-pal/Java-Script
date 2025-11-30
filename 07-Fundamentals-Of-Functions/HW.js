// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
  return a * b * c * d;
}

let result = multiply(2, 2, 9, 2);
console.log(result);
// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum = sum + num;
  }
let average = sum / numbers.length;
  return {
    sum: sum,
    average: average,
  };
}

let result2 = make_avg([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
console.log(result2.sum);
console.log(result2.average);

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
