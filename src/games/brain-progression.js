import startGame from '../index.js';
import generateRandom from '../generateRandom.js';

const questionText = 'What number is missing in the progression?';
const progressionSize = 10;

const generateProgression = (begin, step, secretIndex) => {
  const generatedProgressionArray = [];
  for (let i = 0; i < progressionSize; i += 1) {
    generatedProgressionArray.push(begin + i * step);
  }
  generatedProgressionArray[secretIndex] = '..';
  return generatedProgressionArray.join(' ');
};

const generateQuestion = () => {
  const begin = generateRandom(0, 10);
  const step = generateRandom(1, 10);
  const secretIndex = generateRandom(0, progressionSize);
  const progression = generateProgression(begin, step, secretIndex);
  const correctAnswer = (begin + step * secretIndex).toString();
  return [progression, correctAnswer];
};

const brainProgression = () => {
  startGame(generateQuestion, questionText);
};

export default brainProgression;
