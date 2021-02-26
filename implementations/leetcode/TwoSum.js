function twoSum(array, target) {
  let hash = {};

  for (let [index, num] of array.entries()) {
    const difference = target - num;
    if (hash[difference] !== undefined) {
      return [hash[difference], index];
    }
    hash[num] = index;
  }

  return null;
}

console.log(twoSum([3, 6, 17, 12], 9));
// Output: [0,1]

console.log(twoSum([3, 4, 5], 9));
// Output: [1,2]

console.log(twoSum([2, 2], 4));
// Output: [0,1]

console.log(twoSum([1, 3], 7));
// Output: null
