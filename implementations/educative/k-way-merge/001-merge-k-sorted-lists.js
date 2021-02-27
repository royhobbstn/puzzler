// Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

// Example 1:

// Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
// Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]
// Example 2:

// Input: L1=[5, 8, 9], L2=[1, 7]
// Output: [1, 5, 7, 8, 9]

const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function merge_lists(lists) {
  const minHeap = new Heap([], null, (a, b) => b.value - a.value);

  // put the root of each list in the min heap
  lists.forEach(a => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take the smallest(top) element form the min-heap and add it to the result
  // if the top element has a next element add it to the heap
  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
}

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = merge_lists([l1, l2, l3]);
process.stdout.write('Here are the elements form the merged list: ');
while (result !== null) {
  process.stdout.write(`${result.value} `);
  result = result.next;
}
