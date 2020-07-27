// https://stackoverflow.com/questions/47533282/cannot-redeclare-block-scoped-variable-name-in-typescript
export { }

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */


let maxProfit = function (prices): number {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if ((prices[i] - min) > profit) {
      profit = prices[i] - min
    }
  }

  return profit
}


let prices = [1, 2, 1, 4, 6];

this.print(maxProfit(prices));