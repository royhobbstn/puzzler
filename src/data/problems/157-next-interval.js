import { HEAP_GENERIC } from '../code-imports/import-index.js';
import { ALGORITHM, HEAP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: '' },
  { stage: -1, text: '// Heap Class Provided' },
  { stage: -1, text: '' },
  { stage: -1, text: '// add(item: number) :void' },
  { stage: -1, text: '// peek() :number' },
  { stage: -1, text: '// poll() :number' },
  { stage: -1, text: '// remove(item: number) :void' },
  { stage: -1, text: '// length() :number' },
  { stage: -1, text: '' },
  { stage: -1, text: 'class Interval {' },
  { stage: -1, text: '  constructor(start, end) {' },
  { stage: -1, text: '    this.start = start;' },
  { stage: -1, text: '    this.end = end;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: -1, text: '' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_next_interval(intervals) {' },
  { stage: 1, text: '  const n = intervals.length;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  const maxStartHeap = new Heap((a, b) => a[0] >= b[0]);' },
  { stage: 3, text: '  const maxEndHeap = new Heap((a, b) => a[0] >= b[0]);' },
  { stage: 0, text: '' },
  { stage: 4, text: '  const result = Array(n).fill(0);' },
  { stage: 5, text: '  for (let endIndex = 0; endIndex < n; endIndex++) {' },
  { stage: 6, text: '    maxStartHeap.add([intervals[endIndex].start, endIndex]);' },
  { stage: 7, text: '    maxEndHeap.add([intervals[endIndex].end, endIndex]);' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  for (let i = 0; i < n; i++) {' },
  { stage: 9, text: '    const [topEnd, endIndex] = maxEndHeap.poll();' },
  { stage: 10, text: '    result[endIndex] = -1;' },
  { stage: 11, text: '    if (maxStartHeap.peek()[0] >= topEnd) {' },
  { stage: 12, text: '      let [topStart, startIndex] = maxStartHeap.poll();' },
  {
    stage: 13,
    text: '      while (maxStartHeap.length() > 0 && maxStartHeap.peek()[0] >= topEnd) {',
  },
  { stage: 14, text: '        [topStart, startIndex] = maxStartHeap.poll();' },
  { stage: 13, text: '      }' },
  { stage: 15, text: '      result[endIndex] = startIndex;' },
  { stage: 16, text: '      maxStartHeap.add([topStart, startIndex]);' },
  { stage: 11, text: '    }' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 17, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 157,
  problemName: `Next Interval`,
  problemText: `Given an array of intervals, find the next interval of each interval. In a list of intervals, for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.

  Write a function to return an array containing indices of the next interval of each input interval. If there is no next interval of a given interval, return -1. It is given that none of the intervals have the same start point.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_next_interval([new Interval(2, 3), new Interval(3, 4), new Interval(5, 6)]);`,
      expected: JSON.stringify([1, 2, -1]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_next_interval([new Interval(3, 4), new Interval(1, 5), new Interval(4, 6)]);`,
      expected: JSON.stringify([2, -1, -1]),
    },
  ],
  setupCode: `
  ${HEAP_GENERIC}
  class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  `,
  source: [],
  tags: [INTERMEDIATE, HEAP, ALGORITHM],
  solution,
};
