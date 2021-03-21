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
  { stage: 0, text: 'function tree_right_view(root) {' },
  { stage: 1, text: '  let result = [];' },
  { stage: 2, text: '  if (root === null) {' },
  { stage: 3, text: '    return result;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 4, text: '  const queue = [];' },
  { stage: 4, text: '  queue.push(root);' },
  { stage: 5, text: '  while (queue.length > 0) {' },
  { stage: 6, text: '    const levelSize = queue.length;' },
  { stage: 7, text: '    for (let i = 0; i < levelSize; i++) {' },
  { stage: 8, text: '      let currentNode = queue.shift();' },
  { stage: 0, text: '' },
  { stage: 9, text: '      if (i === levelSize - 1) {' },
  { stage: 10, text: '        result.push(currentNode);' },
  { stage: 9, text: '      }' },
  { stage: 0, text: '' },
  { stage: 11, text: '      if (currentNode.left !== null) {' },
  { stage: 12, text: '        queue.push(currentNode.left);' },
  { stage: 11, text: '      }' },
  { stage: 0, text: '' },
  { stage: 13, text: '      if (currentNode.right !== null) {' },
  { stage: 14, text: '        queue.push(currentNode.right);' },
  { stage: 13, text: '      }' },
  { stage: 7, text: '    }' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 15, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 148,
  problemName: `Right View of a Binary Tree`,
  problemText: `Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.`,
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
      root.left.left.left = new TreeNode(3);`,
      evaluate: `printRight(tree_right_view(root));`,
      expected: JSON.stringify([12, 1, 5, 3]),
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
  function printRight(result) {
    const arr = [];
    for (let i = 0; i < result.length; i++) {
      arr.push(result[i].val);
    }
    return arr;
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/gxVWnvZjMn9'],
  tags: [BINARY_TREE, ALGORITHM],
  solution,
};
