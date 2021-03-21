import { ALGORITHM, BINARY_TREE } from '../constants.js';

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
  { stage: 3, text: '    return result;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  const queue = [];' },
  { stage: 4, text: '  queue.push(root);' },
  { stage: 5, text: '  let leftToRight = true;' },
  { stage: 6, text: '  while (queue.length > 0) {' },
  { stage: 7, text: '    let levelSize = queue.length;' },
  { stage: 7, text: '    let currentLevel = [];' },
  { stage: 8, text: '    for (let i = 0; i < levelSize; i++) {' },
  { stage: 9, text: '      let currentNode = queue.shift();' },
  { stage: 10, text: '      if (leftToRight) {' },
  { stage: 11, text: '        currentLevel.push(currentNode.val);' },
  { stage: 10, text: '      } else {' },
  { stage: 12, text: '        currentLevel.unshift(currentNode.val);' },
  { stage: 10, text: '      }' },
  { stage: 0, text: '' },
  { stage: 13, text: '      if (currentNode.left !== null) {' },
  { stage: 14, text: '        queue.push(currentNode.left);' },
  { stage: 13, text: '      }' },
  { stage: 15, text: '      if (currentNode.right !== null) {' },
  { stage: 16, text: '        queue.push(currentNode.right);' },
  { stage: 15, text: '      }' },
  { stage: 8, text: '    }' },
  { stage: 0, text: '' },
  { stage: 17, text: '    result.push(currentLevel);' },
  { stage: 17, text: '    leftToRight = !leftToRight;' },
  { stage: 6, text: '  }' },
  { stage: 0, text: '' },
  { stage: 18, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 145,
  problemName: `Zigzag Traversal`,
  problemText: `Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.  The return array should be an array of arrays, with each tree level represented by an array.`,
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
      root.right.right = new TreeNode(5);
      root.right.left.left = new TreeNode(20);
      root.right.left.right = new TreeNode(17);`,
      evaluate: `traverse(root);`,
      expected: JSON.stringify([[12], [1, 7], [9, 10, 5], [17, 20]]),
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0'],
  tags: [BINARY_TREE, ALGORITHM],
  solution,
};
