import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startGame = (generateFunc, questionText) => {
  const name = greeting();
  console.log(questionText);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateFunc();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const play = (questionText, generateFunc) => {
  startGame(generateFunc, questionText);
};

export default play;
