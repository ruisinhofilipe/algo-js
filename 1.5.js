const readlineSync = require("readline-sync");

const firstNumber = Math.trunc(Number(readlineSync.question("First number: ")));
const secondNumber = Number(readlineSync.question("Second number: "));

const result = firstNumber * secondNumber;

console.log(result);
