// Problems LeetCode
// Title: Apple Redistribution into Boxes
// Difficulty: Easy
// Url: https://leetcode.com/problems/apple-redistribution-into-boxes

const minimumBoxes = (apple, capacity) => {
  let sumApple = apple.reduce((acc, curr) => acc + curr, 0);
  let sortCapacity = capacity.sort((a, b) => b - a);

  for (let i = 0; i < sortCapacity.length; i++) {
    sumApple -= sortCapacity[i];
    if (sumApple <= 0) {
      return i + 1;
    }
  }
};

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]));
