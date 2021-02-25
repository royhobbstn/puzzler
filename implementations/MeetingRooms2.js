function minMeetingRooms(intervals) {
  if (!intervals.length) {
    return 0;
  }

  const starts = [];
  const ends = [];

  for (let i = 0; i < intervals.length; i++) {
    starts[i] = intervals[i][0];
    ends[i] = intervals[i][1];
  }

  const numericalSort = (a, b) => {
    return a - b;
  };

  starts.sort(numericalSort);
  ends.sort(numericalSort);

  // The two pointers in the algorithm: e_ptr and s_ptr.
  let startPointer = 0;
  let endPointer = 0;

  // Variables to keep track of maximum number of rooms used.
  let usedRooms = 0;

  // Iterate over intervals.
  while (startPointer < intervals.length) {
    // If there is a meeting that has ended by the time the meeting at `start_pointer` starts
    if (starts[startPointer] >= ends[endPointer]) {
      usedRooms -= 1;
      endPointer += 1;
    }

    // We do this irrespective of whether a room frees up or not.
    // If a room got free, then this used_rooms += 1 wouldn't have any effect. used_rooms would
    // remain the same in that case. If no room was free, then this would increase used_rooms
    usedRooms += 1;
    startPointer += 1;
  }

  return usedRooms;
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
); // 2

console.log(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ]),
); // 1

console.log(
  minMeetingRooms([
    [1, 10],
    [2, 7],
    [3, 19],
    [8, 12],
    [10, 20],
    [11, 30],
  ]),
); // 4
