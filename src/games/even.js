import { cons } from '@hexlet/pairs';
import engine, { maxAttempts, minNumber, maxNumber } from '../index.js';
import { isEven, getRandomInt } from '../my-math.js';

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < maxAttempts; i += 1) {
    // create the array of the questions & answers
    const number = getRandomInt(minNumber, maxNumber);
    const pair = cons(number, isEven(number) ? 'yes' : 'no');
    questionsAndAnswers.push(pair);
  }

  engine(
    'Answer "yes" if the number is even, otherwise answer "no".',
    questionsAndAnswers,
  );
};
