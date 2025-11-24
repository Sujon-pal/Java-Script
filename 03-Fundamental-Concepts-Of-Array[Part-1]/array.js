// Creating a simple array
const fruits = ["apple", "mango", "banana"];

// Print entire array
console.log(fruits);

// // Access values using index
console.log(fruits[0]); // apple
console.log(fruits[1]); // mango
console.log(fruits[2]); // banana

// // Change a value in array
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "banana"]

// // Check length of array
console.log(fruits.length); // 3

// // 🤷‍♂️ 1. push() — Add item at the END
const fruits1 = ["apple", "mango"];

// push → add at last
fruits1.push("banana");

console.log(fruits1); // ["apple", "mango", "banana"]

// // 🤷‍♂️ 2. pop() — Remove item from END

const items = ["pen", "pencil", "eraser"];

// pop → remove last item
items.pop();

console.log(items); // ["pen", "pencil"]


// 🤷‍♂️ 3. unshift() — Add item at the START
const nums = [10, 20, 30];

// unshift → add at beginning
nums.unshift(5);

console.log(nums); // [5, 10, 20, 30]


// 🤷‍♂️ 4. shift() — Remove item from START
const cars = ["BMW", "Audi", "Toyota"];

// shift → remove first
cars.shift();

console.log(cars); // ["Audi", "Toyota"]


// 🤷‍♂️ Check if Value Exists (includes)
const colors = ["red", "blue", "green"];

// Check if an item exists
console.log(colors.includes("blue"));  // true
console.log(colors.includes("yellow")); // false


// 🤷‍♂️ Find Index Of an Item

const animals = ["cat", "dog", "cow"];

// indexOf returns the index number
console.log(animals.indexOf("dog")); // 1
console.log(animals.indexOf("lion")); // -1 (not found)


//  🤷‍♂️ slice() — Copy a portion (Does NOT change original)

const letters = ["a", "b", "c", "d", "e"];

// slice(start, end) → end index not included
const copy = letters.slice(1, 4);

console.log(copy);       // ["b", "c", "d"]
console.log(letters);    // original unchanged


// 🤷‍♂️ splice() — Remove or add (Changes original)

const items2 = ["pen", "pencil", "marker", "notebook"];

// splice(start, count)
items2.splice(1, 2); // removes "pencil", "marker"

console.log(items2); // ["pen", "notebook"]

// Add item using splice ↓
const lang = ["js", "python"];

// splice(start, deleteCount, newItem)
lang.splice(1, 0, "java");

console.log(lang); // ["js", "java", "python"]
