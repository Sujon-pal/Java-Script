//  Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

// Example: Add numbers from 1 to 5

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

// console.log(sum);

// Example: Looping through an array

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

// Example: Stop loop when number reaches 5

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  // console.log(i);
}

// Example: Skip number

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// Example: Nested loop to print a star pattern

for (let i = 1; i <= 5; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }

  console.log(stars);
}

let n = 10;
let total = 0;
while (true) {
  total = total + 1;
  n++;
  if (total === 20) {
    break;
  }
}
console.log(total);
