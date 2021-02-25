import { ALGORITHM, INTERMEDIATE, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function lengthOfLongestSubstring(str) {' },
  { stage: 1, text: '  let answer = 0;' },
  { stage: 1, text: '  let map = {};' },
  { stage: 2, text: '  for (let j = 0, i = 0; j < str.length; j++) {' },
  { stage: 3, text: '    const char = str[j];' },
  { stage: 4, text: '    if (map[char]) {' },
  { stage: 4, text: '      i = Math.max(map[char], i);' },
  { stage: 4, text: '    }' },
  { stage: 5, text: '    answer = Math.max(answer, j - i + 1);' },
  { stage: 6, text: '    map[char] = j + 1;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  return answer;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 82,
  problemName: `Find Length of Longest Substring`,
  problemText: `Given a string \`str\`, find the length of the longest substring without repeating characters.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `lengthOfLongestSubstring('abcabcbb');`,
      expected: 3,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `lengthOfLongestSubstring('bbbbb');`,
      expected: 1,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `lengthOfLongestSubstring('pwwkew');`,
      expected: 3,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `lengthOfLongestSubstring('');`,
      expected: 0,
    },
  ],
  setupCode: ``,
  category: GENERAL,
  type: ALGORITHM,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
