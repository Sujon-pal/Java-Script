let numbers = [22, 33, 44, 66, 77, 88, 99];

for (let i = 0; i <= numbers.length - 1; i++) {
  let number = numbers[i];
    // console.log(number);
}

// another methon

for (let number of numbers) {
    // console.log(number);
}

let Products = [
  { id: 1, name: "Mobile Phone", price: 15000 },
  { id: 2, name: "Laptop Phone", price: 55000 },
  { id: 3, name: "Headphone", price: 2500 },
  { id: 4, name: "Mouse", price: 800 },
  { id: 5, name: "Keyboard", price: 1200 },
  { id: 6, name: "Monitor ", price: 18000 },
  { id: 7, name: "Charger Phone", price: 1000 },
  { id: 8, name: "Power Bank", price: 3000 },
  { id: 9, name: "USB Cable Phone", price: 300 },
  { id: 10, name: "Smart Watch", price: 7000 },
];

function matchedProducts(products, search) {
  let matched = [];

  search = search.toLowerCase();

  for (let product of products) {
    if (product.name.toLowerCase().includes(search)) {
      matched.push(product);
    }
  }

  return matched;
}

let result = matchedProducts(Products, "phone");
for (let product of result) {
  console.log(`ID: ${product.id} , Name: ${product.name},  Price: ${product.price}` );
}

