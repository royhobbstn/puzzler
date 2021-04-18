//

function merge(intervals) {
  const ret = [];

  // sort intervvals by start value
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  // create a 'draft' interval initialized to first interval in array
  let last = intervals[0];

  // start loop at second item in array
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];

    // if end value in last interval is greater than first value in current interval
    // then last and current intervals can be merged
    if (last[1] >= current[0]) {
      // merge by taking the greater of the end values in each interval
      // because last interval could completely cover current interval
      last = [last[0], Math.max(last[1], current[1])];
    } else {
      // otherwise, push last interval to return array
      // and iniatilize a new 'draft' interval from the current interval
      ret.push(last);
      last = current;
    }
  }

  // always push the draft interval when loop has completed
  // unless there were no items in array to begin with
  if (last) {
    ret.push(last);
  }

  return ret;
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

const intervals4 = [
  [1, 6],
  [4, 5],
];
console.log(merge(intervals4)); // [[1,6]]
