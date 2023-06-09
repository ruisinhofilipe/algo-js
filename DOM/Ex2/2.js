const importantElements = document.querySelectorAll(".important");

importantElements.forEach((element) => {
  element.setAttribute("title", "This is an important class");
});

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  if (img.getAttribute("title") !== "This is an important class") {
    img.style.display = "none";
  }
});

function rgb() {
  r = Math.floor(Math.random() * 200);
  g = Math.floor(Math.random() * 200);
  b = Math.floor(Math.random() * 200);
  return ["rgb(", r, ",", g, ",", b, ")"].join("");
}
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  if (p.getAttribute("class")) {
    console.log(p.getAttribute("class"));
    console.log(p.textContent);
  } else {
    p.style.color = rgb();
    console.log(p.textContent);
  }
});
