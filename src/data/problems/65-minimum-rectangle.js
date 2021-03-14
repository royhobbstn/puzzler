import { GENERAL, ALGORITHM, ADVANCED } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function minimumRectangle(points) {' },
  { stage: 1, text: '  const map = {};' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (const [x, y] of points) {' },
  { stage: 3, text: '    if (!map[x]) {' },
  { stage: 3, text: '      map[x] = [];' },
  { stage: 3, text: '    }' },
  { stage: 4, text: '    map[x].push(y);' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  let min = Infinity;' },
  { stage: 0, text: '' },
  { stage: 6, text: '  for (const [x1, y1] of points) {' },
  { stage: 7, text: '    for (const [x2, y2] of points) {' },
  { stage: 8, text: '      if (x1 === x2 || y1 === y2) {' },
  { stage: 8, text: '        continue;' },
  { stage: 8, text: '      }' },
  { stage: 0, text: '' },
  { stage: 9, text: '      if (map[x1].includes(y2) && map[x2].includes(y1)) {' },
  { stage: 10, text: '        min = Math.min(min, Math.abs(x1 - x2) * Math.abs(y1 - y2));' },
  { stage: 9, text: '      }' },
  { stage: 7, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return min === Infinity ? 0 : min;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 65,
  problemName: 'Solve Minimum Rectangle.',
  problemText: `Find the area of the smallest rectangle formed by a given array of \`points\`.  To qualify as a rectangle, it must have sides parallel to the X and Y axis.
  Return \`0\` if no solution could be found.`,
  testCases: [
    {
      id: 1,
      name: 'no solution found',
      inherit: [],
      code: ``,
      evaluate: `minimumRectangle([[3, 6]]);`,
      expected: 0,
    },
    {
      id: 2,
      name: 'case 1',
      inherit: [],
      code: ``,
      evaluate: `minimumRectangle([[2,2],[2,4],[4,2],[4,4],[3,3]]);`,
      expected: 4,
    },
    {
      id: 3,
      name: 'case 2',
      inherit: [],
      code: ``,
      evaluate: `minimumRectangle([[2,2],[2,4],[4,2],[4,4],[5,2],[5,4]]);`,
      expected: 2,
    },
  ],
  setupCode: '',
  source: ['https://leetcode.com/problems/minimum-area-rectangle'],
  tags: [ADVANCED, GENERAL, ALGORITHM],
  solution,
};