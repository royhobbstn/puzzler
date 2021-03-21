import { ALGORITHM, DFS } from '../constants.js';

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
  { stage: 0, text: 'class TreeDiameter {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.treeDiameter = 0;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  find_diameter(root) {' },
  { stage: 0, text: '    this.calculate_height(root);' },
  { stage: 0, text: '    return this.treeDiameter;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  calculate_height(currentNode) {' },
  { stage: 1, text: '    if (currentNode === null) {' },
  { stage: 2, text: '      return 0;' },
  { stage: 1, text: '    }' },
  { stage: 0, text: '' },
  { stage: 3, text: '    const leftTreeHeight = this.calculate_height(currentNode.left);' },
  { stage: 4, text: '    const rightTreeHeight = this.calculate_height(currentNode.right);' },
  { stage: 0, text: '' },
  { stage: 5, text: '    if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {' },
  { stage: 6, text: '      const diameter = leftTreeHeight + rightTreeHeight + 1;' },
  { stage: 7, text: '      this.treeDiameter = Math.max(this.treeDiameter, diameter);' },
  { stage: 5, text: '    }' },
  { stage: 0, text: '' },
  { stage: 8, text: '    return Math.max(leftTreeHeight, rightTreeHeight) + 1;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 153,
  problemName: `Tree Diameter`,
  problemText: `Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

  Note: You can always assume that there are at least two leaf nodes in the given tree.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const treeDiameter = new TreeDiameter();
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);
      root.right.left = new TreeNode(5);
      root.right.right = new TreeNode(6);`,
      evaluate: `treeDiameter.find_diameter(root);`,
      expected: 5,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `root.left.left = null;
      root.right.left.left = new TreeNode(7);
      root.right.left.right = new TreeNode(8);
      root.right.right.left = new TreeNode(9);
      root.right.left.right.left = new TreeNode(10);
      root.right.right.left.left = new TreeNode(11);`,
      evaluate: `treeDiameter.find_diameter(root);`,
      expected: 7,
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
  source: [],
  tags: [DFS, ALGORITHM],
  solution,
};
