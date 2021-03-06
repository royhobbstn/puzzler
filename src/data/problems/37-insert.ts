import { BINARY_SEARCH_TREE, DATA_STRUCTURE } from '../constants';

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
  { stage: 1, text: '  insert(value) {' },
  { stage: 2, text: '    const thisNode = new BinarySearchTreeNode(value);' },
  { stage: 3, text: '    if (!this.root) {' },
  { stage: 4, text: '      this.root = thisNode;' },
  { stage: 3, text: '    } else {' },
  { stage: 4, text: '      let currentRoot = this.root;' },
  { stage: 4, text: '      while (true) {' },
  { stage: 5, text: '        if (currentRoot.value > value) {' },
  { stage: 6, text: '          if (currentRoot.left != null) {' },
  { stage: 7, text: '            currentRoot = currentRoot.left;' },
  { stage: 6, text: '          } else {' },
  { stage: 7, text: '            currentRoot.left = thisNode;' },
  { stage: 7, text: '            break;' },
  { stage: 6, text: '          }' },
  { stage: 5, text: '        } else if (currentRoot.value < value) {' },
  { stage: 8, text: '          if (currentRoot.right != null) {' },
  { stage: 9, text: '            currentRoot = currentRoot.right;' },
  { stage: 8, text: '          } else {' },
  { stage: 9, text: '            currentRoot.right = thisNode;' },
  { stage: 9, text: '            break;' },
  { stage: 8, text: '          }' },
  { stage: 5, text: '        } else {' },
  { stage: 9, text: '          break;' },
  { stage: 5, text: '        }' },
  { stage: 4, text: '      }' },
  { stage: 3, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 37,
  problemName: 'Implement **insert** in a *BinarySearchTree* class.',
  problemText:
    'Write an **insert** method in a *BinarySearchTree* class that accepts a `value` (integer) and inserts it at the proper place in the tree.',
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
      name: 'Insert value into empty tree.',
      inherit: [1],
      code: `tree.insert(5);`,
      evaluate: `tree.root.value;`,
      expected: 5,
    },
    {
      id: 3,
      name: 'Insert 2nd value.',
      inherit: [1, 2],
      code: `tree.insert(7);`,
      evaluate: `tree.root.right.value;`,
      expected: 7,
    },
    {
      id: 4,
      name: 'Insert 3rd value.',
      inherit: [1, 2, 3],
      code: `tree.insert(6);`,
      evaluate: `tree.root.right.left.value;`,
      expected: 6,
    },
    {
      id: 5,
      name: 'Insert 4th value.',
      inherit: [1, 2, 3, 4],
      code: `tree.insert(1);`,
      evaluate: `tree.root.left.value;`,
      expected: 1,
    },
    {
      id: 6,
      name: 'Insert 5th value.',
      inherit: [1, 2, 3, 4, 5],
      code: `tree.insert(2);`,
      evaluate: `tree.root.left.right.value;`,
      expected: 2,
    },
  ],
  setupCode: '',
  source: [],
  tags: [BINARY_SEARCH_TREE, DATA_STRUCTURE],
  solution,
};
