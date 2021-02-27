// In a non-empty array of integers, every number appears twice except for one, find that single number.

function find_single_number(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num ^= arr[i];
  }
  return num;
}

console.log(find_single_number([1, 4, 2, 1, 3, 2, 3])); // 4

console.log(find_single_number([7, 9, 7])); // 9
