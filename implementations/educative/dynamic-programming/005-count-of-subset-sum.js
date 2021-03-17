// Count of Subset Sum

// Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

// Top Down

const countSubsetsTD = function (num, sum) {
  const dp = [];

  function countSubsetsRecursive(num, sum, currentIndex) {
    // base checks
    if (sum === 0) {
      return 1;
    }

    if (num.length === 0 || currentIndex >= num.length) {
      return 0;
    }

    dp[currentIndex] = dp[currentIndex] || [];
    // check if we have not already processed a similar problem
    if (typeof dp[currentIndex][sum] === 'undefined') {
      // recursive call after choosing the number at the currentIndex
      // if the number at currentIndex exceeds the sum, we shouldn't process this
      let sum1 = 0;
      if (num[currentIndex] <= sum) {
        sum1 = countSubsetsRecursive(num, sum - num[currentIndex], currentIndex + 1);
      }

      // recursive call after excluding the number at the currentIndex
      const sum2 = countSubsetsRecursive(num, sum, currentIndex + 1);

      dp[currentIndex][sum] = sum1 + sum2;
    }

    return dp[currentIndex][sum];
  }

  return countSubsetsRecursive(num, sum, 0);
};

console.log(`Count of subset sum is: ---> ${countSubsetsTD([1, 1, 2, 3], 4)}`);
// 3
console.log(`Count of subset sum is: ---> ${countSubsetsTD([1, 2, 7, 1, 5], 9)}`);
// 3

// Bottom Up

let countSubsetsBU = function (num, sum) {
  const n = num.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));

  // populate the sum=0 columns, as we will always have an empty set for zero sum
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = num[0] == s ? 1 : 0;
  }

  // process all subsets for all sums
  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= sum; s++) {
      // exclude the number
      dp[i][s] = dp[i - 1][s];
      // include the number, if it does not exceed the sum
      if (s >= num[i]) {
        dp[i][s] += dp[i - 1][s - num[i]];
      }
    }
  }

  // the bottom-right corner will have our answer.
  return dp[num.length - 1][sum];
};

console.log(`Count of subset sum is: ---> ${countSubsetsBU([1, 1, 2, 3], 4)}`);
// 3
console.log(`Count of subset sum is: ---> ${countSubsetsBU([1, 2, 7, 1, 5], 9)}`);
// 3
