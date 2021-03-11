import { ALGORITHM, INTERMEDIATE, DESIGN } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'class MetroSystem {' },
  { stage: 0, text: '  constructor() {' },
  { stage: 1, text: '    this.inProgress = {};' },
  { stage: 2, text: '    this.finished = {};' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  checkIn(id, stationName, t) {' },
  { stage: 0, text: '' },
  { stage: 3, text: '    this.inProgress[id] = { stationName, t };' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  checkOut(id, stationName, t) {' },
  { stage: 0, text: '' },
  { stage: 4, text: '    const checkInRecord = this.inProgress[id];' },
  { stage: 4, text: '    delete this.inProgress[id];' },
  { stage: 5, text: '    if (!this.finished[checkInRecord.stationName]) {' },
  { stage: 6, text: '      this.finished[checkInRecord.stationName] = {};' },
  { stage: 5, text: '    }' },
  { stage: 7, text: '    if (!this.finished[checkInRecord.stationName][stationName]) {' },
  {
    stage: 8,
    text: '      this.finished[checkInRecord.stationName][stationName] = { sum: 0, trips: 0 };',
  },
  { stage: 7, text: '    }' },
  { stage: 9, text: '    const route = this.finished[checkInRecord.stationName][stationName];' },
  { stage: 9, text: '    route.sum += t - checkInRecord.t;' },
  { stage: 9, text: '    route.trips++;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '  getAverageTime(startStation, endStation) {' },
  { stage: 0, text: '' },
  { stage: 10, text: '    const route = this.finished[startStation][endStation];' },
  { stage: 11, text: '    return route.sum / route.trips;' },
  { stage: 0, text: '  }' },
  { stage: 0, text: '' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 84,
  problemName: `Design a Metro System.`,
  problemText: `Implement the *MetroSystem* class:

**checkIn** (\`id\`: number, \`stationName\`: string, \`t\`: number) void
  
   - A customer with a card id equal to \`id\`, gets in the station \`stationName\` at time \`t\`.  A customer can only be checked into one place at a time.

**checkOut** (\`id\`: number, \`stationName\`: string, \`t\`: number) void
  
   - A customer with a card id equal to \`id\`, gets out from the station \`stationName\` at time \`t\`.
  
**getAverageTime** (\`startStation\`: string, \`endStation\`: string) number
  
   - Returns the average time to travel between the \`startStation\` and the \`endStation\`.  The average time is computed from all the previous traveling from \`startStation\` to \`endStation\` that happened directly.  Call to **getAverageTime** is always valid.

You can assume all calls to **checkIn** and **checkOut** methods are consistent. If a customer gets in at time t<sub>1</sub> at some station, they get out at time t<sub>2</sub> with t<sub>2</sub> > t<sub>1</sub>. All events happen in chronological order.`,
  testCases: [
    {
      id: 1,
      name: 'compiles',
      inherit: [],
      code: `const metroSystem = new MetroSystem();`,
      evaluate: `Boolean(metroSystem);`,
      expected: true,
    },
    {
      id: 2,
      name: 'correct output 1',
      inherit: [1],
      code: `metroSystem.checkIn(45, 'Leyton', 3);
      metroSystem.checkIn(32, 'Paradise', 8);
      metroSystem.checkIn(27, 'Leyton', 10);
      metroSystem.checkOut(45, 'Waterloo', 15);
      metroSystem.checkOut(27, 'Waterloo', 20);
      metroSystem.checkOut(32, 'Cambridge', 22);`,
      evaluate: `metroSystem.getAverageTime('Paradise', 'Cambridge');`,
      expected: 14,
    },
    {
      id: 3,
      name: 'correct output 2',
      inherit: [1, 2],
      code: ``,
      evaluate: `metroSystem.getAverageTime('Leyton', 'Waterloo');`,
      expected: 11,
    },
    {
      id: 4,
      name: 'correct output 3',
      inherit: [1, 2],
      code: `metroSystem.checkIn(10, 'Leyton', 24);`,
      evaluate: `metroSystem.getAverageTime('Leyton', 'Waterloo');`,
      expected: 11,
    },
    {
      id: 5,
      name: 'correct output 4',
      inherit: [1, 2, 4],
      code: `metroSystem.checkOut(10, 'Waterloo', 38);`,
      evaluate: `metroSystem.getAverageTime('Leyton', 'Waterloo');`,
      expected: 12,
    },
  ],
  setupCode: ``,
  source: [],
  tags: [INTERMEDIATE, DESIGN, ALGORITHM],
  solution,
};
