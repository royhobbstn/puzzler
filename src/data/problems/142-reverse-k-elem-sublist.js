import { ALGORITHM, LINKED_LIST } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function reverse_every_k_elements(head, k) {' },
  { stage: 1, text: '  if (k <= 1 || head === null) {' },
  { stage: 2, text: '    return head;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  let current = head;' },
  { stage: 3, text: '  let previous = null;' },
  { stage: 4, text: '  while (true) {' },
  { stage: 5, text: '    const last_node_of_previous_part = previous;' },
  { stage: 5, text: '    const last_node_of_sub_list = current;' },
  { stage: 6, text: '    let next = null;' },
  { stage: 6, text: '    let i = 0;' },
  { stage: 7, text: '    while (current !== null && i < k) {' },
  { stage: 8, text: '      next = current.next;' },
  { stage: 8, text: '      current.next = previous;' },
  { stage: 9, text: '      previous = current;' },
  { stage: 9, text: '      current = next;' },
  { stage: 10, text: '      i += 1;' },
  { stage: 7, text: '    }' },
  { stage: 0, text: '' },
  { stage: 11, text: '    if (last_node_of_previous_part !== null) {' },
  { stage: 12, text: '      last_node_of_previous_part.next = previous;' },
  { stage: 11, text: '    } else {' },
  { stage: 13, text: '      head = previous;' },
  { stage: 11, text: '    }' },
  { stage: 0, text: '' },
  { stage: 14, text: '    last_node_of_sub_list.next = current;' },
  { stage: 0, text: '' },
  { stage: 15, text: '    if (current === null) {' },
  { stage: 16, text: '      break;' },
  { stage: 15, text: '    }' },
  { stage: 17, text: '    previous = last_node_of_sub_list;' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 18, text: '  return head;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 142,
  problemName: `Reverse Every K Element Sublist`,
  problemText: `Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

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
      evaluate: `reverse_every_k_elements(head, 3).convert();`,
      expected: JSON.stringify([3, 2, 1, 6, 5, 4, 8, 7]),
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
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR'],
  tags: [LINKED_LIST, ALGORITHM],
  solution,
};
