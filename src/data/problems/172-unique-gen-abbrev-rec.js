import { ALGORITHM, SUBSETS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function generate_generalized_abbreviation_start(word) {' },
  { stage: 1, text: '  const result = [];' },
  { stage: 2, text: "  generate_abbreviation_recursive(word, '', 0, 0, result);" },
  { stage: 0, text: '' },
  { stage: 3, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  {
    stage: 4,
    text: 'function generate_abbreviation_recursive(word, abWord, start, count, result) {',
  },
  { stage: 5, text: '  if (start === word.length) {' },
  { stage: 6, text: '    if (count !== 0) {' },
  { stage: 7, text: '      abWord += count;' },
  { stage: 6, text: '    }' },
  { stage: 8, text: '    result.push(abWord);' },
  { stage: 5, text: '  } else {' },
  {
    stage: 9,
    text: '    generate_abbreviation_recursive(word, abWord, start + 1, count + 1, result);',
  },
  { stage: 10, text: '    if (count !== 0) {' },
  { stage: 11, text: '      abWord += count;' },
  { stage: 10, text: '    }' },
  { stage: 12, text: '    const newWord = abWord + word[start];' },
  { stage: 13, text: '    generate_abbreviation_recursive(word, newWord, start + 1, 0, result);' },
  { stage: 5, text: '  }' },
  { stage: 4, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 172,
  problemName: `Unique Generalized Abbreviations`,
  problemText: `Solve Recursively.
  
  Given a word, write a function to generate all of its unique generalized abbreviations.

  Generalized abbreviation of a word can be generated by replacing each substring of the word by the count of characters in the substring. Take the example of “ab” which has four substrings: “”, “a”, “b”, and “ab”. After replacing these substrings in the actual word by the count of characters we get all the generalized abbreviations: “ab”, “1b”, “a1”, and “2”.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `generate_generalized_abbreviation_start('BAT');`,
      expected: JSON.stringify(['3', '2T', '1A1', '1AT', 'B2', 'B1T', 'BA1', 'BAT']),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `generate_generalized_abbreviation_start('code');`,
      expected: JSON.stringify([
        '4',
        '3e',
        '2d1',
        '2de',
        '1o2',
        '1o1e',
        '1od1',
        '1ode',
        'c3',
        'c2e',
        'c1d1',
        'c1de',
        'co2',
        'co1e',
        'cod1',
        'code',
      ]),
    },
  ],
  setupCode: ``,
  source: [],
  tags: [SUBSETS, ALGORITHM],
  solution,
};
