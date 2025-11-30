//  Math, abs, round, ceil, floor, and random number

// ⭐ 1. Math.abs()

console.log(Math.abs(-10)); // 10
console.log(Math.abs(5)); // 5

let p1 = 20;
let p2 = 55;

let distance = Math.abs(p1 - p2);
console.log("Distance:", distance); // 35

// ⭐ 2. Math.round()

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5

let rating = 4.67;
console.log("Final Rating:", Math.round(rating)); // 5


// ⭐ 3. Math.ceil()

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(7.0001)); // 8

let totalBoxes = 450;
let trucksNeeded = Math.ceil(totalBoxes / 100);

console.log(trucksNeeded); // 5 trucks


// ⭐ 4. Math.floor()

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(9.99)); // 9


let hours = 53.6;
let fullDays = Math.floor(hours / 24);
console.log(fullDays); // 2 days


// ⭐ 5. Math.random()
console.log(Math.random()); 


let otp = Math.floor(1000 + Math.random() * 9000);
console.log("Your OTP:", otp);


let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice:", dice);


let users = ["Sujon", "Rahim", "Karim", "Hasan"];
let randomUser = users[Math.floor(Math.random() * users.length)];

console.log("Winner:", randomUser);
