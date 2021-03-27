import { BINARY_TREE_NODE } from '../code-imports/import-index.js';
import { ALGORITHM, BINARY_TREE, DFS, RECURSION } from '../constants.js';

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
  { stage: 0, text: 'function hasPath(root, sum) {' },
  { stage: 0, text: '' },
  { stage: -1, text: '  // base case: no node' },
  { stage: 1, text: '  if (root === null) {' },
  { stage: 2, text: '    return false;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: -3, text: '  // base case 2: value at node === remaining sum, and it is a leaf node' },
  { stage: 3, text: '  if (root.val === sum && root.left === null && root.right === null) {' },
  { stage: 4, text: '    return true;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: -6, text: '  // if either condition is true, return true' },
  {
    stage: 6,
    text: '  return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val);',
  },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 124,
  problemName: `Binary Tree Path Sum`,
  problemText: `Given a binary tree \`root\` and a number \`sum\`, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals \`sum\`.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const root = new TreeNode(12);
      root.left = new TreeNode(7);
      root.right = new TreeNode(1);
      root.left.left = new TreeNode(9);
      root.right.left = new TreeNode(10);
      root.right.right = new TreeNode(5);`,
      evaluate: `hasPath(root, 23);`,
      expected: true,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: ``,
      evaluate: `hasPath(root, 16);`,
      expected: false,
    },
  ],
  setupCode: `${BINARY_TREE_NODE}`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY'],
  tags: [BINARY_TREE, DFS, ALGORITHM, RECURSION],
  solution,
};
