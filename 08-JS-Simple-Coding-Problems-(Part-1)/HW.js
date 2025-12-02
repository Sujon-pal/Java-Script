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

function countString(str, find) {
  let count = 0;
  for (let n of str) {
    if (n === find) {
      count++;
    }
  }
  return count;
}

let str = "Bangladesh Is a Mother Land";
let result2 = countString(str, "b");
console.log(result2);

// Task-4:
// Write a function to find the longest word in a given string.

function longestWord(str) {
  let word = str.split(" ");
  let longest = "";
  for (let w of word) {
    if (w.length > word.length) {
      longest = w;
    }
  }
  return longest;
}

console.log(longestWord("I love programming in JavaScript"));

// Task-5:
// Generate a random number between 10 to 20.

let random = Math.floor( Math.random() * 11 ) + 10
console.log(random)