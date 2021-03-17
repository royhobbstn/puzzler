// Palindrome Linked List

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function is_palindromic_linked_list(head) {
  if (head === null || head.next === null) {
    return true;
  }

  // find middle of the LinkedList
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = reverse(slow); // reverse the second half
  // store the head of reversed part to revert back later
  let copyHeadSecondHalf = headSecondHalf;

  // compare the first and the second half
  while (head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      break; // not a palindrome
    }

    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }
  reverse(copyHeadSecondHalf); // revert the reverse of the second half

  if (head === null || headSecondHalf === null) {
    // if both halves match
    return true;
  }

  return false;
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
// true

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
// false
