import { ALGORITHM, INTERMEDIATE, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function merge(intervals) {' },
  { stage: 1, text: '  intervals.sort((a, b) => a[0] - b[0]);' },
  { stage: 1, text: '  const result = [];' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let currentInterval = intervals[0];' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < intervals.length; i++) {' },
  { stage: 4, text: '    const thisInterval = intervals[i];' },
  { stage: 4, text: '    const nextInterval = intervals[i + 1];' },
  { stage: 5, text: '    if (nextInterval && thisInterval[1] >= nextInterval[0]) {' },
  { stage: 6, text: '      currentInterval = [currentInterval[0], nextInterval[1]];' },
  { stage: 5, text: '    } else {' },
  { stage: 7, text: '      result.push(currentInterval);' },
  { stage: 7, text: '      currentInterval = nextInterval;' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 8, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 76,
  problemName: `Solve Merge Intervals`,
  problemText: `Given an array of intervals where intervals[i] = [start-i, end-i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const intervals = [[0, 5],[11, 15],[4, 6],[8, 9],[1, 2],[12, 16],[2, 4]];`,
      evaluate: `merge(intervals);`,
      expected: JSON.stringify([
        [0, 6],
        [8, 9],
        [11, 16],
      ]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const intervals = [[1, 3],[2, 6],[8, 10],[15, 18]];`,
      evaluate: `merge(intervals);`,
      expected: JSON.stringify([
        [1, 6],
        [8, 10],
        [15, 18],
      ]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `const intervals = [[1, 4],[4, 5]];`,
      evaluate: `merge(intervals);`,
      expected: JSON.stringify([[1, 5]]),
    },
  ],
  setupCode: ``,
  tags: [INTERMEDIATE, GENERAL, ALGORITHM],
  solution,
};
