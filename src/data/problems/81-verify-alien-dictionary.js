import { ALGORITHM, INTERMEDIATE, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function isAlienSorted(words, order) {' },
  { stage: 1, text: '  const index = {};' },
  { stage: 1, text: '  for (let i = 0; i < order.length; i++) {' },
  { stage: 2, text: '    index[order[i]] = i;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < words.length - 1; i++) {' },
  { stage: 4, text: '    let word1 = words[i];' },
  { stage: 4, text: '    let word2 = words[i + 1];' },
  { stage: 0, text: '' },
  { stage: 5, text: '    let breakLoop = false;' },
  { stage: 6, text: '    for (let k = 0; k < Math.min(word1.length, word2.length); k++) {' },
  { stage: 7, text: '      if (word1[k] !== word2[k]) {' },
  { stage: 8, text: '        if (index[word1[k]] > index[word2[k]]) {' },
  { stage: 9, text: '          return false;' },
  { stage: 8, text: '        }' },
  { stage: 9, text: '        breakLoop = true;' },
  { stage: 9, text: '        break;' },
  { stage: 7, text: '      }' },
  { stage: 6, text: '    }' },
  { stage: 0, text: '' },
  { stage: 10, text: '    if (breakLoop) {' },
  { stage: 10, text: '      continue;' },
  { stage: 10, text: '    }' },
  { stage: 0, text: '' },
  { stage: 11, text: '    if (word1.length > word2.length) {' },
  { stage: 11, text: '      return false;' },
  { stage: 11, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return true;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 81,
  problemName: `Verify Alien Dictionary`,
  problemText: `In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

  Given a sequence of \`words\` written in the alien language, and the \`order\` of the alphabet, return \`true\` if and only if the given \`words\` are sorted lexicographicaly in this alien language.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const words1 = ['hello', 'leetcode'];
      const order1 = 'hlabcdefgijkmnopqrstuvwxyz';`,
      evaluate: `isAlienSorted(words1, order1);`,
      expected: true,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const words2 = ['word', 'world', 'row'];
        const order2 = 'worldabcefghijkmnpqstuvxyz';`,
      evaluate: `isAlienSorted(words2, order2);`,
      expected: false,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `const words3 = ['apple', 'app'];
      const order3 = 'abcdefghijklmnopqrstuvwxyz';`,
      evaluate: `isAlienSorted(words3, order3);`,
      expected: false,
    },
  ],
  setupCode: ``,
  tags: [GENERAL, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 390],
    solutionLines: solution,
  },
};
