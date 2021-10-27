// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0] start = 0; end = 5
// Output: [0,0,1,1,2,2]
// Example 2:
// [0, 0, 2, 1, 1, 2] start = 0, end = 4
// [0, 0, 1, 1, 2, 2] s = 2, e = 3

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]
// Example 4:

// Input: nums = [1]
// Output: [1]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is 0, 1, or 2.

// Leetcode: https://leetcode.com/problems/sort-colors/
function sortColors(nums: number[]): void {
  let pointer = 0;
  let twoStart = nums.length - 1;
  let zeroEnd = 0;

  while (pointer <= twoStart) {
    if (nums[pointer] === 2) {
      nums[pointer] = nums[twoStart];
      nums[twoStart] = 2;
      twoStart -= 1;
    } else if (nums[pointer] === 0) {
      nums[pointer] = nums[zeroEnd];
      nums[zeroEnd] = 0;
      zeroEnd += 1;
      pointer += 1;
    } else {
      pointer += 1;
    }
  }
}

const array = [2, 0, 2, 1, 1, 0];
sortColors(array);
console.log(array);
