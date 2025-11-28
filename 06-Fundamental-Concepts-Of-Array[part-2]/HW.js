/*

Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/

const colors = ["red", "blue", "green", "yellow", "orange"];

for (let i = colors.length - 1; i >= 0; i--) {
  //   console.log(colors[i]);
}

/*
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]

*/

const numbers = [12, 98, 5, 41, 23, 78, 46];

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

/*

Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/
var str = ["Tom", "Tim", "Tin", "Tik"];

let result = "";

for (let item of str) {
  result += item;
}

console.log(result);

/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

*/

const statement = "I am a hard working person";

const work = statement.split("");

let reverce = [];

for (let i = work.length - 1; i >= 0; i--) {
  reverce.push(work[i]);
}

console.log(reverce.join(""));

/*
Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]

*/

// Solution 1
// const arr = [1, 2, 3];

// const copy = [...arr];
// copy[0] = 99;
// console.log("Original:", arr);
// console.log("Copy:", copy);

// Solution 2

// const arr = [1, 2, 3];

// const copy = arr.slice();
// copy[0]=99;
// console.log("Original:", arr);
// console.log("Copy:", copy);

const arr = [1, 2, 3];
const copy = [];

for (let i = 0; i < arr.length; i++) {
  copy.push(arr[i]);
}

copy[0] = 99;

console.log("Original:", arr);
console.log("Copy:", copy);

/*

Task 6
Given an array of student objects, print each student’s name and marks.

Expected ooutput:
John scored 85
Alice scored 90

*/

let userInfo = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
// Solution 1
// console.log(userInfo[0].name, "Scored ", userInfo[0].marks);
// console.log(userInfo[1].name, "Scored ", userInfo[1].marks);

// Solution 2



/*
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/
/**/
