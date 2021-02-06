import { TRIE, DATA_STRUCTURE, ADVANCED } from '../constants.js';

const solution = [
  { stage: 0, text: 'class TrieNode {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.children = {};' },
  { stage: 0, text: '    this.endOfWord = false;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'class Trie {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 0, text: '    this.root = new TrieNode();' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 1, text: '  delete(word) {' },
  { stage: 2, text: '    deleteRecursively(this.root, word, 0);' },
  { stage: 2, text: '' },
  { stage: 2, text: '    function deleteRecursively(current, word, index) {' },
  { stage: 3, text: '      if (index === word.length) {' },
  { stage: 4, text: '        if (!current.endOfWord) {' },
  { stage: 4, text: '          return false;' },
  { stage: 4, text: '        }' },
  { stage: 5, text: '        current.endOfWord = false;' },
  { stage: 5, text: '        return Object.keys(current.children).length === 0;' },
  { stage: 3, text: '      }' },
  { stage: 6, text: '      const ch = word.charAt(index);' },
  { stage: 6, text: '      const node = current.children[ch];' },
  { stage: 7, text: '      if (node == null) {' },
  { stage: 7, text: '        return false;' },
  { stage: 7, text: '      }' },
  { stage: 8, text: '      const shouldDelete = deleteRecursively(node, word, index + 1);' },
  { stage: 8, text: '      if (shouldDelete) {' },
  { stage: 9, text: '        delete current.children[ch];' },
  { stage: 9, text: '        return Object.keys(current.children).length === 0;' },
  { stage: 8, text: '      }' },
  { stage: 9, text: '      return false;' },
  { stage: 2, text: '    }' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 55,
  problemName: `Implement the **delete** method for a *Trie* class.`,
  problemText: `Implement a **delete** method that takes in a \`word\` (string) and removes it from the Trie.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const trie=new Trie();`,
      evaluate: `Boolean(trie);`,
      expected: true,
    },
    {
      id: 2,
      name: 'insert, delete.  search is false.',
      inherit: [1],
      code: `trie.insert('daniel');trie.insert('david');trie.delete('daniel');`,
      evaluate: `trie.search('daniel');`,
      expected: false,
    },
    {
      id: 3,
      name: 'insert, delete.  search for non-deleted is true.',
      inherit: [1, 2],
      code: ``,
      evaluate: `trie.search('david');`,
      expected: true,
    },
    {
      id: 4,
      name: 'delete remaining word.  search should be false.',
      inherit: [1, 2],
      code: `trie.delete('david');`,
      evaluate: `trie.search('david');`,
      expected: false,
    },
  ],
  setupCode: `
  Trie.prototype.insert = function(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      let node = current.children[ch];
      if (node == null) {
        node = new TrieNode();
        current.children[ch] = node;
      }
      current = node;
    }
    current.endOfWord = true;
  };
  Trie.prototype.search = function(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      const node = current.children[ch];
      if (node == null) {
        return false;
      }
      current = node;
    }
    return current.endOfWord;
  };
  `,
  category: TRIE,
  type: DATA_STRUCTURE,
  difficulty: ADVANCED,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 300],
    solutionLines: solution,
  },
};
