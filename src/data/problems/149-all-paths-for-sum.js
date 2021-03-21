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
  { stage: 0, text: 'function find_paths(root, sum) {' },
  { stage: 1, text: '  const allPaths = [];' },
  { stage: 2, text: '  find_paths_recursive(root, sum, [], allPaths);' },
  { stage: 3, text: '  return allPaths;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 4, text: 'function find_paths_recursive(currentNode, sum, currentPath, allPaths) {' },
  { stage: 5, text: '  if (currentNode === null) {' },
  { stage: 6, text: '    return;' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  currentPath.push(currentNode.val);' },
  { stage: 0, text: '' },
  {
    stage: 8,
    text:
      '  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {',
  },
  { stage: 9, text: '    allPaths.push(JSON.parse(JSON.stringify(currentPath)));' },
  { stage: 8, text: '  } else {' },
  {
    stage: 10,
    text:
      '    find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);',
  },
  {
    stage: 11,
    text:
      '    find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);',
  },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  currentPath.pop();' },
  { stage: 4, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 149,
  problemName: `All Paths for a Sum`,
  problemText: `Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const root = new TreeNode(12);
      root.left = new TreeNode(7);
      root.right = new TreeNode(1);
      root.left.left = new TreeNode(4);
      root.right.left = new TreeNode(10);
      root.right.right = new TreeNode(5);`,
      evaluate: `printPaths(find_paths(root, 23));`,
      expected: JSON.stringify([
        [12, 7, 4],
        [12, 1, 10],
      ]),
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
