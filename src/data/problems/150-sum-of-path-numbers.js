import { ALGORITHM, DFS, RECURSION, BINARY_TREE } from '../constants.ts';

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
  { stage: 0, text: 'function find_sum_of_path_numbers(root) {' },
  { stage: 0, text: '' },
  {
    stage: -1,
    text: '  // second argument is the sum of all found paths, starts with a value of 0',
  },
  { stage: 1, text: '  return find_root_to_leaf_path_numbers(root, 0);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 2, text: 'function find_root_to_leaf_path_numbers(currentNode, pathSum) {' },
  { stage: 3, text: '  if (currentNode === null) {' },
  { stage: -4, text: '    // still must return a value here' },
  { stage: 4, text: '    return 0;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  {
    stage: -5,
    text: '  // the next node shifts the current path number to the left (so we multiply by 10)',
  },
  { stage: 5, text: '  pathSum = 10 * pathSum + currentNode.val;' },
  { stage: 0, text: '' },
  { stage: -6, text: "  // if we're at a leaf node, we can go no further.  return the sum." },
  { stage: 6, text: '  if (currentNode.left === null && currentNode.right === null) {' },
  { stage: 7, text: '    return pathSum;' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: -8, text: '  // add sum of paths at all leaf nodes' },
  { stage: 8, text: '  return (' },
  { stage: 10, text: '    find_root_to_leaf_path_numbers(currentNode.left, pathSum) +' },
  { stage: 10, text: '    find_root_to_leaf_path_numbers(currentNode.right, pathSum)' },
  { stage: 8, text: '  );' },
  { stage: 2, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 150,
  problemName: `Sum of Path Numbers`,
  problemText: `Given a binary tree where each node can only have a digit (0-9) value, each **root-to-leaf** path will represent a number. Find the total sum of all the numbers represented by all paths.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const root = new TreeNode(1);
      root.left = new TreeNode(0);
      root.right = new TreeNode(1);
      root.left.left = new TreeNode(1);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(5);`,
      evaluate: `find_sum_of_path_numbers(root);`,
      expected: 332,
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69'],
  tags: [DFS, ALGORITHM, RECURSION, BINARY_TREE],
  solution,
};
