/**
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:

Input: amount = 10, coins = [10]
Output: 1

   0, 1 ,2 ,3 ,4 ,5
0  0  0  0  0  0  0
1  1  
2  1
5  1


Constraints:

    1 <= coins.length <= 300
    1 <= coins[i] <= 5000
    All the values of coins are unique.
    0 <= amount <= 5000

*/

function change(amount: number, coins: number[]): number {
  let dp = new Array(coins.length + 1).fill(undefined);
  dp = dp.map((row) => new Array(amount + 1).fill(0));

  for (let i = 1; i <= coins.length; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= amount; j++) {
      dp[i][j] =
        dp[i - 1][j] + (j - coins[i - 1] >= 0 ? dp[i][j - coins[i - 1]] : 0);
    }
  }
  return dp[coins.length][amount];
}
