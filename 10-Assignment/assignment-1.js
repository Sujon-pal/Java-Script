// Find cash out charge

function cashOut(amount) {
  if (typeof amount !== "number" || amount < 0) {
    return "Invalid";
  } else {
    let chargeRate = 1.75 / 100;
    const charge = amount * chargeRate;
    return charge;
  }
}

console.log(cashOut("h")); // Invalid
console.log(cashOut(2000));
console.log(cashOut(-1)); // Invalide

// Check Email valation

function isValidEmail(email) {
  email = email.trim();
  if (typeof email !== "string") {
    return "Invalid Strind";
  }
  if (email == "") {
    return "Email cannot be empty!";
  }

  let firstChar = email[0];
  if (firstChar == "_" || firstChar === "+" || firstChar === "=") {
    return "Email cannot start with _ + =";
  }
  if (!email.endsWith(".com")) {
    return "Email must end with .com";
  }

  if (!email.includes("@")) {
    return " Email must add @";
  }

  return "Valid email!";
}

console.log(isValidEmail("sujonpal@gmai.com"));
console.log(isValidEmail("sujonpalgmai.com"));
console.log(isValidEmail("=sujonpal@gmai.com"));
console.log(isValidEmail("sujonpal@gmai"));
