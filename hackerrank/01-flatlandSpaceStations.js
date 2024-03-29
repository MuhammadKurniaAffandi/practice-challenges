// Problems HackerRank
// Title: flatland-space-stations
// Difficulty: Easy
// Url: https://www.hackerrank.com/challenges/flatland-space-stations

function flatlandSpaceStations(n, c) {
  let max = 0;
  let distance = 0;
  let distanceArray = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < c.length; j++) {
      distance = Math.abs(i - c[j]);
      if (j === 0) {
        max = distance;
      } else if (distance < max) {
        max = distance;
      }
    }
    distanceArray.push(max);
  }

  return Math.max(...distanceArray);
}

console.log(flatlandSpaceStations(5, [0, 4]));
