const title = document.querySelector("title");
title.textContent = "Modifying the DOM";

const body = document.querySelector("body");
const bodyChildren = document.querySelectorAll("body *");

body.style.backgroundColor = "red";

bodyChildren.forEach((children) => {
  console.log(children);
});
