import { ALGORITHM, BINARY_TREE, DFS, RECURSION } from '../constants.ts';

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
  { stage: 0, text: 'class MaximumPathSum {' },
  { stage: 0, text: '' },
  { stage: 0, text: '  find_maximum_path_sum(root) {' },
  { stage: 0, text: '    this.globalMaximumSum = -Infinity;' },
  { stage: 0, text: '    this.find_maximum_path_sum_recursive(root);' },
  { stage: 0, text: '    return this.globalMaximumSum;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  find_maximum_path_sum_recursive(currentNode) {' },
  { stage: 0, text: '' },
  { stage: -1, text: '    // base case: no node.' },
  { stage: 1, text: '    if (currentNode === null) {' },
  { stage: 2, text: '      return 0;' },
  { stage: 1, text: '    }' },
  { stage: 0, text: '' },
  { stage: -3, text: '    // calculate the max sums of the left and the right subtrees' },
  {
    stage: 3,
    text: '    let maxPathSumFromLeft = this.find_maximum_path_sum_recursive(currentNode.left);',
  },
  {
    stage: 4,
    text: '    let maxPathSumFromRight = this.find_maximum_path_sum_recursive(currentNode.right);',
  },
  { stage: 0, text: '' },
  { stage: -5, text: '    // take the maximum value.  this will cut the path if at any point' },
  { stage: -5, text: '    // the sum of a string of nodes is less than 0' },
  { stage: 5, text: '    maxPathSumFromLeft = Math.max(maxPathSumFromLeft, 0);' },
  { stage: 6, text: '    maxPathSumFromRight = Math.max(maxPathSumFromRight, 0);' },
  { stage: 0, text: '' },
  { stage: -7, text: '    // path sum is left subtree + right subtree + node value itself' },
  {
    stage: 7,
    text: '    const localMaximumSum = maxPathSumFromLeft + maxPathSumFromRight + currentNode.val;',
  },
  { stage: 0, text: '' },
  { stage: -8, text: '    // update the global maximum if new value > old' },
  {
    stage: 8,
    text: '    this.globalMaximumSum = Math.max(this.globalMaximumSum, localMaximumSum);',
  },
  { stage: 0, text: '' },
  {
    stage: -9,
    text:
      '    // for the recursive calls, return the maximum of the left or right subtrees + the node value itself',
  },
  {
    stage: 9,
    text: '    return Math.max(maxPathSumFromLeft, maxPathSumFromRight) + currentNode.val;',
  },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 154,
  problemName: `Path with Maximum Sum`,
  problemText: `Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.

  A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const maximumPathSum = new MaximumPathSum();
      let root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);`,
      evaluate: `maximumPathSum.find_maximum_path_sum(root);`,
      expected: 6,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `root.left.left = new TreeNode(1);
      root.left.right = new TreeNode(3);
      root.right.left = new TreeNode(5);
      root.right.right = new TreeNode(6);
      root.right.left.left = new TreeNode(7);
      root.right.left.right = new TreeNode(8);
      root.right.right.left = new TreeNode(9);`,
      evaluate: `maximumPathSum.find_maximum_path_sum(root);`,
      expected: 31,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `const maximumPathSum = new MaximumPathSum();
      let root = new TreeNode(-1);
      root.left = new TreeNode(-3);`,
      evaluate: `maximumPathSum.find_maximum_path_sum(root);`,
      expected: -1,
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/xVPgnOvWVJq'],
  tags: [DFS, ALGORITHM, BINARY_TREE, RECURSION],
  solution,
};
