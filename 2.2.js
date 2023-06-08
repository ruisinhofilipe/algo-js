const readlineSync = require("readline-sync");

const minAge = readlineSync.question("Give me a minimum age: ");
const maxAge = readlineSync.question("Give me a maximum age: ");
const currentAge = readlineSync.question("Give me your current age: ");

if (minAge >= maxAge) {
  console.log(
    "I'm sorry, there's being an error. Your min age value is greater or equal than your max value."
  );
} else if (currentAge > minAge && currentAge < maxAge) {
  console.log(
    "Your current age is a value between the given min age and max age."
  );
} else {
  console.log("Thank you for taking the time to answer.");
}
