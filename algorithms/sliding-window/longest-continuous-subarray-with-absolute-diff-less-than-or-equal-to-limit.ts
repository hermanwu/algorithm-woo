/**

1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

Example 1:
Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.

Example 2:
Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.

Example 3:
Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
 

Constraints:
1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= limit <= 109
 */
function longestSubarray(nums: number[], limit: number): number {
  // Monotonic decreasing array.
  // Max is always the first element.
  const maxDq = [];

  // Monotonic increasing array.
  // Min is always the first element.
  const minDq = [];

  // start of the slding window.
  let i = 0;
  // end of the slding window.
  let j = 0;
  let result = 0;

  for (j = 0; j < nums.length; j++) {
    // If you encounter a bigger number, then keep removing end that is smaller than this number.
    while (maxDq.length > 0 && nums[j] > maxDq[maxDq.length - 1]) {
      maxDq.pop();
    }

    while (minDq.length > 0 && nums[j] < minDq[minDq.length - 1]) {
      minDq.pop();
    }

    maxDq.push(nums[j]);
    minDq.push(nums[j]);

    if (maxDq[0] - minDq[0] > limit) {
      if (maxDq[0] === nums[i]) {
        maxDq.shift();
      }
      if (minDq[0] === nums[i]) {
        minDq.shift();
      }
      i++;
    }

    result = Math.max(result, j - i + 1);
  }
  return result;
}

console.log(longestSubarray([8, 2, 4, 7], 4)); // 2;

// console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5)); // 4;
// console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)); // 3;
