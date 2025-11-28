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

/**/
/**/
/**/
/**/
