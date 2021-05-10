import { cons } from '@hexlet/pairs';
import engine, { maxAttempts, minNumber, maxNumber } from '../index.js';
import { getRandomInt } from '../my-math.js';

const getGCD = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return getGCD(num2, num1 % num2);
};

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < maxAttempts; i += 1) {
    const number1 = getRandomInt(minNumber, maxNumber);
    const number2 = getRandomInt(minNumber, maxNumber);
    questionsAndAnswers.push(cons(`${number1} ${number2}`, `${getGCD(number1, number2)}`));
  }

  engine('Find the greatest common divisor of given numbers.', questionsAndAnswers);
};
