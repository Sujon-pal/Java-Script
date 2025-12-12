// Vat Calcualte

function calculateVate(number) {
    if(typeof number !== 'number' || typeof number == 'string'){
        return "Invalid"
    }
  let vatRate = 7.5;
  let price = Math.floor((number * vatRate) / 100);
  return price;
}

console.log(calculateVate(1500));
console.log(calculateVate('1500'));
console.log(calculateVate('sujon'));
