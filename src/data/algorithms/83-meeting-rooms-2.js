import { ALGORITHM, INTERMEDIATE, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function minMeetingRooms(intervals) {' },
  { stage: 1, text: '  if (!intervals.length) {' },
  { stage: 1, text: '    return 0;' },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 2, text: '  const starts = [];' },
  { stage: 2, text: '  const ends = [];' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < intervals.length; i++) {' },
  { stage: 4, text: '    starts[i] = intervals[i][0];' },
  { stage: 4, text: '    ends[i] = intervals[i][1];' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 5, text: '  const numericalSort = (a, b) => {' },
  { stage: 5, text: '    return a - b;' },
  { stage: 5, text: '  };' },
  { stage: 0, text: '' },
  { stage: 6, text: '  starts.sort(numericalSort);' },
  { stage: 6, text: '  ends.sort(numericalSort);' },
  { stage: 0, text: '' },
  { stage: 7, text: '  let startPointer = 0;' },
  { stage: 7, text: '  let endPointer = 0;' },
  { stage: 7, text: '  let usedRooms = 0;' },
  { stage: 0, text: '' },
  { stage: 8, text: '  while (startPointer < intervals.length) {' },
  { stage: 9, text: '    if (starts[startPointer] >= ends[endPointer]) {' },
  { stage: 10, text: '      usedRooms -= 1;' },
  { stage: 10, text: '      endPointer += 1;' },
  { stage: 9, text: '    }' },
  { stage: 0, text: '' },
  { stage: 11, text: '    usedRooms += 1;' },
  { stage: 11, text: '    startPointer += 1;' },
  { stage: 8, text: '  }' },
  { stage: 0, text: '' },
  { stage: 12, text: '  return usedRooms;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 83,
  problemName: `Find the minimum number of Meeting Rooms needed.`,
  problemText: `Given an array of meeting time \`intervals\` where \`intervals[i] = [start-i, end-i]\`, return the minimum number of conference rooms required.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
      ]);`,
      expected: 2,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `minMeetingRooms([
        [7, 10],
        [2, 4],
      ]);`,
      expected: 1,
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `minMeetingRooms([
        [1, 10],
        [2, 7],
        [3, 19],
        [8, 12],
        [10, 20],
        [11, 30],
      ]);`,
      expected: 4,
    },
  ],
  setupCode: ``,
  category: GENERAL,
  type: ALGORITHM,
  difficulty: INTERMEDIATE,
  maxExecutionTime: 2,
  solution: {
    stages: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 390],
    solutionLines: solution,
  },
};
