/*

Task - 1:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function smallest(str) {
  let smallestString = str[0];

  for (let n of str) {
    if (n.length < smallestString.length) {
      smallestString = n;
    }
  }
  return smallestString;
}
const userName = ["rahim", "robin", "rafi", "ron", "rashed"];

let result = smallest(userName);
console.log(result);

/*
Task-2:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  if (
    typeof laptopQty !== "number" ||
    typeof tabletQty !== "number" ||
    typeof mobileQty !== "number"
  ) {
    return "All quantities must be numbers!";
  }
  if (laptopQty < 0 || tabletQty < 0 || mobileQty < 0) {
    return "Quantity cannot be negative!";
  }

  const total =
    laptopQty * laptopPrice + tabletQty * tabletPrice + mobileQty * mobilePrice;
  return total;
}

let result2 = calculateElectronicsBudget(2, 1, 3);
console.log(result2);

/*
Task-3:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

*/

function averageOfPhone(number) {
  let sum = 0;
  for (let n of number) {
    sum = sum + n.price;
  }

  const ave = sum / phones.length;
  return ave;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

let sum = averageOfPhone(phones);
console.log(sum);

/*
Task -4: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

*/

function totalMonthlySalary(employees) {
    let total = 0;
    for(let emp of employees){
        let currentSalary = emp.starting + (emp.experience * emp.increment);
        total += currentSalary;
    }

    return total;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

let result3 = totalMonthlySalary(employees);
console.log(result3);
