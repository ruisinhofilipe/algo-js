const readlineSync = require("readline-sync");

const numberGenerated = Math.round(Math.random() * 100);
let num = Number(readlineSync.question("Guess the number between 1 and 100: "));

// Ask user for a number between 0 - 100. Repeat if the number is lower/higher.
while (num !== numberGenerated) {
  if (num < 0 || num > 100) {
    num = Number(
      readlineSync.question(
        "I told you a number between 1 and 100 and you ignored, you'll get no help this round. Try again: "
      )
    );
  } else if (num > numberGenerated) {
    num = Number(readlineSync.question("Wrong, too high.Try again: "));
  } else {
    num = Number(readlineSync.question("Wrong, too low. Try again: "));
  }
}

console.log(
  `congrats, you guessed correctly :) the number was ${numberGenerated}`
);
