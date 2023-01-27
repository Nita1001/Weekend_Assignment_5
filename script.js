'use strict'

const player1Score = document.querySelector('#points-1');
const player2Score = document.querySelector('#points-2');
const p1CurrScore = document.querySelector('#curr-points-1');
const p2CurrScore = document.querySelector('#curr-points-2');
// change to id !
const roll = document.querySelector('.dice');
const hold = document.querySelector('.hold');
const newGame = document.querySelector('.new-game');

const myDice = ['./images/dice-1.png', './images/dice-2.png','./images/dice-3.png', './images/dice-4.png', './images/dice-5.png', './images/dice-6.png',]
const firstDice = document.querySelector('.roller-dice-1 div img');
const secondDice = document.querySelector('.roller-dice-2 div img');

let CurrentSum = 0; // sum is for current Player
let score = 0; // score throughout the round

roll.addEventListener('click', () => {
    let curr = Math.floor(Math.random()* 5) + 1;
    let curr2 = Math.floor(Math.random()* 5) + 1;
    firstDice.setAttribute('src', myDice[curr]);
    secondDice.setAttribute('src', myDice[curr2]);
    let result = curr + curr2 + 2;
    // add result to current score each time
    //who is playing?
    // assuming for now 1st player turn
    CurrentSum += result;
    p1CurrScore.innerText = CurrentSum;
    console.log('current score',p1CurrScore.innerText);
});

hold.addEventListener('click', () => {
    // assuming for now 1st player turn    
    score += CurrentSum;
    player1Score.innerText = score; 
    CurrentSum = 0;

});

newGame.addEventListener('click', () =>{
    alert('NEW GAME');
});

