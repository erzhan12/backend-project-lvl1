import play from '../index.js';

const generateQuestion = () => {
  const begin = Math.round(Math.random() * 10);
  const step = Math.ceil(Math.random() * 10);
  const n = 10;
  const secretIndex = Math.floor(Math.random() * n);
  let question = '';
  let correctAnswer = '';
  let num = begin;
  for (let i = 0; i < n; i += 1) {
    num += step;
    if (i === secretIndex) {
      question = `${question} ..`;
      correctAnswer = num.toString();
    } else {
      question = `${question} ${num}`;
    }
  }
  question = question.trim();
  return { question, correctAnswer };
};

const brainProgression = () => {
  play('What number is missing in the progression?', generateQuestion);
};

export default brainProgression;
