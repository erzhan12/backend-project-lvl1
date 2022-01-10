#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { play } from '../src/cli.js';

const questionEven = () => {
  const num = Math.round(Math.random() * 100);
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return { userAnswer, correctAnswer };
};

// const brainEven = () => {
//   const name = greeting();
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   questionary(name, questionEven);
// };

// brainEven();
play('Answer "yes" if the number is even, otherwise answer "no".', questionEven);
