const readlineSync = require("readline-sync");
let userInput;

do {
  userInput = Number(
    readlineSync.question("Choose a number between 1 and 7 (included): ")
  );
} while (userInput < 1 || userInput > 7);

switch (userInput) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("WEDnesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Sorry, there's been an error.");
}
