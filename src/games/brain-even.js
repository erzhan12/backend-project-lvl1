import play from '../index.js';

const generateQuestion = () => {
  const question = Math.round(Math.random() * 100);
  let correctAnswer = '';
  correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

const brainEven = () => {
  play('Answer "yes" if the number is even, otherwise answer "no".', generateQuestion);
};

export default brainEven;
