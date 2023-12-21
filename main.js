let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "davidcamillematheo123456789";
str = str.split("");
let font = 20;
let col = width / font;
let arr = [];

for (let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < arr.length; i++) {
        let txt = str[Math.floor(Math.random() * str.length)];
        ctx.fillStyle = "#00FF00";
        ctx.fillText(txt, i * font, arr[i] * font);
        arr[i]++;

        if (arr[i] * font > height && Math.random() > 0.95) {
            arr[i] = 0;
        }
        

    }
}


setInterval(draw, 40);

window.addEventListener("resize", () => location.reload())

let sections = document.querySelectorAll("section")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -500;
        let Height = sec.offsetHeight;

        if (top >= offset && top < offset + Height) {
            sec.classList.add("show-animate");
        }
        else {
            sec.classList.remove("show-animate")
        }
    })
}

///////////////////////////////MACHINE A ECRIRE///////////////////////////////////////////////

"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
  animate_text();
});

function animate_text() {
  let delay = 150,
      delay_start = 500,
      contents,
      letters;

  document.querySelectorAll(".btn1").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {

        elem.textContent += letter;}, 
        delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}
