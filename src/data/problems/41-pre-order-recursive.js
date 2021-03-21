import { BST_PROTOTYPE_INSERT, BST_TEMP_NODELIST } from '../code-imports/import-index.js';
import { BINARY_SEARCH_TREE, DATA_STRUCTURE } from '../constants.js';

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
  { stage: 0, text: '  traversePreOrderRecursive(node = this.root, callback = this.callback) {' },
  { stage: 1, text: '    if (!node) {' },
  { stage: 1, text: '      return;' },
  { stage: 0, text: '    }' },
  { stage: 2, text: '    callback(node.value);' },
  { stage: 3, text: '    this.traversePreOrderRecursive(node.left);' },
  { stage: 3, text: '    this.traversePreOrderRecursive(node.right);' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 41,
  problemName: 'Implement **traversePreOrderRecursive** in a *BinarySearchTree* class.',
  problemText:
    'Write a **traversePreOrderRecursive** method in a *BinarySearchTree* class that traverses a tree recursively and runs the supplied `callback` function on each node value.',
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
      name: 'proper pre-order ranking',
      inherit: [1],
      code: `tree.insert(5);tree.insert(3);tree.insert(11);tree.insert(0);tree.insert(7);tree.insert(2);tree.traversePreOrderRecursive();`,
      evaluate: `JSON.stringify(tree.tempNodeList);`,
      expected: JSON.stringify([5, 3, 0, 2, 11, 7]),
    },
  ],
  setupCode: `${BST_TEMP_NODELIST} ${BST_PROTOTYPE_INSERT}`,
  source: [],
  tags: [BINARY_SEARCH_TREE, DATA_STRUCTURE],
  solution,
};
