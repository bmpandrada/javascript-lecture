'use strict';

const number = document.querySelector('.number');
const scored = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');


let score = 20;
let message = document.querySelector('.message');
let displayMessage = function(x){ message.textContent=x}
let secretNumber = (Math.trunc(Math.random()*20)+1)
console.log(secretNumber);

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
            displayMessage(guess > secretNumber ? 'to high' : 'to low')
            score--;
            scored.textContent=score
        }else{
            displayMessage('you lost')
            scored.textContent=0;
            document.body.style.background='red';
        }
       
    }
})

