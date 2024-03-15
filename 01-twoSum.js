// Problems LeetCode
// Title: Two Sum
// Difficulty: Easy
// Url: https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  let index = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index.push(i);
        index.push(j);
      }
    }
  }

  return index;
};

console.log(twoSum([2, 7, 11, 15], 9));
