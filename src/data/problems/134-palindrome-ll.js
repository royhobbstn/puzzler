import { ALGORITHM, FAST_SLOW_PTRS } from '../constants.ts';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Node {' },
  { stage: -1, text: '  constructor(value, next = null) {' },
  { stage: -1, text: '    this.value = value;' },
  { stage: -1, text: '    this.next = next;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function is_palindromic_linked_list(head) {' },
  { stage: 1, text: '  if (head === null || head.next === null) {' },
  { stage: 1, text: '    return true;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let slow = head;' },
  { stage: 2, text: '  let fast = head;' },
  { stage: 3, text: '  while (fast !== null && fast.next !== null) {' },
  { stage: 4, text: '    slow = slow.next;' },
  { stage: 4, text: '    fast = fast.next.next;' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  let headSecondHalf = reverse(slow);' },
  { stage: 12, text: '  let copyHeadSecondHalf = headSecondHalf;' },
  { stage: 0, text: '' },
  { stage: 13, text: '  while (head !== null && headSecondHalf !== null) {' },
  { stage: 14, text: '    if (head.value !== headSecondHalf.value) {' },
  { stage: 14, text: '      break;' },
  { stage: 14, text: '    }' },
  { stage: 0, text: '' },
  { stage: 15, text: '    head = head.next;' },
  { stage: 15, text: '    headSecondHalf = headSecondHalf.next;' },
  { stage: 13, text: '  }' },
  { stage: 0, text: '' },
  { stage: 16, text: '  reverse(copyHeadSecondHalf);' },
  { stage: 0, text: '' },
  { stage: 17, text: '  if (head === null || headSecondHalf === null) {' },
  { stage: 18, text: '    return true;' },
  { stage: 17, text: '  }' },
  { stage: 0, text: '' },
  { stage: 18, text: '  return false;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 6, text: 'function reverse(head) {' },
  { stage: 7, text: '  let prev = null;' },
  { stage: 0, text: '' },
  { stage: 8, text: '  while (head !== null) {' },
  { stage: 9, text: '    let next = head.next;' },
  { stage: 9, text: '    head.next = prev;' },
  { stage: 10, text: '    prev = head;' },
  { stage: 10, text: '    head = next;' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 11, text: '  return prev;' },
  { stage: 6, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 134,
  problemName: `Palindrome Linked List`,
  problemText: `Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
  
  Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
  `,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const head = new Node(2);
      head.next = new Node(4);
      head.next.next = new Node(6);
      head.next.next.next = new Node(4);
      head.next.next.next.next = new Node(2);
      `,
      evaluate: `is_palindromic_linked_list(head);`,
      expected: true,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [1],
      code: `head.next.next.next.next.next = new Node(2);`,
      evaluate: `is_palindromic_linked_list(head);`,
      expected: false,
    },
  ],
  setupCode: `
  class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  `,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/JERG3q0p912'],
  tags: [FAST_SLOW_PTRS, ALGORITHM],
  solution,
};
