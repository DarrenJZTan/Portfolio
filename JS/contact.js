const heading = document.querySelector('#title-contactme')
const phone = document.querySelector('#phone')

let i1 = 0
let txt1 = 'Have any more questions?'
let speed1 = 100

function typeWriter1() {
  if (i1 < txt1.length) {
    heading.innerHTML += txt1.charAt(i1);
    i1++;
    setTimeout(typeWriter1, speed1);
  } 
}

document.addEventListener("DOMContentLoaded", typeWriter1);

let i = 0
let txt = ' 04 6984 5480'
let speed = 100

function typeWriter() {
  if (i < txt.length) {
    phone.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

phone.addEventListener('click', typeWriter)