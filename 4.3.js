const readlineSync = require("readline-sync");
const rand10 = require("./4.2");

const array = [];

const n = Number(
  readlineSync.question("How many random numbers do you want? ")
);

/* 
    Function that loops n times (user input) and executes the rand10 function that gives n random numbers, numbers are pushed and stored inside the array
*/

function multiRand() {
  for (let i = 0; i < n; i++) {
    array.push(rand10());
  }
}

multiRand();
console.log(array);
