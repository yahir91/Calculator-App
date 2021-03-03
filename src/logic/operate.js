import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case 'X':
      return firstNumber * secondNumber;
    case '÷':
      if (secondNumber === '0') {
        return '0';
      }
      return firstNumber / secondNumber;
    case '%':
      return firstNumber * Big(0.01);
    case '+/-':
      return firstNumber * Big(-1);
    default:
      break;
  }

  return firstNumber;
};

export default operate;
