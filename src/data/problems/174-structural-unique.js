import { ALGORITHM, SUBSETS, BINARY_SEARCH_TREE } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class TreeNode {' },
  { stage: -1, text: '  constructor(val, left = null, right = null) {' },
  { stage: -1, text: '    this.val = val;' },
  { stage: -1, text: '    this.left = left;' },
  { stage: -1, text: '    this.right = right;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_unique_trees(n) {' },
  { stage: 1, text: '  if (n <= 0) {' },
  { stage: 2, text: '    return [];' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  return findUnique_trees_recursive(1, n);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 4, text: 'function findUnique_trees_recursive(start, end) {' },
  { stage: 5, text: '  const result = [];' },
  { stage: 0, text: '' },
  { stage: 6, text: '  if (start > end) {' },
  { stage: 7, text: '    result.push(null);' },
  { stage: 7, text: '    return result;' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  for (let i = start; i < end + 1; i++) {' },
  { stage: 9, text: '    const leftSubtrees = findUnique_trees_recursive(start, i - 1);' },
  { stage: 10, text: '    const rightSubtrees = findUnique_trees_recursive(i + 1, end);' },
  { stage: 0, text: '' },
  { stage: 11, text: '    for (let p = 0; p < leftSubtrees.length; p++) {' },
  { stage: 12, text: '      for (let q = 0; q < rightSubtrees.length; q++) {' },
  { stage: 13, text: '        const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q]);' },
  { stage: 14, text: '        result.push(root);' },
  { stage: 12, text: '      }' },
  { stage: 11, text: '    }' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 15, text: '  return result;' },
  { stage: 4, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 174,
  problemName: `Structurally Unique Binary Search Trees`,
  problemText: `Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_unique_trees(2).length;`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_unique_trees(3).length;`,
      expected: 5,
    },
  ],
  setupCode: `
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/xVQyDZBMpKE'],
  tags: [SUBSETS, BINARY_SEARCH_TREE, ALGORITHM],
  solution,
};
