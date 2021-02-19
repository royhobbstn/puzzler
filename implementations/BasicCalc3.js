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
        let temp = stack.pop() / blockValue;
        if (temp < 0) {
          stack.push(Math.ceil(temp));
        } else {
          stack.push(Math.floor(temp));
        }
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
        let temp = stack.pop() / value;
        if (temp < 0) {
          stack.push(Math.ceil(temp));
        } else {
          stack.push(Math.floor(temp));
        }
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

console.log(calculate('5')); // 5
console.log(calculate('2+2')); // 4
console.log(calculate('2 + 2')); // 4
console.log(calculate('12-4/2')); // 10
console.log(calculate('10-5/2')); // 8
console.log(calculate('(5-2)*(8+4)')); // 36
console.log(calculate('3*(10+5*2)/4+(6/2+12)')); // 30
