const readlineSync = require("readline-sync");
const a = [];
const n = readlineSync.question("Choose a number: ");

function rand10() {
  return Math.round(Math.random() * 10);
}

function multiRand() {
  for (let i = 0; i < n; i++) {
    a.push(rand10());
  }
}

function average() {
  const sum = a.reduce((prev, next) => {
    return prev + next;
  }, 0);
  return sum / 2;
}

function min() {
  const min = a.reduce((prev, next) => {
    return next > prev ? prev : next;
  });
  return min;
}

function max() {
  const max = a.reduce((prev, next) => {
    return next > prev ? next : prev;
  });
  return max;
}

function program() {
  multiRand();
  console.log(`The average value is ${average()}`);
  console.log(`The max value is ${max()}`);
  console.log(`The min value is ${min()}`);
}

program();
