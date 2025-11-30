
// sum of odd number and print odd number of arry

function sumOfOddNumber(numbers) {
  let sum = 0;
  let odd = [];
  for (let num of numbers) {
    if (num % 2 !== 0) {
      sum = sum + num;
      odd.push(num);
    }
  }
  return {
    sum: sum,
    odd: odd,
  };
}

let result = sumOfOddNumber([2, 3, 4, 5, 6, 7, 8, 9, 1]);

console.log(result.sum);
console.log(result.odd);


// Remove duplicate items from an array


