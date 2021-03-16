// Frequency Sort

// Given a string, sort it based on the decreasing frequency of its characters.

import Heap from '../../data-structures/Heap.js';

function sort_character_by_frequency(str) {
  // find the frequency of each character
  const charFrequencyMap = {};
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (chr in charFrequencyMap) {
      charFrequencyMap[chr]++;
    } else {
      charFrequencyMap[chr] = 1;
    }
  }

  // add all characters to the max heap
  const maxHeap = new Heap((a, b) => a[0] >= b[0]);
  Object.keys(charFrequencyMap).forEach(key => {
    maxHeap.add([charFrequencyMap[key], key]);
  });

  // build a string, appending the most occurring characters first
  const sortedString = [];
  while (maxHeap.length() > 0) {
    let [frequency, char] = maxHeap.poll();
    for (let i = 0; i < frequency; i++) {
      sortedString.push(char);
    }
  }
  return sortedString.join('');
}

console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency('Programming')}`,
);
// String after sorting characters by frequency: rrmmggoniaP  (some variance here)

console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency('abcbab')}`,
);
// String after sorting characters by frequency: bbbaac
