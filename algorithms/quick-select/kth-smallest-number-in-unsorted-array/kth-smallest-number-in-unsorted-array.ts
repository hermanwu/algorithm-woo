/**
 * @param k: An integer
 * @param nums: An integer array
 * @return: kth smallest element
 */
export const kthSmallest = function (k, nums) {
  // write your code here
  return quickSort(k - 1, nums, 0, nums.length - 1);
};

export const quickSort = function (k, nums, start, end) {
  if (start === end) {
    return nums[start];
  }

  let left = start;
  let right = end;

  const pivot = nums[left];

  while (left <= right) {
    while (left <= right && nums[left] < pivot) {
      left += 1;
    }

    while (left <= right && nums[right] > pivot) {
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

  if (k <= right) {
    return quickSort(k, nums, start, right);
  }

  if (k >= left) {
    return quickSort(k, nums, left, end);
  }

  return nums[k];
};
