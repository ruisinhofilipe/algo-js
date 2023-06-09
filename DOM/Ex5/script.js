const _initTime = Date.now();
const ul = document.querySelector("ul");
const display = document.querySelector(".displayedsquare-wrapper");

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

// Function that generates a random color
function rgb() {
  r = Math.floor(Math.random() * 200);
  g = Math.floor(Math.random() * 200);
  b = Math.floor(Math.random() * 200);
  return ["rgb(", r, ",", g, ",", b, ")"].join("");
}

function clickOnSquare(e) {
  const color = e.target.classList[1];
  const displayedsquare = document.createElement("div");
  displayedsquare.className = `displayedsquare ${color}`;
  document
    .querySelector(".displayedsquare-wrapper")
    .appendChild(displayedsquare);
  // Add event listener to the new squares created
  displayedsquare.addEventListener("click", (e) => {
    alert(`you pressed the ${e.target.classList[1]} square.`);
  });
  // Create the logs
  const log = document.createElement("li");
  log.textContent = `[${getElapsedTime()}] Created a new ${color} square`;
  document.querySelector("ul").appendChild(log);
}

function keyPressed() {
  document.addEventListener("keypress", (e) => {
    // Add log about the space bar and change background color
    if (e.key === " ") {
      document.body.style.backgroundColor = rgb();
      const log = document.createElement("li");
      log.textContent = `[${getElapsedTime()}] You pressed the space key.`;
      ul.appendChild(log);

      // Clear the log
    } else if (e.key === "l") {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      // Clear the squares previously generated
    } else if (e.key === "s") {
      while (display.firstChild) {
        display.removeChild(display.firstChild);
      }
    }
  });
}

const actionsquares = document.querySelectorAll(".actionsquare");
for (let actionsquare of actionsquares) {
  actionsquare.addEventListener("click", clickOnSquare);
}
keyPressed();
