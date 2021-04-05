import buttonClass from '../logic/buttonClass';

describe('Change the correct class name', () => {
  test('create operate button class', () => {
    const result = buttonClass('+');
    expect(result).toEqual('operateButton');
  });

  test('Times(X) operation', () => {
    const result = buttonClass('0');
    expect(result).toEqual('oButton');
  });

  test('Minus(-) operation', () => {
    const result = buttonClass('5');
    expect(result).toEqual('numbButton');
  });
});
