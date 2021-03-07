import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function make_squares(arr) {' },
  { stage: 1, text: '  const n = arr.length;' },
  { stage: 1, text: '  let squares = Array(n).fill(0);' },
  { stage: 2, text: '  let highestSquareIdx = n - 1;' },
  { stage: 2, text: '  let left = 0;' },
  { stage: 2, text: '  let right = n - 1;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  while (left <= right) {' },
  { stage: 4, text: '    let leftSquare = arr[left] * arr[left];' },
  { stage: 4, text: '    let rightSquare = arr[right] * arr[right];' },
  { stage: 5, text: '    if (leftSquare > rightSquare) {' },
  { stage: 6, text: '      squares[highestSquareIdx] = leftSquare;' },
  { stage: 6, text: '      left += 1;' },
  { stage: 5, text: '    } else {' },
  { stage: 7, text: '      squares[highestSquareIdx] = rightSquare;' },
  { stage: 7, text: '      right -= 1;' },
  { stage: 5, text: '    }' },
  { stage: 0, text: '' },
  { stage: 8, text: '    highestSquareIdx -= 1;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: '  return squares;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 128,
  problemName: `Squaring Sorted Array`,
  problemText: `Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `make_squares([-2, -1, 0, 2, 3]);`,
      expected: JSON.stringify([0, 1, 4, 4, 9]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `make_squares([-3, -1, 0, 1, 2]);`,
      expected: JSON.stringify([0, 1, 1, 4, 9]),
    },
  ],
  setupCode: ``,
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution,
};
