const readlineSync = require("readline-sync");

const array = [];

const n = Number(
  readlineSync.question("How many random numbers do you want? ")
);

function rand10() {
  return Math.round(Math.random() * 10);
}

function multiRand() {
  for (let i = 0; i < n; i++) {
    array.push(rand10());
  }
}

multiRand();
console.log(array);
