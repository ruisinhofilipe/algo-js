const readlineSync = require("readline-sync");
let option;
const pizza = ["Hawai", "4 chesse", "marguerita"];
do {
  console.log(`Hello! Welcome to the Pizza Flavors Manager.

    Please choose your action:
    
    1 - List all the pizza flavors
    2 - Add a new pizza flavor
    3 - Remove a pizza flavor
    4 - Exit this program
    
    `);
  option = Number(readlineSync.question("Please choose your action: "));
  if (option === 1) {
    console.log("This is our pizza menu: ");
    for (let i = 0; i < pizza.length; i++) {
      console.log(`${pizza[i]}
      
      
      `);
    }
  } else if (option === 2) {
    pizza.push(
      readlineSync.question("What pizza would you like to add to our menu ? ")
    );
  } else if (option === 3) {
    for (let i = 0; i < pizza.length; i++) {
      console.log(`${i} - ${pizza[i]}
        
        
        `);
    }
    let deletePizza = readlineSync.question(
      `what pizza would you like to remove ? 
       Look above and type the number that's before the pizza that you want to remove from our menu: `
    );
    while (deletePizza > pizza.length - 1) {
      deletePizza = readlineSync.question(
        "We don't have that pizza number in our menu, type again: "
      );
    }
    pizza.splice(deletePizza, 1);
  }
} while (option !== 4);
console.log("Thank you and have a nice day!");
