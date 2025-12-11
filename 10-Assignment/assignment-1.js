
// 🤷‍♂️ 1. Find Cash Out Charge


function cashOut(amount) {
  if (typeof amount !== "number" || amount < 0) {
    return "Invalid amount!";
  }

  const chargeRate = 1.75 / 100;
  return amount * chargeRate;
}

console.log(cashOut("h"));
console.log(cashOut(2000));
console.log(cashOut(-1));



// 🤷‍♂️ 2. Email Validation


function isValidEmail(email) {
  if (typeof email !== "string") {
    return "Invalid: email must be a string!";
  }

  email = email.trim();

  if (email === "") {
    return "Email cannot be empty!";
  }

  const firstChar = email[0];
  if (["_", "+", "="].includes(firstChar)) {
    return "Email cannot start with _, +, =";
  }

  if (!email.includes("@")) {
    return "Email must contain @";
  }

  if (!email.endsWith(".com")) {
    return "Email must end with .com";
  }

  return "Valid email!";
}

console.log(isValidEmail("sujonpal@gmail.com"));
console.log(isValidEmail("sujonpalgmai.com"));
console.log(isValidEmail("=sujonpal@gmail.com"));
console.log(isValidEmail("sujonpal@gmail"));


// 🤷‍♂️ 3. Find Most Repeated Fruit in Array


function mostRepeatedFruit(arr) {
  const freq = {};
  let maxCount = 0;
  let mostFruit = "";

  for (let fruit of arr) {
    freq[fruit] = (freq[fruit] || 0) + 1;

    if (freq[fruit] > maxCount) {
      maxCount = freq[fruit];
      mostFruit = fruit;
    }
  }

  return mostFruit.toUpperCase();
}

const fruits = ["mango", "banana", "mango", "apple", "banana", "mango"];
console.log(mostRepeatedFruit(fruits));


// 🤷‍♂️ 4. Best Friend Checker


function isFriend(x, y) {
  return x.BestFriend === y.roll && y.BestFriend === x.roll;
}

let user1 = {
  name: "Sujon Pal",
  roll: 1,
  BestFriend: 2,
};

let user2 = {
  name: "Shan Pal",
  roll: 2,
  BestFriend: 1,
};

console.log(isFriend(user1, user2));



// 🤷‍♂️ 5. Watch Time Calculator


function calculateWatchTime(item) {
  if (!Array.isArray(item)) {
    return "Error: Input must be an array";
  }

  if (item.length === 0) {
    return "Error: Array cannot be empty";
  }

  for (let n of item) {
    if (typeof n !== "number" || n < 0) {
      return "Error: All items must be positive numbers";
    }
  }

  let totalSecond = item.reduce((a, b) => a + b, 0);

  let hours = Math.floor(totalSecond / 3600);
  totalSecond %= 3600;

  let minutes = Math.floor(totalSecond / 60);
  let seconds = totalSecond % 60;

  return `${hours} Hour ${minutes} Minutes ${seconds} Seconds`;
}

console.log(calculateWatchTime([3600, 60, 40]));

