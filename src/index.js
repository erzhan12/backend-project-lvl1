import readlineSync from 'readline-sync';
import greeting from './cli.js';

const question = (generateFunc) => {
  const generatedQuestion = generateFunc();
  console.log(`Question: ${generatedQuestion.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer: generatedQuestion.correctAnswer };
};

const questionary = (name, generateFunc) => {
  let rightAnswerRow = 0;
  let questionResult = null;
  while (rightAnswerRow < 3) {
    questionResult = question(generateFunc);
    if (questionResult.userAnswer === questionResult.correctAnswer) {
      rightAnswerRow += 1;
      console.log('Correct!');
    } else {
      rightAnswerRow = 0;
      console.log(`'${questionResult.userAnswer}' is wrong answer ;(. Correct answer was '${questionResult.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const play = (questionText, generateFunc) => {
  const name = greeting();
  console.log(questionText);
  questionary(name, generateFunc);
};

export default play;
