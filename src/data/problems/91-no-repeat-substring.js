import { ALGORITHM, SLIDING_WINDOW } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function non_repeat_substring(str) {' },
  { stage: 1, text: '  let windowStart = 0;' },
  { stage: 1, text: '  let maxLength = 0;' },
  { stage: 0, text: '' },
  { stage: -2, text: '  // hash map to keep track of the index the character was last found' },
  { stage: 2, text: '  let charIndexMap = {};' },
  { stage: 0, text: '' },
  { stage: -3, text: '  // sliding window approach - use two pointers' },
  { stage: 3, text: '  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {' },
  { stage: 0, text: '' },
  { stage: -4, text: '    // character on right side of window' },
  { stage: 4, text: '    const rightChar = str[windowEnd];' },
  { stage: 0, text: '' },
  { stage: 5, text: '    // if the character already exists in hash map' },
  { stage: 5, text: '    if (rightChar in charIndexMap) {' },
  { stage: 0, text: '' },
  {
    stage: -6,
    text:
      '      // move the starting point (windowStart) to character after the last found index of the duplicate character',
  },
  { stage: 6, text: '      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);' },
  { stage: 5, text: '    }' },
  { stage: 0, text: '' },
  { stage: -7, text: '    // update the last found index of the character' },
  { stage: 7, text: '    charIndexMap[rightChar] = windowEnd;' },
  { stage: 0, text: '' },
  {
    stage: -8,
    text:
      '    // recompute max length, add one because a window of (for example) index 0 to 0 still contains one character (at index 0)',
  },
  { stage: 8, text: '    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: '  return maxLength;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 91,
  problemName: `No Repeat Substring`,
  problemText: `Given a string, find the length of the longest substring, which has no repeating characters.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `non_repeat_substring('aabccbb');`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `non_repeat_substring('abbbb');`,
      expected: 2,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `non_repeat_substring('abccde');`,
      expected: 3,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO'],
  tags: [SLIDING_WINDOW, ALGORITHM],
  solution,
};
