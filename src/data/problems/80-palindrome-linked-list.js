import { ALGORITHM, ADVANCED, LINKED_LIST } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'function ListNode(val) {' },
  { stage: -1, text: '  this.val = val;' },
  { stage: -1, text: '  this.next = null;' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function isPalindrome(head) {' },
  { stage: 1, text: '  if (head === null) {' },
  { stage: 1, text: '    return true;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  const firstHalfEnd = endOfFirstHalf(head);' },
  { stage: 2, text: '  const secondHalfStart = reverseList(firstHalfEnd.next);' },
  { stage: 0, text: '' },
  { stage: 14, text: '  let p1 = head;' },
  { stage: 14, text: '  let p2 = secondHalfStart;' },
  { stage: 14, text: '  let result = true;' },
  { stage: 15, text: '  while (result && p2 !== null) {' },
  { stage: 16, text: '    if (p1.val != p2.val) {' },
  { stage: 16, text: '      result = false;' },
  { stage: 16, text: '    }' },
  { stage: 17, text: '    p1 = p1.next;' },
  { stage: 17, text: '    p2 = p2.next;' },
  { stage: 15, text: '  }' },
  { stage: 0, text: '' },
  { stage: 18, text: '  firstHalfEnd.next = reverseList(secondHalfStart);' },
  { stage: 19, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
  { stage: 8, text: 'function reverseList(head) {' },
  { stage: 9, text: '  let prev = null;' },
  { stage: 9, text: '  let curr = head;' },
  { stage: 10, text: '  while (curr !== null) {' },
  { stage: 11, text: '    let nextTemp = curr.next;' },
  { stage: 11, text: '    curr.next = prev;' },
  { stage: 12, text: '    prev = curr;' },
  { stage: 12, text: '    curr = nextTemp;' },
  { stage: 10, text: '  }' },
  { stage: 13, text: '  return prev;' },
  { stage: 8, text: '}' },
  { stage: 0, text: '' },
  { stage: 3, text: 'function endOfFirstHalf(head) {' },
  { stage: 4, text: '  let fast = head;' },
  { stage: 4, text: '  let slow = head;' },
  { stage: 5, text: '  while (fast.next !== null && fast.next.next !== null) {' },
  { stage: 6, text: '    fast = fast.next.next;' },
  { stage: 6, text: '    slow = slow.next;' },
  { stage: 5, text: '  }' },
  { stage: 7, text: '  return slow;' },
  { stage: 3, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 80,
  problemName: `Solve Palindrome Linked List`,
  problemText: `Given a singly linked list's \`head\` node, determine if it is a palindrome.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `const ex1 = new ListNode(1);
      ex1.next = new ListNode(2);`,
      evaluate: `isPalindrome(ex1);`,
      expected: false,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const ex2 = new ListNode(1);
      ex2.next = new ListNode(2);
      ex2.next.next = new ListNode(2);
      ex2.next.next.next = new ListNode(1);`,
      evaluate: `isPalindrome(ex2);`,
      expected: true,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `const ex3 = new ListNode(1);
      ex3.next = new ListNode(2);
      ex3.next.next = new ListNode(3);
      ex3.next.next.next = new ListNode(1);
      ex3.next.next.next.next = new ListNode(2);
      ex3.next.next.next.next.next = new ListNode(3);`,
      evaluate: `isPalindrome(ex3);`,
      expected: false,
    },
    {
      id: 4,
      name: 'example 4',
      inherit: [],
      code: `const ex4 = new ListNode(1);
      ex4.next = new ListNode(2);
      ex4.next.next = new ListNode(3);
      ex4.next.next.next = new ListNode(4);
      ex4.next.next.next.next = new ListNode(3);
      ex4.next.next.next.next.next = new ListNode(2);
      ex4.next.next.next.next.next.next = new ListNode(1);`,
      evaluate: `isPalindrome(ex4);`,
      expected: true,
    },
    {
      id: 5,
      name: 'example 5',
      inherit: [],
      code: `const ex5 = new ListNode(1);
      ex5.next = new ListNode(2);
      ex5.next.next = new ListNode(3);
      ex5.next.next.next = new ListNode(3);
      ex5.next.next.next.next = new ListNode(2);
      ex5.next.next.next.next.next = new ListNode(1);
      ex5.next.next.next.next.next.next = new ListNode(4);`,
      evaluate: `isPalindrome(ex5);`,
      expected: false,
    },
    {
      id: 6,
      name: 'example 6',
      inherit: [],
      code: `const ex6 = new ListNode(5);`,
      evaluate: `isPalindrome(ex6);`,
      expected: true,
    },
  ],
  setupCode: `
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  `,
  tags: [LINKED_LIST, ALGORITHM],
  difficulty: ADVANCED,
  solution,
};
