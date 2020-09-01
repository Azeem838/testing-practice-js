import { capitalize, reverseString } from '../modules/strings';

test('takes a string and returns that string with the first character capitalized.', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('takes a string and returns it reversed', () => {
  expect(reverseString('allo')).toBe('olla');
});
