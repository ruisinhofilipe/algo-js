const readlineSync = require("readline-sync");

const firstPrompt = Number(
  readlineSync.question(
    "Can you guess the number that I'm thinking ? smal advice: Between 0 and 100: "
  )
);

if (firstPrompt !== 42) {
  let userGuess;
  do {
    userGuess = Number(readlineSync.question("Wrong one, try again: "));
  } while (userGuess !== 42);
  console.log("there you go! 42 was indeed the right answer :)");
} else {
  console.log("OMG YOU GOT IT ON YOUR FIRST TRY!");
}
