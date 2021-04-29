import { ALGORITHM, LINKED_LIST } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function rotate(head, rotations) {' },
  { stage: 1, text: '  if (head === null || head.next === null || rotations <= 0) {' },
  { stage: 2, text: '    return head;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  let last_node = head;' },
  { stage: 3, text: '  let list_length = 1;' },
  { stage: 4, text: '  while (last_node.next !== null) {' },
  { stage: 5, text: '    last_node = last_node.next;' },
  { stage: 5, text: '    list_length += 1;' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  last_node.next = head;' },
  { stage: 6, text: '  rotations %= list_length;' },
  { stage: 7, text: '  let skip_length = list_length - rotations;' },
  { stage: 7, text: '  let last_node_of_rotated_list = head;' },
  { stage: 8, text: '  for (let i = 0; i < skip_length - 1; i++) {' },
  { stage: 9, text: '    last_node_of_rotated_list = last_node_of_rotated_list.next;' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  head = last_node_of_rotated_list.next;' },
  { stage: 11, text: '  last_node_of_rotated_list.next = null;' },
  { stage: 12, text: '  return head;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 144,
  problemName: `Rotate a Linked List`,
  problemText: `Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const head = new Node(1);
      head.next = new Node(2);
      head.next.next = new Node(3);
      head.next.next.next = new Node(4);
      head.next.next.next.next = new Node(5);
      head.next.next.next.next.next = new Node(6);`,
      evaluate: `rotate(head, 3).convert();`,
      expected: JSON.stringify([4, 5, 6, 1, 2, 3]),
    },
  ],
  setupCode: `
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
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R'],
  tags: [LINKED_LIST, ALGORITHM],
  solution,
};
