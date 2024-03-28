// Problems LeetCode
// Title: Roman to Integer
// Difficulty: Easy
// Url: https://leetcode.com/problems/roman-to-integer

const romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let index = 0; index < s.length; index += 1) {
    const current = roman[s[index]];
    const next = roman[s[index + 1]];
    current < next ? (result -= current) : (result += current);
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
