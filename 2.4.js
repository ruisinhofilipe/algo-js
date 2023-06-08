const readlineSync = require("readline-sync");

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number. When divided by 2 is ${i / 2}`);
  } else {
    console.log(
      `${i} is an odd number. When multiplied by 3 the outcome is ${i * 3}`
    );
  }
}
