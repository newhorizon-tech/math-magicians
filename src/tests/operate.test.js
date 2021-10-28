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

describe('Subtraction', () => {
  test('subtract 100-25', () => {
    const result = operate(100, 25, '-');
    expect(result).toBe('75');
  });

  test('subtract 100-(-25)', () => {
    const result = operate(100, -25, '-');
    expect(result).toBe('125');
  });

  test('subtract -100-25', () => {
    const result = operate(-100, 25, '-');
    expect(result).toBe('-125');
  });
});

describe('Multiplication', () => {
  test('multiply 6x7', () => {
    const result = operate(6, 7, 'x');
    expect(result).toBe('42');
  });

  test('multiply -6x7', () => {
    const result = operate(-6, 7, 'x');
    expect(result).toBe('-42');
  });

  test('multiply -6x-7', () => {
    const result = operate(-6, -7, 'x');
    expect(result).toBe('42');
  });
});

describe('Division', () => {
  test('Divide 100/5', () => {
    const result = operate(100, 5, '÷');
    expect(result).toBe('20');
  });

  test('Divide 0/5', () => {
    const result = operate(0, 5, '÷');
    expect(result).toBe('0');
  });

  test('Divide 5/0', () => {
    const result = operate(5, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
});

describe('Modulus', () => {
  test('Modulus 11%3', () => {
    const result = operate(11, 3, '%');
    expect(result).toBe('2');
  });

  test('Modulus 9%2', () => {
    const result = operate(9, 2, '%');
    expect(result).toBe('1');
  });

  test('Modulus 47%7', () => {
    const result = operate(47, 7, '%');
    expect(result).toBe('5');
  });
});
