export const triePrototypeSearch = `
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
`;

export const triePrototypeInsert = `
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
`;
