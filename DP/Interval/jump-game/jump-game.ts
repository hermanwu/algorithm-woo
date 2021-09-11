/**
 * Given an array of non-negative integers nums, you are initially positioned at
 * the first index of the array. Each element in the array represents your
 * maximum jump length at that position. Determine if you are able to reach
 * the last index.
 *
 * Leetcode with examples: https://leetcode.com/problems/jump-game/
 *
 * @param nums Array of non-negative integers
 * @returns Whether we can jump to the last index in the array
 */
export function canJump(nums: number[]): boolean {
  // an array to track whether the index is reachable.
  // dp[i] => true => this position is reachable.
  // return dp[lastIndex];
  if (nums.length === 0) {
    return false;
  }

  if (nums.length === 1) {
    return true;
  }

  const dp = new Array(nums.length).fill(false);

  dp[0] = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (dp[i] === false) {
      return false;
    }

    const maxSteps = nums[i]; // 2 3

    for (let step = 0; step <= maxSteps; step++) {
      if (i + step < nums.length) {
        dp[i + step] = true;
      }
    }
  }
  console.log(dp);
  return dp[nums.length - 1];
}
