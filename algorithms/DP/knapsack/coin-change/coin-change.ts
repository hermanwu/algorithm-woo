/**
322. Coin Change
https://leetcode.com/problems/coin-change/


You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1


Example 2:
Input: coins = [2], amount = 3
Output: -1


Example 3:
Input: coins = [1], amount = 0
Output: 0


Example 4:
Input: coins = [1], amount = 1
Output: 1


Example 5:
Input: coins = [1], amount = 2
Output: 2


Constraints:
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

 */

function coinChange(coins: number[], amount: number): number {
  // DP states. Result will be dp[i]; dp should covers largest number.
  // Sum, Coin value, Number of coins, (three variables)
  // dp[i] -> track two variable => the third variable will be iterated.
  const results = new Array(amount + 1).fill(Number.POSITIVE_INFINITY);

  // Populate initial states.
  results[0] = 0;

  // Small issue to bigger. Different possibilities
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i && results[i - coin] != Number.POSITIVE_INFINITY) {
        results[i] = Math.min(results[i], results[i - coin] + 1);
      }
    }
  }

  // Make sure invalid case is handled.
  return results[amount] === Number.POSITIVE_INFINITY ? -1 : results[amount];
}
