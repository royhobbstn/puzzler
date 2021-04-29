import { ALGORITHM, MERGE_INTERVALS } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function intervalIntersection(a, b) {' },
  { stage: 1, text: '  const ans = [];' },
  { stage: 0, text: '' },
  { stage: -2, text: '  // increment vars for a list and b list' },
  { stage: 2, text: '  let i = 0;' },
  { stage: 2, text: '  let j = 0;' },
  { stage: 0, text: '' },
  { stage: -3, text: "  // can't check intersection if reached end of either list" },
  { stage: 3, text: '  while (i < a.length && j < b.length) {' },
  { stage: -4, text: '    // get highest of low points' },
  { stage: 4, text: '    let low = Math.max(a[i][0], b[j][0]);' },
  { stage: -5, text: '    // get lowest of high points' },
  { stage: 5, text: '    let high = Math.min(a[i][1], b[j][1]);' },
  { stage: -6, text: '    // as low > high, there is no intersection' },
  { stage: 6, text: '    if (low <= high) {' },
  { stage: 7, text: '      ans.push([low, high]);' },
  { stage: 6, text: '    }' },
  { stage: 0, text: '' },
  { stage: -8, text: '    // increment counter of list with the smallest endpoint' },
  { stage: 8, text: '    if (a[i][1] < b[j][1]) {' },
  { stage: 9, text: '      i++;' },
  { stage: 8, text: '    } else {' },
  { stage: 10, text: '      j++;' },
  { stage: 8, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return ans;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 198,
  problemName: `Interval List Intersections`,
  problemText: `You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

  Return the intersection of these two interval lists.
  
  A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.
  
  The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `let firstList = [
        [0, 2],
        [5, 10],
        [13, 23],
        [24, 25],
      ];
      let secondList = [
        [1, 5],
        [8, 12],
        [15, 24],
        [25, 26],
      ];`,
      evaluate: `intervalIntersection(firstList, secondList);`,
      expected: JSON.stringify([
        [1, 2],
        [5, 5],
        [8, 10],
        [15, 23],
        [24, 24],
        [25, 25],
      ]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `let firstList = [
        [1, 3],
        [5, 9],
      ];let secondList = [];`,
      evaluate: `intervalIntersection(firstList, secondList);`,
      expected: JSON.stringify([]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `let firstList = [];let secondList = [
        [4, 8],
        [10, 12],
      ];`,
      evaluate: `intervalIntersection(firstList, secondList);`,
      expected: JSON.stringify([]),
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: `let firstList = [[1, 7]];let secondList = [[3, 10]];`,
      evaluate: `intervalIntersection(firstList, secondList);`,
      expected: JSON.stringify([[3, 7]]),
    },
  ],
  setupCode: ``,
  lcid: 986,
  source: ['https://leetcode.com/problems/interval-list-intersections/'],
  tags: [MERGE_INTERVALS, ALGORITHM],
  solution,
};
