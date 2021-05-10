import { cons } from '@hexlet/pairs';
import engine, { maxAttempts, minNumber, maxNumber } from '../index.js';
import { getRandomInt } from '../my-math.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < maxAttempts; i += 1) {
    const num = getRandomInt(minNumber, maxNumber);
    questionsAndAnswers.push(cons(num, isPrime(num) ? 'yes' : 'no'));
  }
  engine('Answer "yes" if given number is prime. Otherwise answer "no".', questionsAndAnswers);
};
