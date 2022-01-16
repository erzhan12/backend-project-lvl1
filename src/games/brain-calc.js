import play from '../index.js';
import generateRandom from '../generateRandom.js';

const questionText = 'What is the result of the expression?';

const evaluateExpression = (n1, n2, op) => {
  switch (op) {
    case '+': return n1 + n2;
    case '-': return n1 - n2;
    case '*': return n1 * n2;
    default: return '';
  }
};

const generateQuestion = () => {
  const n1 = generateRandom(100);
  const n2 = generateRandom(100);
  const operandIndex = generateRandom(3);
  const operands = ['+', '-', '*'];
  const correctAnswer = evaluateExpression(n1, n2, operands[operandIndex]).toString();
  const question = `${n1} ${operands[operandIndex]} ${n2}`;
  return [question, correctAnswer];
};

const brainCalc = () => {
  play(questionText, generateQuestion);
};

export default brainCalc;
