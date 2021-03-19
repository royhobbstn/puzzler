import { ALGORITHM, LINKED_LIST, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function reverse_alternate_k_elements(head, k) {' },
  { stage: 1, text: '  if (k <= 1 || head === null) {' },
  { stage: 2, text: '    return head;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  let current = head;' },
  { stage: 3, text: '  let previous = null;' },
  { stage: 0, text: '' },
  { stage: 4, text: '  while (current !== null) {' },
  { stage: 5, text: '    const last_node_of_previous_part = previous;' },
  { stage: 5, text: '    const last_node_of_sub_list = current;' },
  { stage: 6, text: '    let next = null;' },
  { stage: 0, text: '' },
  { stage: 7, text: '    let i = 0;' },
  { stage: 8, text: '    while (current !== null && i < k) {' },
  { stage: 9, text: '      next = current.next;' },
  { stage: 9, text: '      current.next = previous;' },
  { stage: 10, text: '      previous = current;' },
  { stage: 10, text: '      current = next;' },
  { stage: 11, text: '      i += 1;' },
  { stage: 8, text: '    }' },
  { stage: 0, text: '' },
  { stage: 12, text: '    if (last_node_of_previous_part !== null) {' },
  { stage: 13, text: '      last_node_of_previous_part.next = previous;' },
  { stage: 12, text: '    } else {' },
  { stage: 14, text: '      head = previous;' },
  { stage: 12, text: '    }' },
  { stage: 0, text: '' },
  { stage: 15, text: '    last_node_of_sub_list.next = current;' },
  { stage: 0, text: '' },
  { stage: 16, text: '    i = 0;' },
  { stage: 17, text: '    while (current !== null && i < k) {' },
  { stage: 18, text: '      previous = current;' },
  { stage: 18, text: '      current = current.next;' },
  { stage: 19, text: '      i += 1;' },
  { stage: 17, text: '    }' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 20, text: '  return head;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 143,
  problemName: `Reverse alternating K-element Sub-list`,
  problemText: `Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

  If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.`,
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
      head.next.next.next.next.next = new Node(6);
      head.next.next.next.next.next.next = new Node(7);
      head.next.next.next.next.next.next.next = new Node(8);`,
      evaluate: `reverse_alternate_k_elements(head, 2).convert();`,
      expected: JSON.stringify([2, 1, 3, 4, 6, 5, 7, 8]),
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
  source: [],
  tags: [INTERMEDIATE, LINKED_LIST, ALGORITHM],
  solution,
};
