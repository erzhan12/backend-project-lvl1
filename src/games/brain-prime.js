import play from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateQuestion = () => {
  const question = Math.round(Math.random() * 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const brainPrime = () => {
  play('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestion);
};

export default brainPrime;
