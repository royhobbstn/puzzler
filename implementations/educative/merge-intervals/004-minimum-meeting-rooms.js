// Minimum Meeting Rooms

// Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.
import Heap from '../../data-structures/Heap.js';

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function min_meeting_rooms(meetings) {
  // sort the meetings by start time
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0;
  let minHeap = new Heap((a, b) => a.end <= b.end);
  for (let i = 0; i < meetings.length; i++) {
    // remove all the meetings that have ended
    while (minHeap.length() > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.poll();
    }
    // add the current meeting into min_heap
    minHeap.add(meetings[i]);
    // all active meetings are in the min_heap, so we need rooms for all of them.
    minRooms = Math.max(minRooms, minHeap.length());
  }
  return minRooms;
}

console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`,
);
// 2;

console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`,
);
// 1;

console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`,
);
// 2;

console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([
      new Meeting(4, 5),
      new Meeting(2, 3),
      new Meeting(2, 4),
      new Meeting(3, 5),
    ])}`,
);
// 2;
