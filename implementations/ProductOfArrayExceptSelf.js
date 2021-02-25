function productExceptSelf(nums) {
  let length = nums.length;

  const leftProducts = [];
  const rightProducts = [];

  const answer = [];

  leftProducts[0] = 1;
  for (let i = 1; i < length; i++) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }

  rightProducts[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
  }

  for (let i = 0; i < length; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([5, 8, 4, 3, 7])); // [672,420,840,1120,480]
