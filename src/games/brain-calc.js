import startGame from '../index.js';
import generateRandom from '../generateRandom.js';

const questionText = 'What is the result of the expression?';
const supportedOperations = ['+', '-', '*'];

const evaluateExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: throw new Error(`operation ${operation} is not supported`);
  }
};

const generateQuestion = () => {
  const number1 = generateRandom(0, 100);
  const number2 = generateRandom(0, 100);
  const operationIndex = generateRandom(0, 2);
  const correctAnswer = evaluateExpression(number1, number2, supportedOperations[operationIndex])
    .toString();
  const question = `${number1} ${supportedOperations[operationIndex]} ${number2}`;
  return [question, correctAnswer];
};

const brainCalc = () => {
  startGame(generateQuestion, questionText);
};

export default brainCalc;
