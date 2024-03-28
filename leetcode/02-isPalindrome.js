// Problems LeetCode
// Title: Palindrome Number
// Difficulty: Easy
// Url: https://leetcode.com/problems/palindrome-number

const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  const str = x.toString();
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome(10));
