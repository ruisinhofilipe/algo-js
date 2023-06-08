const readlineSync = require("readline-sync");

/* 
    Function that gets as input the length and width of triangle 
    and calculates the area returning its value

*/

function calcSurface(l, w) {
  let area = (l * w) / 2;
  return `The area of your triangle is ${area}`;
}

const width = readlineSync.question("Type in the width of your triangle: ");
const length = readlineSync.question("Now the length: ");

console.log(calcSurface(length, width));
