const readlineSync = require("readline-sync");

const userAge = readlineSync.question("What's your age?");

userAge >= 18
  ? console.log("You're an adult")
  : console.log("you're not an adult");
