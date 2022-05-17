// JavaScript Document

const body = document.querySelector("body");
const ol = document.querySelector("ol");
const items = document.querySelectorAll("main > ol li");
const button1 = document.querySelector("main button:last-of-type");
const button2 = document.querySelector("main button:first-of-type");
let currentPos = 0;
const p = document.querySelector("main > p");
const arraylength = items.length;
const textContent = () => `${currentPos + 1}/${arraylength}`;
p.textContent = textContent();

button1.addEventListener("click", () => {
  if (currentPos === items.length - 1) {
    currentPos = 0;
  } else {
    currentPos++;
  }
  p.textContent = textContent();
  ol.scroll({ left: items[currentPos].offsetLeft, top: 0, behavior: "smooth" });
});

button2.addEventListener("click", () => {
  if (currentPos === 0) {
    currentPos = items.length - 1;
  } else {
    currentPos--;
  }
  p.textContent = textContent();
  ol.scroll({ left: items[currentPos].offsetLeft, top: 0, behavior: "smooth" });
});
