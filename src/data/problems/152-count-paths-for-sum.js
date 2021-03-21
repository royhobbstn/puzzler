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
  { stage: 0, text: 'function count_paths(root, S) {' },
  { stage: 0, text: '' },
  { stage: 1, text: '  return count_paths_recursive(root, S, []);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 2, text: 'function count_paths_recursive(currentNode, S, currentPath) {' },
  { stage: 3, text: '  if (currentNode === null) {' },
  { stage: 4, text: '    return 0;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  currentPath.push(currentNode.val);' },
  { stage: 6, text: '  let pathCount = 0;' },
  { stage: 6, text: '  let pathSum = 0;' },
  { stage: 0, text: '' },
  { stage: 7, text: '  for (let i = currentPath.length - 1; i >= 0; i--) {' },
  { stage: 8, text: '    pathSum += currentPath[i];' },
  { stage: 9, text: '    if (pathSum === S) {' },
  { stage: 10, text: '      pathCount += 1;' },
  { stage: 9, text: '    }' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  pathCount += count_paths_recursive(currentNode.left, S, currentPath);' },
  { stage: 12, text: '  pathCount += count_paths_recursive(currentNode.right, S, currentPath);' },
  { stage: 0, text: '' },
  { stage: 13, text: '  currentPath.pop();' },
  { stage: 14, text: '  return pathCount;' },
  { stage: 2, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 152,
  problemName: `Count Paths for a Sum`,
  problemText: `Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).`,
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
      evaluate: `count_paths(root, 11);`,
      expected: 2,
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/xV2J7jvN1or'],
  tags: [DFS, ALGORITHM],
  solution,
};
