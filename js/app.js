'use strict';

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
}
answers.push(answerSport);

//Question about Food
var answerFood = prompt('I can eat Mexican food every day. Yes or no');
answerFood = answerFood.toLowerCase();
if (answerFood.charAt(0)==='y'){
  console.log ('Correct');
  alert ('Yes! I love Mexican food!');
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
}
answers.push(answerCandy);

