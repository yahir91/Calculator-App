import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = new Big(numberOne);
  const secondNumber = numberTwo;

  switch (operation) {
    case '+':
      return firstNumber.plus(secondNumber);
    case '-':
      return firstNumber.minus(secondNumber);
    case 'x':
      return firstNumber.times(secondNumber);
    case '÷':
      if (secondNumber === '0') {
        return '0';
      }
      return firstNumber.div(secondNumber);
    case '%':
      return firstNumber.times(0.01);
    case '+/-':
      return firstNumber.times(-1);
    default:
      break;
  }

  return firstNumber;
};

export default operate;
