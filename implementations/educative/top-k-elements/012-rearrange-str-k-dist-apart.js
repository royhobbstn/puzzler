// Rearrange String K Distance Apart

// Given a string and a number ‘K’, find if the string can be rearranged such that the same characters are at least ‘K’ distance apart from each other.

import Heap from '../../data-structures/Heap.js';

function reorganize_string(str, k) {
  if (k <= 1) {
    return str;
  }

  const charFrequencyMap = {};
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (!(chr in charFrequencyMap)) {
      charFrequencyMap[chr] = 1;
    } else {
      charFrequencyMap[chr]++;
    }
  }

  const maxHeap = new Heap((a, b) => a[0] >= b[0]);
  // add all characters to the max heap
  Object.keys(charFrequencyMap).forEach(char => {
    maxHeap.add([charFrequencyMap[char], char]);
  });

  const queue = [];
  const resultString = [];
  while (maxHeap.length() > 0) {
    let [frequency, char] = maxHeap.poll();
    // append the current character to the result string and decrement its count
    resultString.push(char);
    // decrement the frequency and append to the queue
    queue.push([char, frequency - 1]);
    if (queue.length === k) {
      [char, frequency] = queue.shift();
      if (frequency > 0) {
        maxHeap.add([frequency, char]);
      }
    }
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join('');
  }
  return '';
}

console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`);
console.log(`Reorganized string: ${reorganize_string('Programming', 3)}`);
console.log(`Reorganized string: ${reorganize_string('aab', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aapa', 3)}`);

// Reorganized string: mpmp
// Reorganized string: rmgormgaPni
// Reorganized string: aba
// Reorganized string:
