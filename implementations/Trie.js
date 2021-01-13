class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
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
  }

  search(word) {
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
  }
}

const trie = new Trie();
trie.insert('daniel');
console.log(trie.search('') === false);
console.log(trie.search('dan') === false);
console.log(trie.search('daniel') === true);
