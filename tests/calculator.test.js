import calculator from '../modules/calculator';

test('checks that the calculator object contains the basic operations', () => {
  expect(calculator.add(2, 8)).toBe(10);
  expect(calculator.subtract(2, 8)).toBe(-6);
  expect(calculator.divide(2, 8)).toBe(0.25);
  expect(calculator.multiply(2, 8)).toBe(16);
});

test('no zero division', () => {
  expect(calculator.divide(2, 0)).toBe('Cannot divide by zero');
});
