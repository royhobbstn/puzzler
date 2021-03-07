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
  { stage: 0, text: 'function find_successor(root, key) {' },
  { stage: 1, text: '  if (root === null) {' },
  { stage: 1, text: '    return null;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  const queue = [];' },
  { stage: 2, text: '  queue.push(root);' },
  { stage: 3, text: '  while (queue.length > 0) {' },
  { stage: 4, text: '    let currentNode = queue.shift();' },
  { stage: 5, text: '    if (currentNode.left !== null) {' },
  { stage: 5, text: '      queue.push(currentNode.left);' },
  { stage: 5, text: '    }' },
  { stage: 6, text: '    if (currentNode.right !== null) {' },
  { stage: 6, text: '      queue.push(currentNode.right);' },
  { stage: 6, text: '    }' },
  { stage: 7, text: '    if (currentNode.val === key) {' },
  { stage: 7, text: '      break;' },
  { stage: 7, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 8, text: '  if (queue.length > 0) {' },
  { stage: 8, text: '    return queue[0];' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 9, text: '  return null;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 123,
  problemName: `Level Order Successor`,
  problemText: `Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.`,
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
      evaluate: `find_successor(root, 12).val;`,
      expected: 7,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: ``,
      evaluate: `find_successor(root, 9).val;`,
      expected: 10,
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
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution,
};
