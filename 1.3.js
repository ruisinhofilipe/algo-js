const readlineSync = require("readline-sync");

const userName = readlineSync.question("Hello, what's your name?");

console.log(`Hello, ${userName}!`);
