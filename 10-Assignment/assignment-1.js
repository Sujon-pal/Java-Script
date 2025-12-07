function cashOut(amount) {
    let chargeRate = 1.75 / 100;
    const charge = amount * chargeRate;
    return charge;
}

console.log(cashOut(20000));
