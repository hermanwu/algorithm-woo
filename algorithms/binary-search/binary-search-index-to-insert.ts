const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }

  if (target <= nums[left]) {
    return left;
  }

  if (target > nums[left] && target <= nums[right]) {
    return right;
  }

  return right + 1;
};
