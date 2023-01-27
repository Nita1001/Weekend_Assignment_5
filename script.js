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

let currentSum = 0; // sum is for current Player
// score throughout the rounds
let scoreP1 = 0; 
let scoreP2 = 0;
let turns = 1; // first Players / second players turn

roll.addEventListener('click', () => {
    let curr = Math.floor(Math.random()* 5) + 1;
    let curr2 = Math.floor(Math.random()* 5) + 1;
    firstDice.setAttribute('src', myDice[curr]);
    secondDice.setAttribute('src', myDice[curr2]);
    let result = curr + curr2 + 2;
    // add result to current score each time
    currentSum += result;
    if(turns === 1){
        p1CurrScore.innerText = currentSum;
    } else {
        p2CurrScore.innerText = currentSum;
    }
    console.log('current score',p1CurrScore.innerText);
    result = 0;
});

hold.addEventListener('click', () => { 
    // add currentSum to score
    if(turns === 1){
        scoreP1 += currentSum;
        player1Score.innerText = scoreP1;
        turns = 2;
    } else {
        scoreP2 += currentSum;
        player2Score.innerText = scoreP2;
        turns = 1;
    }
    if(scoreP1 >= 100 || scoreP2 >= 100)
    {
        alert('GAME OVER');
    } 
    p1CurrScore.innerText = 0;
    p2CurrScore.innerText = 0;
    currentSum = 0;
});

newGame.addEventListener('click', () =>{
    alert('NEW GAME');
});

