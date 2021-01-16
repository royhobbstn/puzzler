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
  { stage: 0, text: '  traversePreOrderIterative(node = this.root, callback = this.callback) {' },
  { stage: 1, text: '    const nodeStack = [];' },
  { stage: 1, text: '    nodeStack.push(node);' },
  { stage: 1, text: '' },
  { stage: 2, text: '    while (nodeStack.length) {' },
  { stage: 3, text: '      let next = nodeStack.pop();' },
  { stage: 3, text: '      callback(next.value);' },
  { stage: 4, text: '      if (next.right) {' },
  { stage: 4, text: '        nodeStack.push(next.right);' },
  { stage: 4, text: '      }' },
  { stage: 5, text: '      if (next.left) {' },
  { stage: 5, text: '        nodeStack.push(next.left);' },
  { stage: 5, text: '      }' },
  { stage: 2, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 40,
  problemName: 'Implement `traversePreOrderIterative` in a Binary Search Tree',
  problemText:
    'Write a **traversePreOrderIterative** method in a BinarySearchTree Class that traverses a tree **iteratively** and runs the supplied `callback` function on each node value.',
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
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
