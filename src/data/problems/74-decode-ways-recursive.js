import { ALGORITHM, ADVANCED, DYNAMIC_PROGRAMMING } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function numDecodingsRecursive(s) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  const memo = {};' },
  { stage: 1, text: '  return recursiveWithMemo(0, s, memo);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 2, text: 'function recursiveWithMemo(index, str, memo) {' },
  { stage: 3, text: '  if (memo[index] != null) {' },
  { stage: 3, text: '    return memo[index];' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  if (index === str.length) {' },
  { stage: 4, text: '    return 1;' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: "  if (str[index] === '0') {" },
  { stage: 5, text: '    return 0;' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  if (index === str.length - 1) {' },
  { stage: 6, text: '    return 1;' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  let ans = recursiveWithMemo(index + 1, str, memo);' },
  { stage: 8, text: '  if (parseInt(str.substring(index, index + 2), 10) <= 26) {' },
  { stage: 9, text: '    ans += recursiveWithMemo(index + 2, str, memo);' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  memo[index] = ans;' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return ans;' },
  { stage: 2, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 74,
  problemName: `Solve Decode Ways Recursively`,
  problemText: `A message containing letters from A-Z can be encoded into numbers using the following mapping:

   - 'A' -> "1"
   - 'B' -> "2"
   - ...
   - 'Z' -> "26"

  To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways).
  
  Given a string \`s\` containing only digits, return the number of ways to decode it.
  
  Please solve using recursion.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `numDecodingsRecursive('12');`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `numDecodingsRecursive('226');`,
      expected: 3,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `numDecodingsRecursive('0');`,
      expected: 0,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `numDecodingsRecursive('06');`,
      expected: 0,
    },
  ],
  setupCode: ``,
  tags: [DYNAMIC_PROGRAMMING, ALGORITHM],
  difficulty: ADVANCED,
  solution,
};
