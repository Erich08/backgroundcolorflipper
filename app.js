'use strict';
console.log('hello');
const colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const div = document.querySelector('div');
const btn = document.getElementById('btn');
let headingTwo = document.querySelector('.background');
let hexcolor = document.querySelector('.nestedh2');



btn.addEventListener('click', function() {
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += colors[getRandomNumber()];
    }
    document.body.style.backgroundColor = color;
    hexcolor.textContent = color;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function backgroundText() {
    headingTwo.textContent = 'Background Color:';
}

backgroundText();