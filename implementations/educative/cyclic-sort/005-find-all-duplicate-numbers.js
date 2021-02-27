// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.  Return them as an array.

function find_all_duplicates(nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] != nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i++;
    }
  }

  const duplicateNumbers = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i]);
    }
  }

  return duplicateNumbers;
}

console.log(find_all_duplicates([3, 4, 4, 5, 5])); // [5, 4]
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3])); // [3, 5]
