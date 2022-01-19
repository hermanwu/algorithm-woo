//leetcode.com/problems/kth-largest-element-in-an-array/

https: function findKthLargest(nums: number[], k: number): number {
  const quickSelect = (low: number, high: number, K: number): number => {
    const pivot = high;

    let storedIndex = low;

    for (let i = low; i < high; i++) {
      if (nums[i] < nums[pivot]) {
        [nums[i], nums[storedIndex]] = [nums[storedIndex], nums[i]];
        storedIndex += 1;
      }
    }

    [nums[pivot], nums[storedIndex]] = [nums[storedIndex], nums[pivot]];

    if (storedIndex === K) return nums[storedIndex];

    if (K > storedIndex) return quickSelect(storedIndex + 1, high, K);
    else return quickSelect(low, storedIndex - 1, K);
  };

  return quickSelect(0, nums.length - 1, nums.length - k);
}
