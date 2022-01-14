import play from '../index.js';

const evalExpression = (n1, n2, op) => {
  if (op === '+') return n1 + n2;
  if (op === '-') return n1 - n2;
  if (op === '*') return n1 * n2;
  return '';
};

const generateQuestion = () => {
  const n1 = Math.round(Math.random() * 100);
  const n2 = Math.round(Math.random() * 100);
  const operandIndex = Math.floor(Math.random() * 3);
  const operands = ['+', '-', '*'];
  const correctAnswer = evalExpression(n1, n2, operands[operandIndex]).toString();
  const question = `${n1} ${operands[operandIndex]} ${n2}`;
  return { question, correctAnswer };
};

const brainCalc = () => {
  play('What is the result of the expression?', generateQuestion);
};

export default brainCalc;
