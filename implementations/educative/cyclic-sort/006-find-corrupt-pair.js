// Find the Corrupt Pair

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

function find_corrupt_numbers(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }
  return [-1, -1];
}

console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
// [2, 4]

console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));
// [3, 5]
