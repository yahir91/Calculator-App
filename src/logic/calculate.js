import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
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
      next = operate(next, -1, 'X');
      break;
    case '%':
      if (next) {
        total = operate(next, 0, '%');
        next = null;
      }
      break;
    default:
      if (buttonName === '.' && next.includes('.')) {
        break;
      }
      next += buttonName;
  }

  return { next, total, operation };
};
export default calculate;
