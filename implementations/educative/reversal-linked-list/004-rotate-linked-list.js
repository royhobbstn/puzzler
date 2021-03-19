// Rotate a Linked List

// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

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

function rotate(head, rotations) {
  if (head === null || head.next === null || rotations <= 0) {
    return head;
  }

  // find the length and the last node of the list
  let last_node = head;
  let list_length = 1;
  while (last_node.next !== null) {
    last_node = last_node.next;
    list_length += 1;
  }
  last_node.next = head; // connect the last node with the head to make it a circular list
  rotations %= list_length; // no need to do rotations more than the length of the list
  let skip_length = list_length - rotations;
  let last_node_of_rotated_list = head;
  for (let i = 0; i < skip_length - 1; i++) {
    last_node_of_rotated_list = last_node_of_rotated_list.next;
  }

  // 'last_node_of_rotated_list.next' is pointing to the sub-list of 'k' ending nodes
  head = last_node_of_rotated_list.next;
  last_node_of_rotated_list.next = null;
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(rotate(head, 3).convert());
// [4,5,6,1,2,3]
