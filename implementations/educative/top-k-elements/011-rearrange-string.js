// Rearrange String

// Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

import Heap from '../../data-structures/Heap.js';

function rearrange_string(str) {
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

  let previousChar = null,
    previousFrequency = 0,
    resultString = [];
  while (maxHeap.length() > 0) {
    const [frequency, char] = maxHeap.poll();
    // add the previous entry back in the heap if its frequency is greater than zero
    if (previousChar !== null && previousFrequency > 0) {
      maxHeap.add([previousFrequency, previousChar]);
    }
    // append the current character to the result string and decrement its count
    resultString.push(char);
    previousChar = char;
    previousFrequency = frequency - 1; // decrement the frequency
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join('');
  }
  return '';
}

console.log(`Rearranged string:  ${rearrange_string('aappp')}`);
// "papap"

console.log(`Rearranged string:  ${rearrange_string('Programming')}`);
// "rmgrmgoaPni"

console.log(`Rearranged string:  ${rearrange_string('aapa')}`);
// "" (nothing)
