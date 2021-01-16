import { BINARY_SEARCH_TREE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

const solution = [
  { stage: 0, text: 'class BinarySearchTreeNode {' },
  { stage: 0, text: '  constructor(value) {' },
  { stage: 0, text: '    this.value = value;' },
  { stage: 0, text: '    this.left = null;' },
  { stage: 0, text: '    this.right = null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class BinarySearchTree {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.root = null;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  traverseLevelOrderBfs(node = this.root, callback = this.callback) {' },
  { stage: 1, text: '    const queue = [];' },
  { stage: 1, text: '    if (!node) {' },
  { stage: 1, text: '      return;' },
  { stage: 1, text: '    }' },
  { stage: 2, text: '    queue.push(node);' },
  { stage: 2, text: '    while (queue.length) {' },
  { stage: 3, text: '      const temp = queue.shift();' },
  { stage: 3, text: '      callback(temp.value);' },
  { stage: 4, text: '      if (temp.left) {' },
  { stage: 4, text: '        queue.push(temp.left);' },
  { stage: 4, text: '      }' },
  { stage: 5, text: '      if (temp.right) {' },
  { stage: 5, text: '        queue.push(temp.right);' },
  { stage: 5, text: '      }' },
  { stage: 2, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 46,
  problemName: 'Implement `traverseLevelOrderBfs` in a Binary Search Tree',
  problemText:
    'Write a **traverseLevelOrderBfs** method in a BinarySearchTree Class that traverses a tree **iteratively** and runs the supplied `callback` function on each node value.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const tree=new BinarySearchTree();`,
      evaluate: `tree;`,
      expected: `{"head":null,"tail":null}`,
    },
  ],
  setupCode: `
  BinarySearchTree.prototype.tempNodeList = [];
  BinarySearchTree.prototype.callback = function (value) {
    BinarySearchTree.prototype.tempNodeList.push(value);
  };
  BinarySearchTree.prototype.clearTempNodeList = function (value) {
    BinarySearchTree.prototype.tempNodeList = [];
  };
  `,
  category: BINARY_SEARCH_TREE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150],
    solutionLines: solution,
  },
};
