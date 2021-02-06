import { BINARY_SEARCH_TREE, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

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
  problemName: 'Implement a **traverseLevelOrderBfs** method in a *BinarySearchTree* class.',
  problemText:
    'Write a **traverseLevelOrderBfs** method in a *BinarySearchTree* class that traverses a tree iteratively and runs the supplied `callback` function on each node value.',
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const tree=new BinarySearchTree();`,
      evaluate: `Boolean(tree);`,
      expected: true,
    },
    {
      id: 2,
      name: 'proper bfs',
      inherit: [1],
      code: `tree.insert(5);tree.insert(3);tree.insert(11);tree.insert(0);tree.insert(7);tree.insert(2);tree.traverseLevelOrderBfs();`,
      evaluate: `JSON.stringify(tree.tempNodeList);`,
      expected: JSON.stringify([5, 3, 11, 0, 7, 2]),
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
  BinarySearchTree.prototype.insert = function(value) {
    const thisNode = new BinarySearchTreeNode(value);
    if (!this.root) {
      this.root = thisNode;
    } else {
      let currentRoot = this.root;
      while (true) {
        if (currentRoot.value > value) {
          if (currentRoot.left != null) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = thisNode;
            break;
          }
        } else if (currentRoot.value < value) {
          if (currentRoot.right != null) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = thisNode;
            break;
          }
        } else {
          break;
        }
      }
    }
  };
  `,
  category: BINARY_SEARCH_TREE,
  type: DATA_STRUCTURE,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150],
    solutionLines: solution,
  },
};
