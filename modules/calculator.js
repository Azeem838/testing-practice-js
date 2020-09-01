const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => (a / b === Infinity ? 'Cannot divide by zero' : a / b),
  multiply: (a, b) => a * b,
};

export default calculator;
