/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let remain = target - val;
    if (map.has(remain)) {
      return [map.get(remain), i];
    }

    map.set(val, i);
  }

  return [-1, -1];
};
