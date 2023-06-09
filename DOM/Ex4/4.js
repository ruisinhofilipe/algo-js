// get the last child and put it in first
const olList = document.querySelector("ol");
olList.prepend(document.querySelector("li:last-child"));

// Remove the new last child
const lastChild = document.querySelector("li:last-child");
olList.removeChild(lastChild);

// Get every section of main
const main = document.querySelector("main");
const sections = document.querySelectorAll("section");

// Get h2 of each section
const section2H2 = sections[1].querySelector("h2");
// Get h2 of the last section, it's inside of a div
const div = document.querySelector("div");
const section3H2 = div.querySelector("h2");
// Change H2 between sections
sections[1].removeChild(section2H2);
sections[1].prepend(section3H2);

div.prepend(section2H2);

// Remove last section
const lastSection = document.querySelector("section:last-child");

document.querySelector("main").removeChild(lastSection);
