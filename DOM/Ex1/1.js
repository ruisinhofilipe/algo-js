const title = document.querySelector("title");
title.textContent = "Modifying the DOM";

const body = document.querySelector("body");
// const bodyChildren = document.querySelectorAll("body *");

body.style.backgroundColor = "red";

// bodyChildren.forEach((children) => {
//   console.log(children);
// });

// for (let child of bodyChildren) {
//   console.log(child);
// }

const bodyChildren = body.children;
console.log(bodyChildren[1]);
for (let child of bodyChildren) {
  console.log(child);
}
