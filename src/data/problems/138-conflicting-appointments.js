import { ALGORITHM, MERGE_INTERVALS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Interval {' },
  { stage: -1, text: '  constructor(start, end) {' },
  { stage: -1, text: '    this.start = start;' },
  { stage: -1, text: '    this.end = end;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function can_attend_all_appointments(intervals) {' },
  { stage: -1, text: '  // order intervals by start time, ascending order' },
  { stage: 1, text: '  intervals.sort((a, b) => a.start - b.start);' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 1; i < intervals.length; i++) {' },
  { stage: -3, text: '    // if the start of the current meeting comes before the end' },
  { stage: -3, text: '    // of the last meeting, then the appointments conflict' },
  { stage: 3, text: '    if (intervals[i].start < intervals[i - 1].end) {' },
  { stage: 4, text: '      return false;' },
  { stage: 3, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 5, text: '  return true;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 138,
  problemName: `Conflicting Appointments`,
  problemText: `Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `can_attend_all_appointments([
        new Interval(1, 4),
        new Interval(2, 5),
        new Interval(7, 9),
      ]);`,
      expected: false,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `can_attend_all_appointments([
        new Interval(6, 7),
        new Interval(2, 4),
        new Interval(8, 12),
      ]);`,
      expected: true,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `can_attend_all_appointments([
        new Interval(4, 5),
        new Interval(2, 3),
        new Interval(3, 6),
      ]);`,
      expected: false,
    },
  ],
  setupCode: `class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG'],
  tags: [MERGE_INTERVALS, ALGORITHM],
  solution,
};
