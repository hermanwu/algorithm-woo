function trap(height: number[]): number {
  let leftMax = 0;
  let rightMax = 0;

  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left <= right) {
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
