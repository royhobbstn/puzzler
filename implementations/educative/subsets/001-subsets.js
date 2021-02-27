// Given a set with distinct elements, find all of its distinct subsets.

// Example 1:

// Input: [1, 3]
// Output: [], [1], [3], [1,3]
// Example 2:

// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

function find_subsets(nums) {
  const subsets = [];
  // start by adding the empty subset
  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create new subsets
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from the existing subset and insert the current element to it
      const set1 = subsets[j].slice(0); // clone the permutation
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }

  return subsets;
}

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach(subset => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach(subset => {
  console.log(subset);
});
