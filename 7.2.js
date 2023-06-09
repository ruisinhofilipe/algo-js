const readlineSync = require("readline-sync");
let n;

do {
  n = Number(readlineSync.question("Choose a number(higher than 0): "));
} while (n <= 0);

const array = [0, 1];

let prev = 0;
let next = 1;
let sum;

do {
  sum = prev + next;
  prev = next;
  next = sum;
  array.push(sum);
} while (array.length < n);

if (n === 1) {
  console.log(array[0]);
} else if (n === 2) {
  console.log([array[0], array[1]]);
} else {
  console.log(array);
}
