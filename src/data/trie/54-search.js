import { TRIE, DATA_STRUCTURE, INTERMEDIATE } from '../constants.js';

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
  { stage: 1, text: '  search(word) {' },
  { stage: 2, text: '    let current = this.root;' },
  { stage: 2, text: '    for (let i = 0; i < word.length; i++) {' },
  { stage: 3, text: '      const ch = word.charAt(i);' },
  { stage: 3, text: '      const node = current.children[ch];' },
  { stage: 4, text: '      if (node == null) {' },
  { stage: 4, text: '        return false;' },
  { stage: 4, text: '      }' },
  { stage: 5, text: '      current = node;' },
  { stage: 2, text: '    }' },
  { stage: 5, text: '    return current.endOfWord;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 54,
  problemName: `Implement the **search** method for a *Trie* class.`,
  problemText: `Implement a **search** method that takes in a \`word\` (string) and returns a boolean \`true\` or \`false\` depending on if it can be found in the Trie.`,
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
      name: 'nothing in trie should return false on search',
      inherit: [1],
      code: ``,
      evaluate: `trie.search('');`,
      expected: false,
    },
    {
      id: 3,
      name: 'insert word, search true',
      inherit: [1],
      code: `trie.insert('daniel');`,
      evaluate: `trie.search('daniel');`,
      expected: true,
    },
    {
      id: 4,
      name: 'insert word, search half of that word.  return false',
      inherit: [1, 3],
      code: ``,
      evaluate: `trie.search('dan');`,
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
  `,
  category: TRIE,
  type: DATA_STRUCTURE,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 180],
    solutionLines: solution,
  },
};
