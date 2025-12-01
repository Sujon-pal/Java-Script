//  1. Create a Date Object

let now = new Date();
console.log(now);


//  2. Get Year, Month, Day


let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

// 3. Get Time Parts

let time = new Date();

console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());


// 4. Set Date and Time

let d = new Date();
d.setFullYear(9999);
d.setMonth(1)
d.setDate(17)

console.log(d)


// 5. Convert Date to String

console.log(new Date().toString()); // 

console.log(new Date().toDateString())  // Only date

console.log(new Date().toTimeString()); // Only time



