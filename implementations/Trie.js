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

  delete(word) {
    deleteRecursively(this.root, word, 0);

    function deleteRecursively(current, word, index) {
      if (index === word.length) {
        if (!current.endOfWord) {
          return false;
        }
        current.endOfWord = false;
        return Object.keys(current.children).length === 0;
      }
      const ch = word.charAt(index);
      const node = current.children[ch];
      if (node == null) {
        return false;
      }
      const shouldDelete = deleteRecursively(node, word, index + 1);
      if (shouldDelete) {
        delete current.children[ch];
        return Object.keys(current.children).length === 0;
      }
      return false;
    }
  }
}

const trie = new Trie();
trie.insert('daniel');
trie.insert('david');
console.log(trie.search('') === false);
console.log(trie.search('dan') === false);
console.log(trie.search('daniel') === true);
trie.delete('daniel');
console.log(trie.search('daniel') === false);
console.log(trie.search('david') === true);
trie.delete('david');
console.log(trie.search('david') === false);
