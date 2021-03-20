import { ALGORITHM, INTERMEDIATE, BINARY_SEARCH } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class ArrayReader {' },
  { stage: -1, text: '  constructor(arr) {' },
  { stage: -1, text: '    this.arr = arr;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '' },
  { stage: -1, text: '  get(index) {' },
  { stage: -1, text: '    if (index >= this.arr.length) {' },
  { stage: -1, text: '      return Infinity;' },
  { stage: -1, text: '    }' },
  { stage: -1, text: '' },
  { stage: -1, text: '    return this.arr[index];' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function search_in_infinite_array(reader, key) {' },
  { stage: 0, text: '  let start = 0;' },
  { stage: 0, text: '  let end = 1;' },
  { stage: 0, text: '  while (reader.get(end) < key) {' },
  { stage: 0, text: '    let newStart = end + 1;' },
  { stage: 0, text: '    end += (end - start + 1) * 2;' },
  { stage: 0, text: '    start = newStart;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  return binary_search(reader, key, start, end);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function binary_search(reader, key, start, end) {' },
  { stage: 0, text: '  while (start <= end) {' },
  { stage: 0, text: '    let mid = Math.floor(start + (end - start) / 2);' },
  { stage: 0, text: '    if (key < reader.get(mid)) {' },
  { stage: 0, text: '      end = mid - 1;' },
  { stage: 0, text: '    } else if (key > reader.get(mid)) {' },
  { stage: 0, text: '      start = mid + 1;' },
  { stage: 0, text: '    } else {' },
  { stage: 0, text: '      return mid;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  return -1;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 179,
  problemName: `Search in a Sorted Infinite Array`,
  problemText: `Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array. Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

  Since it is not possible to define an array with infinite (unknown) size, you will be provided with an interface ArrayReader to read elements of the array. ArrayReader.get(index) will return the number at index; if the array’s size is smaller than the index, it will return Integer.MAX_VALUE.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `let reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);`,
      evaluate: `search_in_infinite_array(reader, 16);`,
      expected: 6,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: ``,
      evaluate: `search_in_infinite_array(reader, 11);`,
      expected: -1,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `let reader = new ArrayReader([1, 3, 8, 10, 15]);`,
      evaluate: `search_in_infinite_array(reader, 15);`,
      expected: 4,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [3],
      code: ``,
      evaluate: `search_in_infinite_array(reader, 200);`,
      expected: -1,
    },
  ],
  setupCode: `
  class ArrayReader {
    constructor(arr) {
      this.arr = arr;
    }
  
    get(index) {
      if (index >= this.arr.length) {
        return Infinity;
      }
      return this.arr[index];
    }
  }
  `,
  source: [],
  tags: [INTERMEDIATE, BINARY_SEARCH, ALGORITHM],
  solution,
};
