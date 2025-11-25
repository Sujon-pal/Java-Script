// Count how many times a string has the letter a

let str1 = "BanglaDesh is a Mother Land";
let count = 0;

for (let i = 0; i < str1.length; i++) {
  if (str1[i] === "a") {
    count++;
  }
}
console.log(count);

// Count how many times a string has the letter a or A

let str2 = "BanglaDesh is A Mother Land";
let count1 = 0;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === "a" || str1[i] === 'A') {
    count1++;
  }
}
console.log(count1);


// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str3 = "Xrax in x"

str3 = str3.replaceAll('x','y')
str3 = str3.replaceAll('X','Y')


console.log(str3)



// Capitalize Every first Letter of each word in a String
let str = "hello world from javascript";

let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let result = words.join(" ");
console.log(result);


// Check whether a string contains all the vowels a, e, i, o, u




