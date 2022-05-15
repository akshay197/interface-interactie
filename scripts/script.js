// JavaScript Document
const body = document.querySelector("body");
const ol = document.querySelector("ol");
const items = document.querySelectorAll("main > ol li");
const button1 = document.querySelector("main button:last-of-type");
const button2 = document.querySelector("main button:first-of-type");
let currentPos = 0;

button1.addEventListener("click", () => {
  if (currentPos === items.length - 1) {
    currentPos = 0;
  } else {
    currentPos++;
  }
  const scrollpx = items[currentPos].offsetLeft;
  body.scrollLeft = 100;
});

button2.addEventListener("click", () => {
  if (currentPos === 0) {
    currentPos = items.length - 1;
  } else {
    currentPos--;
  }

  ol.scrollLeft = items[currentPos].offsetLeft;
});
