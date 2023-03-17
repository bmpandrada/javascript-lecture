'use strict';

const number = document.querySelector('.number');
const scored = document.querySelector('.score');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let highscore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let score = 20; //create newState for score
let displayMessage = function(x){ message.textContent=x}//newState for message
let secretNumber = (Math.trunc(Math.random()*20)+1)

let randomNumber = function(){
    let random = (Math.trunc(Math.random()*20)+1)
    secretNumber = random;
    console.log(secretNumber);
    return secretNumber
}


btnCheck.addEventListener('click',function(){  
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){
        displayMessage('not a number')       
    }else if(guess === secretNumber){
        displayMessage('you guess')
        highscore.textContent=score;
        number.style.width ='30rem'
        number.textContent=secretNumber;
        document.body.style.background='#60b347';
    }else{
        if(score > 1){
            displayMessage(guess > secretNumber ? 'to high' : 'to low')//itenary string
            score--; //decrease setState
            scored.textContent=score
        }else{
            displayMessage('you lost')
            scored.textContent=0;
            document.body.style.background='red';
        }     
    }
})

//reset
btnAgain.addEventListener('click', function(){
    randomNumber()
    let score = 20;
    number.textContent='?'
    highscore.textContent=0;
    scored.textContent=score;
    number.style.width =''
    displayMessage('Start guessing...')
    Number(document.querySelector('.guess').value='')
    document.body.style.background='#222';
})