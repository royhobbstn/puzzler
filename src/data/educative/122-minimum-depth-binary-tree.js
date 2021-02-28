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
  { stage: 0, text: 'function find_minimum_depth(root) {' },
  { stage: 1, text: '  if (root === null) {' },
  { stage: 1, text: '    return 0;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  const queue = [];' },
  { stage: 2, text: '  queue.push(root);' },
  { stage: 3, text: '  let minimumTreeDepth = 0;' },
  { stage: 4, text: '  while (queue.length > 0) {' },
  { stage: 5, text: '    minimumTreeDepth += 1;' },
  { stage: 5, text: '    let levelSize = queue.length;' },
  { stage: 6, text: '    for (let i = 0; i < levelSize; i++) {' },
  { stage: 7, text: '      let currentNode = queue.shift();' },
  { stage: 8, text: '      if (currentNode.left === null && currentNode.right === null) {' },
  { stage: 9, text: '        return minimumTreeDepth;' },
  { stage: 8, text: '      }' },
  { stage: 0, text: '' },
  { stage: 10, text: '      if (currentNode.left !== null) {' },
  { stage: 10, text: '        queue.push(currentNode.left);' },
  { stage: 10, text: '      }' },
  { stage: 11, text: '      if (currentNode.right !== null) {' },
  { stage: 11, text: '        queue.push(currentNode.right);' },
  { stage: 11, text: '      }' },
  { stage: 6, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return 0;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 122,
  problemName: `Minimum Depth Binary Tree`,
  problemText: `Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const root = new TreeNode(12);
      root.left = new TreeNode(7);
      root.right = new TreeNode(1);
      root.right.left = new TreeNode(10);
      root.right.right = new TreeNode(5);`,
      evaluate: `find_minimum_depth(root);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `root.left.left = new TreeNode(9);
      root.right.left.left = new TreeNode(11);`,
      evaluate: `find_minimum_depth(root);`,
      expected: 3,
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
  category: TEMP,
  type: ALGORITHM,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 390],
    solutionLines: solution,
  },
};
