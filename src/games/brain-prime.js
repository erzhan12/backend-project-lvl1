import generateRandom from '../generateRandom.js';
import startGame from '../index.js';

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const upperLimit = Math.sqrt(number);
  for (let i = 2; i <= upperLimit; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const generateQuestion = () => {
  const question = generateRandom(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => {
  startGame(generateQuestion, questionText);
};

export default brainPrime;
