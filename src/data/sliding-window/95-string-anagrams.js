import { ALGORITHM, SLIDING_WINDOW, ADVANCED } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_string_anagrams(str, pattern) {' },
  { stage: 1, text: '  let windowStart = 0;' },
  { stage: 1, text: '  let matched = 0;' },
  { stage: 1, text: '  let charFrequency = {};' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 0; i < pattern.length; i++) {' },
  { stage: 3, text: '    const chr = pattern[i];' },
  { stage: 4, text: '    if (!(chr in charFrequency)) {' },
  { stage: 5, text: '      charFrequency[chr] = 0;' },
  { stage: 4, text: '    }' },
  { stage: 6, text: '    charFrequency[chr] += 1;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  const resultIndices = [];' },
  { stage: 0, text: '' },
  { stage: 8, text: '  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {' },
  { stage: 9, text: '    const rightChar = str[windowEnd];' },
  { stage: 10, text: '    if (rightChar in charFrequency) {' },
  { stage: 11, text: '      charFrequency[rightChar] -= 1;' },
  { stage: 12, text: '      if (charFrequency[rightChar] === 0) {' },
  { stage: 12, text: '        matched += 1;' },
  { stage: 12, text: '      }' },
  { stage: 10, text: '    }' },
  { stage: 0, text: '' },
  { stage: 13, text: '    if (matched === Object.keys(charFrequency).length) {' },
  { stage: 14, text: '      resultIndices.push(windowStart);' },
  { stage: 13, text: '    }' },
  { stage: 0, text: '' },
  { stage: 15, text: '    if (windowEnd >= pattern.length - 1) {' },
  { stage: 16, text: '      let leftChar = str[windowStart];' },
  { stage: 16, text: '      windowStart += 1;' },
  { stage: 17, text: '      if (leftChar in charFrequency) {' },
  { stage: 18, text: '        if (charFrequency[leftChar] === 0) {' },
  { stage: 19, text: '          matched -= 1;' },
  { stage: 18, text: '        }' },
  { stage: 19, text: '        charFrequency[leftChar] += 1;' },
  { stage: 17, text: '      }' },
  { stage: 15, text: '    }' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 20, text: '  return resultIndices;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 95,
  problemName: `String Anagrams`,
  problemText: `Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:
  
   - abc
   - acb
   - bac
   - bca
   - cab
   - cba
  
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_string_anagrams('ppqp', 'pq');`,
      expected: JSON.stringify([1, 2]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_string_anagrams('abbcabc', 'abc');`,
      expected: JSON.stringify([2, 3, 4]),
    },
  ],
  setupCode: ``,
  category: SLIDING_WINDOW,
  type: ALGORITHM,
  difficulty: ADVANCED,
  maxExecutionTime: 2,
  solution: {
    stages: [
      0,
      30,
      60,
      90,
      120,
      150,
      180,
      210,
      240,
      270,
      300,
      330,
      360,
      390,
      420,
      450,
      480,
      510,
      540,
      570,
      630,
    ],
    solutionLines: solution,
  },
};
