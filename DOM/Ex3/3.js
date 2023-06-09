const body = document.querySelector("body");
const learners = ["Rui", "youssef", "Maxime", "Person4", "Person5"];

for (let i = 0; i < learners.length; i++) {
  function rgb() {
    r = Math.floor(Math.random() * 200);
    g = Math.floor(Math.random() * 200);
    b = Math.floor(Math.random() * 200);
    return ["rgb(", r, ",", g, ",", b, ")"].join("");
  }
  const article = document.createElement("article");
  const section = document.createElement("section");
  section.style.backgroundColor = rgb();
  let sectionBgColor = tinycolor(section.style.backgroundColor);
  if (sectionBgColor.isLight()) {
    section.style.color = "black";
  } else if (sectionBgColor.isDark()) {
    section.style.color = "white";
  }
  const p = document.createElement("p");
  p.textContent = learners[i];

  section.appendChild(p);
  article.appendChild(section);
  body.appendChild(article);
}
