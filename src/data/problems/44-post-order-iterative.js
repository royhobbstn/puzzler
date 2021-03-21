import { BINARY_SEARCH_TREE, DATA_STRUCTURE } from '../constants.js';
import { BST_PROTOTYPE_INSERT, BST_TEMP_NODELIST } from '../code-imports/import-index.js';

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
  problemName: 'Implement **traversePostOrderIterative** in a *BinarySearchTree* class.',
  problemText:
    'Write a **traversePostOrderIterative** method in a *BinarySearchTree* class that traverses a tree iteratively and runs the supplied `callback` function on each node value.',
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
      code: `tree.insert(5);tree.insert(3);tree.insert(11);tree.insert(0);tree.insert(7);tree.insert(2);tree.traversePostOrderIterative();`,
      evaluate: `JSON.stringify(tree.tempNodeList);`,
      expected: JSON.stringify([2, 0, 3, 7, 11, 5]),
    },
  ],
  setupCode: `${BST_TEMP_NODELIST} ${BST_PROTOTYPE_INSERT}`,
  source: [],
  tags: [BINARY_SEARCH_TREE, DATA_STRUCTURE],
  solution,
};
