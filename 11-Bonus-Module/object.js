// Object inside Function

function printUser(user) {
  return user.name + " is " + user.age + " ysers old";
}
console.log(
  printUser({
    name: "Sujon Pal",
    age: 25,
  })
);

// Object inside Array

let students = [
  { name: "John", marks: 80 },
  { name: "Alice", marks: 90 },
];

console.log(students[1]);
console.log(students[1].name);

// Object Method (Function inside Object)

let calculate = {
  add(a, b) {
    return a + b;
  },
};
console.log(calculate.add(4, 5));
