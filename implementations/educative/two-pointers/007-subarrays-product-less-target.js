// Subarrays with Product less than Target

// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0;
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left < arr.length) {
      product /= arr[left];
      left += 1;
    }
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from left to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    const tempList = [];
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push(JSON.parse(JSON.stringify(tempList)));
    }
  }
  return result;
}

console.log(find_subarrays([2, 5, 3, 10], 30));
// [ [ 2 ], [ 5 ], [ 2, 5 ], [ 3 ], [ 5, 3 ], [ 10 ] ]
console.log(find_subarrays([8, 2, 6, 5], 50));
// [
//     [ 8 ],    [ 2 ],
//     [ 8, 2 ], [ 6 ],
//     [ 2, 6 ], [ 5 ],
//     [ 6, 5 ]
//   ]
