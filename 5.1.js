const readlineSync = require("readline-sync");
let ans = "";

const obj = {
  name: null,
  year: null,
  members: [],
};

function askTvSerie() {
  obj.name = readlineSync.question("what's the name of the show/serie ? ");
  obj.year = readlineSync.question("In what year was produced ? ");
  do {
    ans = readlineSync.question(
      "Favorite cast members (when you're done just type -done-) ? "
    );
    if (ans !== "-done-") {
      obj.members.push(ans);
    }
  } while (ans !== "-done-");

  console.log(obj);
}

askTvSerie();
