import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+':
    case '-':
    case '/':
    case 'x':
    case '=':
      if (total && next && operation) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
        if (buttonName === '=') {
          operation = null;
        } else {
          operation = buttonName;
        }
      } else if (total && !next) {
        operation = buttonName;
      } else {
        total = next;
        next = null;
        operation = buttonName;
      }
      break;
    case '+/-':
      next = operate(next, -1, '+/-');
      break;
    case '%':
      if (next) {
        total = operate(next, 0, '%');
        next = null;
      }
      break;
    case 'AC':
      total = null;
      next = '0';
      operation = null;
      break;
    default:
      if (!next || next === '0') {
        next = buttonName;
      } else if (buttonName === '.' && next.includes('.')) {
        break;
      } else {
        next += buttonName;
      }
  }

  return { next, total, operation };
};
export default calculate;
