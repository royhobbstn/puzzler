import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function insert(intervals, new_interval) {' },
  { stage: 1, text: '  let merged = [];' },
  { stage: 1, text: '  let i = 0;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (i < intervals.length && intervals[i][1] < new_interval[0]) {' },
  { stage: 3, text: '    merged.push(intervals[i]);' },
  { stage: 3, text: '    i += 1;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  while (i < intervals.length && intervals[i][0] <= new_interval[1]) {' },
  { stage: 5, text: '    new_interval[0] = Math.min(intervals[i][0], new_interval[0]);' },
  { stage: 6, text: '    new_interval[1] = Math.max(intervals[i][1], new_interval[1]);' },
  { stage: 6, text: '    i += 1;' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  merged.push(new_interval);' },
  { stage: 0, text: '' },
  { stage: 8, text: '  while (i < intervals.length) {' },
  { stage: 9, text: '    merged.push(intervals[i]);' },
  { stage: 9, text: '    i += 1;' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return merged;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 108,
  problemName: `Insert Intervals`,
  problemText: `Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `insert([[1, 3],[5, 7],[8, 12]],[4, 6]);`,
      expected: JSON.stringify([
        [1, 3],
        [4, 7],
        [8, 12],
      ]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `insert([[1, 3],[5, 7],[8, 12]],[4, 10]);`,
      expected: JSON.stringify([
        [1, 3],
        [4, 12],
      ]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `insert([[2, 3],[5, 7]],[1, 4]);`,
      expected: JSON.stringify([
        [1, 4],
        [5, 7],
      ]),
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/3jKlyNMJPEM'],
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
