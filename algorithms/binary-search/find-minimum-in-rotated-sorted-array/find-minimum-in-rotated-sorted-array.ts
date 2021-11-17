/**
 * @param nums: a rotated sorted array
 * @return: the minimum number in the array
 */
const findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return nums[left] > nums[right] ? nums[right] : nums[left];
};
