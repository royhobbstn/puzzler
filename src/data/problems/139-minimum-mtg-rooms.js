import { ALGORITHM, MERGE_INTERVALS } from '../constants.js';
import { HEAP_GENERIC } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Meeting {' },
  { stage: -1, text: '  constructor(start, end) {' },
  { stage: -1, text: '    this.start = start;' },
  { stage: -1, text: '    this.end = end;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: -1, text: '' },
  { stage: -1, text: 'class Heap {' },
  { stage: -1, text: '  constructor(comparisonFn) {' },
  { stage: -1, text: '  // comparisonFn is a function (a,b)' },
  { stage: -1, text: '  // which compares a, b and returns true or false' },
  { stage: -1, text: '  // based on whether a should come before b in the heap' },
  { stage: -1, text: '  // ex for a min-heap of integers:  ((a, b) => a < b)' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '  // length() --number of items in heap--' },
  { stage: -1, text: '  // peek() --look at top item in heap--' },
  { stage: -1, text: '  // poll() --remove and return top item in heap--' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function min_meeting_rooms(meetings) {' },
  { stage: -1, text: '  // sort the meetings by start time ascending' },
  { stage: 1, text: '  meetings.sort((a, b) => a.start - b.start);' },
  { stage: 2, text: '  let minRooms = 0;' },
  { stage: 0, text: '' },
  { stage: -3, text: '  // initialize a min-Heap that sorts by end time' },
  { stage: 3, text: '  let minHeap = new Heap((a, b) => a.end <= b.end);' },
  { stage: 0, text: '' },
  { stage: 4, text: '  for (let i = 0; i < meetings.length; i++) {' },
  { stage: 5, text: '    let currentMeeting = meetings[i];' },
  { stage: -6, text: '    // purge any meetings that have ended from the heap' },
  {
    stage: 6,
    text: '    while (minHeap.length() > 0 && currentMeeting.start >= minHeap.peek().end) {',
  },
  { stage: 7, text: '      minHeap.poll();' },
  { stage: 6, text: '    }' },
  { stage: 0, text: '' },
  { stage: 8, text: '    minHeap.add(currentMeeting);' },
  {
    stage: -9,
    text: '    // The number of overlapping meetings is equal to the number of items in the heap.',
  },
  {
    stage: -9,
    text: '    // Update minRooms if the current heap size is greater than on past iterations.',
  },
  { stage: 9, text: '    minRooms = Math.max(minRooms, minHeap.length());' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return minRooms;' },

  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 139,
  problemName: `Minimum Meeting Rooms`,
  problemText: `Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)]);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)]);`,
      expected: 1,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)]);`,
      expected: 2,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `min_meeting_rooms([
        new Meeting(4, 5),
        new Meeting(2, 3),
        new Meeting(2, 4),
        new Meeting(3, 5),
      ]);`,
      expected: 2,
    },
  ],
  setupCode: `
  ${HEAP_GENERIC}
  class Meeting {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/JQMAmrVPL7l'],
  tags: [MERGE_INTERVALS, ALGORITHM],
  solution,
};
