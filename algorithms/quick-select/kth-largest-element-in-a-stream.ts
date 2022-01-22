/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */
class KthLargest {
  nums = [];
  k;

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (let num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    const index = this.binarySearch(this.nums, val);

    this.nums.splice(index, 0, val);
    while (this.nums.length > this.k) {
      this.nums.shift();
    }
    return this.nums[0];
  }

  binarySearch(nums, target) {
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
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
