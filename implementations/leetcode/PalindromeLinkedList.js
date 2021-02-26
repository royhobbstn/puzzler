function ListNode(val) {
  this.val = val;
  this.next = null;
}

function isPalindrome(head) {
  if (head === null) {
    return true;
  }

  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 !== null) {
    if (p1.val != p2.val) {
      result = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  // Restore the list and return the result.
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}

function endOfFirstHalf(head) {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

const ex1 = new ListNode(1);
ex1.next = new ListNode(2);
console.log(isPalindrome(ex1)); // false

const ex2 = new ListNode(1);
ex2.next = new ListNode(2);
ex2.next.next = new ListNode(2);
ex2.next.next.next = new ListNode(1);
console.log(isPalindrome(ex2)); // true

const ex3 = new ListNode(1);
ex3.next = new ListNode(2);
ex3.next.next = new ListNode(3);
ex3.next.next.next = new ListNode(1);
ex3.next.next.next.next = new ListNode(2);
ex3.next.next.next.next.next = new ListNode(3);
console.log(isPalindrome(ex3)); // false

const ex4 = new ListNode(1);
ex4.next = new ListNode(2);
ex4.next.next = new ListNode(3);
ex4.next.next.next = new ListNode(4);
ex4.next.next.next.next = new ListNode(3);
ex4.next.next.next.next.next = new ListNode(2);
ex4.next.next.next.next.next.next = new ListNode(1);
console.log(isPalindrome(ex4)); // true

const ex5 = new ListNode(1);
ex5.next = new ListNode(2);
ex5.next.next = new ListNode(3);
ex5.next.next.next = new ListNode(3);
ex5.next.next.next.next = new ListNode(2);
ex5.next.next.next.next.next = new ListNode(1);
ex5.next.next.next.next.next.next = new ListNode(4);
console.log(isPalindrome(ex5)); // false

const ex6 = new ListNode(5);
console.log(isPalindrome(ex6)); // true
