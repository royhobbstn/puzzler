// Minimum Subset Sum

// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

// Top Down

const canPartitionTD = function (num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];
  const dp = [];

  function canPartitionRecursive(num, currentIndex, sum1, sum2) {
    // base check
    if (currentIndex === num.length) return Math.abs(sum1 - sum2);

    dp[currentIndex] = dp[currentIndex] || [];
    // check if we have not already processed similar problem
    if (typeof dp[currentIndex][sum1] === 'undefined') {
      // recursive call after including the number at the currentIndex in the first set
      const diff1 = canPartitionRecursive(num, currentIndex + 1, sum1 + num[currentIndex], sum2);

      // recursive call after including the number at the currentIndex in the second set
      const diff2 = canPartitionRecursive(num, currentIndex + 1, sum1, sum2 + num[currentIndex]);

      dp[currentIndex][sum1] = Math.min(diff1, diff2);
    }
    return dp[currentIndex][sum1];
  }

  return canPartitionRecursive(num, 0, 0, 0);
};

console.log(`Minimum subset difference is: ---> ${canPartitionTD([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartitionTD([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartitionTD([1, 3, 100, 4])}`);
// Minimum subset difference is: ---> 3
// Minimum subset difference is: ---> 0
// Minimum subset difference is: ---> 92

// Bottom Up

let canPartitionBU = function (num) {
  const n = num.length;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += num[i];

  const requiredSum = Math.floor(sum / 2);
  const dp = Array(n)
    .fill(false)
    .map(() => Array(requiredSum + 1).fill(false));

  // populate the sum=0 columns, as we can always form '0' sum with an empty set
  for (let i = 0; i < n; i++) dp[i][0] = true;

  // with only one number, we can form a subset only when the required sum is equal to that number
  for (let s = 1; s <= requiredSum; s++) {
    dp[0][s] = num[0] == s;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= requiredSum; s++) {
      // if we can get the sum 's' without the number at index 'i'
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= num[i]) {
        // else include the number and see if we can find a subset to get the remaining sum
        dp[i][s] = dp[i - 1][s - num[i]];
      }
    }
  }

  let sum1 = 0;
  // Find the largest index in the last row which is true
  for (let i = requiredSum; i >= 0; i--) {
    if (dp[n - 1][i] === true) {
      sum1 = i;
      break;
    }
  }

  const sum2 = sum - sum1;
  return Math.abs(sum2 - sum1);
};

console.log(`Minimum subset difference is: ---> ${canPartitionBU([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartitionBU([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartitionBU([1, 3, 100, 4])}`);
// Minimum subset difference is: ---> 3
// Minimum subset difference is: ---> 0
// Minimum subset difference is: ---> 92
