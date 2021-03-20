// Balanced Parentheses

// For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

class ParenthesesString {
  constructor(str, openCount, closeCount) {
    this.str = str;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }
}

function generate_valid_parentheses(num) {
  let result = [];
  let queue = [];
  queue.push(new ParenthesesString('', 0, 0));
  while (queue.length > 0) {
    const ps = queue.shift();
    // if we've reached the maximum number of open and close parentheses, add to the result
    if (ps.openCount === num && ps.closeCount === num) {
      result.push(ps.str);
    } else {
      if (ps.openCount < num) {
        // if we can add an open parentheses, add it
        queue.push(new ParenthesesString(`${ps.str}(`, ps.openCount + 1, ps.closeCount));
      }
      if (ps.openCount > ps.closeCount) {
        // if we can add a close parentheses, add it
        queue.push(new ParenthesesString(`${ps.str})`, ps.openCount, ps.closeCount + 1));
      }
    }
  }
  return result;
}

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`);
// All combinations of balanced parentheses are: (()),()()
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`);
// All combinations of balanced parentheses are: ((())),(()()),(())(),()(()),()()()

function generate_valid_parentheses_start(num) {
  const result = [];
  const parenthesesString = Array(2 * num);
  generate_valid_parentheses_rec(num, 0, 0, parenthesesString, 0, result);
  return result;
}

function generate_valid_parentheses_rec(
  num,
  openCount,
  closeCount,
  parenthesesString,
  index,
  result,
) {
  // if we've reached the maximum number of open and close parentheses, add to the result
  if (openCount === num && closeCount === num) {
    result.push(parenthesesString.join(''));
  } else {
    if (openCount < num) {
      // if we can add an open parentheses, add it
      parenthesesString[index] = '(';
      generate_valid_parentheses_rec(
        num,
        openCount + 1,
        closeCount,
        parenthesesString,
        index + 1,
        result,
      );
    }
    if (openCount > closeCount) {
      // if we can add a close parentheses, add it
      parenthesesString[index] = ')';
      generate_valid_parentheses_rec(
        num,
        openCount,
        closeCount + 1,
        parenthesesString,
        index + 1,
        result,
      );
    }
  }
}

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses_start(2)}`);
// All combinations of balanced parentheses are: (()),()()

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses_start(3)}`);
// All combinations of balanced parentheses are: ((())),(()()),(())(),()(()),()()()
