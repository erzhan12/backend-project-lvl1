#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { play } from '../src/cli.js';

const evalExpression = (n1, n2, op) => {
  if (op === '+') return n1 + n2;
  if (op === '-') return n1 - n2;
  if (op === '*') return n1 * n2;
  return '';
};

const generateExpression = () => {
  const n1 = Math.round(Math.random() * 100);
  const n2 = Math.round(Math.random() * 100);
  const operandIndex = Math.floor(Math.random() * 3);
  const operands = ['+', '-', '*'];
  const correctAnswer = evalExpression(n1, n2, operands[operandIndex]).toString();
  const expression = `${n1} ${operands[operandIndex]} ${n2}`;
  return { expression, correctAnswer };
};

const questionCalc = () => {
  const { expression, correctAnswer } = generateExpression();
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};

// const brainCalc = () => {
//   const name = greeting();
//   console.log('What is the result of the expression?');
//   questionary(name, questionCalc);
// };

// brainCalc();
play('What is the result of the expression?', questionCalc);
