function binarySearchIterative(sortedArray, n) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (sortedArray[middleIndex] === n) {
      return middleIndex;
    } else if (sortedArray[middleIndex] < n) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}

function binarySearchRecursive(array, n, startIndex, endIndex) {
  if (!startIndex) {
    startIndex = 0;
  }
  if (!endIndex) {
    endIndex = array.length - 1;
  }

  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  if (endIndex <= startIndex && array[middleIndex] !== n) {
    return -1;
  } else if (array[middleIndex] === n) {
    return middleIndex;
  } else if (array[middleIndex] < n) {
    return binarySearchRecursive(array, n, middleIndex + 1, endIndex);
  } else {
    return binarySearchRecursive(array, n, startIndex, middleIndex - 1);
  }
}

const arr = [1, 2, 3, 5, 7, 8, 9, 11, 13, 15, 17, 18, 21, 24, 27, 31, 34, 38, 42, 46, 50];
console.log(binarySearchIterative(arr, 8) === 5);
console.log(binarySearchIterative(arr, 13) === 8);
console.log(binarySearchIterative(arr, 18) === 11);
console.log(binarySearchIterative(arr, 42) === 18);
console.log(binarySearchIterative(arr, 6) === -1);

console.log(binarySearchRecursive(arr, 8) === 5);
console.log(binarySearchRecursive(arr, 13) === 8);
console.log(binarySearchRecursive(arr, 18) === 11);
console.log(binarySearchRecursive(arr, 42) === 18);
console.log(binarySearchRecursive(arr, 6) === -1);
