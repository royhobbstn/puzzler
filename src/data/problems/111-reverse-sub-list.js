import { ALGORITHM, TEMP, INTERMEDIATE } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function reverse_sub_list(head, p, q) {' },
  { stage: 1, text: '  if (p === q) {' },
  { stage: 1, text: '    return head;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let current = head;' },
  { stage: 2, text: '  let previous = null;' },
  { stage: 2, text: '  let i = 0;' },
  { stage: 3, text: '  while (current !== null && i < p - 1) {' },
  { stage: 4, text: '    previous = current;' },
  { stage: 4, text: '    current = current.next;' },
  { stage: 4, text: '    i += 1;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  const last_node_of_first_part = previous;' },
  { stage: 5, text: '  const last_node_of_sub_list = current;' },
  { stage: 6, text: '  let next = null;' },
  { stage: 6, text: '  i = 0;' },
  { stage: 0, text: '' },
  { stage: 7, text: '  while (current !== null && i < q - p + 1) {' },
  { stage: 8, text: '    next = current.next;' },
  { stage: 8, text: '    current.next = previous;' },
  { stage: 9, text: '    previous = current;' },
  { stage: 9, text: '    current = next;' },
  { stage: 9, text: '    i += 1;' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  if (last_node_of_first_part !== null) {' },
  { stage: 11, text: '    last_node_of_first_part.next = previous;' },
  { stage: 10, text: '  } else {' },
  { stage: 12, text: '    head = previous;' },
  { stage: 10, text: '  }' },
  { stage: 0, text: '' },
  { stage: 13, text: '  last_node_of_sub_list.next = current;' },
  { stage: 13, text: '  return head;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 111,
  problemName: `Reverse Sub List`,
  problemText: `Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const head = new Node(1);
      head.next = new Node(2);
      head.next.next = new Node(3);
      head.next.next.next = new Node(4);
      head.next.next.next.next = new Node(5);`,
      evaluate: `reverse_sub_list(head, 2, 4).convert();`,
      expected: JSON.stringify([1, 4, 3, 2, 5]),
    },
  ],
  setupCode: `
  function Node(value) {
    this.value = value;
    this.next = null;
  }

  Node.prototype.convert = function () {
    const arr = [];
    let node = this;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  };`,
  tags: [TEMP, ALGORITHM],
  difficulty: INTERMEDIATE,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 420],
    solutionLines: solution,
  },
};
