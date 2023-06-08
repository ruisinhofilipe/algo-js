const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("Chooose a number: "));
let result = 1;
// let result = 1;
// for (let i = 1; i <= number; i++) {
//   result *= i;
// }
// console.log(result);

function factorial(n) {
  if (n > 0) {
    result *= n;
    factorial(n - 1);
  } else {
    console.log(result);
  }
}

factorial(number);
