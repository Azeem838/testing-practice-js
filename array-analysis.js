const average = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

const arrayAnalysis = (arr) => {
  return {
    average: average(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

module.exports = arrayAnalysis;
