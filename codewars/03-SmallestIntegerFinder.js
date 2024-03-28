// Problems Code Wars
// Title: Find the smallest integer in the array
// Difficulty: 8Kyu
// Url: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

const SmallestIntegerFinder = (args) => {
  // Cara 1
  // return Math.min(...args);

  // cara 2
  return args.sort((a, b) => a - b)[0];
};

console.log(SmallestIntegerFinder([34, 15, 88, 2]));
