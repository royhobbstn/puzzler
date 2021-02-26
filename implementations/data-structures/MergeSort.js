function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArr, rightArr) {
  const results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      results.push(leftArr[leftIndex]);
      leftIndex = leftIndex + 1;
    } else {
      results.push(rightArr[rightIndex]);
      rightIndex = rightIndex + 1;
    }
  }

  const leftRemains = leftArr.slice(leftIndex);
  const rightRemains = rightArr.slice(rightIndex);

  return results.concat(leftRemains).concat(rightRemains);
}

const arr = [5, 8, 1, 9, 3, 8, 2, 0, 2, 34, 2, 456, 342, 26, 75, 23];

console.log(mergeSort(arr));
