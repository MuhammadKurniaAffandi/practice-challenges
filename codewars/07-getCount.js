// Problems Code Wars
// Title: Vowel Count
// Difficulty: 7Kyu
// Url: https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  const vocal = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < vocal.length; i++) {
    for (j = 0; j < str.length; j++) {
      if (vocal[i] === str[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(getCount("abracadabra"));
