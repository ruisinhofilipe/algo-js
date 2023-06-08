const readlineSync = require("readline-sync");

function calcSurface(l, w) {
  let area = (l * w) / 2;
  return `The area of your triangle is ${area}`;
}

const width = readlineSync.question("Type in the width of your triangle: ");
const length = readlineSync.question("Now the length: ");

console.log(calcSurface(length, width));
