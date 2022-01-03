#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, questionary } from '../src/cli.js';

const generateProgression = () => {
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
  return { question, correctAnswer };
};

const questionProgression = () => {
  console.log('What number is missing in the progression?');
  const progression = generateProgression();
  console.log(`Question:${progression.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer: progression.correctAnswer };
};

const brainProgression = () => {
  const name = greeting();
  questionary(name, questionProgression);
};

brainProgression();
