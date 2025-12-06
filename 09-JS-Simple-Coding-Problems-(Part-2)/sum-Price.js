let products = [
  { id: 1, title: "Phone", price: 100, quantity: 4 },
  { id: 2, title: "Laptop", price: 500, quantity: 1 },
  { id: 3, title: "Mouse", price: 500, quantity: 1 },
  { id: 4, title: "Keyboard", price: 100, quantity: 5 },
  { id: 5, title: "Monitor", price: 100, quantity: 1 },
  { id: 6, title: "Headphone", price: 800, quantity: 6 },
  { id: 7, title: "Smart Watch", price: 300, quantity: 1 },
  { id: 8, title: "Charger", price: 600, quantity: 1 },
  { id: 9, title: "USB Cable", price: 200, quantity: 1 },
  { id: 10, title: "Speaker", price: 2500, quantity: 1 },
];

function sumOfProduct(number) {
  let sum = 0;
  for (let num of number) {
    // sum = sum + num.price;
    sum = sum + num.price * num.quantity;
  }

  return sum;
}

let Result = sumOfProduct(products);
console.log(Result);
