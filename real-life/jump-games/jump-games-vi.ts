/**
 * https://leetcode.com/problems/jump-game-vi/
 *
 * You are given a 0-indexed integer array nums and an integer k.
 *
 * You are initially standing at index 0. In one move, you can jump
 * at most k steps forward without going outside the boundaries of
 * the array. That is, you can jump from index i to any index in
 * the range [i + 1, min(n - 1, i + k)] inclusive.
 *
 * You want to reach the last index of the array (index n - 1).
 * Your score is the sum of all nums[j] for each index j you
 * visited in the array.
 *
 * Return the maximum score you can get.
 */

/**
 * Hint: using monotonic queue. (deque).
 */
function maxResult(nums: number[], k: number): number {
  let n = nums.length;
  let score = new Array(n);
  score[0] = nums[0];
  const dq = [];

  dq.unshift(0);

  for (let i = 1; i < n; i++) {
    while (dq.length > 0 && dq[0] < i - k) {
      dq.shift();
    }
    score[i] = score[dq[0]] + nums[i];

    while (dq.length > 0 && score[i] >= score[dq[dq.length - 1]]) {
      dq.pop();
    }
    dq.push(i);
  }

  // console.log(score);
  return score[n - 1];
}

// console.log(maxResult([1, -3, -1, -2, 4, -7, 3], 2)); // 7
// console.log(maxResult([10, -5, -2, 4, 0, 3], 3)); // 17
// console.log(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2)); // 0
// console.log(maxResult([100, -1, -100, -1, 100], 2)); // 198
// console.log(maxResult([0, -1, -2, -3, 1], 2)); // -1
