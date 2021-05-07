import { cons } from '@hexlet/pairs';
import engine, { maxAttempts, minNumber, maxNumber } from '../index.js';
import { getRandomInt } from '../my-math.js';

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < maxAttempts; i += 1) {
    // create the array of the questions & answers
    const number1 = getRandomInt(minNumber, maxNumber);
    const number2 = getRandomInt(minNumber, maxNumber);
    const operator = getRandomInt(0, 2); // 0: '+', 1: '-'

    if (operator === 0) {
      questionsAndAnswers.push(cons(`${number1} + ${number2}`, String(number1 + number2)));
    } else {
      questionsAndAnswers.push(cons(`${number1} - ${number2}`, String(number1 - number2)));
    }
  }

  engine(
    'What is the result of the expression?',
    questionsAndAnswers,
  );
};
