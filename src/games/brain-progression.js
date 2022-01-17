import play from '../index.js';
import generateRandom from '../generateRandom.js';

const questionText = 'What number is missing in the progression?';
const progressionSize = 10;

const generateProgression = (begin, step, n, secretIndex) => {
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
  return [question.trim(), correctAnswer];
};

const generateQuestion = () => {
  const begin = generateRandom(10);
  const step = generateRandom(10) + 1;
  const n = progressionSize;
  const secretIndex = generateRandom(n);
  return generateProgression(begin, step, n, secretIndex);
};

const brainProgression = () => {
  play(questionText, generateQuestion);
};

export default brainProgression;
