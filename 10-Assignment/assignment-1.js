// Find cash out charge

function cashOut(amount) {
  if (typeof amount !== "number" || amount < 0) {
    return "Invalid";
  }

  else {
    let chargeRate = 1.75 / 100;
    const charge = amount * chargeRate;
    return charge;
  }
}

console.log(cashOut("h"));// Invalid
console.log(cashOut(2000)); 
console.log(cashOut(-1)); // Invalide
