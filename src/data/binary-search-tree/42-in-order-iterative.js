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
  { stage: 0, text: '  traverseInOrderIterative(node = this.root, callback = this.callback) {' },
  { stage: 1, text: '    let stack = [];' },
  { stage: 1, text: '    let done = false;' },
  { stage: 1, text: '' },
  { stage: 2, text: '    while (!done) {' },
  { stage: 3, text: '      if (node != null) {' },
  { stage: 4, text: '        stack.push(node);' },
  { stage: 4, text: '        node = node.left;' },
  { stage: 3, text: '      } else {' },
  { stage: 5, text: '        if (stack.length) {' },
  { stage: 6, text: '          node = stack.pop();' },
  { stage: 6, text: '          callback(node.value);' },
  { stage: 7, text: '          node = node.right;' },
  { stage: 5, text: '        } else {' },
  { stage: 7, text: '          done = true;' },
  { stage: 5, text: '        }' },
  { stage: 3, text: '      }' },
  { stage: 2, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 42,
  problemName: 'Implement `traverseInOrderIterative` in a Binary Search Tree',
  problemText:
    'Write a **traverseInOrderIterative** method in a BinarySearchTree Class that traverses a tree **iteratively** and runs the supplied `callback` function on each node value.',
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
    stages: [0, 30, 60, 90, 120, 150, 180, 240],
    solutionLines: solution,
  },
};
