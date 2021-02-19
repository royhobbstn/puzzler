function calculate(s) {
  s = s.replaceAll(' ', '');
  const stack = [];
  let sign = '+';
  let i = 0;
  while (i < s.length) {
    let c = s[i];
    if (c === '(') {
      let l = 1;
      let j = i + 1;
      while (j < s.length && l > 0) {
        if (s[j] === '(') {
          l++;
        } else if (s.charAt(j) == ')') {
          l--;
        }
        j++;
      }
      let blockValue = calculate(s.substring(i + 1, j - 1));
      i = j;
      if (sign === '+') {
        stack.push(blockValue);
      } else if (sign === '-') {
        stack.push(-blockValue);
      } else if (sign === '*') {
        stack.push(stack.pop() * blockValue);
      } else if (sign === '/') {
        stack.push(stack.pop() / blockValue);
      }
    } else if (isCharNumber(c)) {
      let j = i;
      let value = 0;
      while (j < s.length && isCharNumber(s[j])) {
        value = 10 * value + (s[j] - '0');
        j++;
      }
      i = j;
      if (sign === '+') {
        stack.push(value);
      } else if (sign === '-') {
        stack.push(-value);
      } else if (sign === '*') {
        stack.push(stack.pop() * value);
      } else if (sign === '/') {
        stack.push(stack.pop() / value);
      }
    } else {
      sign = c;
      i++;
    }
  }
  let res = 0;
  while (stack.length) {
    res += stack.pop();
  }
  return res;
}

function isCharNumber(c) {
  return c >= '0' && c <= '9';
}

console.log(calculate('1+1')); // 2
console.log(calculate('6-4/2')); // 4
console.log(calculate('2*(5+5*2)/3+(6/2+8)')); // 21
console.log(calculate('(2+6*3+5-(3*14/7+2)*5)+3')); // -12
console.log(calculate('0')); // 0
