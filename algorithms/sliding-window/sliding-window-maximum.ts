/**
 * https://leetcode.com/problems/sliding-window-maximum/
 *
 * NOTEs
 * 1. Brute force.
 * 2. BST. O(n log k); (remove element from tree is logK)
 * 3. Monotonic Dequeue.
 *      Push is regular O(n) -> remove all the smaller numbers -> amotized O(1);
 *
 * Good video:
 * https://www.youtube.com/watch?v=60xnYZ21Ir0
 */

import { MonotonicQueue } from "../../data-structure/Queue/monotonic-queue/monotonic-queue.class";

/**
 * https://leetcode.com/problems/sliding-window-maximum/
 *
 * NOTEs
 * 1. Brute force.
 * 2. BST. O(n log k); (remove element from tree is logK)
 * 3. Monotonic Dequeue.
 *      Push is regular O(n) -> remove all the smaller numbers -> amotized O(1);
 */

export function maxSlidingWindow(nums: number[], k: number): number[] {
  const q = new MonotonicQueue();

  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    q.push(nums[i]);

    // i - k + 1 is the first element in the window.
    if (i - k + 1 >= 0) {
      ans.push(q.getMax());

      if (nums[i - k + 1] === q.getMax()) {
        q.pop();
      }
    }
  }

  return ans;
}
