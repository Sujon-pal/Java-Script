let name1 = "Sujon";
let name2 = "Pal";
let name3 = `Hello JS`;

console.log(name1, name2, name3);

// ⭐  String Length
let text = "JavaScript";
console.log(text.length);

// ⭐  Accessing Characters
let word = "Hello";
console.log(word[1]);
console.log(word[0]);

// ⭐  String Methods
let city = "dhaka";
console.log(city.toUpperCase()); // DHAKA
console.log(city.toLowerCase()); // dhaka

//⭐ trim(), trimStart(), trimEnd()
let msg = "   Hi JS   ";
console.log(msg.trim()); // "Hi JS"
console.log(msg.trimStart()); // "Hi JS   "
console.log(msg.trimEnd()); // "   Hi JS"

// ⭐ slice()
let text2 = "JavaScript";
console.log(text2.slice(0, 4)); // Java
console.log(text2.slice(4)); // Script

// ⭐ substring()

let lang = "JavaScript";
console.log(lang.substring(0, 4));

// ⭐ replace() / replaceAll()
let story = "I love JavaScript. JavaScript is fun!";
console.log(story.replace("JavaScript", "JS"));
console.log(story.replaceAll("JavaScript", "JS"));

// ⭐ includes()
let text3 = "I am learning JS";
console.log(text3.includes("JS")); // true
console.log(text3.includes("Python")); // false

// ⭐ startsWith() / endsWith()
let data = "Bangladesh";

console.log(data.startsWith("Ban")); // true
console.log(data.endsWith("h")); // true

// ⭐  Template Literals (Backtick ``)
let name = "Sujon";
let age = 22;

console.log(`My name is ${name} and i am ${age} years old.`);

// ⭐  Escape Characters
let quote = 'He said, "JavaScript is awesome!"';
console.log(quote);

// ⭐ String Concatenation
let first = "Sujon";
let last = "Pal";
console.log(first + " " + last);
console.log(`${first} ${last}`);
console.log(first.concat(" ").concat(last));

// ⭐ Convert to String
let num = 123;
console.log(String(num));
console.log(num.toString());

// ⭐Split() — String → Array
let sentence = "I love JavaScript";
console.log(sentence.split(" "));

// ⭐ Repeat()
console.log("Sujon ".repeat(3));

// ⭐ charAt()
let txt = "Hello";
console.log(txt.charAt(4));

// ⭐ Compare Strings
let a = "apple";
let b = "banana";

console.log(a < b);

// ⭐String Search Methods
let str = "JavaScript is great!";
console.log(str.indexOf("is"));

// ⭐lastIndexOf()
let str2 = "Hello Hello";
console.log(str2.lastIndexOf("Hello")); // 6

// ⭐ Reverse a String
let text4 = "sujon Pal";
let Reverce = "";
for (const text of text4) {
  Reverce = text + Reverce;
}
console.log(Reverce);

let text6 = "Hello";
let reversed = text6.split("").reverse().join("");
console.log(reversed);
