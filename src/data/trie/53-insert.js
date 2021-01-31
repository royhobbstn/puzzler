import { TRIE, DATA_STRUCTURE, BEGINNER } from '../constants.js';

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
  { stage: 1, text: '  insert(word) {' },
  { stage: 2, text: '    let current = this.root;' },
  { stage: 2, text: '    for (let i = 0; i < word.length; i++) {' },
  { stage: 3, text: '      const ch = word.charAt(i);' },
  { stage: 3, text: '      let node = current.children[ch];' },
  { stage: 4, text: '      if (node == null) {' },
  { stage: 5, text: '        node = new TrieNode();' },
  { stage: 5, text: '        current.children[ch] = node;' },
  { stage: 4, text: '      }' },
  { stage: 6, text: '      current = node;' },
  { stage: 2, text: '    }' },
  { stage: 6, text: '    current.endOfWord = true;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 53,
  problemName: `Implement the **insert** method for a *Trie* class.`,
  problemText: `Implement an **insert** method that takes a \`word\` (string) as a parameter, with no return value.`,
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
      name: 'insert word, search true',
      inherit: [1],
      code: `trie.insert('daniel');`,
      evaluate: `trie.search('daniel');`,
      expected: true,
    },
    {
      id: 3,
      name: 'insert word, search half of that word.  return false',
      inherit: [1, 2],
      code: ``,
      evaluate: `trie.search('dan');`,
      expected: false,
    },
  ],
  setupCode: `
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
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 210],
    solutionLines: solution,
  },
};
