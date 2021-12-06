import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const question = () => {
  const num = Math.round(Math.random() * 100);
  console.log(`Question ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer !== 'yes')) {
    return true;
  }
  return false;
};

const even = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswerRow = 0;
  while (rightAnswerRow < 3) {
    if (question()) {
      rightAnswerRow += 1;
    } else {
      rightAnswerRow = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const brainEven = () => {
  const name = greeting();
  even(name);
};

export { greeting, brainEven };
