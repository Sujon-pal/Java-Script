// Vat Calcualte

function calculateVate(number) {
  if (typeof number !== "number" || typeof number == "string" || number < 0) {
    return "Invalid";
  }
  let vatRate = 7.5;
  let price = Math.floor((number * vatRate) / 100);
  return price;
}

console.log(calculateVate(1500));
console.log(calculateVate("1500"));
console.log(calculateVate(-2));

// Mobile number checker

function validContact(number) {
  if (typeof number !== "string") {
    return "Enter number as string!";
  }

  number = number.trim();
  if (number.length !== 11) {
    return "Phone number must be exactly 11 digits!";
  }

  if (!number.startsWith("01")) {
    return "BD mobile numbers must start with 01";
  }

  if (!/^\d+$/.test(number)) {
    return "Phone number must contain only digits!";
  }
  return "Valid Number";
}

console.log(validContact("23444444444"));
console.log(validContact(123));

// check pass or fail

function checkResult(numbers) {
  if (!Array.isArray(numbers)) {
    return "Enter array";
  }
  let sumOfPass = 0;
  let sumOfFail = 0;

  for (let num of numbers) {
    if (num >= 50) {
      sumOfPass += num;
    } else {
      sumOfFail += num;
    }
  }

  return sumOfPass > sumOfFail ? "Passed" : "Failed";
}

// let result = [20, 40, 50];
let result = 20;
console.log(checkResult(result));

// Valid Proposal

function validProposal(person1, person2) {
  // validaton
  if (!person1.gender || !person2.gender) {
    return "Gender information missing!";
  }

  const G1 = person1.gender.toLowerCase();
  const G2 = person2.gender.toLowerCase();

  if (G1 === G2) {
    return "Not Valid: Same gender";
  }
  const ageDifferent = Math.abs(person1.age - person2.age);
  if (ageDifferent > 7) {
    return "Not Valid: Age difference more than 7 years";
  }

  return "Valid Proposal";
}

let male = {
  name: "Sujon Pal",
  gender: "Male",
  age: 25,
};

let female = {
  name: "Anika Dash",
  gender: "Female",
  age: 60,
};

console.log(validProposal(male, female));
