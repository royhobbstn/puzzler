import { ALGORITHM, BINARY_SEARCH } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_next_letter(letters, key) {' },
  { stage: 1, text: '  const n = letters.length;' },
  { stage: 0, text: '' },
  {
    stage: -2,
    text: '  // if they key is less than the first letter, or greater than the last letter',
  },
  { stage: -2, text: '  // then we already know that the first letter of the array ' },
  { stage: -2, text: '  // is the smallest greater letter' },
  { stage: 2, text: '  if (key < letters[0] || key > letters[n - 1]) {' },
  { stage: 3, text: '    return letters[0];' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  let start = 0;' },
  { stage: 4, text: '  let end = n - 1;' },
  { stage: 5, text: '  while (start <= end) {' },
  { stage: 6, text: '    let mid = Math.floor(start + (end - start) / 2);' },
  { stage: 7, text: '    if (key < letters[mid]) {' },
  { stage: 8, text: '      end = mid - 1;' },
  { stage: 7, text: '    } else {' },
  {
    stage: -8,
    text: '      // there is no == case, we are looking for smallest letter greater than key',
  },
  { stage: 8, text: '      start = mid + 1;' },
  { stage: 7, text: '    }' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  {
    stage: -9,
    text: '  // due to the possibility that the start index is pointing to an index that is',
  },
  { stage: -9, text: '  // one above the last index of the array' },
  { stage: 9, text: '  return letters[start % n];' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 177,
  problemName: `Next Letter`,
  problemText: `Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

  Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
  
  Write a function to return the next letter of the given ‘key’.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `search_next_letter(['a', 'c', 'f', 'h'], 'f');`,
      expected: 'h',
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `search_next_letter(['a', 'c', 'f', 'h'], 'b');`,
      expected: 'c',
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `search_next_letter(['a', 'c', 'f', 'h'], 'm');`,
      expected: 'a',
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/g2w6QPBA2Nk'],
  tags: [BINARY_SEARCH, ALGORITHM],
  solution,
};
