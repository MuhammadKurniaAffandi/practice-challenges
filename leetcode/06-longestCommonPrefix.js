// Problems LeetCode
// Title: Longest Common Prefix
// Difficulty: Easy
// Url: https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs) => {
  return strs.reduce((acc, str) => {
    let i = 0;
    while (acc[i] && str[i] && acc[i] === str[i]) i++;
    return acc.slice(0, i);
  }, strs[0] || "");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
