const readlineSync = require("readline-sync");

function askTvSerie() {
  const obj = {};
  let ans = "";
  obj.name = readlineSync.question("what's the name of the show/serie ? ");
  obj.year = readlineSync.question("In what year was produced ? ");
  obj.members = [];
  do {
    ans = readlineSync.question(
      "Favorite cast members (when you're done just type -done-) ? "
    );
    if (ans !== "-done-") {
      obj.members.push(ans);
    }
  } while (ans !== "-done-");

  return obj;
}

module.exports = askTvSerie;
