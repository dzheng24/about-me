'use strict';

var score = 0;

var answers = [];

var person = confirm('Confirm you are a real person');

answers.push(person);
console.log (person);

if (person) {
  alert('Thank you, have fun playing the game');
}
else alert ('Enjoy the page, robot');

//Question about Sport
var answerSport = prompt('Soccer is my favorite sport. Yes or no?');
answerSport = answerSport.toLowerCase();
if (answerSport.charAt(0)==='y'){
  console.log ('False');
  alert ('Nope, my favorite sport is skateboarding!');
}

if (answerSport.charAt(0)==='n'){
  console.log('Correct');
  alert ('You got it, skateboarding is my jam');
  score++;
}

answers.push(answerSport);

//Question about Food
var answerFood = prompt('I can eat Mexican food every day. Yes or no');
answerFood = answerFood.toLowerCase();
if (answerFood.charAt(0)==='y'){
  console.log ('Correct');
  alert ('Yes! I love Mexican food!');
  score++;
}

if (answerFood.charAt(0)==='n'){
  console.log('False');
  alert ('Nah, I actually can.');
}
answers.push(answerFood);

//Question about Music
var answerMusic = prompt('Drake is my favorite artist. Yes or no?');
answerMusic = answerMusic.toLowerCase();
if (answerMusic.charAt(0)==='y'){
  console.log ('Correct');
  alert ('Drake is my guy!');
  score++;
}

if (answerMusic.charAt(0)==='n'){
  console.log('Falset');
  alert ('Who doesn\'t like Drake?');
}
answers.push(answerMusic);

//Question about Place
var answerPlace = prompt('I have been to Brazil before. Yes or no?');
answerPlace = answerPlace.toLowerCase();
if (answerPlace.charAt(0)==='y'){
  console.log ('False');
  alert ('Nope, I\'ve always wanted to go there!');
}

if (answerPlace.charAt(0)==='n'){
  console.log('Correct');
  alert ('You got it, I\'d love to go there sometime');
  score++;
}
answers.push(answerPlace);

//Question about Candy
var answerCandy = prompt('My favorite candy is chocolate. Yes or no?');
answerCandy = answerCandy.toLowerCase();
if (answerCandy.charAt(0)==='y'){
  console.log ('False');
  alert ('Nope, my favorite candy is anything sour! Like Sour Patch Kids');
}

if (answerCandy.charAt(0)==='n'){
  console.log('Correct');
  alert ('Right on, my favorite is sour candies, like sour patch kids');
  score++;
}
answers.push(answerCandy);

//Question 6 "number of my shoes"

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
    console.log('Correct');
    break;
  }
}
if (guess !== number){
  console.log('False');
  alert('Sorry you didn\'t get it, I have 5 pairs of shoes.');
}

//Question 7 "states I've lived in before Washington"

for (var t=1; t<6; t++){
  var states = ['michigan','california','florida'];
  var guessSeven = prompt ('Guess what state I have lived in before Washington.');

  for (var a=0; a<states.length;a++){
    if (guessSeven.toLowerCase() === states[a]){
      console.log('Correct');
      alert('Yes! I have lived in michigan, california, and florida.');
      score++;
      t=7;
      break;
    }
  }
}

alert('You got a '+ score + ' out of 7 on this!');



