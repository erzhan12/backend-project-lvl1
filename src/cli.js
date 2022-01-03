import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

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

export {
  greeting, questionary,
};
