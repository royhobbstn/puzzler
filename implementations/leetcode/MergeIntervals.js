function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];

  let currentInterval = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    const thisInterval = intervals[i];
    const nextInterval = intervals[i + 1];
    if (nextInterval && thisInterval[1] >= nextInterval[0]) {
      currentInterval = [currentInterval[0], nextInterval[1]];
    } else {
      result.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  return result;
}

const intervals = [
  [0, 5],
  [11, 15],
  [4, 6],
  [8, 9],
  [1, 2],
  [12, 16],
  [2, 4],
];
console.log(merge(intervals)); // [[0,6],[8,9],[11,16]]

const intervals2 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals2)); // [[1,6],[8,10],[15,18]]

const intervals3 = [
  [1, 4],
  [4, 5],
];
console.log(merge(intervals3)); // [[1,5]]
