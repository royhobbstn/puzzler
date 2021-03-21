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
  { stage: 0, text: 'function merge(intervals_a, intervals_b) {' },
  { stage: 1, text: '  let result = [];' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 1, text: '  let j = 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (i < intervals_a.length && j < intervals_b.length) {' },
  { stage: 3, text: '    let a_overlaps_b =' },
  {
    stage: 3,
    text:
      '      intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;',
  },
  { stage: 0, text: '' },
  { stage: 4, text: '    let b_overlaps_a =' },
  {
    stage: 4,
    text:
      '      intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;',
  },
  { stage: 0, text: '' },
  { stage: 5, text: '    if (a_overlaps_b || b_overlaps_a) {' },
  { stage: 6, text: '      result.push(' },
  { stage: 6, text: '        new Interval(' },
  { stage: 6, text: '          Math.max(intervals_a[i].start, intervals_b[j].start),' },
  { stage: 6, text: '          Math.min(intervals_a[i].end, intervals_b[j].end),' },
  { stage: 6, text: '        ),' },
  { stage: 6, text: '      );' },
  { stage: 5, text: '    }' },
  { stage: 0, text: '' },
  { stage: 7, text: '    if (intervals_a[i].end < intervals_b[j].end) {' },
  { stage: 8, text: '      i += 1;' },
  { stage: 7, text: '    } else {' },
  { stage: 8, text: '      j += 1;' },
  { stage: 7, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 137,
  problemName: `Intervals Intersection`,
  problemText: `Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `mapInterval(merge(
        [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
        [new Interval(2, 3), new Interval(5, 7)],
      ));`,
      expected: JSON.stringify([
        [2, 3],
        [5, 6],
        [7, 7],
      ]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `mapInterval(merge(
            [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
            [new Interval(5, 10)],
          ));`,
      expected: JSON.stringify([[5, 7][(9, 10)]]),
    },
  ],
  setupCode: `
  class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  
function mapInterval(intervals) {
    return intervals.map(i => {
      return [i.start, i.end];
    });
  }
  `,
  source: [],
  tags: [MERGE_INTERVALS, ALGORITHM],
  solution,
};
