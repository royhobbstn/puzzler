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
  { stage: -1, text: '// IMPLEMENTED  callback(value)' },
  { stage: -1, text: '' },
  { stage: 0, text: '  traversePostOrderRecursive(node = this.root, callback = this.callback) {' },
  { stage: 1, text: '    if (node.left) {' },
  { stage: 1, text: '      this.traversePostOrderRecursive(node.left);' },
  { stage: 1, text: '    }' },
  { stage: 2, text: '    if (node.right) {' },
  { stage: 2, text: '      this.traversePostOrderRecursive(node.right);' },
  { stage: 2, text: '    }' },
  { stage: 0, text: '' },
  { stage: 3, text: '    callback(node.value);' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 45,
  problemName: 'Implement **traversePostOrderRecursive** in a *BinarySearchTree* class.',
  problemText:
    'Write a **traversePostOrderRecursive** method in a *BinarySearchTree* class that traverses a tree recursively and runs the supplied `callback` function on each node value.',
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
      name: 'proper post-order ranking',
      inherit: [1],
      code: `tree.insert(5);tree.insert(3);tree.insert(11);tree.insert(0);tree.insert(7);tree.insert(2);tree.traversePostOrderRecursive();`,
      evaluate: `JSON.stringify(tree.tempNodeList);`,
      expected: JSON.stringify([2, 0, 3, 7, 11, 5]),
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
  tags: [BEGINNER, BINARY_SEARCH_TREE, DATA_STRUCTURE],
  solution,
};
