// Frequency Stack

// Design a class that simulates a Stack data structure, implementing the following two operations:

//  push(int num): Pushes the number ‘num’ on the stack.
//  pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.

import Heap from '../../data-structures/Heap.js';

class Element {
  constructor(number, frequency, sequenceNumber) {
    this.number = number;
    this.frequency = frequency;
    this.sequenceNumber = sequenceNumber;
  }
}

class FrequencyStack {
  constructor() {
    this.sequenceNumber = 0;
    this.frequencyMap = {};
    this.maxHeap = new Heap((a, b) => {
      // higher frequency wins
      if (a.frequency !== b.frequency) {
        return a.frequency >= b.frequency;
      }
      // if both elements have same frequency, return the element that was pushed later
      return a.sequenceNumber >= b.sequenceNumber;
    });
  }

  push(num) {
    if (!(num in this.frequencyMap)) {
      this.frequencyMap[num] = 1;
    } else {
      this.frequencyMap[num]++;
    }
    this.maxHeap.add(new Element(num, this.frequencyMap[num], this.sequenceNumber));
    this.sequenceNumber += 1;
  }

  pop() {
    const num = this.maxHeap.poll().number;
    // decrement the frequency or remove if this is the last number
    if (this.frequencyMap[num] > 1) {
      this.frequencyMap[num] -= 1;
    } else {
      delete this.frequencyMap[num];
    }

    return num;
  }
}

const frequencyStack = new FrequencyStack();
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(3);
frequencyStack.push(2);
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(5);
console.log(frequencyStack.pop());
// 2
console.log(frequencyStack.pop());
// 1
console.log(frequencyStack.pop());
// 2
