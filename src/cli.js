import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const questionEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const num = Math.round(Math.random() * 100);
  console.log(`Question ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return { userAnswer, correctAnswer };
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
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const generateExpression = () => {
  const n1 = Math.round(Math.random() * 100);
  const n2 = Math.round(Math.random() * 100);
  const operandIndex = Math.floor(Math.random() * 3);
  const operands = ['+', '-', '*'];
  return `${n1} ${operands[operandIndex]} ${n2}`;
};

const questionCalc = () => {
  console.log('What is the result of the expression?');
  const expression = generateExpression();
  console.log(`Question ${expression}`);
  const correctAnswer = eval(expression).toString();
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};

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
  console.log('Find the greatest common divisor of given numbers.');
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  console.log(`Question ${num1} ${num2}`);
  const correctAnswer = getGcd(num1, num2).toString();
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};
// ----------------------------------------
const brainEven = () => {
  const name = greeting();
  questionary(name, questionEven);
};

const brainCalc = () => {
  const name = greeting();
  questionary(name, questionCalc);
};

const brainGcd = () => {
  const name = greeting();
  questionary(name, questionGcd);
};

export {
  greeting, brainEven, brainCalc, brainGcd,
};
