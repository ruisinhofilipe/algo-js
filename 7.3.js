const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("A number: "));
let array = [];

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    array.push(i);
  }
}

if (array.length >= 1) {
  console.log(array);
} else {
  console.log("The number you chose has no dividers");
}
