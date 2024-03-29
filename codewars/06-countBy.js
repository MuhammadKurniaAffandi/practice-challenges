// Problems Code Wars
// Title: Count by X
// Difficulty: 8Kyu
// Url: https://www.codewars.com/kata/5513795bd3fafb56c200049e

const countBy = (x, n) => {
  const result = [];
  for (i = 1; i <= n; i++) {
    result.push(i * x);
  }

  return result;
};

console.log(countBy(1, 10));
