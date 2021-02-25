function lengthOfLongestSubstring(str) {
  let answer = 0;
  let map = {};
  for (let j = 0, i = 0; j < str.length; j++) {
    const char = str[j];
    if (map[char]) {
      i = Math.max(map[char], i);
    }
    answer = Math.max(answer, j - i + 1);
    map[char] = j + 1;
  }

  return answer;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('')); // 0
