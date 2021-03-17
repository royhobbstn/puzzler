// Subset Sum

// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

const canPartitionBU = function (num, sum) {
  const n = num.length;
  const dp = Array(n)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  // populate the sum=0 columns, as we can always form '0' sum with an empty set
  for (let i = 0; i < n; i++) dp[i][0] = true;

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) dp[0][s] = num[0] === s;

  // process all subsets for all sums
  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= sum; s++) {
      // if we can get the sum 's' without the number at index 'i'
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= num[i]) {
        // else include the number and see if we can find a subset to get the remaining sum
        dp[i][s] = dp[i - 1][s - num[i]];
      }
    }
  }

  // the bottom-right corner will have our answer.
  return dp[num.length - 1][sum];
};

console.log(`Can partitioning be done: ---> ${canPartitionBU([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartitionBU([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartitionBU([1, 3, 4, 8], 6)}`);

// Can partitioning be done: ---> true
// Can partitioning be done: ---> true
// Can partitioning be done: ---> false

const canPartitionTD = function (num, sum) {
  const n = num.length;
  const dp = Array(sum + 1).fill(false);

  // handle sum=0, as we can always have '0' sum with an empty set
  dp[0] = true;

  // with only one number, we can have a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[s] = num[0] == s;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i++) {
    for (let s = sum; s >= 0; s--) {
      // if dp[s]==true, this means we can get the sum 's' without num[i], hence we can move on to
      // the next number else we can include num[i] and see if we can find a subset to get the
      // remaining sum
      if (!dp[s] && s >= num[i]) {
        dp[s] = dp[s - num[i]];
      }
    }
  }

  return dp[sum];
};

console.log(`Can partitioning be done: ---> ${canPartitionTD([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartitionTD([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartitionTD([1, 3, 4, 8], 6)}`);

// Can partitioning be done: ---> true
// Can partitioning be done: ---> true
// Can partitioning be done: ---> false
