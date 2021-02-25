function numDecodingsIterative(s) {
  if (s[0] === '0') {
    return 0;
  }

  let twoBack = 1;
  let oneBack = 1;
  for (let i = 1; i < s.length; i++) {
    let current = 0;
    if (s[i] !== '0') {
      current = oneBack;
    }
    const twoDigit = parseInt(s.substring(i - 1, i + 1), 10);
    if (twoDigit >= 10 && twoDigit <= 26) {
      current += twoBack;
    }

    twoBack = oneBack;
    oneBack = current;
  }
  return oneBack;
}

function numDecodingsRecursive(s) {
  const memo = {};
  return recursiveWithMemo(0, s, memo);
}

function recursiveWithMemo(index, str, memo) {
  // Have we already seen this substring?
  if (memo[index] != null) {
    return memo[index];
  }

  // If you reach the end of the string
  // Return 1 for success.
  if (index === str.length) {
    return 1;
  }

  // If the string starts with a zero, it can't be decoded
  if (str[index] === '0') {
    return 0;
  }

  if (index === str.length - 1) {
    return 1;
  }

  let ans = recursiveWithMemo(index + 1, str, memo);
  if (parseInt(str.substring(index, index + 2), 10) <= 26) {
    ans += recursiveWithMemo(index + 2, str, memo);
  }

  // Save for memoization
  memo[index] = ans;

  return ans;
}

console.log('*****');
console.log(numDecodingsIterative('12')); // 2
console.log(numDecodingsRecursive('12'));
console.log('---');
console.log(numDecodingsIterative('226')); // 3
console.log(numDecodingsRecursive('226'));
console.log('---');
console.log(numDecodingsIterative('0')); // 0
console.log(numDecodingsRecursive('0'));
console.log('---');
console.log(numDecodingsIterative('06')); // 0
console.log(numDecodingsRecursive('06'));
