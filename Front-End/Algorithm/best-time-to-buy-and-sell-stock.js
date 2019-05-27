/**
 * Created by hermanwu on 1/16/18.
 */
const maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if ((prices[i] - min) > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
}


let prices = [1, 2, 1, 4, 6];

print(maxProfit(prices));
