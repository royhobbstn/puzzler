function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  if (items.length > 1) {
    const index = partition(items, left, right);

    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

const arr = [5, 8, 1, 9, 3, 8, 2, 0, 2, 34, 2, 456, 342, 26, 75, 23];
console.log(quickSort(arr));

const arr2 = [75, 98, 19, 99, 34, 48, 42, 40, 12, 134, 21, 1456, 3421, 1126, 1175, 2311];
console.log(quickSort(arr2));
