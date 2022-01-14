import readlineSync from 'readline-sync';
import play from '../index.js';

const getGcd = (num1, num2) => {
  let result = 1;
  for (let i = 2; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const questionGcd = () => {
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  console.log(`Question: ${num1} ${num2}`);
  const correctAnswer = getGcd(num1, num2).toString();
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};

const brainGcd = () => {
  play('Find the greatest common divisor of given numbers.', questionGcd);
};

export default brainGcd;
