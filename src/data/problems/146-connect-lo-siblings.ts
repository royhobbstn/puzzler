import { ALGORITHM, BINARY_TREE } from '../constants';

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
  { stage: 0, text: 'function connect_level_order_siblings(root) {' },
  { stage: 1, text: '  if (root === null) {' },
  { stage: 2, text: '    return;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const queue = [];' },
  { stage: 3, text: '  queue.push(root);' },
  { stage: 4, text: '  while (queue.length > 0) {' },
  { stage: 5, text: '    let previousNode = null;' },
  { stage: 5, text: '    let levelSize = queue.length;' },
  { stage: 0, text: '' },
  { stage: 6, text: '    for (let i = 0; i < levelSize; i++) {' },
  { stage: 7, text: '      let currentNode = queue.shift();' },
  { stage: 8, text: '      if (previousNode !== null) {' },
  { stage: 9, text: '        previousNode.next = currentNode;' },
  { stage: 8, text: '      }' },
  { stage: 0, text: '' },
  { stage: 10, text: '      previousNode = currentNode;' },
  { stage: 11, text: '      if (currentNode.left !== null) {' },
  { stage: 12, text: '        queue.push(currentNode.left);' },
  { stage: 11, text: '      }' },
  { stage: 13, text: '      if (currentNode.right !== null) {' },
  { stage: 14, text: '        queue.push(currentNode.right);' },
  { stage: 13, text: '      }' },
  { stage: 0, text: '' },
  { stage: 6, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 146,
  problemName: `Connect Level Order Siblings`,
  problemText: `Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.`,
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
      connect_level_order_siblings(root);`,
      evaluate: `printLevelOrder(root);`,
      expected: JSON.stringify([[12], [7, 1], [9, 10, 5]]),
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
  
  function printLevelOrder(root) {
    const arr = [];
    let nextLevelRoot = root;
    while (nextLevelRoot !== null) {
      let temp = [];
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        temp.push(current.val);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      arr.push(temp);
    }
    return arr;
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03'],
  tags: [BINARY_TREE, ALGORITHM],
  solution,
};
