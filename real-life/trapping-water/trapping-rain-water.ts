/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map 
 * where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * 
 * Leetcode: https://leetcode.com/problems/trapping-rain-water/
 * 
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 * Example 2:
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
 */
function trap(height: number[]): number {
  let leftMax = 0;
  let rightMax = 0;

  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (leftMax < rightMax) {
      result += leftMax - height[left];
      left += 1;
    } else {
      result += rightMax - height[right];
      right -= 1;
    }
  }
  return result;
}
