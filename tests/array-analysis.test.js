const arrayAnalysis = require('../modules/array-analysis');

test('it returns the average', () => {
  expect(arrayAnalysis([1, 2, 3]).average).toBe(2);
});

test('it returns the average', () => {
  expect(arrayAnalysis([1, 2, 3]).min).toBe(1);
});

test('it returns the average', () => {
  expect(arrayAnalysis([1, 2, 3]).max).toBe(3);
});

test('it returns the average', () => {
  expect(arrayAnalysis([1, 2, 3]).length).toBe(3);
});

test('zero array length', () => {
  expect(arrayAnalysis([]).length).toBe(0);
});

test('negative numbers', () => {
  const actual = arrayAnalysis([5, 2, -34, 12, 7, 125, 67, 0, -495, 13]);
  const expected = {
    average: -29.8,
    min: -495,
    max: 125,
    length: 10,
  };
  expect(actual).toEqual(expected);
});
