/*
    Function that return a random number between 0 and 10
    Math.random to get a random number between 0 and 1
    * 10 so the random value won't be anymore between 0 and 1 but from 0 and 10

    Math.round to round the number to the nearest number as a whole.
*/

function rand10() {
  return Math.round(Math.random() * 10);
}

console.log(rand10());

module.exports = rand10;
