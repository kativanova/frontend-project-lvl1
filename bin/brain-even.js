#!/usr/bin/env node
import readlineSync from 'readline-sync';

const maxAttempts = 3;
const minNumber = 0;
const maxNumber = 100;

const isEven = (num) => num % 2 === 0;

// Максимум не включается, минимум включается
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let allCorrect = true;
for (let i = 0; i < maxAttempts; i += 1) {
  const num = getRandomInt(minNumber, maxNumber);
  // const correctAnswer = isEven(num);

  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
    allCorrect = false;
    break;
  }
}

if (allCorrect) {
  console.log(`Congratulations, ${name}!`);
}
