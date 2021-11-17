/**
300. Longest Increasing Subsequence
https://leetcode.com/problems/longest-increasing-subsequence/

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or 
no elements without changing the order of the remaining elements. For example, [3,6,2,7] 
is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104

[3, 4, 1, 2, 8, 5, 6  7]     



[1, 2, 5, 6, 7, 8, 9]
















// [3,]
// [3, 4]
// [1, 4]
// [1, 2]
// [1, 2, 8]
// [1, 2, 5]
// [1, 2, 5, 6]

// [4,10,4,3,8,9]

// [4]
// [4, 10]
// [4, 10]
// [3, 10]
// [3, 8]
// [3, 8, 9]

*/

function lengthOfLIS(nums: number[]): number {
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    if (dp.length === 0 || nums[i] > dp[dp.length - 1]) {
      dp.push(nums[i]);
    } else {
      binarySearch(dp, nums[i]);
    }
  }

  return dp.length;
}

// find biggest number in array smaller than target.
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (array[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (array[end] < target) {
    array[end] = target;
  } else {
    array[start] = target;
  }
}
