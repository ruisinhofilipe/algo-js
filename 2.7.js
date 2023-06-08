const readlineSync = require("readline-sync");

let n = Number(readlineSync.question("How many numbers do you want ? "));
let arrayNumbers = [];
let sum = 0;

for (n; n > 0; n--) {
  arrayNumbers.push(Number(readlineSync.question("Choose a number: ")));
}

for (let i = 0; i < arrayNumbers.length; i++) {
  sum += arrayNumbers[i];
}

console.log(sum);
