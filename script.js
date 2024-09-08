'use strict';

/*  //Basic
console.log(document.querySelector('.message').textContent);   // this code ain't meant for node js compiler, use browser to get the response
document.querySelector('.message').textContent = "🎉Yay! Correct Number";      //will change content of .message to provided string
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling click events (mouse events or keyboard events)
/* Just an example
document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = "Yay!🎉 Correct number";
})
*/

//Lets get started with game events and logics

let secretNumber = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = '?';
console.log(secretNumber);


function displayMsg(message){           //this fxn is to remove duplicates of this line from whole code
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);        //input from user is always string, so to compare , change this to number
    console.log(guess,typeof guess); 


    //when there's no input
    if(!guess){
        displayMsg("⛔No Number!, please enter a number");
    }else if(guess===secretNumber){ //when player wins
        displayMsg("Yay🎉🎉 You found the number");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess!==secretNumber){
        if(score>1){     //can use conditional operator
            // if(guess>secretNumber){
            //     document.querySelector('.message').textContent = "Why so high 🤦🏻‍♀️";
            // }else{
            //     if(score>1){document.querySelector('.message').textContent = "Why so low 😏👀";
            // }
            displayMsg(guess>secretNumber? "Why so high 🤦🏻‍♀️":"Why so low 😏👀");
            score--;
            document.querySelector('.score').textContent = score;
            
        }else{
            displayMsg("Oh, you lost the game💥");
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){     //anonymous handler function
    score = 20;
    secretNumber = Math.trunc(Math.random() *20) + 1;

    displayMsg("Start guessing again.....");
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})

