function smallestDivisor(nums: number[], threshold: number): number {
  let largest = 1;
  for (let num of nums) {
    if (num > largest) {
      largest = num;
    }
  }

  let left = 1;
  let right = largest;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    const sum = calculateSum(nums, mid);

    if (sum <= threshold) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (calculateSum(nums, left) <= threshold) {
    return left;
  } else {
    return right;
  }

  function calculateSum(nums: number[], divisor: number) {
    return nums.reduce((current, num) => current + Math.ceil(num / divisor), 0);
  }
}
