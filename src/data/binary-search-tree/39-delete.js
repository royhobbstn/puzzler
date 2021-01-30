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
  { stage: 1, text: '  delete(value) {' },
  { stage: 2, text: '    this.root = deleteRecursively(this.root, value);' },
  { stage: 2, text: '' },
  { stage: 2, text: '    function deleteRecursively(root, value) {' },
  { stage: 3, text: '      if (!root) {' },
  { stage: 4, text: '        return null;' },
  { stage: 3, text: '      } else if (value < root.value) {' },
  { stage: 4, text: '        root.left = deleteRecursively(root.left, value);' },
  { stage: 3, text: '      } else if (value > root.value) {' },
  { stage: 5, text: '        root.right = deleteRecursively(root.right, value);' },
  { stage: 3, text: '      } else {' },
  { stage: 6, text: '        if (!root.left && !root.right) {' },
  { stage: 7, text: '          return null;' },
  { stage: 6, text: '        } else if (!root.left) {' },
  { stage: 7, text: '          root = root.right;' },
  { stage: 7, text: '          return root;' },
  { stage: 6, text: '        } else if (!root.right) {' },
  { stage: 8, text: '          root = root.left;' },
  { stage: 8, text: '          return root;' },
  { stage: 6, text: '        } else {' },
  { stage: 8, text: '          const temp = findMin(root.right);' },
  { stage: 10, text: '          root.value = temp.value;' },
  { stage: 10, text: '          root.right = deleteRecursively(root.right, temp.value);' },
  { stage: 10, text: '          return root;' },
  { stage: 6, text: '        }' },
  { stage: 3, text: '      }' },
  { stage: 5, text: '      return root;' },
  { stage: 2, text: '    }' },
  { stage: 9, text: '' },
  { stage: 8, text: '    function findMin(root) {' },
  { stage: 9, text: '      while (root.left) {' },
  { stage: 9, text: '        root = root.left;' },
  { stage: 9, text: '      }' },
  { stage: 9, text: '      return root;' },
  { stage: 8, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 39,
  problemName: 'Implement **delete** in a *BinarySearchTree* class.',
  problemText:
    'Write a **delete** method in a *BinarySearchTree* class that accepts an integer `value` and deletes it from a tree, while maintaining a valid Binary Search Tree structure.',
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
      name: 'delete on empty tree, no crash',
      inherit: [1],
      code: `tree.delete(5);`,
      evaluate: `Boolean(tree);`,
      expected: true,
    },
    {
      id: 3,
      name: 'insert an item into tree.  delete it. find it.',
      inherit: [1],
      code: `tree.insert(5);tree.delete(5);`,
      evaluate: `tree.search(5);`,
      expected: false,
    },
    {
      id: 4,
      name: 'insert two items into tree.  delete one. find the other.',
      inherit: [1],
      code: `tree.insert(5);tree.insert(6);tree.delete(5);`,
      evaluate: `tree.search(6);`,
      expected: true,
    },
    {
      id: 5,
      name: 'find the deleted of task #4.',
      inherit: [1, 4],
      code: ``,
      evaluate: `tree.search(5);`,
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
  BinarySearchTree.prototype.search = function(value) {
    let currentRoot = this.root;
    let found = false;
    while (currentRoot) {
      if (currentRoot.value > value) {
        currentRoot = currentRoot.left;
      } else if (currentRoot.value < value) {
        currentRoot = currentRoot.right;
      } else {
        found = true;
        break;
      }
    }
    return found;
  };
  `,
  category: BINARY_SEARCH_TREE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 330],
    solutionLines: solution,
  },
};
