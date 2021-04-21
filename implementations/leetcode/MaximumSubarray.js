function maxSubArray(nums) {
  // Initialize our variables using the first element.
  let currentSubarray = nums[0];
  let maxSubarray = nums[0];

  // Start with the 2nd element since we already used the first one.
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    // If current_subarray is negative, throw it away. Otherwise, keep adding to it.
    currentSubarray = Math.max(num, currentSubarray + num);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }

  return maxSubarray;
}
