import play from '../index.js';
import generateRandom from '../generateRandom.js';

const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateQuestion = () => {
  const question = generateRandom(100);
  let correctAnswer = '';
  correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  play(questionText, generateQuestion);
};

export default brainEven;
