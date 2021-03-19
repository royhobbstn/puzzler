// Reverse alternating K-element Sub-list

// Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

Node.prototype.convert = function () {
  const arr = [];
  let node = this;
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  return arr;
};

function reverse_alternate_k_elements(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head;
  let previous = null;
  while (current !== null) {
    // break if we've reached the end of the list
    const last_node_of_previous_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node

    // reverse 'k' nodes
    let i = 0;
    while (current !== null && i < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    // connect with the previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }

    // connect with the next part
    last_node_of_sub_list.next = current;

    // skip 'k' nodes
    i = 0;
    while (current !== null && i < k) {
      previous = current;
      current = current.next;
      i += 1;
    }
  }
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

const result = reverse_alternate_k_elements(head, 2);
console.log(result.convert());

// Nodes of original LinkedList are: 1 2 3 4 5 6 7 8

// Nodes of reversed LinkedList are: 2 1 3 4 6 5 7 8
