import greeting from './cli.js';

const questionary = (name, questionFunc) => {
  let rightAnswerRow = 0;
  let questionResult = null;
  while (rightAnswerRow < 3) {
    questionResult = questionFunc();
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

const play = (question, game) => {
  const name = greeting();
  console.log(question);
  questionary(name, game);
};

export default play;
