function Node(val) {
  this.val = val;
  this.next = null;
}

function reorderList(head) {
  if (!head) {
    return;
  }

  // find middle of linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half of list in-place
  let prev = null;
  let curr = slow;
  let tmp = null;
  while (curr != null) {
    tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  // merge the two lists
  let first = head;
  let second = prev;
  while (second.next) {
    tmp = first.next;
    first.next = second;
    first = tmp;

    tmp = second.next;
    second.next = first;
    second = tmp;
  }
}

function printList(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(printList(head));
reorderList(head);
console.log(printList(head));

// 1->2->3->4->5, reorders to 1->5->2->4->3.
