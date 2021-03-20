// Evaluate Expression

// Given an expression containing digits and operations (+, -, *), find all possible ways in which the expression can be evaluated by grouping the numbers and operators using parentheses.

function diff_ways_to_evaluate_expression(input) {
  const result = [];
  // base case: if the input string is a number, parse and add it to output.
  if (!input.includes('+') && !input.includes('-') && !input.includes('*')) {
    result.push(parseInt(input));
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (isNaN(parseInt(char, 10))) {
        // if not a digit
        // break the equation here into two parts and make recursively calls
        const leftParts = diff_ways_to_evaluate_expression(input.substring(0, i));
        const rightParts = diff_ways_to_evaluate_expression(input.substring(i + 1));
        for (let l = 0; l < leftParts.length; l++) {
          for (let r = 0; r < rightParts.length; r++) {
            let part1 = leftParts[l],
              part2 = rightParts[r];
            if (char === '+') {
              result.push(part1 + part2);
            } else if (char === '-') {
              result.push(part1 - part2);
            } else if (char === '*') {
              result.push(part1 * part2);
            }
          }
        }
      }
    }
  }

  return result;
}

console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('1+2*3')}`);
// 7, 9
console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('2*3-4-5')}`);
// 8,-12,7,-7,-3

// Memoized

function diff_ways_to_evaluate_expression_memo(input) {
  return diff_ways_to_evaluate_expression_rec({}, input);
}

function diff_ways_to_evaluate_expression_rec(map, input) {
  if (input in map) {
    return map[input];
  }

  const result = [];
  // base case: if the input string is a number, parse and add it to output.
  if (!input.includes('+') && !input.includes('-') && !input.includes('*')) {
    result.push(parseInt(input));
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (isNaN(parseInt(char, 10))) {
        // if not a digit
        // break the equation here into two parts and make recursively calls
        const leftParts = diff_ways_to_evaluate_expression_rec(map, input.substring(0, i));
        const rightParts = diff_ways_to_evaluate_expression_rec(map, input.substring(i + 1));
        for (let l = 0; l < leftParts.length; l++) {
          for (let r = 0; r < rightParts.length; r++) {
            let part1 = leftParts[l];
            let part2 = rightParts[r];
            if (char === '+') {
              result.push(part1 + part2);
            } else if (char === '-') {
              result.push(part1 - part2);
            } else if (char === '*') {
              result.push(part1 * part2);
            }
          }
        }
      }
    }
  }
  map[input] = result;
  return result;
}

console.log(diff_ways_to_evaluate_expression_memo('1+2*3'));
// [ 7, 9 ]

console.log(diff_ways_to_evaluate_expression_memo('2*3-4-5'));
// [ 8, -12, 7, -7, -3 ]
