#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, questionary } from '../src/cli.js';

const getGcd = (num1, num2) => {
  let result = 1;
  for (let i = 2; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const questionGcd = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  console.log(`Question: ${num1} ${num2}`);
  const correctAnswer = getGcd(num1, num2).toString();
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};

const brainGcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  questionary(name, questionGcd);
};

brainGcd();
