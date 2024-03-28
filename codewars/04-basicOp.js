// Problems Code Wars
// Title: Basic Mathematical Operations
// Difficulty: 8Kyu
// Url: https://www.codewars.com/kata/57356c55867b9b7a60000bd7

const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;

    default:
      break;
  }
};

console.log(basicOp("+", 4, 7));
