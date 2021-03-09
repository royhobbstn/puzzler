import { BINARY_SEARCH_TREE, DATA_STRUCTURE, ADVANCED } from '../constants.js';

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
  { stage: -1, text: '// IMPLEMENTED  callback(value)' },
  { stage: -1, text: '' },
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
  problemName: 'Implement **traverseInOrderIterative** in a *BinarySearchTree* class.',
  problemText:
    'Write a **traverseInOrderIterative** method in a *BinarySearchTree* class that traverses a tree iteratively and runs the supplied `callback` function on each node value.',
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
      name: 'proper in-order ranking',
      inherit: [1],
      code: `tree.insert(5);tree.insert(3);tree.insert(11);tree.insert(0);tree.insert(7);tree.insert(2);tree.traverseInOrderIterative();`,
      evaluate: `JSON.stringify(tree.tempNodeList);`,
      expected: JSON.stringify([0, 2, 3, 5, 7, 11]),
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
  tags: [ADVANCED, BINARY_SEARCH_TREE, DATA_STRUCTURE],
  solution,
};
