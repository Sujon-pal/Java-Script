// ⭐ 1. Basic Object

const person = {
  name: "Sujon",
  age: 22,
  city: "Dhaka",
};

console.log(person);

// ⭐ 2. Access Object Properties

const student = {
  name: "Rafi",
  roll: 5,
  class: "Six",
};

// dot notation
console.log(student.name);

// bracket notation
console.log(student["roll"]);

// ⭐ 3. Update Object Value

let car = { brand: "Toyota", color: "Red" };

car.Corolla = "Corolla"; // Add
car.color = "Black"; // Update

console.log(car);

// ⭐ 4. Delete Key
let info = { a: 1, b: 2, c: 3 };

delete info.c;
console.log(info);

// ⭐ 5. Object Inside Object (Nested Object)
const user = {
  name: "sujon",
  address: {
    city: "Sylhet",
    country: "BD",
  },
};

user.address.city ="Dhaka" // upadate city
console.log(user.address.city);
// find keys and value
let key4 = Object.keys(user)
let key5 = Object.keys(user.address)
// console.log(key4)
let value = Object.values(user.address)
console.log(value)

// ⭐ 6. Object Inside Array

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 20000 },
];

console.log(products[0].name)

// ⭐ 7. Loop Through Object (for…in)

const bike = { brand: "Hero", cc: 100, color: "Blue" };

for (let prpo in bike) {
//   console.log(prpo);
  console.log(bike[prpo])
}

// ⭐ 8. Object Methods (Function inside Object)

const player = {
  name: "Messi",
  goals: 10,
  play() {
    console.log(this.name + " is playing");
  }
};

player.play();

// ⭐ 9. this keyword in Object

const dog = {
  name: "Tommy",
  sound() {
    console.log(this.name + " says woof!");
  }
};

dog.sound();
