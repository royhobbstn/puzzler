import { ALGORITHM, MERGE_INTERVALS } from '../constants.js';
import { HEAP_GENERIC } from '../code-imports/import-index.js';

const solution = [
  { stage: 0, text: '' },
  { stage: -1, text: 'class Job {' },
  { stage: -1, text: '  constructor(start, end, cpuLoad) {' },
  { stage: -1, text: '    this.start = start;' },
  { stage: -1, text: '    this.end = end;' },
  { stage: -1, text: '    this.cpuLoad = cpuLoad;' },
  { stage: -1, text: '  }' },
  { stage: -1, text: '}' },
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_max_cpu_load(jobs) {' },
  { stage: 1, text: '  jobs.sort((a, b) => a.start - b.start);' },
  { stage: 0, text: '' },
  { stage: 2, text: '  let maxCPULoad = 0;' },
  { stage: 2, text: '  let currentCPULoad = 0;' },
  { stage: 3, text: '  const minHeap = new Heap((a, b) => a.end <= b.end);' },
  { stage: 0, text: '' },
  { stage: 4, text: '  for (let j = 0; j < jobs.length; j++) {' },
  { stage: 5, text: '    while (minHeap.length() > 0 && jobs[j].start >= minHeap.peek().end) {' },
  { stage: 6, text: '      currentCPULoad -= minHeap.poll().cpuLoad;' },
  { stage: 5, text: '    }' },
  { stage: 0, text: '' },
  { stage: 7, text: '    minHeap.add(jobs[j]);' },
  { stage: 8, text: '    currentCPULoad += jobs[j].cpuLoad;' },
  { stage: 9, text: '    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);' },
  { stage: 4, text: '  }' },
  { stage: 0, text: '' },
  { stage: 10, text: '  return maxCPULoad;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 140,
  problemName: `Maximum CPU Load`,
  problemText: `We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_max_cpu_load([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)]);`,
      expected: 7,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_max_cpu_load([new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)]);`,
      expected: 15,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_max_cpu_load([new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)]);`,
      expected: 8,
    },
  ],
  setupCode: `
  ${HEAP_GENERIC}
  class Job {
    constructor(start, end, cpuLoad) {
      this.start = start;
      this.end = end;
      this.cpuLoad = cpuLoad;
    }
  }
  `,
  source: [],
  tags: [MERGE_INTERVALS, ALGORITHM],
  solution,
};
