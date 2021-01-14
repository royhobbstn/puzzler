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
  { stage: 0, text: '  insert(word) {' },
  { stage: 0, text: '    let current = this.root;' },
  { stage: 0, text: '    for (let i = 0; i < word.length; i++) {' },
  { stage: 0, text: '      const ch = word.charAt(i);' },
  { stage: 0, text: '      let node = current.children[ch];' },
  { stage: 0, text: '      if (node == null) {' },
  { stage: 0, text: '        node = new TrieNode();' },
  { stage: 0, text: '        current.children[ch] = node;' },
  { stage: 0, text: '      }' },
  { stage: 0, text: '      current = node;' },
  { stage: 0, text: '    }' },
  { stage: 0, text: '    current.endOfWord = true;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 53,
  problemName: `Implement the insert method for a Trie class.`,
  problemText: `Implement an insert method that takes a word (string) as a parameter, with no return value.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const trie=new Trie();`,
      evaluate: `trie;`,
      expected: `{"head":null,"tail":null}`,
    },
  ],
  setupCode: '',
  category: TRIE,
  type: DATA_STRUCTURE,
  difficulty: BEGINNER,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 120],
    solutionLines: solution,
  },
};
