export const isEven = (num) => num % 2 === 0;

// Максимум не включается, минимум включается
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
