import { ALGORITHM, SLIDING_WINDOW, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function non_repeat_substring(str) {' },
  { stage: 1, text: '  let windowStart = 0;' },
  { stage: 1, text: '  let maxLength = 0;' },
  { stage: 2, text: '  let charIndexMap = {};' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {' },
  { stage: 4, text: '    const rightChar = str[windowEnd];' },
  { stage: 5, text: '    if (rightChar in charIndexMap) {' },
  { stage: 6, text: '      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);' },
  { stage: 5, text: '    }' },
  { stage: 0, text: '' },
  { stage: 7, text: '    charIndexMap[rightChar] = windowEnd;' },
  { stage: 7, text: '    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  return maxLength;' },
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
  tags: [INTERMEDIATE, SLIDING_WINDOW, ALGORITHM],
  solution,
};
