import { ALGORITHM, SUBSETS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class AbbreviatedWord {' },
  { stage: -1, text: '  constructor(str, start, count) {' },
  { stage: -1, text: '    this.str = str;' },
  { stage: -1, text: '    this.start = start;' },
  { stage: -1, text: '    this.count = count;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function generate_generalized_abbreviation(word) {' },
  { stage: 1, text: '  let wordLen = word.length;' },
  { stage: 1, text: '  const result = [];' },
  { stage: 1, text: '  const queue = [];' },
  { stage: 2, text: "  queue.push(new AbbreviatedWord('', 0, 0));" },
  { stage: 0, text: '' },
  { stage: 3, text: '  while (queue.length > 0) {' },
  { stage: 4, text: '    const abWord = queue.shift();' },
  { stage: 5, text: '    if (abWord.start === wordLen) {' },
  { stage: 6, text: '      if (abWord.count !== 0) {' },
  { stage: 7, text: '        abWord.str += abWord.count;' },
  { stage: 6, text: '      }' },
  { stage: 8, text: '      result.push(abWord.str);' },
  { stage: 5, text: '    } else {' },
  {
    stage: 9,
    text: '      queue.push(new AbbreviatedWord(abWord.str, abWord.start + 1, abWord.count + 1));',
  },
  { stage: 0, text: '' },
  { stage: 10, text: '      if (abWord.count !== 0) {' },
  { stage: 11, text: '        abWord.str += abWord.count;' },
  { stage: 10, text: '      }' },
  { stage: 0, text: '' },
  { stage: 12, text: '      let newWord = abWord.str + word[abWord.start];' },
  { stage: 13, text: '      queue.push(new AbbreviatedWord(newWord, abWord.start + 1, 0));' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 14, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 171,
  problemName: `Unique Generalized Abbreviations`,
  problemText: `Solve Iteratively.
  
  Given a word, write a function to generate all of its unique generalized abbreviations.

  Generalized abbreviation of a word can be generated by replacing each substring of the word by the count of characters in the substring. Take the example of “ab” which has four substrings: “”, “a”, “b”, and “ab”. After replacing these substrings in the actual word by the count of characters we get all the generalized abbreviations: “ab”, “1b”, “a1”, and “2”.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `generate_generalized_abbreviation('BAT');`,
      expected: JSON.stringify(['3', '2T', '1A1', '1AT', 'B2', 'B1T', 'BA1', 'BAT']),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `generate_generalized_abbreviation('code');`,
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
  setupCode: `
  class AbbreviatedWord {
    constructor(str, start, count) {
      this.str = str;
      this.start = start;
      this.count = count;
    }
  }
  `,
  source: [],
  tags: [SUBSETS, ALGORITHM],
  solution,
};
