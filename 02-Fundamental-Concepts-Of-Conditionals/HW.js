const student = true;
const personAge = 9;
const price = 800;
let discountPrice;

if (personAge < 10) {
    console.log("Free");
}

else if (student === true) {  
    discountPrice = price * 0.50;
    console.log("Student pay: " + discountPrice);
}

else if (personAge >= 60) {
    discountPrice = price - (price * 0.15);
    console.log("Senior citizen pay: " + discountPrice);
}

else {
    console.log("Pay: " + price); 
}
