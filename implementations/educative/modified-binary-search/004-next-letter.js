// Next Letter

// Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

// Write a function to return the next letter of the given ‘key’.

function search_next_letter(letters, key) {
  const n = letters.length;
  if (key < letters[0] || key > letters[n - 1]) {
    return letters[0];
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (key < letters[mid]) {
      end = mid - 1;
    } else {
      // key >= letters[mid]:
      start = mid + 1;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  return letters[start % n];
}

console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'));
// h
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'));
// c
console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'));
// a
