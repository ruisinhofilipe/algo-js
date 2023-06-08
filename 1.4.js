const readlineSync = require("readline-sync");

const userName = readlineSync.question("Hello, what's your name?");
const userLastName = readlineSync.question("Can I have your last name now?");
const userCity = readlineSync.question("In which city were your born?");

console.log(
  `Alright, according to the inputs I got from you: your name is ${userName} ${userLastName} and you were born in ${userCity}.`
);
