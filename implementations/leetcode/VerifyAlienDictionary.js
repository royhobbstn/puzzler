function isAlienSorted(words, order) {
  const index = {};
  for (let i = 0; i < order.length; i++) {
    index[order[i]] = i;
  }

  // Compare words
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    // Compare letters
    let breakLoop = false;
    for (let k = 0; k < Math.min(word1.length, word2.length); k++) {
      if (word1[k] !== word2[k]) {
        if (index[word1[k]] > index[word2[k]]) {
          return false;
        }
        breakLoop = true;
        break;
      }
    }

    if (breakLoop) {
      continue;
    }
    // If we didn't find a difference within available characters, compare by word size
    if (word1.length > word2.length) {
      return false;
    }
  }

  return true;
}

const words1 = ['hello', 'leetcode'];
const order1 = 'hlabcdefgijkmnopqrstuvwxyz';
console.log(isAlienSorted(words1, order1)); // true

const words2 = ['word', 'world', 'row'];
const order2 = 'worldabcefghijkmnpqstuvxyz';
console.log(isAlienSorted(words2, order2)); // false

const words3 = ['apple', 'app'];
const order3 = 'abcdefghijklmnopqrstuvwxyz'; // false
console.log(isAlienSorted(words3, order3));
