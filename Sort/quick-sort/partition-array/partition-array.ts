const partitionArray = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (left <= right && nums[left] < k) {
      left += 1;
    }

    while (left <= right && nums[right] >= k) {
      right -= 1;
    }

    if (left <= right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left += 1;
      right -= 1;
    }
  }

  return left;
};
