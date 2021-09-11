/**
https://leetcode.com/problems/paint-house/ 
 
Paint House

There is a row of n houses, where each house can be painted one of three colors: red, blue, or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by an n x 3 cost matrix costs.

For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on...
Return the minimum cost to paint all houses.

 

Example 1:
Input: costs = [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
Minimum cost: 2 + 5 + 3 = 10.

Example 2:
Input: costs = [[7,6,2]]
Output: 2


 */

function minCost(costs: number[][]): number {
  // 1. States: house, cost, total cost.
  // 2. Design the state needs to track: dp[ith house][color j] => total cost until ith house with color j.
  // 3. Transition: dp[i][color 1] = cost[i][color 1] + Math.min(dp[i-1][color 2], dp[i-1][color 3])

  const dp = new Array(costs.length).fill(new Array(costs[0].length).fill(0));
  console.log(dp);

  if (costs == null || costs.length == 0) {
    return 0;
  }

  // Initalize the original state.
  dp[0] = costs[0];

  console.log(dp);

  for (let i = 1; i < costs.length; i++) {
    console.log(dp);
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][1], dp[i - 1][0]);
  }
  let n = costs.length - 1;

  return Math.min(dp[n][0], dp[n][1], dp[n][2]);
}
