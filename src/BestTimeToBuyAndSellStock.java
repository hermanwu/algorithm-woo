/**

 Say you have an array for which the ith element is the price of a given stock on day i.

 If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

 Example 1:
 Input: [7, 1, 5, 3, 6, 4]
 Output: 5

 max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
 Example 2:
 Input: [7, 6, 4, 3, 1]
 Output: 0

 In this case, no transaction is done, i.e. max profit = 0.

 */

public class BestTimeToBuyAndSellStock {
    public int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE;
        int result = 0;

        for (int price : prices) {
            // record min value
            min = Math.min(min, price);

            // record max value
            result = Math.max(result,
                    price - min > 0 ? price - min : 0);
        }
        return result;
    }

    public int maxProfitWithKadaneAlgorithm(int[] prices) {
        int max = 0;
        int curmax = 0;

        for (int i = 1; i < prices.length; i++) {
            curmax = Math.max(0, curmax + prices[i] - prices[i - 1]);

            max = Math.max(max, curmax);
        }

        return max;
    }
}
