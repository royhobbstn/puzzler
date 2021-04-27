import { ALGORITHM, BINARY_TREE, DFS, RECURSION } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class TreeNode {' },
  { stage: -1, text: '  constructor(val, left = null, right = null) {' },
  { stage: -1, text: '    this.val = val;' },
  { stage: -1, text: '    this.left = left;' },
  { stage: -1, text: '    this.right = right;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_path(root, sequence) {' },
  { stage: 1, text: '  if (root === null) {' },
  {
    stage: -2,
    text: '    // we can still return true if the sequence is empty and the root is null',
  },
  { stage: 2, text: '    return sequence.length === 0;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  {
    stage: -3,
    text:
      "  // last argument is the sequenceIndex, the particular character in 'sequence' that we're looking for",
  },
  { stage: 3, text: '  return find_path_recursive(root, sequence, 0);' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 4, text: 'function find_path_recursive(currentNode, sequence, sequenceIndex) {' },
  { stage: 0, text: '' },
  { stage: -5, text: '  // base case: we were looking for a character, but the node is null' },
  { stage: 5, text: '  if (currentNode === null) {' },
  { stage: 6, text: '    return false;' },
  { stage: 5, text: '  }' },
  { stage: 0, text: '' },
  { stage: 7, text: '  const seqLen = sequence.length;' },
  { stage: 0, text: '' },
  { stage: -8, text: '  // if sequenceIndex exceeds the length of sequence, we can return early' },
  {
    stage: -8,
    text:
      '  // if the character found is not the same as the character at the sequenceIndex, we can also return early',
  },
  {
    stage: 8,
    text: '  if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {',
  },
  { stage: 9, text: '    return false;' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  {
    stage: -10,
    text: '  // give we have the correct character at the correct index, if it is a leaf node, and',
  },
  {
    stage: -10,
    text:
      '  // if the sequenceIndex is the last chacter of the sequence, then a match has been found',
  },
  {
    stage: 10,
    text:
      '  if (currentNode.left === null && currentNode.right === null && sequenceIndex === seqLen - 1) {',
  },
  { stage: 11, text: '    return true;' },
  { stage: 10, text: '  }' },
  { stage: 0, text: '' },
  {
    stage: -12,
    text:
      '  // otherwise, explore the left and right subtrees, making sure to increment the sequenceIndex',
  },
  { stage: 12, text: '  return (' },
  { stage: 13, text: '    find_path_recursive(currentNode.left, sequence, sequenceIndex + 1) ||' },
  { stage: 13, text: '    find_path_recursive(currentNode.right, sequence, sequenceIndex + 1)' },
  { stage: 12, text: '  );' },
  { stage: 4, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 151,
  problemName: `Path With Given Sequence`,
  problemText: `Given a binary tree and a number sequence (array), find if the sequence is present as a root-to-leaf path in the given tree.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const root = new TreeNode(1);
      root.left = new TreeNode(0);
      root.right = new TreeNode(1);
      root.left.left = new TreeNode(1);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(5);`,
      evaluate: `find_path(root, [1, 0, 7]);`,
      expected: false,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: ``,
      evaluate: `find_path(root, [1, 1, 6]);`,
      expected: true,
    },
  ],
  setupCode: `
  class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/m280XNlPOkn'],
  tags: [DFS, ALGORITHM, RECURSION, BINARY_TREE],
  solution,
};
