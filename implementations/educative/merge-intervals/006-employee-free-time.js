// Employee Free Time

// For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

import Heap from '../../data-structures/Heap.js';

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval; // interval representing employee's working hours
    // index of the list containing working hours of this employee
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex; // index of the interval in the employee list
  }
}

function find_employee_free_time(schedule) {
  let n = schedule.length;
  let result = [];
  if (schedule === null || n === 0) {
    return result;
  }
  let minHeap = new Heap((a, b) => a.interval.start <= b.interval.start);
  // insert the first interval of each employee to the queue
  for (let i = 0; i < n; i++) {
    minHeap.add(new EmployeeInterval(schedule[i][0], i, 0));
  }
  let previousInterval = minHeap.peek().interval;
  while (minHeap.length() > 0) {
    const queueTop = minHeap.poll();
    // if previousInterval is not overlapping with the next interval, insert a free interval
    if (previousInterval.end < queueTop.interval.start) {
      result.push(new Interval(previousInterval.end, queueTop.interval.start));
      previousInterval = queueTop.interval;
    } else {
      // overlapping intervals, update the previousInterval if needed
      if (previousInterval.end < queueTop.interval.end) {
        previousInterval = queueTop.interval;
      }
    }
    // if there are more intervals available for(the same employee, add their next interval
    const employeeSchedule = schedule[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1) {
      minHeap.add(
        new EmployeeInterval(
          employeeSchedule[queueTop.intervalIndex + 1],
          queueTop.employeeIndex,
          queueTop.intervalIndex + 1,
        ),
      );
    }
  }
  return result;
}

let input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];

let result = find_employee_free_time(input);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
// [3, 5]

input = [[new Interval(1, 3), new Interval(9, 12)], [new Interval(2, 4)], [new Interval(6, 8)]];

result = find_employee_free_time(input);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
// [4, 6] [8, 9]

input = [[new Interval(1, 3)], [new Interval(2, 4)], [new Interval(3, 5), new Interval(7, 9)]];

result = find_employee_free_time(input);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
// [5, 7]
