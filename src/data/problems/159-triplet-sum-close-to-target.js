import { ALGORITHM, INTERMEDIATE, TWO_POINTERS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function triplet_sum_close_to_target(arr, targetSum) {' },
  { stage: 1, text: '  arr.sort((a, b) => a - b);' },
  { stage: 2, text: '  let smallest_difference = Infinity;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < arr.length - 2; i++) {' },
  { stage: 4, text: '    let left = i + 1;' },
  { stage: 4, text: '    let right = arr.length - 1;' },
  { stage: 0, text: '' },
  { stage: 5, text: '    while (left < right) {' },
  { stage: 6, text: '      const target_diff = targetSum - arr[i] - arr[left] - arr[right];' },
  { stage: 7, text: '      if (target_diff === 0) {' },
  { stage: 8, text: '        return targetSum - target_diff;' },
  { stage: 7, text: '      }' },
  { stage: 0, text: '' },
  { stage: 9, text: '      if (Math.abs(target_diff) < Math.abs(smallest_difference)) {' },
  { stage: 10, text: '        smallest_difference = target_diff;' },
  { stage: 9, text: '      }' },
  { stage: 0, text: '' },
  { stage: 11, text: '      if (' },
  { stage: 12, text: '        Math.abs(target_diff) < Math.abs(smallest_difference) ||' },
  { stage: 12, text: '        (Math.abs(target_diff) === Math.abs(smallest_difference) &&' },
  { stage: 12, text: '          target_diff > smallest_difference)' },
  { stage: 11, text: '      ) {' },
  { stage: 13, text: '        smallest_difference = target_diff;' },
  { stage: 11, text: '      }' },
  { stage: 0, text: '' },
  { stage: 14, text: '      if (target_diff > 0) {' },
  { stage: 15, text: '        left += 1;' },
  { stage: 14, text: '      } else {' },
  { stage: 16, text: '        right -= 1;' },
  { stage: 14, text: '      }' },
  { stage: 0, text: '' },
  { stage: 5, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 17, text: '  return targetSum - smallest_difference;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 159,
  problemName: `Triplet Sum Close To Target`,
  problemText: `Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `triplet_sum_close_to_target([-2, 0, 1, 2], 2);`,
      expected: 1,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `triplet_sum_close_to_target([-3, -1, 1, 2], 1);`,
      expected: 0,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `triplet_sum_close_to_target([1, 0, 1, 1], 100);`,
      expected: 3,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, TWO_POINTERS, ALGORITHM],
  solution,
};
