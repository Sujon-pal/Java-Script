//🤷‍♂️ js-problems-part1-practice-tasks

// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function number(num) {
  // F=(C×9/5)+32
  return (num * 9) / 5 + 32;
}

let Celsius = number(100);
console.log(Celsius);

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// example 1

// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

function countOccurrences(arr, find) {
  let count = 0;
  for (let n of arr) {
    if (n === find) {
      count++;
    }
  }
  return count;
}

let numbers = [5, 6, 11, 12, 98, 5];
let result = countOccurrences(numbers, 5);
console.log(result);  

// Task-3:
// Write a function to count the number of vowels in a string.

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// Task-5:
// Generate a random number between 10 to 20.
