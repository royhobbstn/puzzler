import { ALGORITHM, TOPOLOGICAL_SORT } from '../constants';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function find_order(words) {' },
  { stage: 1, text: '  if (words.length === 0) {' },
  { stage: 2, text: "    return '';" },
  { stage: 1, text: '  }' },
  { stage: 0, text: '' },
  { stage: 3, text: '  const inDegree = {};' },
  { stage: 3, text: '  const graph = {};' },
  { stage: 0, text: '' },
  { stage: 4, text: '  words.forEach(word => {' },
  { stage: 5, text: '    for (let i = 0; i < word.length; i++) {' },
  { stage: 6, text: '      inDegree[word[i]] = 0;' },
  { stage: 6, text: '      graph[word[i]] = [];' },
  { stage: 5, text: '    }' },
  { stage: 4, text: '  });' },
  { stage: 0, text: '' },
  { stage: 7, text: '  for (let i = 0; i < words.length - 1; i++) {' },
  { stage: 8, text: '    let w1 = words[i];' },
  { stage: 8, text: '    let w2 = words[i + 1];' },
  { stage: 9, text: '    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {' },
  { stage: 10, text: '      let parent = w1[j];' },
  { stage: 10, text: '      let child = w2[j];' },
  { stage: 11, text: '      if (parent !== child) {' },
  { stage: 12, text: '        graph[parent].push(child);' },
  { stage: 13, text: '        inDegree[child] += 1;' },
  { stage: 13, text: '        break;' },
  { stage: 11, text: '      }' },
  { stage: 9, text: '    }' },
  { stage: 7, text: '  }' },
  { stage: 0, text: '' },
  { stage: 14, text: '  const sources = [];' },
  { stage: 15, text: '  const chars = Object.keys(inDegree);' },
  { stage: 16, text: '  chars.forEach(key => {' },
  { stage: 17, text: '    if (inDegree[key] === 0) {' },
  { stage: 18, text: '      sources.push(key);' },
  { stage: 17, text: '    }' },
  { stage: 16, text: '  });' },
  { stage: 0, text: '' },
  { stage: 19, text: '  const sortedOrder = [];' },
  { stage: 20, text: '  while (sources.length > 0) {' },
  { stage: 21, text: '    let vertex = sources.shift();' },
  { stage: 22, text: '    sortedOrder.push(vertex);' },
  { stage: 23, text: '    graph[vertex].forEach(child => {' },
  { stage: 24, text: '      inDegree[child] -= 1;' },
  { stage: 25, text: '      if (inDegree[child] === 0) {' },
  { stage: 26, text: '        sources.push(child);' },
  { stage: 25, text: '      }' },
  { stage: 23, text: '    });' },
  { stage: 20, text: '  }' },
  { stage: 0, text: '' },
  { stage: 27, text: '  if (sortedOrder.length !== chars.length) {' },
  { stage: 28, text: "    return '';" },
  { stage: 27, text: '  }' },
  { stage: 0, text: '' },
  { stage: 29, text: "  return sortedOrder.join('');" },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 191,
  problemName: `Alien Dictionary`,
  problemText: `There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets. Write a method to find the correct order of the alphabets in the alien language. It is given that the input is a valid dictionary and there exists an ordering among its alphabets.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `find_order(['ba', 'bc', 'ac', 'cab']);`,
      expected: 'bac',
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `find_order(['cab', 'aaa', 'aab']);`,
      expected: 'cab',
    },
    {
      id: 3,
      name: 'example 3',
      inherit: [],
      code: ``,
      evaluate: `find_order(['ywx', 'wz', 'xww', 'xz', 'zyy', 'zwz']);`,
      expected: 'ywxz',
    },
  ],
  setupCode: ``,
  source: ['https://www.educative.io/courses/grokking-the-coding-interview/R8AJWOMxw2q'],
  tags: [TOPOLOGICAL_SORT, ALGORITHM],
  solution,
};
