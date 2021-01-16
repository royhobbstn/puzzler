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
  { stage: 0, text: '  callback(value) {' },
  { stage: 0, text: '    this.tempNodeList.push(value);' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  clearTempNodeList() {' },
  { stage: 0, text: '    this.tempNodeList = [];' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  traversePostOrderIterative(node = this.root, callback = this.callback) {' },
  { stage: 1, text: '    const s1 = [];' },
  { stage: 1, text: '    const s2 = [];' },
  { stage: 1, text: '    s1.push(node);' },
  { stage: 1, text: '' },
  { stage: 2, text: '    while (s1.length) {' },
  { stage: 3, text: '      const next = s1.pop();' },
  { stage: 3, text: '      s2.push(next);' },
  { stage: 3, text: '' },
  { stage: 4, text: '      if (next.left) {' },
  { stage: 4, text: '        s1.push(next.left);' },
  { stage: 4, text: '      }' },
  { stage: 5, text: '      if (next.right) {' },
  { stage: 5, text: '        s1.push(next.right);' },
  { stage: 5, text: '      }' },
  { stage: 2, text: '    }' },
  { stage: 6, text: '    while (s2.length) {' },
  { stage: 7, text: '      const next = s2.pop();' },
  { stage: 7, text: '      callback(next.value);' },
  { stage: 6, text: '    }' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 44,
  problemName: 'Implement `traversePostOrderIterative` in a Binary Search Tree',
  problemText:
    'Write a **traversePostOrderIterative** method in a BinarySearchTree Class that traverses a tree **iteratively** and runs the supplied `callback` function on each node value.',
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
