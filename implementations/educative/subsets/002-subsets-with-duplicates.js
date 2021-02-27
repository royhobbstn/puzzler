// Given a set of numbers that might contain duplicates, find all of its distinct subsets.

// Example 1:

// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]
// Example 2:

// Input: [1, 5, 3, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]

function find_subsets(nums) {
  // sort the numbers to handle duplicates
  nums.sort();
  const subsets = [];
  subsets.push([]);
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    startIndex = 0;
    // if current and the previous elements are same, create new subsets only from the subsets
    // added in the previous step
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    endIndex = subsets.length - 1;
    for (let j = startIndex; j < endIndex + 1; j++) {
      // create a new subset from the existing subset and add the current element to it
      const set1 = subsets[j].slice(0);
      set1.push(nums[i]);
      subsets.push(set1);
    }
  }
  return subsets;
}

function standardize(arr) {
  return arr
    .map(d => {
      return d.sort((a, b) => a - b).join('-');
    })
    .sort();
}

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
console.log(standardize(result));
result.forEach(subset => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
console.log(standardize(result));

result.forEach(subset => {
  console.log(subset);
});
