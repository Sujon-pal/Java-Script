// 🖍️ Example - 1  Unit Convert Inch to Feet, miles to kilometre

function inchiToFeet(n) {
  let result1 = n / 12;
  let result2 = parseInt(result1);
  let remaing = n % 12;
  return {
    result2: result2,
    remaing: remaing,
  };
}

let result = inchiToFeet(29);
console.log(`${result.result2} Inch ${result.remaing} Foot `);

function mileToKm(miles) {
  return miles * 1.60934;
}

console.log(mileToKm(1)); // 1.60934
console.log(mileToKm(5)); // 8.0467

// 🖍️  Check whether a year is a Leap Year or not

function isLeepYear(year) {
  if (typeof year !== "number" || !Number.isInteger(year)) {
    return "Invalid input. Please enter a valid integer year.";
  } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is Leep Year`;
  } else {
    return `${year} is Not Leep Year`;
  }
}

console.log(isLeepYear(2001));
