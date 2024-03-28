// Problems Code Wars
// Title: Grasshopper - Summation
// Difficulty: 8Kyu
// Url: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

const summation = (num) => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }

  return result;
};

console.log(summation(8));
