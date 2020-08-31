const encode = (char, shift) => {
  const code = char.charCodeAt(0);
  let newChar;

  if (code >= 97 && code <= 122) {
    newChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
  } else if (code >= 65 && code <= 90) {
    newChar = String.fromCharCode(((code - 65 + shift) % 26) + 65);
  } else {
    newChar = char;
  }

  return newChar;
};

const caesarCipher = (string, shift) => {
  const arr = string.split('');

  const encrypted = arr.map((char) => encode(char, shift)).join('');

  return encrypted;
};

module.exports = caesarCipher;
