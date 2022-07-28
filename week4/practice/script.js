const box = document.querySelector('.box');
const num = document.querySelector('.num');

let i = 5;
setInterval(() => {
    i--;
    num.innerText = i;
}, 1000)

setTimeout(() => {
    box.style.display = 'none';
}, 6000)