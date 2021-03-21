import { ALGORITHM, SLIDING_WINDOW } from '../constants.js';
import { HEAP_GENERIC } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Interval {' },
  { stage: -1, text: '  constructor(start, end) {' },
  { stage: -1, text: '    this.start = start;' },
  { stage: -1, text: '    this.end = end;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: -1, text: 'class EmployeeInterval {' },
  { stage: -1, text: '  constructor(interval, employeeIndex, intervalIndex) {' },
  { stage: -1, text: '    this.interval = interval;' },
  { stage: -1, text: '    this.employeeIndex = employeeIndex;' },
  { stage: -1, text: '    this.intervalIndex = intervalIndex;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_employee_free_time(schedule) {' },
  { stage: 1, text: '  let n = schedule.length;' },
  { stage: 1, text: '  let result = [];' },
  { stage: 2, text: '  if (schedule === null || n === 0) {' },
  { stage: 2, text: '    return result;' },
  { stage: 2, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  let minHeap = new Heap((a, b) => a.interval.start <= b.interval.start);' },
  { stage: 4, text: '  for (let i = 0; i < n; i++) {' },
  { stage: 5, text: '    minHeap.add(new EmployeeInterval(schedule[i][0], i, 0));' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  let previousInterval = minHeap.peek().interval;' },
  { stage: 7, text: '  while (minHeap.length() > 0) {' },
  { stage: 8, text: '    const queueTop = minHeap.poll();' },
  { stage: 9, text: '    if (previousInterval.end < queueTop.interval.start) {' },
  {
    stage: 10,
    text: '      result.push(new Interval(previousInterval.end, queueTop.interval.start));',
  },
  { stage: 11, text: '      previousInterval = queueTop.interval;' },
  { stage: 9, text: '    } else {' },
  { stage: 12, text: '      if (previousInterval.end < queueTop.interval.end) {' },
  { stage: 13, text: '        previousInterval = queueTop.interval;' },
  { stage: 12, text: '      }' },
  { stage: 9, text: '    }' },
  { stage: 0, text: '' },
  { stage: 14, text: '    const employeeSchedule = schedule[queueTop.employeeIndex];' },
  { stage: 15, text: '    if (employeeSchedule.length > queueTop.intervalIndex + 1) {' },
  { stage: 16, text: '      minHeap.add(' },
  { stage: 16, text: '        new EmployeeInterval(' },
  { stage: 16, text: '          employeeSchedule[queueTop.intervalIndex + 1],' },
  { stage: 16, text: '          queueTop.employeeIndex,' },
  { stage: 16, text: '          queueTop.intervalIndex + 1,' },
  { stage: 16, text: '        ),' },
  { stage: 16, text: '      );' },
  { stage: 15, text: '    }' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 17, text: '  return result;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 141,
  problemName: `Employee Free Time`,
  problemText: `For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `mapInterval(find_employee_free_time(input));`,
      expected: JSON.stringify([3, 5]),
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `mapInterval(find_employee_free_time(input));`,
      expected: JSON.stringify([4, 6][(8, 9)]),
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `mapInterval(find_employee_free_time(input));`,
      expected: JSON.stringify([5, 7]),
    },
  ],
  setupCode: `
  ${HEAP_GENERIC}
  class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  }
  class EmployeeInterval {
    constructor(interval, employeeIndex, intervalIndex) {
      this.interval = interval;
      this.employeeIndex = employeeIndex;
      this.intervalIndex = intervalIndex;
    }
  }
  function mapInterval(intervals) {
    return intervals.map(i => {
      return [i.start, i.end];
    });
  }
  `,
  source: [],
  tags: [SLIDING_WINDOW, ALGORITHM],
  solution,
};
