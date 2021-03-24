const buttonClass = name => {
  const button = name;

  switch (button) {
    case '+':
      return 'operateButton';
    case '-':
      return 'operateButton';
    case 'x':
      return 'operateButton';
    case '/':
      return 'operateButton';
    case '=':
      return 'operateButton';
    case '0':
      return 'oButton';
    default:
      return 'numbButton';
  }
};

export default buttonClass;
