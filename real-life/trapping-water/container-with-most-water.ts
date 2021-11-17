/**
Given n non-negative integers a1, a2, ..., an , where each represents 
a point at coordinate (i, ai). n vertical lines are drawn such that 
the two endpoints of the line i is at (i, ai) and (i, 0). Find two 
lines, which, together with the x-axis forms a container, such that 
the container contains the most water.

Notice that you may not slant the container.

Leetcode w/ diagram: https://leetcode.com/problems/container-with-most-water/

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Example 3:

Input: height = [4,3,2,1,4]
Output: 16

Example 4:

Input: height = [1,2,1]
Output: 2


Constraints:

    n == height.length
    2 <= n <= 105
    0 <= height[i] <= 104

 */
function maxArea(height: number[]): number {
  let start = 0;
  let end = height.length - 1;

  // let leftHeight = height[start];
  // let rightHeight = height[end];
  let result = 0;

  while (start < end) {
    let leftHeight = height[start];
    let rightHeight = height[end];

    result = Math.max(
      result,
      Math.min(leftHeight, rightHeight) * (end - start)
    );

    if (leftHeight > rightHeight) {
      end -= 1;

      while (start < end && height[end] <= rightHeight) {
        end -= 1;
      }
    } else {
      start += 1;

      while (start < end && height[start] <= leftHeight) {
        start += 1;
      }
    }
  }

  return result;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 1]));
