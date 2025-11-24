let i = 1;

while (i <= 5) {
  // console.log(i);
  i++;
}

//  Print even numbers sum

let num = 1;
let sum = 0;

while (num <= 10) {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
}
console.log(sum);


//  Loop through an array

let fruits = ["Apple", "Mango", "Banana"];
let index = 0; 

while (index < fruits.length) { 
    console.log(fruits[index]); 
    index++; 
}



