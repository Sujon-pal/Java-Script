//  🖍️ Function Declaration ..........

function sayHello() {
  console.log("Hello JS");
}

sayHello(); // calling the function

// 🖍️ Function with Parameters ...........

// Examle 1
function user(name) {
  console.log("Hello", name);
}

user("Rahim");
user("Sujon");

// Examle 2

function squar(x) {
  console.log(`${x} Squar Value is :  ${x * x}`);
}
squar(4);
console.log("----------");
squar(88);

// 🖍️ Function Returning a Value ..............

// Example 1
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8

// Example 1

function even(num) {
  if (num % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

let result2 = even(0);
console.log(result2);

// 🖍️ Function to Count Vowels in a String

function CountVowels(str) {
  let vowels = "aeoiuAeiou";
  let count = 0;

  for(let ch of str){
    if(vowels.includes(ch)){
        count ++;
    }
  }
  return count;
}
console.log(CountVowels("Hello Developer"));

// 🖍️




// 🖍️
