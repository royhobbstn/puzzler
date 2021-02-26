function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(l1, l2) {
  const dummyHead = new ListNode(0);
  let curr = dummyHead;

  let p = l1;
  let q = l2;
  let carry = 0;
  while (p || q) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
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

//

const ex1l1 = new ListNode(2);
ex1l1.next = new ListNode(4);
ex1l1.next.next = new ListNode(3);

const ex1l2 = new ListNode(5);
ex1l2.next = new ListNode(6);
ex1l2.next.next = new ListNode(4);

console.log(addTwoNumbers(ex1l1, ex1l2).convert()); // [7, 0, 8]

//

const ex2l1 = new ListNode(0);

const ex2l2 = new ListNode(0);

console.log(addTwoNumbers(ex2l1, ex2l2).convert()); // [0]

//

const ex3l1 = new ListNode(9);
ex3l1.next = new ListNode(9);
ex3l1.next.next = new ListNode(9);

const ex3l2 = new ListNode(9);
ex3l2.next = new ListNode(9);

console.log(addTwoNumbers(ex3l1, ex3l2).convert()); // [8, 9, 0, 1]
