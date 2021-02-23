function findAnagrams(str, p) {
  if (str.length < p.length) {
    return [];
  }

  const pCount = {};
  const strCount = {};

  for (let i = 0; i < p.length; i++) {
    let ch = p[i];
    if (pCount[ch]) {
      pCount[ch]++;
    } else {
      pCount[ch] = 1;
    }
  }

  const output = [];
  // sliding window on the string s
  for (let i = 0; i < str.length; ++i) {
    let ch = str[i];
    if (strCount[ch]) {
      strCount[ch]++;
    } else {
      strCount[ch] = 1;
    }

    // remove one letter
    // from the left side of the window
    if (i >= p.length) {
      ch = str[i - p.length];
      if (strCount[ch] == 1) {
        delete strCount[ch];
      } else {
        strCount[ch] = strCount[ch] - 1;
      }
    }

    // compare hashmap in the sliding window
    // with the reference hashmap
    // first check that total key count is equal
    if (Object.keys(pCount).length === Object.keys(strCount).length) {
      let isEqual = true;

      // then check that individual key value counts are equal
      for (let key of Object.keys(pCount)) {
        if (pCount[key] !== strCount[key]) {
          isEqual = false;
          break;
        }
      }

      if (isEqual) {
        output.push(i - p.length + 1);
      }
    }
  }

  return output;
}

console.log(findAnagrams('cbaebabacd', 'abc')); // [0,6]
console.log(findAnagrams('abab', 'ab')); // [0,1,2]
