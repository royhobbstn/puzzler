import { ALGORITHM, SLIDING_WINDOW, ADVANCED } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_permutation(str, pattern) {' },
  { stage: 1, text: '  let windowStart = 0;' },
  { stage: 1, text: '  let matched = 0;' },
  { stage: 1, text: '  let charFrequency = {};' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 0; i < pattern.length; i++) {' },
  { stage: 3, text: '    const chr = pattern[i];' },
  { stage: 4, text: '    if (!(chr in charFrequency)) {' },
  { stage: 5, text: '      charFrequency[chr] = 0;' },
  { stage: 4, text: '    }' },
  { stage: 5, text: '    charFrequency[chr] += 1;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {' },
  { stage: 7, text: '    const rightChar = str[windowEnd];' },
  { stage: 8, text: '    if (rightChar in charFrequency) {' },
  { stage: 9, text: '      charFrequency[rightChar] -= 1;' },
  { stage: 10, text: '      if (charFrequency[rightChar] === 0) {' },
  { stage: 10, text: '        matched += 1;' },
  { stage: 10, text: '      }' },
  { stage: 8, text: '    }' },
  { stage: 0, text: '' },
  { stage: 11, text: '    if (matched === Object.keys(charFrequency).length) {' },
  { stage: 11, text: '      return true;' },
  { stage: 11, text: '    }' },
  { stage: 0, text: '' },
  { stage: 12, text: '    if (windowEnd >= pattern.length - 1) {' },
  { stage: 13, text: '      let leftChar = str[windowStart];' },
  { stage: 13, text: '      windowStart += 1;' },
  { stage: 14, text: '      if (leftChar in charFrequency) {' },
  { stage: 15, text: '        if (charFrequency[leftChar] === 0) {' },
  { stage: 16, text: '          matched -= 1;' },
  { stage: 15, text: '        }' },
  { stage: 17, text: '        charFrequency[leftChar] += 1;' },
  { stage: 14, text: '      }' },
  { stage: 12, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 18, text: '  return false;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 94,
  problemName: `Permutation in a String`,
  problemText: `Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:
  
   - abc
   - acb
   - bac
   - bca
   - cab
   - cba
  
If a string has ‘n’ distinct characters, it will have n!n! permutations.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_permutation('oidbcaf', 'abc');`,
      expected: true,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_permutation('odicf', 'dc');`,
      expected: false,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_permutation('bcdxabcdy', 'bcdyabcdx');`,
      expected: true,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: ``,
      evaluate: `find_permutation('aaacb', 'abc');`,
      expected: true,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/N0o9QnPLKNv'],
  tags: [ADVANCED, SLIDING_WINDOW, ALGORITHM],
  solution,
};
