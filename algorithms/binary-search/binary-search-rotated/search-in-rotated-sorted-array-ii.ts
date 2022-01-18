export function search(nums: number[], target: number): boolean {
  if (nums === null || nums.length === 0) {
    return false;
  }

  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] == target) {
      return true;
    }

    if (nums[start] === nums[mid]) {
      start += 1;
    } else if (nums[end] === nums[mid]) {
      end -= 1;
    } else if (nums[start] < nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    } else {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid;
      }
    }
  }

  if (nums[start] === target) {
    return true;
  }

  if (nums[end] === target) {
    return true;
  }

  return false;
}
