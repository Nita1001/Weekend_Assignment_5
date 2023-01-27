'use strict'

const player1Score = document.querySelector('#points-1');
const player2Score = document.querySelector('#points-2');
const p1CurrScore = document.querySelector('#curr-points-1');
const p2CurrScore = document.querySelector('#curr-points-2');
// change to id !
const roll = document.querySelector('.dice');
const hold = document.querySelector('.hold');
const newGame = document.querySelector('.new-game');

const myDice = ['./images/dice-1.png', './images/dice-2.png','./images/dice-3.png', './images/dice-4.png', './images/dice-4.png', './images/dice-6.png',]
const firstDice = document.querySelector('.roller-dice-1 div img');
const secondDice = document.querySelector('.roller-dice-2 div img');


roll.addEventListener('click', () => {
    firstDice.setAttribute('src', myDice[Math.floor(Math.random()* 5) + 1]);
    secondDice.setAttribute('src', myDice[Math.floor(Math.random()* 5) + 1]);
});

hold.addEventListener('click', () => {
    alert('Hold');
});

newGame.addEventListener('click', () =>{
    alert('NEW GAME');
});

