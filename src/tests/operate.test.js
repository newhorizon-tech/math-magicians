import operate from '../logic/operate';

describe('Addition', () => {
  test('adds 1 + 2 to equal 3', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });

  test('adds 100 + 150 to equal 350', () => {
    const result = operate(100, 250, '+');
    expect(result).toBe('350');
  });

  test('adds -50 + 150 to equal 100', () => {
    const result = operate(-50, 150, '+');
    expect(result).toBe('100');
  });
});
