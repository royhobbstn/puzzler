import { BINARY_TREE_NODE } from '../code-imports/import-index.js';
import { ALGORITHM, BINARY_TREE, BFS } from '../constants';

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
  { stage: 0, text: 'function traverse(root) {' },
  { stage: 1, text: '  const result = [];' },
  { stage: 2, text: '  if (root === null) {' },
  { stage: 2, text: '    return result;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const queue = [];' },
  { stage: 3, text: '  queue.push(root);' },
  { stage: 4, text: '  while (queue.length > 0) {' },
  { stage: 5, text: '    let levelSize = queue.length;' },
  { stage: 5, text: '    let currentLevel = [];' },
  { stage: 6, text: '    for (let i = 0; i < levelSize; i++) {' },
  { stage: 7, text: '      let currentNode = queue.shift();' },
  { stage: 7, text: '      currentLevel.push(currentNode.val);' },
  { stage: 8, text: '      if (currentNode.left !== null) {' },
  { stage: 8, text: '        queue.push(currentNode.left);' },
  { stage: 8, text: '      }' },
  { stage: 9, text: '      if (currentNode.right !== null) {' },
  { stage: 9, text: '        queue.push(currentNode.right);' },
  { stage: 9, text: '      }' },
  { stage: 6, text: '    }' },
  { stage: 0, text: '' },
  { stage: 10, text: '    result.unshift(currentLevel);' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 120,
  problemName: `Reverse Level Order Traversal`,
  problemText: `Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.`,
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
      evaluate: `traverse(root);`,
      expected: JSON.stringify([[9, 10, 5], [7, 1], [12]]),
    },
  ],
  setupCode: `${BINARY_TREE_NODE}`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r'],
  tags: [BINARY_TREE, BFS, ALGORITHM],
  solution,
};
