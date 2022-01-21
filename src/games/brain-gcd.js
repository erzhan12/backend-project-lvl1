import generateRandom from '../generateRandom.js';
import startGame from '../index.js';

const questionText = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let result = 1;
  const minimum = Math.min(number1, number2)
  for (let i = 2; i <= minimum; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const generateQuestion = () => {
  const number1 = generateRandom(1, 100);
  const number2 = generateRandom(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();
  return [question, correctAnswer];
};

const brainGcd = () => {
  startGame(generateQuestion, questionText);
};

export default brainGcd;
