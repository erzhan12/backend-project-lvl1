#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, questionary } from '../src/cli.js';

const generateExpression = () => {
  const n1 = Math.round(Math.random() * 100);
  const n2 = Math.round(Math.random() * 100);
  const operandIndex = Math.floor(Math.random() * 3);
  const operands = ['+', '-', '*'];
  return `${n1} ${operands[operandIndex]} ${n2}`;
};

const questionCalc = () => {
  const expression = generateExpression();
  console.log(`Question ${expression}`);
  const correctAnswer = eval(expression).toString();
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};

const brainCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  questionary(name, questionCalc);
};

brainCalc();
