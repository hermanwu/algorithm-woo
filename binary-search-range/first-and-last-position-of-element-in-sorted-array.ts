/**
 * Given an array of integers nums sorted in ascending order, find the
 * starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 * Leetcode (no diagram):
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

function searchRange(nums: number[], target: number): number[] {
  let start = 0;
  let end = nums.length - 1;

  let range = [-1, -1];

  // start end;  // start < end; start <= end;   // 0 1
  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      end = mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }
  if (nums[start] === target) {
    range[0] = start;
  } else if (nums[end] === target) {
    range[0] = end;
  } else {
    return range;
  }

  start = 0;
  end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      start = mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }

  if (nums[end] === target) {
    range[1] = end;
  } else if (nums[start] === target) {
    range[1] = start;
  }

  return range;
}
