import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

export const maxAttempts = 3;

export const minNumber = 0;
export const maxNumber = 100;

export default (rules, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rules);

  let allCorrect = true;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of questionsAndAnswers) {
    console.log(`Question: ${car(item)}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(item);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      allCorrect = false;
      break;
    }
  }

  if (allCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};
