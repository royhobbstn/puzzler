// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

// Example 1:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
// Example 2:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
// Example 3:

// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

function insert(intervals, new_interval) {
  let merged = [];
  let i = 0;

  // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i][1] < new_interval[0]) {
    merged.push(intervals[i]);
    i += 1;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i][0] <= new_interval[1]) {
    new_interval[0] = Math.min(intervals[i][0], new_interval[0]);
    new_interval[1] = Math.max(intervals[i][1], new_interval[1]);
    i += 1;
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}

let result = insert(
  [
    [1, 3],
    [5, 7],
    [8, 12],
  ],
  [4, 6],
);
console.log(result);

result = insert(
  [
    [1, 3],
    [5, 7],
    [8, 12],
  ],
  [4, 10],
);
console.log(result);

result = insert(
  [
    [2, 3],
    [5, 7],
  ],
  [1, 4],
);
console.log(result);
