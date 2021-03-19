import { ALGORITHM, BINARY_TREE, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class TreeNode {' },
  { stage: -1, text: '  constructor(val) {' },
  { stage: -1, text: '    this.val = val;' },
  { stage: -1, text: '    this.left = null;' },
  { stage: -1, text: '    this.right = null;' },
  { stage: -1, text: '    this.next = null;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function connect_all_siblings(root) {' },
  { stage: 1, text: '  if (root === null) {' },
  { stage: 2, text: '    return;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const queue = [];' },
  { stage: 3, text: '  queue.push(root);' },
  { stage: 4, text: '  let currentNode = null;' },
  { stage: 4, text: '  let previousNode = null;' },
  { stage: 0, text: '' },
  { stage: 5, text: '  while (queue.length > 0) {' },
  { stage: 6, text: '    currentNode = queue.shift();' },
  { stage: 7, text: '    if (previousNode !== null) {' },
  { stage: 8, text: '      previousNode.next = currentNode;' },
  { stage: 7, text: '    }' },
  { stage: 0, text: '' },
  { stage: 9, text: '    previousNode = currentNode;' },
  { stage: 10, text: '    if (currentNode.left !== null) {' },
  { stage: 11, text: '      queue.push(currentNode.left);' },
  { stage: 10, text: '    }' },
  { stage: 12, text: '    if (currentNode.right !== null) {' },
  { stage: 13, text: '      queue.push(currentNode.right);' },
  { stage: 12, text: '    }' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 147,
  problemName: `Connect All Level Order Siblings`,
  problemText: `Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.`,
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
      connect_all_siblings(root);`,
      evaluate: `printTree(root);`,
      expected: JSON.stringify([12, 7, 1, 9, 10, 5]),
    },
  ],
  setupCode: `
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  }
  
  function printTree(root) {
    const arr = [];
    let current = root;
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  `,
  source: [],
  tags: [INTERMEDIATE, BINARY_TREE, ALGORITHM],
  solution,
};
