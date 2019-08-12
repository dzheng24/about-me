'use strict';

var score = 0;


var person = confirm('Confirm you are a real person');
console.log (' user Is Real');


if (person) {
  alert('Thank you, have fun playing the game');
}
else alert ('Enjoy the page, robot');

// //Question about Sport
function questionAboutSport() {
  var answerSport = prompt('Soccer is my favorite sport. Yes or no?');
  answerSport = answerSport.toLowerCase();
  if (answerSport.charAt(0)==='y'){
    console.log ('question about sport: false');
    alert ('Nope, my favorite sport is skateboarding!');
  }

  if (answerSport.charAt(0)==='n'){
    console.log('question about sport: correct');
    alert ('You got it, skateboarding is my jam');
    score++;
  }
}
questionAboutSport();

// // Question about Food
function questionAboutFood() { 
  var answerFood = prompt('I can eat Mexican food every day. Yes or no');
  answerFood = answerFood.toLowerCase();
  if (answerFood.charAt(0)==='y'){
    console.log ('question about food: correct');
    alert ('Yes! I love Mexican food!');
    score++;
  }

  if (answerFood.charAt(0)==='n'){
    console.log('question about food: false');
    alert ('Nah, I actually can.');
  }
}
questionAboutFood();

// // Question about Music
function questionAboutMusic(){
  var answerMusic = prompt('Drake is my favorite artist. Yes or no?');
  answerMusic = answerMusic.toLowerCase();
  if (answerMusic.charAt(0)==='y'){
    console.log ('question about music: correct');
    alert ('Drake is my guy!');
    score++;
  }

  if (answerMusic.charAt(0)==='n'){
    console.log('question about music: false');
    alert ('Who doesn\'t like Drake?');
  }
}
questionAboutMusic();

// // Question about Place
function questionPlace() {
  var answerPlace = prompt('I have been to Brazil before. Yes or no?');
  answerPlace = answerPlace.toLowerCase();
  if (answerPlace.charAt(0)==='y'){
    console.log ('question about place: false');
    alert ('Nope, I\'ve always wanted to go there!');
  }

  if (answerPlace.charAt(0)==='n'){
    console.log('question about place: correct');
    alert ('You got it, I\'d love to go there sometime');
    score++;
  }
}
questionPlace();

// //Question about Candy
function questionCandy() { 
  var answerCandy = prompt('My favorite candy is chocolate. Yes or no?');
  answerCandy = answerCandy.toLowerCase();
  if (answerCandy.charAt(0)==='y'){
    console.log ('question about candy: false');
    alert ('Nope, my favorite candy is anything sour! Like Sour Patch Kids');
  }

  if (answerCandy.charAt(0)==='n'){
    console.log('question about candy: correct');
    alert ('Right on, my favorite is sour candies, like sour patch kids');
    score++;
  }
}
questionCandy();

//Question 6 "number of my shoes"

function shoes() {
  var guessesTaken = 0;
  while (guessesTaken<4){
    guessesTaken = guessesTaken + 1;
    var number = 5;
    var guess = prompt('Guess how many pairs of shoes I have!');
    guess = Number(guess);
    if (guess < number){
      alert('Your guess is too low');
    }
    if (guess > number){
      alert('Your guess is too high');
    }
    if (guess === number){
      score++;
      alert('Wow! You got it!');
      console.log('question about shoes: correct');
      break;
    }
  }
  if (guess !== number){
    console.log('questions about shoes: false');
    alert('Sorry you didn\'t get it, I have 5 pairs of shoes.');
  }
}
shoes();

//Question 7 "states I've lived in before Washington"
var states = ['michigan','california','florida'];
var statesGuess = false;
var statesTries = 1;

function questionsStates () {
  while( statesTries <= 7 && statesGuess === false ) {
    var guessSeven = prompt ('Guess what state I have lived in before Washington.');
    for ( var i=0 ; i < states.length; i++) {
      if (guessSeven.toLowerCase() === states[i]) {
        alert('yes i have lived in Michigan, Califorina, and Florida');
        score++;
        console.log('question 7 correct');
        statesGuess = true;
      }
    }
    if (! statesGuess){
      alert('sorry you got it wrong');
      console.log('question 7: wrong');
    }
    statesTries++;
  }
}
questionsStates();

alert('You got a '+ score + ' out of 7 on this! Thanks for playing!');



