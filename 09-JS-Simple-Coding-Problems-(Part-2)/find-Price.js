let products = [
  { id: 1, title: "Phone", price: 12000 },
  { id: 2, title: "Laptop", price: 50000 },
  { id: 3, title: "Mouse", price: 500 },
  { id: 4, title: "Keyboard", price: 1500 },
  { id: 5, title: "Monitor", price: 12000 },
  { id: 6, title: "Headphone", price: 800 },
  { id: 7, title: "Smart Watch", price: 3000 },
  { id: 8, title: "Charger", price: 600 },
  { id: 9, title: "USB Cable", price: 200 },
  { id: 10, title: "Speaker", price: 2500 },
];

function cheapPrice(price) {
  let min = price[0];
  for (let item of price) {
    if (min.price > item.price) {
      min = item;
    }
  }
  return min;
}

let Result = cheapPrice(products);
console.log(`ID: ${Result.id} Product: ${Result.title} Price: ${Result.price}`);

