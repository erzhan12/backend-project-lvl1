import generateRandom from '../generateRandom.js';
import play from '../index.js';

const questionText = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let result = 1;
  for (let i = 2; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const generateQuestion = () => {
  const num1 = generateRandom(100) + 1;
  const num2 = generateRandom(100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

const brainGcd = () => {
  play(questionText, generateQuestion);
};

export default brainGcd;
