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
  { stage: 1, text: '  search(value) {' },
  { stage: 2, text: '    let currentRoot = this.root;' },
  { stage: 2, text: '    let found = false;' },
  { stage: 3, text: '    while (currentRoot) {' },
  { stage: 4, text: '      if (currentRoot.value > value) {' },
  { stage: 5, text: '        currentRoot = currentRoot.left;' },
  { stage: 4, text: '      } else if (currentRoot.value < value) {' },
  { stage: 5, text: '        currentRoot = currentRoot.right;' },
  { stage: 4, text: '      } else {' },
  { stage: 6, text: '        found = true;' },
  { stage: 6, text: '        break;' },
  { stage: 4, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 3, text: '    return found;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 38,
  problemName: 'Implement **search** in a *BinarySearchTree* class.',
  problemText:
    'Write a **search** method in a *BinarySearchTree* class that accepts a `value` (integer) and returns a boolean `true` or `false` indicating whether that integer is found within the tree.',
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
      name: 'search an empty tree returns false',
      inherit: [1],
      code: ``,
      evaluate: `tree.search(5);`,
      expected: false,
    },
    {
      id: 3,
      name: 'search a tree finds value',
      inherit: [1],
      code: `tree.insert(5);`,
      evaluate: `tree.search(5);`,
      expected: true,
    },
    {
      id: 4,
      name: 'search a tree does not find value',
      inherit: [1],
      code: `tree.insert(5);`,
      evaluate: `tree.search(2);`,
      expected: false,
    },
    {
      id: 5,
      name: 'complex tree, found (1)',
      inherit: [1],
      code: `tree.insert(5);tree.insert(7);tree.insert(6);tree.insert(1);tree.insert(2);`,
      evaluate: `tree.search(6);`,
      expected: true,
    },
    {
      id: 6,
      name: 'complex tree, found (2)',
      inherit: [1, 5],
      code: ``,
      evaluate: `tree.search(1);`,
      expected: true,
    },
    {
      id: 7,
      name: 'complex tree, not found (1)',
      inherit: [1, 5],
      code: ``,
      evaluate: `tree.search(8);`,
      expected: false,
    },
    {
      id: 8,
      name: 'complex tree, not found (2)',
      inherit: [1, 5],
      code: ``,
      evaluate: `tree.search(4);`,
      expected: false,
    },
  ],
  setupCode: `
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
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 210],
    solutionLines: solution,
  },
};
