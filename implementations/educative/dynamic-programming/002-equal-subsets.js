// Equal Subset Sum Partition

// Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both subsets is equal.

// Top Down

let canPartitionTD = function (num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];

  // if 'sum' is a an odd number, we can't have two subsets with equal sum
  if (sum % 2 !== 0) return false;

  const dp = [];
  return canPartitionRecursive(dp, num, sum / 2, 0);
};

function canPartitionRecursive(dp, num, sum, currentIndex) {
  // base check
  if (sum === 0) return true;

  if (num.length === 0 || currentIndex >= num.length) return false;

  dp[currentIndex] = dp[currentIndex] || [];
  // if we have not already processed a similar problem
  if (typeof dp[currentIndex][sum] === 'undefined') {
    // recursive call after choosing the number at the currentIndex
    // if the number at currentIndex exceeds the sum, we shouldn't process this
    if (num[currentIndex] <= sum) {
      if (canPartitionRecursive(dp, num, sum - num[currentIndex], currentIndex + 1)) {
        dp[currentIndex][sum] = true;
        return true;
      }
    }

    // recursive call after excluding the number at the currentIndex
    dp[currentIndex][sum] = canPartitionRecursive(dp, num, sum, currentIndex + 1);
  }
  return dp[currentIndex][sum];
}

console.log(`Can partitioning be done: ---> ${canPartitionTD([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartitionTD([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartitionTD([2, 3, 4, 6])}`);

// true
// true
// false

// Bottom Up

let canPartitionBU = function (num) {
  const n = num.length;
  // find the total sum
  let sum = 0;
  for (let i = 0; i < n; i++) sum += num[i];

  // if 'sum' is a an odd number, we can't have two subsets with same total
  if (sum % 2 != 0) return false;

  // we are trying to find a subset of given numbers that has a total sum of ‘sum/2’.
  sum /= 2;

  const dp = Array(n)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  // populate the sum=0 columns, as we can always for '0' sum with an empty set
  for (let i = 0; i < n; i++) dp[i][0] = true;

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = num[0] == s;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      // if we can get the sum 's' without the number at index 'i'
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= num[i]) {
        // else if we can find a subset to get the remaining sum
        dp[i][s] = dp[i - 1][s - num[i]];
      }
    }
  }

  // the bottom-right corner will have our answer.
  return dp[n - 1][sum];
};

console.log(`Can partitioning be done: ---> ${canPartitionBU([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartitionBU([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartitionBU([2, 3, 4, 6])}`);

// true
// true
// false
