import { ALGORITHM, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function findAnagrams(str, p) {' },
  { stage: 1, text: '  if (str.length < p.length) {' },
  { stage: 1, text: '    return [];' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  const pCount = {};' },
  { stage: 2, text: '  const strCount = {};' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < p.length; i++) {' },
  { stage: 4, text: '    let ch = p[i];' },
  { stage: 4, text: '    if (pCount[ch]) {' },
  { stage: 5, text: '      pCount[ch]++;' },
  { stage: 4, text: '    } else {' },
  { stage: 5, text: '      pCount[ch] = 1;' },
  { stage: 4, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  const output = [];' },
  { stage: 0, text: '' },
  { stage: 6, text: '  for (let i = 0; i < str.length; ++i) {' },
  { stage: 7, text: '    let ch = str[i];' },
  { stage: 7, text: '    if (strCount[ch]) {' },
  { stage: 8, text: '      strCount[ch]++;' },
  { stage: 7, text: '    } else {' },
  { stage: 8, text: '      strCount[ch] = 1;' },
  { stage: 7, text: '    }' },
  { stage: 0, text: '' },
  { stage: 9, text: '    if (i >= p.length) {' },
  { stage: 10, text: '      ch = str[i - p.length];' },
  { stage: 10, text: '      if (strCount[ch] == 1) {' },
  { stage: 11, text: '        delete strCount[ch];' },
  { stage: 10, text: '      } else {' },
  { stage: 11, text: '        strCount[ch] = strCount[ch] - 1;' },
  { stage: 10, text: '      }' },
  { stage: 9, text: '    }' },
  { stage: 0, text: '' },
  { stage: 12, text: '    if (Object.keys(pCount).length === Object.keys(strCount).length) {' },
  { stage: 13, text: '      let isEqual = true;' },
  { stage: 0, text: '' },
  { stage: 13, text: '      for (let key of Object.keys(pCount)) {' },
  { stage: 14, text: '        if (pCount[key] !== strCount[key]) {' },
  { stage: 14, text: '          isEqual = false;' },
  { stage: 14, text: '          break;' },
  { stage: 14, text: '        }' },
  { stage: 13, text: '      }' },
  { stage: 0, text: '' },
  { stage: 15, text: '      if (isEqual) {' },
  { stage: 15, text: '        output.push(i - p.length + 1);' },
  { stage: 15, text: '      }' },
  { stage: 12, text: '    }' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 16, text: '  return output;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 70,
  problemName: `Find anagrams in a string.`,
  problemText: `Given a string \`str\` and another string \`p\`, find all the start indices of \`p\`'s anagrams within \`str\`.

  - All characters in either string are lowercase letters.
  - Return the indices as an array of integers.  Indices should be returned in ascending order.`,
  testCases: [
    {
      id: 1,
      name: 'string (str) length shorter than find (p)length',
      inherit: [],
      code: ``,
      evaluate: `findAnagrams("a", "abc");`,
      expected: JSON.stringify([]),
    },
    {
      id: 2,
      name: 'case 1',
      inherit: [],
      code: ``,
      evaluate: `findAnagrams('cbaebabacd', 'abc');`,
      expected: JSON.stringify([0, 6]),
    },
    {
      id: 3,
      name: 'case 2',
      inherit: [],
      code: ``,
      evaluate: `findAnagrams('abab', 'ab');`,
      expected: JSON.stringify([0, 1, 2]),
    },
  ],
  setupCode: ``,
  source: ['https://leetcode.com/problems/find-all-anagrams-in-a-string'],
  tags: [GENERAL, ALGORITHM],
  solution,
};
