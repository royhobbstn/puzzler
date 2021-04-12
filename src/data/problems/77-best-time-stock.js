import { ALGORITHM, GENERAL } from '../constants.js';

const solution = [
  { stage: 0, text: '' },
  { stage: 0, text: 'function maxProfit(prices) {' },
  { stage: 1, text: '  let minprice = Infinity;' },
  { stage: 2, text: '  let maxprofit = 0;' },
  { stage: 0, text: '' },
  { stage: 3, text: '  for (let i = 0; i < prices.length; i++) {' },
  { stage: -4, text: '    // reset the minimum price of stock ' },
  { stage: 4, text: '    minprice = Math.min(minprice, prices[i]);' },
  { stage: -5, text: '    // recalculate maxprofit if price - min > current maxprofit' },
  { stage: 5, text: '    maxprofit = Math.max(maxprofit, prices[i] - minprice);' },
  { stage: 3, text: '  }' },
  { stage: 0, text: '' },
  { stage: 6, text: '  return maxprofit;' },
  { stage: 0, text: '}' },
  { stage: 0, text: '' },
];

export const data = {
  problemID: 77,
  problemName: `Best Time to Buy and Sell Stock`,
  problemText: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i\`th day.

  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return \`0\`.`,
  testCases: [
    {
      id: 1,
      name: 'example 1',
      inherit: [],
      code: ``,
      evaluate: `maxProfit([7, 1, 5, 3, 6, 4]);`,
      expected: 5,
    },
    {
      id: 2,
      name: 'example 2',
      inherit: [],
      code: ``,
      evaluate: `maxProfit([7, 6, 4, 3, 1]);`,
      expected: 0,
    },
  ],
  setupCode: ``,
  lcid: 121,
  source: ['https://leetcode.com/problems/best-time-to-buy-and-sell-stock'],
  tags: [GENERAL, ALGORITHM],
  solution,
};
