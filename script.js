'use strict'

const player1Score = document.querySelector('#points-1');
const player2Score = document.querySelector('#points-2');
const p1CurrScore = document.querySelector('#curr-points-1');
const p2CurrScore = document.querySelector('#curr-points-2');
const p1CurrHeader = document.querySelector('#p1-curr-header');
const p2CurrHeader = document.querySelector('#p2-curr-header');
const roll = document.querySelector('#dice-btn');
const hold = document.querySelector('#hold-btn');
const newGame = document.querySelector('#new-game-btn');
const startGameSection = document.querySelector('.start-game-section')
const startGame = document.querySelector('#start-game-btn')
const targetScoreInput = document.querySelector('#target-score-input')
const myDice = ['./images/dice-1.png', './images/dice-2.png','./images/dice-3.png', './images/dice-4.png', './images/dice-5.png', './images/dice-6.png',]
const firstDice = document.querySelector('.roller-dice-1 div img');
const secondDice = document.querySelector('.roller-dice-2 div img');
const diceSound = document.querySelector('#rolling-dice-sound');
const holdSound = document.querySelector('#hold-sound');
const winningSound = document.querySelector('#winning-Sound');
const funnyMeme = document.querySelector('#meme')
diceSound.volume = 0.03;
holdSound.volume = 0.06;
winningSound.volume = 0.03;
let currentSum = 0; // sum is for current Player round points
// score throughout the rounds -Hold- global score
let scoreP1 = 0; 
let scoreP2 = 0;
let turns = 1; // first Players / second players turn
let targetScore = 0;
targetScoreInput.value = '100'; // default value
//Background music
window.addEventListener('DOMContentLoaded', event =>{
    const backgroundMusic = document.querySelector('#background-music');
    backgroundMusic.volume = 0.03;
    backgroundMusic.play();
})

startGame.addEventListener('click', () =>{
    targetScore = targetScoreInput.value;
    startGameSection.setAttribute('class', 'hidden');
});
roll.addEventListener('click', () => {
    diceSound.play();
    let curr = Math.floor(Math.random()* 5) + 1;
    let curr2 = Math.floor(Math.random()* 5) + 1;
    firstDice.setAttribute('src', myDice[curr]);
    secondDice.setAttribute('src', myDice[curr2]);
    if(curr === 5 && curr2 === 5){
        funnyMeme.setAttribute('class', 'double-message')

        setTimeout(() => {
            if(turns === 1){
                p1CurrScore.innerText = 0;
                turns = 2;
            } else {
                p2CurrScore.innerText = 0;
                turns = 1;
            }
            funnyMeme.setAttribute('class', 'hidden')
          }, 3000); // 1sec was too short so i added 2 more sec.
    } else {
        let result = curr + curr2 + 2;
        // add result to current score each time
        currentSum += result;
        if(turns === 1){
            p1CurrScore.innerText = currentSum;
        } else {
            p2CurrScore.innerText = currentSum;
        }
        result = 0;
    }
});

hold.addEventListener('click', () => { 
    holdSound.play();
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
    if(scoreP1 === targetScore || scoreP2 === targetScore){
        winningSound.play();
        (scoreP1 === targetScore) ? p1CurrHeader.innerText = 'You Win!': p2CurrHeader.innerText ='You Win!';
    }else if(scoreP1 > targetScore || scoreP2 > targetScore)
    {
        if(scoreP1 > targetScore){
            winningSound.play();
            p1CurrHeader.innerText = 'Passed the target score';
            p2CurrHeader.innerText ='You Win!';

        } else {
            winningSound.play();
            p2CurrHeader.innerText = 'Passed the target score';
            p1CurrHeader.innerText ='You Win!';
        }
    } 
    p1CurrScore.innerText = 0;
    p2CurrScore.innerText = 0;
    currentSum = 0;
});

newGame.addEventListener('click', () =>{
    player1Score.innerText = 0;
    player2Score.innerText = 0;
    p1CurrScore.innerText = 0;
    p2CurrScore.innerText = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    currentSum = 0;
    targetScore = 0;
    targetScoreInput.value = '100';
    p1CurrHeader.innerText = 'Current';
    p2CurrHeader.innerText = 'Current';
    startGameSection.setAttribute('class', 'start-game-section');
});

