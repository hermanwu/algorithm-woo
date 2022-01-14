/**
https://leetcode.com/problems/jump-game-ii/
45. Jump Game II
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [2,3,0,1,4]
Output: 2
 

Constraints:
1 <= nums.length <= 104
0 <= nums[i] <= 1000
 */

function jump(nums: number[]): number {
  const dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= i + nums[i]; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }
  return dp[nums.length - 1];
}
// console.log(jump([2,3,1,1,4])) // 2
// console.log(jump([2,3,0,1,4])) // 2
