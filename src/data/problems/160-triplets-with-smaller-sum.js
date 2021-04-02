import { ALGORITHM, TWO_POINTERS } from '../constants.js';

function triplet_with_smaller_sum(arr, target) {
  // sort array in order to be able to apply two pointers approach
  arr.sort((a, b) => a - b);
  // count of triplets less than target
  let count = 0;

  // iterate through the array to get the first index of the triplet
  // the remaining problem becomes finding two unique array items
  // that sum to less than the remaining value (target - arr[i])
  for (let i = 0; i < arr.length; i++) {
    // start left pointer at 1 more than i rather than the beginning of the array
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let remaining = target - arr[i];
      let leftval = arr[left];
      let rightval = arr[right];

      if (leftval + rightval < remaining) {
        // found a triplet.  additionally we know that any lesser value of right
        // is also a triplet, we can add all values of right > left
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
}

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function triplet_with_smaller_sum(arr, target) {' },
  { stage: -1, text: '  // sort array in order to be able to apply two pointers approach' },
  { stage: 1, text: '  arr.sort((a, b) => a - b);' },
  { stage: -2, text: '  // count of triplets less than target' },
  { stage: 2, text: '  let count = 0;' },
  { stage: 0, text: '' },
  { stage: -3, text: '  // iterate through the array to get the first index of the triplet' },
  { stage: -3, text: '  // the remaining problem becomes finding two unique array items' },
  { stage: -3, text: '  // that sum to less than the remaining value (target - arr[i])' },
  { stage: 3, text: '  for (let i = 0; i < arr.length; i++) {' },
  {
    stage: -4,
    text: '    // start left pointer at 1 more than i rather than the beginning of the array',
  },
  { stage: 4, text: '    let left = i + 1;' },
  { stage: 4, text: '    let right = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 5, text: '    while (left < right) {' },
  { stage: 6, text: '      let remaining = target - arr[i];' },
  { stage: 7, text: '      let leftval = arr[left];' },
  { stage: 7, text: '      let rightval = arr[right];' },
  { stage: 0, text: '' },
  { stage: 8, text: '      if (leftval + rightval < remaining) {' },
  {
    stage: -9,
    text: '        // found a triplet.  additionally we know that any lesser value of right',
  },
  { stage: -9, text: '        // is also a triplet, we can add all values of right > left' },
  { stage: 9, text: '        count += right - left;' },
  { stage: 10, text: '        left++;' },
  { stage: 8, text: '      } else {' },
  { stage: 11, text: '        right--;' },
  { stage: 8, text: '      }' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return count;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 160,
  problemName: `Triplets with Smaller Sum`,
  problemText: `Given an array \`arr\` of unsorted numbers and a \`target\` sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `triplet_with_smaller_sum([-1, 0, 2, 3], 3);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5);`,
      expected: 4,
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO'],
  tags: [TWO_POINTERS, ALGORITHM],
  solution,
};
