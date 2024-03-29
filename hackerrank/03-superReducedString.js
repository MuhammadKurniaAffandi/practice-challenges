// Problems HackerRank
// Title: reduced-string
// Difficulty: Easy
// Url: https://www.hackerrank.com/challenges/reduced-string

function superReducedString(s) {
  // Write your code here

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      i++;
    } else {
      result += s[i];
    }
  }

  if (result.length === 0) {
    return "Empty String";
  }

  if (result.length === s.length) {
    return result;
  }

  return superReducedString(result);
}

console.log(superReducedString("aaabccddd"));
