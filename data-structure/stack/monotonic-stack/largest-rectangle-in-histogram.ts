// https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 *
 * Good solutions: https://abhinandandubey.github.io/posts/2019/12/15/Largest-Rectangle-In-Histogram.html
 */

export function largestRectangleArea(heights: number[]): number {
  // track index.
  const stack = [-1];
  heights.push(0);
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      const height = heights[stack.pop()];
      const width = i - stack[stack.length - 1] - 1;
      result = Math.max(result, width * height);
    }
    stack.push(i);
  }

  return result;
}
