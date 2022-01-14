import readlineSync from 'readline-sync';
import play from '../index.js';

const isPrime = (num) => {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const number = Math.round(Math.random() * 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { number, correctAnswer };
};

const questionPrime = () => {
  const question = generateQuestion();
  console.log(`Question: ${question.number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer: question.correctAnswer };
};

const brainPrime = () => {
  play('Answer "yes" if given number is prime. Otherwise answer "no".', questionPrime);
};

export default brainPrime;
