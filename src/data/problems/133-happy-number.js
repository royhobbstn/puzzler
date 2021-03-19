import { ALGORITHM, FAST_SLOW_PTRS, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_happy_number(num) {' },
  { stage: 1, text: '  let slow = num;' },
  { stage: 1, text: '  let fast = num;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  while (true) {' },
  { stage: 3, text: '    slow = find_square_sum(slow);' },
  { stage: 3, text: '    fast = find_square_sum(find_square_sum(fast));' },
  { stage: 0, text: '' },
  { stage: 9, text: '    if (slow === fast) {' },
  { stage: 10, text: '      break;' },
  { stage: 9, text: '    }' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return slow === 1;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 4, text: 'function find_square_sum(num) {' },
  { stage: 5, text: '  let sum = 0;' },
  { stage: 6, text: '  while (num > 0) {' },
  { stage: 7, text: '    let digit = num % 10;' },
  { stage: 7, text: '    sum += digit * digit;' },
  { stage: 7, text: '    num = Math.floor(num / 10);' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return sum;' },
  { stage: 4, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 133,
  problemName: `Happy Number`,
  problemText: `Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_happy_number(23);`,
      expected: true,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_happy_number(12);`,
      expected: false,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, FAST_SLOW_PTRS, ALGORITHM],
  solution,
};