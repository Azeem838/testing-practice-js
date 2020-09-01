const average = (arr) => {
  let total = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total / arr.length;
};

const arrayAnalysis = (arr) => ({
  average: average(arr),
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});

module.exports = arrayAnalysis;
