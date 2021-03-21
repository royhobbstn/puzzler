import { ALGORITHM, SUBSETS } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class TreeNode {' },
  { stage: -1, text: '  constructor(val) {' },
  { stage: -1, text: '    this.val = val;' },
  { stage: -1, text: '    this.left = null;' },
  { stage: -1, text: '    this.right = null;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function count_trees_memo(n) {' },
  { stage: 1, text: '  return count_trees_rec({}, n);' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 2, text: 'function count_trees_rec(map, n) {' },
  { stage: 3, text: '  if (n in map) {' },
  { stage: 4, text: '    return map[n];' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  if (n <= 1) {' },
  { stage: 6, text: '    return 1;' },
  { stage: 5, text: '  }' },
  { stage: 7, text: '  let count = 0;' },
  { stage: 8, text: '  for (let i = 1; i < n + 1; i++) {' },
  { stage: 9, text: '    let countOfLeftSubtrees = count_trees_rec(map, i - 1);' },
  { stage: 10, text: '    let countOfRightSubtrees = count_trees_rec(map, n - i);' },
  { stage: 11, text: '    count += countOfLeftSubtrees * countOfRightSubtrees;' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  map[n] = count;' },
  { stage: 13, text: '  return count;' },
  { stage: 2, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 175,
  problemName: `Count of Structurally Unique Binary Search Trees`,
  problemText: `Given a number ‘n’, write a function to return the count of structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `count_trees_memo(2);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `count_trees_memo(3);`,
      expected: 5,
    },
  ],
  setupCode: `
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  `,
  source: [],
  tags: [SUBSETS, ALGORITHM],
  solution,
};
