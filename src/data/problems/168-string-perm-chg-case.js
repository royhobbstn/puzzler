import { ALGORITHM, SUBSETS, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_letter_case_string_permutations(str) {' },
  { stage: 1, text: '  const permutations = [];' },
  { stage: 1, text: '  permutations.push(str);' },
  { stage: 0, text: '' },
  { stage: 2, text: '  for (let i = 0; i < str.length; i++) {' },
  { stage: 3, text: '    if (isNaN(parseInt(str[i], 10))) {' },
  { stage: 4, text: '      const n = permutations.length;' },
  { stage: 5, text: '      for (let j = 0; j < n; j++) {' },
  { stage: 6, text: "        const chs = permutations[j].split('');" },
  { stage: 7, text: '        if (chs[i] === chs[i].toLowerCase()) {' },
  { stage: 8, text: '          chs[i] = chs[i].toUpperCase();' },
  { stage: 7, text: '        } else {' },
  { stage: 9, text: '          chs[i] = chs[i].toLowerCase();' },
  { stage: 7, text: '        }' },
  { stage: 10, text: "        permutations.push(chs.join(''));" },
  { stage: 5, text: '      }' },
  { stage: 0, text: '' },
  { stage: 3, text: '    }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return permutations;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 168,
  problemName: `String Permutations By Changing Case`,
  problemText: `Given a string, find all of its permutations preserving the character sequence but changing case.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_letter_case_string_permutations('ad52');`,
      expected: JSON.stringify(['ad52', 'Ad52', 'aD52', 'AD52']),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_letter_case_string_permutations('ab7c');`,
      expected: JSON.stringify(['ab7c', 'Ab7c', 'aB7c', 'AB7c', 'ab7C', 'Ab7C', 'aB7C', 'AB7C']),
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, SUBSETS, ALGORITHM],
  solution,
};
