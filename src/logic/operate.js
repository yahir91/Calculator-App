import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = numberTwo;

  switch (operation) {
    case '+':
      return firstNumber.plus(secondNumber).toString();
    case '-':
      return firstNumber.minus(secondNumber).toString();
    case 'x':
      return firstNumber.times(secondNumber).toString();
    case '/':
      if (secondNumber === '0') {
        return '0';
      }
      return firstNumber.div(secondNumber).toString();
    case '%':
      return firstNumber.times(0.01).toString();
    case '+/-':
      return firstNumber.times(-1).toString();
    default:
      break;
  }

  return firstNumber;
};

export default operate;
