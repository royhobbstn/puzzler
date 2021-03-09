import { ALGORITHM, ADVANCED, LINKED_LIST } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'function ListNode(val) {' },
  { stage: -1, text: '  this.val = val;' },
  { stage: -1, text: '  this.next = null;' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function addTwoNumbers(l1, l2) {' },
  { stage: 1, text: '  const dummyHead = new ListNode(0);' },
  { stage: 1, text: '  let curr = dummyHead;' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let p = l1;' },
  { stage: 2, text: '  let q = l2;' },
  { stage: 2, text: '  let carry = 0;' },
  { stage: 3, text: '  while (p || q) {' },
  { stage: 4, text: '    let x = p ? p.val : 0;' },
  { stage: 4, text: '    let y = q ? q.val : 0;' },
  { stage: 5, text: '    let sum = carry + x + y;' },
  { stage: 5, text: '    carry = Math.floor(sum / 10);' },
  { stage: 6, text: '    curr.next = new ListNode(sum % 10);' },
  { stage: 6, text: '    curr = curr.next;' },
  { stage: 7, text: '    if (p) {' },
  { stage: 7, text: '      p = p.next;' },
  { stage: 7, text: '    }' },
  { stage: 8, text: '    if (q) {' },
  { stage: 8, text: '      q = q.next;' },
  { stage: 8, text: '    }' },
  { stage: 3, text: '  }' },
  { stage: 9, text: '  if (carry > 0) {' },
  { stage: 9, text: '    curr.next = new ListNode(carry);' },
  { stage: 9, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return dummyHead.next;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 75,
  problemName: `Add Two Linked Lists.`,
  problemText: `You are given the head nodes for each of two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as the head node of a linked list (also in reverse order).

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: `
      const ex1l1 = new ListNode(2);ex1l1.next = new ListNode(4);ex1l1.next.next = new ListNode(3);const ex1l2 = new ListNode(5);ex1l2.next = new ListNode(6);ex1l2.next.next = new ListNode(4);`,
      evaluate: `addTwoNumbers(ex1l1, ex1l2).convert();`,
      expected: JSON.stringify([7, 0, 8]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: `const ex2l1 = new ListNode(0);const ex2l2 = new ListNode(0);`,
      evaluate: `addTwoNumbers(ex2l1, ex2l2).convert();`,
      expected: JSON.stringify([0]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: `const ex3l1 = new ListNode(9);ex3l1.next = new ListNode(9);ex3l1.next.next = new ListNode(9);const ex3l2 = new ListNode(9);ex3l2.next = new ListNode(9);`,
      evaluate: `addTwoNumbers(ex3l1, ex3l2).convert();`,
      expected: JSON.stringify([8, 9, 0, 1]),
    },
  ],
  setupCode: `
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  ListNode.prototype.convert = function () {
    const arr = [];
    let node = this;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  };
  `,
  tags: [ADVANCED, LINKED_LIST, ALGORITHM],
  solution,
};
