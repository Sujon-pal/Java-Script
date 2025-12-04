// Minimum

function FindMin(numbers) {
  let min = numbers[0];
  for (let num of numbers) {
    if (min > num) {
      min = num;
    }
  }

  return min;
}

let number = [10, 34, 56, 78, 56, 5, 34, 99, 98];
let result = FindMin(number);
console.log(result);

// Maximum

function FindMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (max < num) {
      max = num;
    }
  }

  return max;
}

let number2 = [10, 34, 56, 78, 56, 5, 34, 99, 98];
let result2 = FindMax(number2);
console.log(result2);
