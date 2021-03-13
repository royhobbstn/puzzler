import { BINARY_TREE_NODE } from '../code-imports/import-index.js';
import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

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
  { stage: 0, text: 'function find_level_averages(root) {' },
  { stage: 1, text: '  const result = [];' },
  { stage: 2, text: '  if (root === null) {' },
  { stage: 2, text: '    return result;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const queue = [];' },
  { stage: 3, text: '  queue.push(root);' },
  { stage: 4, text: '  while (queue.length > 0) {' },
  { stage: 5, text: '    let levelSize = queue.length;' },
  { stage: 5, text: '    let levelSum = 0.0;' },
  { stage: 6, text: '    for (let i = 0; i < levelSize; i++) {' },
  { stage: 7, text: '      let currentNode = queue.shift();' },
  { stage: 7, text: '      levelSum += currentNode.val;' },
  { stage: 8, text: '      if (currentNode.left !== null) {' },
  { stage: 8, text: '        queue.push(currentNode.left);' },
  { stage: 8, text: '      }' },
  { stage: 9, text: '      if (currentNode.right !== null) {' },
  { stage: 9, text: '        queue.push(currentNode.right);' },
  { stage: 9, text: '      }' },
  { stage: 6, text: '    }' },
  { stage: 0, text: '' },
  { stage: 10, text: '    result.push(levelSum / levelSize);' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 121,
  problemName: `Level Averages`,
  problemText: `Given a binary tree, populate an array to represent the averages of all of its levels.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const root = new TreeNode(12);
      root.left = new TreeNode(7);
      root.right = new TreeNode(1);
      root.left.left = new TreeNode(9);
      root.left.right = new TreeNode(2);
      root.right.left = new TreeNode(10);
      root.right.right = new TreeNode(5);`,
      evaluate: `find_level_averages(root);`,
      expected: JSON.stringify([12, 4, 6.5]),
    },
  ],
  setupCode: `${BINARY_TREE_NODE}`,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW'],
  tags: [INTERMEDIATE, TEMP, ALGORITHM],
  solution,
};
