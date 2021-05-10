import { cons } from '@hexlet/pairs';
import engine, { maxAttempts, minNumber, maxNumber } from '../index.js';
import { getRandomInt } from '../my-math.js';

const lengthOfProgression = 10;

const getProgressionString = (first, step, missingElement) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === missingElement) {
      progression.push('..');
    } else {
      progression.push(first + step * i);
    }
  }
  return progression.join(' ');
};

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < maxAttempts; i += 1) {
    const first = getRandomInt(minNumber, maxNumber);
    const step = getRandomInt(1, 10);
    const missingElement = getRandomInt(0, 10);
    questionsAndAnswers.push(cons(
      (getProgressionString(first, step, missingElement)),
      `${first + missingElement * step}`,
    ));
  }
  engine('What number is missing in the progression?', questionsAndAnswers);
};
